# Open questions for the client

- [ ] Confirm "first and only surgeon in San Francisco doing Sonata" (not in the toolkit).
- [ ] Anesthesia wording: toolkit says general anesthesia; the Sonata page says there are options. Confirm which to show.
- [ ] Google Doc about Sonata is private. Need access or a copy.
- [ ] Logo and brand files? Domain? Booking system? Phone, email, address, hours?
- [ ] Which staff photos to use? (client asked us to choose)
- [ ] Toolkit diagrams/icons: get the original files, or redraw in our style?

## Added with the homepage draft (2026-11-11)
- [ ] Hero and section photos are temporary art (see src/data/images.ts). Need: Lakeside bridge photo (which bridge?), mother and family, woman with doctor, plus service and blog images.
- [ ] Team photos for Dr. Ziyad Hannon and Jeanette Blanks (old website). Monica's photo is in.
- [ ] Logo as SVG or larger PNG (current file is 600x145).
- [ ] Confirm from the old website, they are used on the homepage: "father and daughter team of board-certified physicians", "24/7 care", FemVue, on-site ultrasound, insurance list, rating 4.95 from 456 reviews.
- [ ] Whose is the Menopause Society badge? (file name says Monica; old site lists MSCP for Jeanette). Homepage shows it unnamed.
- [ ] Blog: old site had no posts. Homepage blog cards are placeholders ("Coming soon").
- [x] Contact form connected 2026-11-25 (see the Contact form entry at the end of this file).
- [ ] Yelp URL for footer; Open Payments (AB 1278) notice: REMOVED from the footer on 2026-11-11 at the developer's request (it is not in any client document). The live site footer keeps a short link "Learn more about the Open Payments Database pursuant to Assembly Bill (AB) 1278". Ask the client if the notice is still required and where it should go.
- [ ] Parking doc typo: "red start" corrected to "red star" on the page.
- [ ] "First and only surgeon in SF doing Sonata": NOT used anywhere until the client confirms.

## Menu (2026-11-11)
- [ ] Menu follows the old site (Our Providers, Services, Patient Portal, Reviews, Office Locations) plus Sonata (required by the toolkit). Old site has no dropdowns; the Providers and Services panels list the pages from its /contents/our-providers and /services pages.
- [ ] /reviews and /locations pages are built (2026-11-12). Both are new pages the live site does not have. /locations reuses the Parking Information.docx text and the Google map embed; the old /parking placeholder now redirects there. Confirm the client wants them. Old-site URL slugs are kept for 1:1 redirects.
- [ ] Old site's "Home" link is replaced by the logo link. "About" and "Visit Us" are no longer in the top menu (not in the old menu).

## Provider page: Dr. Monica Hannon (2026-11-11)
- [ ] Biography (2026-11-11): copied word for word from the old site (lakesideobgyn.org/provider/monica-hannon-md-facog) into `bio` in src/data/providers.ts, with the developer's permission. It is NOT in a client document, so ask the client to confirm it is current and approved. Only paragraph 1 is shown on the page now; the rest repeats the other sections (Education, Credentials, Honors, Clinical focus). The full text stays in `bio` in providers.ts. If it is shown later, check these claims: "performing gender-affirming surgery" (the Clinical focus list says "gender-affirming services") and "Obstetrician" wording. The text repeats "Dr. Monica Hannon" many times; ask if the client wants a shorter version.
- [ ] Facts on the page come from the old site's profile and must be confirmed by Dr. Hannon: board certification (ABOG), MSCP, ISSWSH member, Penn (magna cum laude), GWU MD and residency (Chief Administrative Resident), Lowell High School, Gold Humanism Honor Society, Resident of the Year, Our Family Coalition.
- [ ] Clinical focus list is summarized from the old bio. Confirm wording. Items without a service page yet (endometriosis, hormone therapy, low libido, prolapse, preconception, infertility workup, early pregnancy) are not linked.
- [ ] URL kept from the old site: /provider/monica-hannon-md-facog (Ziyad and Jeanette pages use the same pattern, not built yet).

