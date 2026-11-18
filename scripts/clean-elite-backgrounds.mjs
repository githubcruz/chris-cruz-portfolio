// Preserve the source artwork archive. Only remove connected, near-neutral
// screenshot matte pixels from the outside of original Elite artwork.
// This cannot reconstruct any ring already clipped in an uploaded source.
import sharp from "sharp";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const directory = join(root, "public", "creative-media", "work");
const cleanedDir = join(root, "public", "creative-media", "cleaned");
await mkdir(cleanedDir, { recursive: true });

function looksLikeMatte(r, g, b, a) {
  const highest = Math.max(r, g, b);
  const lowest = Math.min(r, g, b);
  return a > 0 && lowest >= 216 && highest - lowest <= 16;
}

for (let index = 1; index <= 12; index++) {
  const filename = `${String(index).padStart(3, "0")}_elite-barbershop.webp`;
  const original = await readFile(join(directory, filename));
  const { data, info } = await sharp(original)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const seen = new Uint8Array(width * height);
  const queue = new Int32Array(width * height);
  let head = 0, tail = 0;

  function visit(pixel) {
    if (seen[pixel]) return;
    seen[pixel] = 1;
    const offset = pixel * channels;
    if (looksLikeMatte(data[offset], data[offset + 1], data[offset + 2], data[offset + 3])) {
      queue[tail++] = pixel;
    }
  }

  for (let x = 0; x < width; x++) {
    visit(x);
    visit((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    visit(y * width);
    visit(y * width + width - 1);
  }

  while (head < tail) {
    const pixel = queue[head++];
    const x = pixel % width;
    const y = Math.floor(pixel / width);
    const offset = pixel * channels;
    // Normalize exposed screenshot backgrounds to transparent.
    data[offset] = 255;
    data[offset + 1] = 255;
    data[offset + 2] = 255;
    data[offset + 3] = 0;
    if (x > 0) visit(pixel - 1);
    if (x < width - 1) visit(pixel + 1);
    if (y > 0) visit(pixel - width);
    if (y < height - 1) visit(pixel + width);
  }

  // Signage and wordmark exploration images (006/007) contain a baked-in
  // #D4D4D4 screenshot frame. Normalize that near-neutral light-gray ink to
  // the same white background as the portfolio card, retaining the intentional
  // black/red/blue artwork and existing solid black wordmark panel.
  // Avoid changing all assets: this is intentionally scoped to these two.
  let grayFramePixels = 0;
  if (index === 6 || index === 7) {
    for (let pixel = 0; pixel < width * height; pixel++) {
      const off = pixel * channels;
      const r = data[off], g = data[off + 1], b = data[off + 2];
      const hi = Math.max(r, g, b), lo = Math.min(r, g, b);
      if (data[off + 3] > 0 && lo >= 180 && hi <= 249 && hi - lo <= 7) {
        data[off] = 255;
        data[off + 1] = 255;
        data[off + 2] = 255;
        data[off + 3] = 0;
        grayFramePixels++;
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .webp({ quality: 95, alphaQuality: 100, effort: 5 })
    .toFile(join(cleanedDir, filename));
  console.log(`Elite artwork ${index}: cleaned ${tail} connected matte pixels; removed ${grayFramePixels} embedded gray-frame pixels`);
}
