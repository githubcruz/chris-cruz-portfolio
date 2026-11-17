import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname, basename } from 'node:path';
import { createHash } from 'node:crypto';
import { gunzipSync } from 'node:zlib';

const root = process.cwd();
const input = Buffer.concat(Array.from({ length: 8 }, (_, i) =>
  readFileSync(join(root, 'assets', 'creative-work', `part-${i}.bin`))));
const checksum = createHash('sha256').update(input).digest('hex');
if (checksum !== '94457485b6cc640ce84497fdf5dcf0a450327472d230202026c9dfa3777a2ed7') {
  throw new Error('Creative artwork archive integrity check failed');
}
const tar = gunzipSync(input);
const destination = join(root, 'public', 'creative-media', 'work');
let offset = 0;
let extracted = 0;
while (offset + 512 <= tar.length) {
  const header = tar.subarray(offset, offset + 512);
  if (header.every(byte => byte === 0)) break;
  const name = header.toString('utf8', 0, 100).split('\0')[0];
  const rawSize = header.toString('ascii', 124, 136).replace(/\0/g, '').trim();
  const size = parseInt(rawSize || '0', 8);
  if (!Number.isFinite(size) || size < 0 || offset + 512 + size > tar.length) {
    throw new Error('Invalid creative artwork archive');
  }
  const type = header.toString('ascii', 156, 157);
  if (type === '0' || type === '\0') {
    if (!/^images\/[0-9]{3}_[a-z0-9-]+\.webp$/.test(name)) {
      throw new Error(`Unexpected creative artwork path: ${name}`);
    }
    const target = join(destination, basename(name));
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, tar.subarray(offset + 512, offset + 512 + size));
    extracted++;
  }
  offset += 512 + Math.ceil(size / 512) * 512;
}
if (extracted !== 59) throw new Error(`Expected 59 creative artworks; found ${extracted}`);
console.log(`Prepared ${extracted} original-resolution creative artwork files`);
