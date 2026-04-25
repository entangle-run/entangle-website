// Render public/og.svg to a 1200x630 PNG using sharp.
// Run with: node scripts/build-og.mjs
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const svgPath = resolve(root, 'public/og.svg');
const pngPath = resolve(root, 'public/og.png');

const svg = await readFile(svgPath);

// density=300 gives sharp enough resolution for the source viewBox (1200x630)
// before downscaling to the same dimensions, producing crisp text rendering.
const png = await sharp(svg, { density: 300 })
	.resize(1200, 630, { fit: 'fill' })
	.png({ quality: 95, compressionLevel: 9 })
	.toBuffer();

await writeFile(pngPath, png);
console.log(`Wrote ${pngPath} (${png.length} bytes)`);
