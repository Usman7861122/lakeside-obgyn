// Generic service page content. Every text below is word for word from the old site
// (lakesideobgyn.org/services/<slug>, read 2026-11-11). Client still needs to approve it.
// Medical wording must not be changed (CLAUDE.md rule 5). Parts keep the old page order.
export type Part = { p: string } | { ul: string[] } | { h: string } | { todo: string } | { plink: { before: string; text: string; href: string; after: string } }; // todo shows only in dev
export type Block = { q: string; parts: Part[] };
export type ServicePhoto = { src: string; alt: string };
export type GenericService = {
  slug: string;
  title: string; // the old site's H1
  menuLabel: string;
  metaDescription: string;
  introHeading?: string; // heading above the intro (defaults to the menu label)
  qaLabel?: string; // small label above each section heading (defaults to "<menu label> Q & A")
  intro: string[];
  blocks: Block[];
  closing: string;
  related?: { eyebrow: string; title: string; href: string; cta: string }; // optional link card to another page (UI wording only, no medical claims)
  photos: [ServicePhoto, ServicePhoto, ServicePhoto];
};
