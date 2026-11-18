# Performance notes

## Font fallback metrics (2026-11-18)
`src/styles/global.css` has fallback faces so text does not reflow when the web fonts arrive.
Measured from the font files with fontTools (English letter frequencies), against Arial and Times New Roman
(Liberation fonts have the same metrics):

| Web font | Fallback | size-adjust | ascent-override | descent-override |
|---|---|---|---|---|
| Open Sans (400) | Arial | 105.3% | 101.51% | 27.82% |
| DM Serif Display | Times New Roman | 110.14% | 94.06% | 30.41% |
| DM Serif Display italic | Times New Roman Italic | 106.29% | 97.47% | 31.52% |

If a font is changed, measure again. The fallback only applies where the system has Arial or Times New Roman
(Windows, Mac, most Linux). Elsewhere the old stack (Georgia, serif) is used.

## Cookie banner
Shown only after `document.fonts.ready` (max 2.5 s), opacity-only entrance, `position:fixed`. This avoids a
layout shift when the banner text reflows after the fonts load.