## Testimonials and Ziyad Hannon page (2026-11-11)
- [ ] Home page reviews slider: 6 Google reviews copied word for word from the live site (src/data/reviews.ts), first names only as shown there. Ask the client to confirm they allow showing them. One live review was left out because it names a nurse practitioner (Jill Saberman) who is not on the new site.
- [ ] Reviews slider photo is a Shutterstock stock image (asset 2757478923, model release on file), not a real patient. The label says "Patient reviews from Google"; confirm the client is happy with a stock photo next to real reviews.
- [ ] Nav "Reviews" now points to /reviews and "Office Locations" to /locations. The live site has no /reviews page. The 4.95 rating (456 reviews) is not shown on /reviews because it is only from the old footer.
- [ ] Dr. Ziyad Hannon page: text copied from lakesideobgyn.org/provider/ziyad-hannon-md-facog (developer gave permission). Needs client approval. His portrait was replaced on 2026-11-11 with a high-quality photo from the developer. It is cropped above the chest because his coat shows a "Community Healthcare System" logo; ask the client if that logo is OK to show.
- [ ] Ziyad page photos are existing stock images (a purple stethoscope on an open book, Shutterstock 439088665; a surgeon in blue scrubs), not real people at the practice. The old page does not say "board certified" in the text, so that line is not shown.


## Jeanette Blanks page (2026-11-11)
- Text copied word for word from the old site (lakesideobgyn.org/provider/jeanette-blanks-msn-fnp-c-mscp-cnl). Client must approve it. The three paragraph titles ("Evidence-based care", "Coordinated care", "Integrative background") and the heading "Care for the whole person" are design labels we added, not client text. Confirm or change.
- MSCP badge: docs/source-of-truth/parking-and-badges.md says to confirm whose badge it is (file name says Monica Hannon, old site lists MSCP for Jeanette). It is shown on Monica's page now and NOT on Jeanette's. Ask the client which provider(s) it belongs to.
- Approach photo on Jeanette's page is a new Shutterstock image (pink stethoscope, asset 2741296961, downloaded 2026-11-11). Check the licence is fine for the client.
- Jeanette's care list items link to our service pages (perimenopause, weight loss, birth control, irregular bleeding). These links are our choice, not in the old text. Confirm.
- Jeanette's three paragraphs show in full in a timeline, like the other providers (no expand/collapse, developer asked). The heading "Comprehensive gynecologic and primary care" is taken from her intro sentence.
- New portrait of Jeanette supplied by the developer (2026-11-11). Confirm the client approves it.
- Jeanette has no education or honors on the old site, so those sections are hidden. Ask the client if they want to add them.

