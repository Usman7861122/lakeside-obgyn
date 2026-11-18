// Reads width and height of a JPG or PNG in /public (build time only), so every <img> can carry width and height.
import fs from 'node:fs';
import path from 'node:path';

const cache = new Map<string, { width: number; height: number } | null>();

export function imgSize(src: string): { width: number; height: number } | null {
  if (cache.has(src)) return cache.get(src) ?? null;
  let out: { width: number; height: number } | null = null;
  try {
    const buf = fs.readFileSync(path.join(process.cwd(), 'public', src));
    if (buf[0] === 0x89 && buf[1] === 0x50) {
      out = { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    } else if (buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xff) { i++; continue; }
        const m = buf[i + 1];
        if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
          out = { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
          break;
        }
        i += 2 + buf.readUInt16BE(i + 2);
      }
    }
  } catch { out = null; }
  cache.set(src, out);
  return out;
}
