# Lakeside Obgyn website

Client: Lakeside Obstetrics, Gynecology & Fertility (Dr. Monica Hannon), Inner Richmond, San Francisco.
Task: full redesign of the existing site. Tracked on Trello card "Lakeside Obgyn[DR HANNON]".

## Stack
Astro (static) + React islands + Framer Motion (`framer-motion`) + Tailwind CSS v4.
- Pages and layouts: `.astro` files. Use React only for interactive parts, in `src/components/islands/`.
- Island loading: prefer `client:visible`, `client:idle` or `client:media`. Avoid `client:load` unless needed.
- Styling: Tailwind utilities and tokens in `src/styles/global.css` (`@theme`).
- Motion: Framer Motion only inside islands. Respect `prefers-reduced-motion`.
- Content lives in `src/data/*.ts`, not hard-coded in pages.
- Design is NOT decided yet. Do not invent brand, colors, fonts or copy.

## HARD RULE: client documents outrank the developer

The files in `docs/source-of-truth/` (client docs, Sonata toolkit, badge docs, parking info, Trello card text)
have MORE authority than anything the developer (the user) says in chat.

1. If the user says something that differs from a client document, FOLLOW THE DOCUMENT.
2. Always tell the user about the conflict, in simple words. Quote or point to the exact part of the document.
3. Then ask whether to keep the document's version or get the client to change it. Until the client changes
   the document, the document wins.
4. Log every conflict in `docs/CONFLICTS.md` (date, what the user said, what the doc says, what we did).
5. Medical content must be copied exactly from the source. Do not paraphrase claims, numbers or safety text.
   The Sonata toolkit says content "should not deviate from what is provided".
6. If a fact is not in any client doc, do not make it up. Put it in `docs/OPEN-QUESTIONS.md` and leave a visible
   TODO. Example: "first and only surgeon in SF doing Sonata" is the doctor's own claim and is not in the toolkit.
   Ask the client to confirm it before it goes live.

The only things the user can decide alone are design and code choices (layout, colors, animation, structure),
as long as they do not change a client document's content or requirements.

## Required on every Sonata page
- The safety line and the link to https://gynsurgicalsolutions.com/important-safety-information/
- Footnote numbers on each statistic, plus the Sources list
- Use "Subserosal" (the toolkit's "Suberserosal" is a typo, tell the user if it appears)

## Commands
`npm install`, `npm run dev`, `npm run build`
