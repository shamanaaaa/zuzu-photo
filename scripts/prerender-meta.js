// Post-build step: write a static HTML file per route with that route's own
// <title>, description, canonical and OG tags, so crawlers see correct metadata
// in the raw HTML before any JavaScript runs.
//
//   dist/index.html            → "/"
//   dist/cennik/index.html     → "/cennik"
//   dist/portfolio/deti/index.html → "/portfolio/deti"
//   dist/404.html              → unknown URLs (noindex, no canonical)
//
// Source of truth: src/app/data/seo.json (also used by the <Seo> component).
// server/index.js serves these files.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const seo = JSON.parse(readFileSync(join(root, "src/app/data/seo.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`prerender-meta: tag not found in dist/index.html: ${pattern}`);
  return html.replace(pattern, replacement);
}

function render({ title, description, url, noindex }) {
  let html = template;
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);

  // Tags managed by react-helmet-async on the client carry data-rh="true",
  // so Helmet replaces them instead of adding duplicates.
  html = replaceTag(
    html,
    /<meta name="description"[^>]*>/,
    description ? `<meta name="description" content="${esc(description)}" data-rh="true" />` : "",
  );
  html = replaceTag(
    html,
    /<link rel="canonical"[^>]*>/,
    url ? `<link rel="canonical" href="${esc(url)}" data-rh="true" />` : "",
  );

  // Social tags (not managed by Helmet; only read by non-JS crawlers).
  html = replaceTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(title)}" />`);
  html = replaceTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(title)}" />`);
  if (description) {
    html = replaceTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(description)}" />`);
    html = replaceTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(description)}" />`);
  }
  html = replaceTag(html, /<meta property="og:url"[^>]*>/, url ? `<meta property="og:url" content="${esc(url)}" />` : "");

  if (noindex) {
    // No data-rh: the <NoIndex> component manages this tag itself, not Helmet.
    html = replaceTag(html, /<\/head>/, `  <meta name="robots" content="noindex" />\n  </head>`);
  }
  return html;
}

let count = 0;
for (const [path, page] of Object.entries(seo.pages)) {
  const file = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render({ ...page, url: seo.siteUrl + path }));
  count++;
}
writeFileSync(join(dist, "404.html"), render({ title: seo.notFound.title, noindex: true }));

// Keep sitemap.xml and seo.json in sync.
const sitemapPath = join(dist, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const inSitemap = new Set([...readFileSync(sitemapPath, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
  const inSeo = new Set(Object.keys(seo.pages).map((p) => seo.siteUrl + p));
  const missing = [...inSeo].filter((u) => !inSitemap.has(u));
  const extra = [...inSitemap].filter((u) => !inSeo.has(u));
  if (missing.length) console.warn(`prerender-meta: missing from sitemap.xml: ${missing.join(", ")}`);
  if (extra.length) console.warn(`prerender-meta: in sitemap.xml but not in seo.json (will 404): ${extra.join(", ")}`);
}

console.log(`prerender-meta: wrote ${count} route pages + 404.html`);
