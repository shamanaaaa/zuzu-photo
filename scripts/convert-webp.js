#!/usr/bin/env node
/**
 * Convert all JPEGs in public/images to WebP siblings.
 * Run once: node scripts/convert-webp.js
 * Re-run after adding new photos — already-converted files are skipped.
 */

import { readdirSync, statSync, existsSync } from "fs";
import { join, extname, basename, dirname } from "path";
import sharp from "sharp";

const ROOT = join(dirname(new URL(import.meta.url).pathname), "..", "public", "images");
const QUALITY = 82;

let converted = 0;
let skipped = 0;

async function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      await walk(full);
    } else if (extname(full).toLowerCase() === ".jpg") {
      const webp = join(dirname(full), basename(full, extname(full)) + ".webp");
      if (existsSync(webp)) {
        skipped++;
      } else {
        await sharp(full).webp({ quality: QUALITY }).toFile(webp);
        converted++;
        process.stdout.write(`  ✓ ${webp.replace(ROOT, "")}\n`);
      }
    }
  }
}

console.log(`Converting JPEGs to WebP (quality ${QUALITY}) in:\n  ${ROOT}\n`);
await walk(ROOT);
console.log(`\nDone. Converted: ${converted}  Skipped (already exist): ${skipped}`);
