/**
 * Generate favicon package from SVG source.
 * Run: node scripts/generate-favicons.js
 * Requires: npm install sharp png-to-ico
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const svgPath = path.join(root, 'favicon-source.svg');

async function main() {
  const sharp = (await import('sharp')).default;
  const pngToIco = (await import('png-to-ico')).default;

  const svg = fs.readFileSync(svgPath);

  await sharp(svg).resize(16, 16).png().toFile(path.join(root, 'favicon-16x16.png'));
  console.log('Created favicon-16x16.png (16×16)');

  await sharp(svg).resize(32, 32).png().toFile(path.join(root, 'favicon-32x32.png'));
  console.log('Created favicon-32x32.png (32×32)');

  await sharp(svg).resize(64, 64).png().toFile(path.join(root, 'favicon-64x64.png'));
  console.log('Created favicon-64x64.png (64×64)');

  await sharp(svg).resize(180, 180).png().toFile(path.join(root, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png (180×180)');

  const icoBuf = await pngToIco([
    path.join(root, 'favicon-16x16.png'),
    path.join(root, 'favicon-32x32.png'),
    path.join(root, 'favicon-64x64.png'),
  ]);
  fs.writeFileSync(path.join(root, 'favicon.ico'), icoBuf);
  console.log('Created favicon.ico (16/32/64px)');

  fs.unlinkSync(path.join(root, 'favicon-64x64.png'));
  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