## /providers page (2026-11-11)
- The old site has no /providers page (it returns 404). This page is new. It only reuses provider names, titles, the board line and care lists copied from the provider pages. Headings ("Our providers", "Areas of care", "Request an appointment") are design copy. Ask the client if they want an intro text.
- "Our Providers" in the header now links to /providers (before it went to /#providers on the home page). The old site's menu had no page for it, only a dropdown.

## Annual Well-Woman Exam page (2026-11-11)
- Text copied word for word from the old site (lakesideobgyn.org/services/annual-well-woman-exam). Client must approve it.
- Typo fixed: the old text says "day of your exami"; we show "day of your exam". Ask the client to confirm.
- Design copy we added (not client text): "Book your annual visit", "Schedule your appointment", "Other services", "Annual Well-Woman Exam Q & A", and the card labels "Ages 13-15" and "About age 21" (taken from the text).
- 3 Shutterstock images (assets 2811916527, 2437144673, 2838530075) in public/images/services/wellwoman-1..3.jpg. Check the licence is fine for the client.
- No "city focus" section (nearby cities list) and no extra Q&A, benefits or recovery text: that would be new content, not in any client document. Ask the client if they want local text.
- "Other services" links go to pages that are not built yet (they will 404 until we build them).

## Nearby area line on service pages (2026-11-11)
- The bottom of the service hero has a line with a pin icon (developer asked). The client has not given a list of nearby neighborhoods or cities, so the line only uses known facts: "Serving patients in the Inner Richmond, San Francisco, and families throughout the San Francisco Bay Area." (Inner Richmond from the descriptor, Bay Area from Dr. Ziyad Hannon's biography). Ask the client for the real list of areas and the wording. Text lives in `site.areaLine` in src/data/site.ts.

## 14 service pages (birth control to LGBTQ care) — added 2026-11-12
Text was copied word for word from the old site. Please confirm these points with the client:
- **Typos fixed:** "pap smear" (3 places), "fertility" (1 place), and "exami" -> "exam" on the Well-Woman page. TODO(client): confirm.
- **Ovarian Cyst:** the old page has a lead-in sentence for a list, but the list is missing on the old site too. The page shows a dev-only TODO. TODO(client): send the missing list.
- **Ultrasound:** old text says "both offices" and "Saturday", but the practice has one office and hours are Mon-Fri. Kept as written. TODO(client): confirm.
- **"Progesterone-line"** wording kept exactly as on the old site. TODO(client): confirm.
- **Nourish link:** the old link was a paid-ad URL. Replaced with https://nourish.com. TODO(client): confirm the right link.
- **Subtitles** differ on the laparoscopic, perimenopause and weight-loss pages (old site). Kept as is.
- **Added heading "Your care team"** on one page (not on the old site). TODO(client): confirm or remove.
- **Menopause page** says both Monica Hannon and Jeanette Blanks are certified through the Menopause Society. This may mean the MSCP badge belongs to both providers. TODO(client): confirm for Jeanette's page.
- **"Other services" links** go to the new pages, all 15 now exist.
- **Photos:** 42 new Shutterstock photos (3 per page), files public/images/services/<slug>-1/2/3.jpg. Asset IDs are in the file names of the downloads (shutterstock_<id>.jpg). Please keep the licence record. Alt texts are written by us and describe the picture only.

## Sonata page (full page built 2026-11-12)
- **Toolkit says two slightly different things about fibroid types:** the "Treatable fibroids" text says Sonata treats "intramural, submucosal and some subserosal fibroids", and the FAQ says "almost all symptomatic uterine fibroid types, including subserosal, intramural, transmural, and certain submucosal". Both copied exactly. TODO(client): ask Hologic if one should be changed.
- **Toolkit typo:** "Suberserosal" is written "Subserosal" on our page. TODO(client): confirm.
- **Sources list:** the toolkit lists 4 sources, and source 4 is a repeat of source 1. Kept as is so the footnote numbers match the toolkit.
- **URL:** the toolkit says the Sonata page should be "a page within" Fibroids. We kept /services/sonata and show Fibroids in the breadcrumb plus a link card on the Fibroids page. TODO(client): ok, or should the URL be /services/fibroids/sonata?
- **Images:** device photo comes from the toolkit cover; symptom icons, fibroid diagram and 4 procedure pictures come from the toolkit pages. TODO(client): confirm the toolkit pictures may be used on the site (the toolkit mentions a "Visual Library").
- **Not in the toolkit, not on the page:** the doctor's claim "first and only surgeon in SF doing Sonata", and any Sonata training facts. Ask the client first.
- **No closing text:** the toolkit has no closing paragraph, so the bottom band only has the heading and the buttons.

## Legal pages and cookie banner (2026-11-12)
- [ ] Privacy Policy (/your-privacy), Terms & Conditions (/our-terms), Accessibility Statement (/accessibility-statement) and Open Payments notice (/open-payments, AB 1278) are copied word for word from the old site (old Open Payments page: practice.patientpop.com/contents/assemblybill). Old-site slugs kept for 1:1 redirects. Only heading case was changed (ALL CAPS headings shown as normal case); wording is untouched.
- [ ] Accessibility Statement: the old page has NO statement text (only title, location, hours and phone). Nothing was invented. The page shows only the phone and address. TODO: ask the client for the real statement.
- [ ] Terms & Conditions, "Copyright and trademark notices": names Tebra Technologies, Inc. (the old website vendor, "Copyright © 2023"). Copied as is. Ask the client and their lawyer what it should say on the new site. Also the Terms say "misrepresents the your identity" (typo in the source, kept).
- [ ] Privacy Policy is the old vendor's text. It says the site uses cookies, collects IP address, etc. Ask the client or their lawyer to review it for the new site (analytics, forms, patient portal). There is no HIPAA Notice of Privacy Practices or Cookie Policy on the old site. Ask the client if they have them.
- [ ] Cookie banner: the category names and short descriptions (Necessary, Analytics, Marketing) and the banner sentence are the developer's draft, not from a client document. The banner saves the choice in the browser (localStorage "lakeside-cookie-consent") and sends a "cookie-consent" event. No analytics or marketing tools are installed yet. Any such tool must wait for that event. Ask the client if they want Google Analytics or other tools.
- [ ] Hours conflict: the old Accessibility page lists Monday to Saturday 8:30 am to 5 pm, while the site header and footer say Monday to Friday (taken from the old home page). Ask the client which is right.

## Contact page (2026-11-12)
- [x] Contact form REMOVED 2026-11-18 (developer decision). The /contact page now shows Call, Visit (address, directions, parking) and Office hours. No form, so no email endpoint is needed. REPLACED 2026-11-25: the form is back on the home page and on /contact (developer request, because the old button posted to '#' and returned 405).
- [x] The old Contact Us address was /contactus. It now redirects to /contact.
- [ ] Weekly hours list (2026-11-12): built from the old home page (Monday to Friday 8:30 am to 5 pm, Saturday and Sunday shown as Closed). Hours are in no client document, and the old Accessibility page says Monday to Saturday. To change the hours, edit `weekHours` in src/data/site.ts (and the one-line `hours` text). The list marks today and "Open now" or "Closed now" in San Francisco time.

## Blog (2026-11-12)
- [ ] The 3 blog posts (src/data/blog.ts) reuse exact wording from the service pages. Ask Dr. Hannon to approve them, or to send her own articles. Titles, tags and the "Straight answers to common questions" line are the developer's draft.
- [ ] The text repeats the service pages, so search engines may see duplicate content. Ask if the client wants different articles later.
- [ ] Blog is linked from the home cards and the "All articles" button only. It is NOT in the menu or footer yet, as requested. Add it to src/data/nav.ts when ready.
- [ ] Post images are the stock photos in public/images/blog. Confirm they are licensed for this use.

## Diverse photos (2026-11-12)
- [ ] Doctor feedback: the site did not show her patients. Four Shutterstock photos (Standard license, IDs 2709769795, 2248174697, 2839632371, 2611669831) replaced the Reviews portrait, Well-woman card and page, home hero consult slide, blog exam cover. About, fertility, LGBTQ+ and menopause photos are still to review.
- [ ] Check Shutterstock terms for photos used with medical topics (a "posed by a model" note may be needed). Ask the client to approve the photos.
- [x] (2026-11-25) "Meet the team" card (stock portrait) removed from the providers menu after Justin's feedback ("detracts from the other providers"). Photo files deleted.
- [ ] (2026-11-25) Real photos from Dr. Hannon's email ("Photos attached for Lakeside OBGYN website", 2026-11-25) now replace four formal stock photos, one for one, no repeats: home About photo (the two doctors at the Lakeside sign, IMG_5264), Monica's Credentials photo (the two doctors, arms crossed, IMG_5310), Ziyad's "Teacher, surgeon and hospital leader" photo (the whole team, IMG_5285) and the Surgery card photo (Monica in the operating room, a black and white scan). Pride and diversity photos were not touched. Ask Dr. Hannon to approve these. Check: (1) she is happy with the operating room photo (it is a scan of a printed photo, 945 px, grainy); (2) the names of the four other people in the team photo, if we ever want captions.
- [ ] (2026-11-25) Unused stock files removed: public/images/about/consult.*, public/images/provider/credentials.*. No licence check needed for them any more.
- [ ] (2026-11-12) Menopause photos: home card and blog cover now use Shutterstock 2507790911 (woman in her 50s with curly hair on a sofa). The menopause service page photos are still the old ones. Patient Portal background now uses Shutterstock 2438016419 (multiracial group with a pride flag). Ask the client to approve both.
- [ ] (2026-11-12) LGBTQ care page photos replaced: group with pride flag (Shutterstock 2438016419), buzz-cut portrait (2709769795, same photo as the home Reviews section), curly-hair woman with heart sunglasses (2606659817). Ask the client to approve. Consider a different buzz-cut photo so the same one is not used twice.

## Sonata edits requested by Dr. Hannon (2026-11-13)
- DONE on her email (2026-11-13): removed the insurance section, the "go home the day of the procedure" sentence and "Both are laparoscopic surgeries". These are still in the Sonata toolkit. TODO: ask Dr. Hannon to tell the Sonata maker, or get an updated toolkit, so the documents agree.

## Dr. Hannon's edits, 2026-11-13 (see docs/EDITS-2026-11-11.md)
- Provider page addresses still end in "-facog" (/provider/monica-hannon-md-facog). Changing them needs a 301 redirect from the old address. Ask the client if they want new addresses.
- Logo: the old Logo.png (grainy, with FACOG inside) was replaced on 2026-11-13 by the new high-quality logo the developer supplied (public/images/logo.png, no FACOG, doctors' names kept as M.D.). It sits on a white panel in the footer. TODO: confirm with the client that this is the approved logo; a vector (SVG) would be even sharper.
- Ultrasound page rewritten from her email (first trimester only, mostly transvaginal). She must read and approve it. Photo 1 (late pregnancy) removed and replaced by a general consult photo. TODO: pick a better stock photo (needs the user's approval first).
- FemVue video link: her email says "here is a link" but no link came through. Ask Justin or Dr. Hannon. The FemVue homepage section and page have a TODO for the video.
- Miudella (copper) 3yr IUD: added as "coming soon". Confirm the spelling and whether she wants the brand symbol.
- PMOS: sentence about the renaming is from her email. Confirm the full name wording ("Polyendocrine Metabolic Ovarian Syndrome").
- Sexual Health / Sexual Pain page: DONE 2026-11-16 with her text (docs/source-of-truth/Sexual-health-page-text-2026-11-16.md). Note: her text says "women" throughout, copied exactly. The site also serves LGBTQ patients, so she may want "patients" in a later edit. Not changed.
- Jeanette Blanks first paragraph ended in "including:" with nothing after it; ended the sentence with a full stop. The list of services follows in the "Clinical practice" section. Ask if she wants more text.
- Merged "Laparoscopic Surgery" into "Minimally Invasive & Laparoscopic Surgery". Old address redirects. Both pages' text is kept word for word.
- Pelvic pain: "Gastrointestinal problems" replaces Crohn's, IBS and Fibromyalgia.
- Staff group photos: she will email them.
- Jeanette Blanks bio, paragraph 2 (added 2026-11-13 at the developer's request): written only from facts already on the site (works with Dr. Monica and Dr. Ziyad Hannon, Inner Richmond location, items from her care list). No new claims. Dr. Hannon must approve it or send her own text.

## SEO titles and descriptions (2026-11-18)
- [ ] New titles and meta descriptions for all 34 pages are in `src/data/seo.ts` (old and new side by side in `docs/SEO-TITLES-2026-11-18.md`). Owner to approve before deploy; client to review the wording. They use only facts already on the site.
- [x] /about/ was an empty placeholder page. Owner chose a 301 to /provider/monica-hannon-md-facog/ (2026-11-18). It is out of the sitemap and has no title or description of its own. nginx needs a real 301 (deploy/README.md). If the client later sends About-page text, bring the page back.

## Schema, sitemap and small fixes (2026-11-18)
- [ ] Practice schema `geo` (latitude and longitude) is NOT added: no coordinates are in any client document and I could not look them up. Owner: send the exact map coordinates of 402 8th Avenue, then set `site.geo` in `src/data/site.ts` (the schema code is ready).
- [ ] Facebook removed from the site on 2026-11-25 (developer request): footer link, `site.social.facebook` and the `sameAs` entry are gone, so `sameAs` is now empty. Ask the client if they agree. Before that, `sameAs` had only the Facebook page. Yelp is not added (URL not captured). Owner: send any other real profiles (Google Business Profile, Yelp, Healthgrades, doctor profiles). Doctor pages have no `sameAs` for the same reason.
- [ ] Doctor credentials in schema: none added (needs facts from the owner).
- [ ] Blog posts have no dates in any client document. `datePublished` and `dateModified` are set to 2026-11-12 (the day the draft articles were added). Owner: confirm or give the real dates (`src/data/blog.ts`). Author in schema = the practice (no named author exists).
- [ ] Sitemap `lastmod` is the build date for every URL (not a content date).
- [x] Slug typo fixed (owner OK, 2026-11-18): `/services/perimenopausemenopause-management/` is now `/services/perimenopause-menopause-management/`. Astro redirect added; nginx needs a real 301 (see deploy/README.md). Image file names keep the old spelling (not visible to visitors). Old address came from the old site, so ask the client if anything outside the site links to it (Google Business Profile, directories).
- [x] Alt text added to every picture that had an empty alt (owner: "add to all", 2026-11-18). Text is in `src/lib/alt.ts` (describes what the picture shows; developer wording, client may change). The back face of the home service cards stays decorative so screen readers do not hear each picture twice.

- [ ] (2026-11-25) Contact form (home page "Get in touch" and /contact). It posts to an AWS Lambda function URL (`lakeside-contact-form`, us-east-1, account Iron Health Solutions) that emails the request with SES from forms@ironhealthsolutions.com. URL is `formEndpoint` in src/data/site.ts. Spam checks: hidden "website" field (filled = spam, nothing is sent, visitor still sees thank you), form must be open at least 3 seconds, and the Lambda only accepts the lakesideobgyn.org and localhost:4321 origins.
  - TESTING ONLY: messages go to admin@lakesideobgyn.org and alphadeveloper91@gmail.com. BEFORE LAUNCH remove alphadeveloper91@gmail.com: `aws lambda update-function-configuration --function-name lakeside-contact-form --environment ...` (env TO_EMAILS). Ask the client who should receive the messages for real.
  - Ask the client to approve the thank-you text ("We received your request. Our team will call or email you soon.") and the "Send request" button text. Both are developer text, not from a client document.
  - Ask the client (or their lawyer) about HIPAA: the form says not to send medical details, but patients may do it anyway, and email is not a secure place for them. Confirm they accept this.
  - The sender address is on ironhealthsolutions.com. If the client wants it on their own domain, lakesideobgyn.org needs to be verified in SES (DNS records).
  - The real domain must match the allowed origins (https://www.lakesideobgyn.org and https://lakesideobgyn.org). Add any other address in the Lambda env ALLOWED_ORIGINS and the Function URL CORS.

- [ ] (2026-11-25) The Menopause Society badge on the home page now links to https://menopause.org/ (opens in a new tab), like the ISSWSH badge. Developer request (Slack: "make this clickable and go to their website"). The link is not in a client document (only the ISSWSH link is). Ask the client to confirm it is the right page.
