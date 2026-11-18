# lakesideobgyn.org: work report for the SEO agent (2026-11-18)

Site: https://www.lakesideobgyn.org/ (Astro static, nginx on a Lightsail server, trailing slashes).
Deployed 2026-11-18 about 12:03 UTC (GitHub run 44300084749, then the server sync). Repo: Usman7861122/lakeside-obgyn, branch main, last commit 0fbd503.
Baseline from the fix list: 35 sitemap URLs, mobile Performance 76 (LCP 7.2 s, 4.3 MB), desktop 91.

## Result per item

| # | Item | Status | What was done and how it was checked |
|---|------|--------|--------------------------------------|
| 1 | Home page speed | Done, not yet measured by PageSpeed | See details below. Local Chrome test, phone-sized screen, no network throttling: first load 4.3 MB -> about 1.0 MB (uncompressed), largest element at about 1.6 s. Please run PageSpeed to confirm the 90+ goal. |
| 2 | /parking/ in sitemap | Done | Filtered out of the sitemap. Page is a redirect to /locations/#visit. nginx now sends a real 301 (checked with curl). Links point to /locations/#visit. |
| 3 | Internal links | Done | `trailingSlash: 'always'`. Crawl of the built output: 1,773 internal links, 0 without a trailing slash, every target exists. Canonical, og:url, schema URLs and sitemap all end in "/". |
| 4 | Titles | Done, owner approved | All 33 indexed pages are 50 to 60 characters, unique. Pattern "Topic in San Francisco | Lakeside Obgyn". File: src/data/seo.ts. Old and new list: docs/SEO-TITLES-2026-11-18.md. |
| 5 | Descriptions | Done | All 140 to 158 characters, unique, each with place and phone 415-741-1000. Only facts already on the site. |
| 6 | Schema | Partly done | See below. |
| 7 | Sitemap lastmod | Done | Every URL has lastmod (build date, not content date). Sitemap now has 33 URLs. |
| 8 | Small fixes | Done except noted | Doctor photo links on /providers/ have an accessible name. Alt text added to every picture that had an empty alt (text in src/lib/alt.ts). Slug typo fixed (owner OK). |

## Item 1 details (speed)
- WebP copies (480, 800, 1200, 1600 px) of every photo, made by scripts/make-webp.py. New component src/components/ui/Pic.astro serves them with srcset and sizes; the JPG stays as fallback. Every image has width and height (0 without).
- Hero: first slide preloaded (high priority, not lazy), picture with srcset. Hero photo 365 KiB -> 13 to 57 KiB depending on screen.
- Portal background, header and footer logo (500 px WebP instead of the 247 KiB PNG), logo mark and the badge seal as WebP.
- Parking video: preload="none" with its poster, re-encoded 1,449 KiB -> 939 KiB (same look). It loads only when the visitor scrolls to it.
- CSS: `inlineStylesheets: 'always'`, so no render-blocking stylesheet request (HTML grows from about 90 KiB to about 200 KiB; it compresses well).
- Still heavy: two JavaScript files (about 204 KiB and 136 KiB, React and Framer Motion for the hero island). Next idea: load the hero island later or replace it with CSS.

## Item 6 details (schema)
Added: practice (Physician, MedicalBusiness, @id #practice) now has sameAs (Facebook), logo and image (absolute URLs), areaServed (San Francisco). WebSite entity on the home page. Doctor pages: @id, url, absolute image, worksFor points to the practice @id. Blog posts: datePublished, dateModified, author and publisher (the practice), mainEntityOfPage, absolute image. Service pages: url and isPartOf (WebSite). Locations page uses the practice @id. JSON parses on all pages.
NOT done (no real data): geo coordinates, other sameAs profiles, doctor sameAs, credentials. Not validated in the Rich Results Test (no access from my side): please run it.

## Other changes
- /about/ was an empty placeholder page ("About - placeholder"). Replaced by a redirect to /provider/monica-hannon-md-facog/ (owner choice) and removed from the sitemap.
- Slug /services/perimenopausemenopause-management/ is now /services/perimenopause-menopause-management/ with a 301 from the old address.
- Contact form removed (developer decision); /contact/ shows Call, Visit and Office hours. /contactus/ redirects to /contact/.
- Google Search Console meta tag added to every page (live).
- Canonical URLs, og:url, robots.txt (with sitemap line) and noindex on the 404 page use https://www.lakesideobgyn.org.

## Server (nginx on Lightsail, done by the owner with my commands)
- 301 redirects live and checked with curl: /about/, /parking/, /contents/parking-information, the old menopause address, /services/laparoscopic-surgery/. Bare domain already 301s to https://www (kept path).
- Deploy flow: push to main -> GitHub Actions builds and uploads to S3 -> cron on the server pulls from S3 every minute into /var/www/lakeside. Details in deploy/README.md.
- Not done yet (DevOps list): HSTS, server_tokens off, cache headers for /images/ (30 days suggested, not 1 year, because photos keep their file names when replaced). /_astro/ already has a 1 year immutable cache.

## Open items (also in docs/OPEN-QUESTIONS.md)
1. Owner: exact map coordinates of 402 8th Avenue (for geo).
2. Owner: other real profiles for sameAs (Google Business Profile, Yelp, Healthgrades, doctor profiles).
3. Owner: real blog dates (now 2026-11-12, the day the drafts were added). Posts have no named author.
4. Titles and descriptions are the developer's wording: client should review.
5. Alt texts are the developer's wording: client may change (src/lib/alt.ts). The back face of the home service cards is left decorative on purpose.
6. About-page text from the client, if they want a real /about/ page again.
7. Search Console: click Verify, then submit https://www.lakesideobgyn.org/sitemap-index.xml (not done by the agent: rule says do not touch Search Console).
8. Re-measure: PageSpeed (home, mobile and desktop) and check the old WordPress addresses (we could not read the old sitemap; only the 4 old slugs in nginx are redirected).
9. Growth items from the list (Google Business Profile, local pages, more blog posts) are for the owner and need approved copy.

## Commits (one per item, all pushed)
a37aea5 speed | 981810b parking | 9225f83 trailing slash | 24a049d titles and descriptions | 410bc70 lastmod | 2a40d71 providers links | 1de6609 schema | 79801fb alt text, slug, about title | 706068b /about/ redirect | 71f23e6, 0fbd503 server notes
