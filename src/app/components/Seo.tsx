import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import seo from "../data/seo.json";

type SeoPath = keyof typeof seo.pages;

/**
 * Per-page <title>, description and canonical.
 * Data lives in data/seo.json, which scripts/prerender-meta.js also uses to
 * write the same tags into the static HTML of each route at build time.
 */
export function Seo({ path }: { path: string }) {
  const page = seo.pages[path as SeoPath];
  if (!page) return <NoIndex />;

  return (
    <Helmet>
      <title>{page.title}</title>
      <meta name="description" content={page.description} />
      <link rel="canonical" href={seo.siteUrl + path} />
    </Helmet>
  );
}

/**
 * For 404 / unknown routes. The robots tag is handled in an effect rather than
 * through Helmet: Helmet registers during render, and a discarded concurrent
 * render can leave a stale instance that keeps "noindex" on later pages.
 * 404.html already ships <meta name="robots" content="noindex"> (without
 * data-rh, so Helmet leaves it alone); this reuses it and removes it on leave.
 */
export function NoIndex() {
  useEffect(() => {
    let tag = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "robots";
      document.head.appendChild(tag);
    }
    tag.content = "noindex";
    return () => tag.remove();
  }, []);

  return (
    <Helmet>
      <title>{seo.notFound.title}</title>
    </Helmet>
  );
}
