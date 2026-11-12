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
- [ ] Contact form: not connected yet. Where should messages go (email, EHR)? Form says not to send medical details.
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
- [ ] /contact form is built (Name, Email, Phone, Message, spam trap) but NOT connected. TODO(dev): set `contactEndpoint` in src/data/site.ts to the service that sends the email, and ask the client which email address should receive messages. Until then the form shows "not connected" and sends nothing.
- [ ] The old site's Contact Us page (/contactus) had no form text or fields. The field list and the note "Please do not put health information in this form..." are the developer's draft. Ask the client to confirm.
- [ ] Weekly hours list (2026-11-12): built from the old home page (Monday to Friday 8:30 am to 5 pm, Saturday and Sunday shown as Closed). Hours are in no client document, and the old Accessibility page says Monday to Saturday. To change the hours, edit `weekHours` in src/data/site.ts (and the one-line `hours` text). The list marks today and "Open now" or "Closed now" in San Francisco time.

## Blog (2026-11-12)
- [ ] The 3 blog posts (src/data/blog.ts) reuse exact wording from the service pages. Ask Dr. Hannon to approve them, or to send her own articles. Titles, tags and the "Straight answers to common questions" line are the developer's draft.
- [ ] The text repeats the service pages, so search engines may see duplicate content. Ask if the client wants different articles later.
- [ ] Blog is linked from the home cards and the "All articles" button only. It is NOT in the menu or footer yet, as requested. Add it to src/data/nav.ts when ready.
- [ ] Post images are the stock photos in public/images/blog. Confirm they are licensed for this use.

## Diverse photos (2026-11-12)
- [ ] Doctor feedback: the site did not show her patients. Four Shutterstock photos (Standard license, IDs 2709769795, 2248174697, 2839632371, 2611669831) replaced the Reviews portrait, Well-woman card and page, home hero consult slide, blog exam cover. About, fertility, LGBTQ+ and menopause photos are still to review.
- [ ] Check Shutterstock terms for photos used with medical topics (a "posed by a model" note may be needed). Ask the client to approve the photos.
- [ ] "Meet the team" card uses a stock model, not a real team photo. Ask the client for a real one.
- [ ] (2026-11-12) "Meet the team" card (providers menu) now shows a Shutterstock portrait of a woman doctor (ID 4224884185), not a real team member. Ask the client to approve it, or send a real team photo to replace public/images/provider/team-lead.jpg.
- [ ] (2026-11-12) Menopause photos: home card and blog cover now use Shutterstock 2507790911 (woman in her 50s with curly hair on a sofa). The menopause service page photos are still the old ones. Patient Portal background now uses Shutterstock 2438016419 (multiracial group with a pride flag). Ask the client to approve both.
