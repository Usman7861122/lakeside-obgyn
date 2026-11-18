#!/usr/bin/env python3
"""Makes smaller WebP copies of every JPG in public/images (480, 800, 1200, 1600 px wide).
Files are named name-480.webp etc. Re-run after adding or changing a photo:  python3 scripts/make-webp.py
The originals stay as the fallback. Also makes the 2x header logo (logo-2x.webp)."""
import glob, os
from PIL import Image
WIDTHS = [480, 800, 1200, 1600]
root = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
n = 0
for f in sorted(glob.glob(os.path.join(root, '**', '*.jpg'), recursive=True)):
    im = Image.open(f).convert('RGB')
    base = f[:-4]
    for w in WIDTHS:
        if w >= im.width and w != WIDTHS[0]:
            continue
        w = min(w, im.width)
        out = f'{base}-{w}.webp'
        if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f):
            continue
        h = round(im.height * w / im.width)
        im.resize((w, h), Image.LANCZOS).save(out, 'WEBP', quality=76, method=6)
        n += 1
# header and footer logo: shown about 245 px wide, so 2x = 500 px
logo = Image.open(os.path.join(root, 'logo.png')).convert('RGBA')
logo.resize((500, round(logo.height * 500 / logo.width)), Image.LANCZOS).save(os.path.join(root, 'logo-2x.webp'), 'WEBP', quality=88, method=6)
print('made', n, 'webp files')
