#!/usr/bin/env python3
"""Makes smaller WebP copies of every JPG in public/images (480, 800, 1200, 1600 px wide).
Files are named name-480.webp etc. Re-run after adding or changing a photo:  python3 scripts/make-webp.py
The originals stay as the fallback. Also makes the 2x header logo (logo-2x.webp) and the logo mask (logo-mark.webp)."""
import glob, os
from PIL import Image
WIDTHS = [480, 800, 1200, 1600]
# The six home page service cards are shown about 640 px wide on phones, so they also get a 640 px copy.
CARDS_640 = ['wellwoman', 'fertility', 'menopause', 'fibroids', 'surgery', 'lgbtq']
# Per-file quality (default 76). The first hero photo is the largest thing on the phone, so it is a little smaller.
QUALITY = {'hero/bridge-800.webp': 60}
root = os.path.join(os.path.dirname(__file__), '..', 'public', 'images')
n = 0
for f in sorted(glob.glob(os.path.join(root, '**', '*.jpg'), recursive=True)):
    im = Image.open(f).convert('RGB')
    base = f[:-4]
    widths = list(WIDTHS)
    if os.path.relpath(base, root).replace(os.sep, '/') in [f'services/{c}' for c in CARDS_640]:
        widths = sorted(widths + [640])
    for w in widths:
        if w >= im.width and w != WIDTHS[0]:
            continue
        w = min(w, im.width)
        out = f'{base}-{w}.webp'
        if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(f):
            continue
        h = round(im.height * w / im.width)
        q = QUALITY.get(os.path.relpath(out, root).replace(os.sep, '/'), 76)
        im.resize((w, h), Image.LANCZOS).save(out, 'WEBP', quality=q, method=6)
        n += 1
# header and footer logo: shown about 245 px wide, so 2x = 500 px
logo = Image.open(os.path.join(root, 'logo.png')).convert('RGBA')
logo.resize((500, round(logo.height * 500 / logo.width)), Image.LANCZOS).save(os.path.join(root, 'logo-2x.webp'), 'WEBP', quality=60, alpha_quality=80, method=6)
# logo mark: only used as a CSS mask, so only the shape (alpha) matters. Colour is flattened to white.
mark = Image.open(os.path.join(root, 'logo-mark.png')).convert('RGBA')
flat = Image.new('RGBA', mark.size, (255, 255, 255, 0)); flat.putalpha(mark.getchannel('A'))
flat.save(os.path.join(root, 'logo-mark.webp'), 'WEBP', quality=60, alpha_quality=70, method=6)
print('made', n, 'webp files')

# Menopause Society seal: shown 144 px wide on the home page, so a 288 px copy (the 383 px one stays for bigger uses)
seal = Image.open(os.path.join(root, 'badges', 'menopause-society-seal.png')).convert('RGBA')
seal.resize((288, 288), Image.LANCZOS).save(os.path.join(root, 'badges', 'menopause-society-seal-288.webp'), 'WEBP', quality=80, alpha_quality=90, method=6)
