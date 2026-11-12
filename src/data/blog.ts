// Blog posts. DRAFTS for client and doctor review.
// The old site has no blog, and no client document gives blog text. So every medical sentence here is taken word for word
// from the practice's own service pages (src/data/services.ts and src/data/svc/*), which come from the old site.
// Nothing was added or reworded (CLAUDE.md rules 5 and 6). Only headings and the order of the parts were chosen.
// TODO(client): ask the doctors if they want original articles, and approve these before launch (docs/OPEN-QUESTIONS.md).
import { services } from './services';
import { service as fibroids } from './svc/fibroids';
import { service as menopause } from './svc/perimenopausemenopause-management';
import { images } from './images';
import type { Part } from './svc/types';

export type Section = { h?: string; parts: Part[] };
export type Post = {
  slug: string;
  tag: string;
  title: string;
  metaDescription: string;
  excerpt: string; // first sentence of the intro (word for word)
  image: string;
  imageAlt: string;
  intro: string[];
  sections: Section[];
  closing: string;
  related?: { eyebrow: string; title: string; href: string; cta: string };
  serviceHref: string;
  serviceLabel: string;
};

const ww = services[0];
const q = (blocks: { q: string; parts: Part[] }[], title: string) => {
  const b = blocks.find((x) => x.q === title);
  if (!b) throw new Error(`Missing block: ${title}`);
  return b.parts;
};
const firstSentence = (t: string) => t.split(/(?<=[.?!])\s/)[0];

export const posts: Post[] = [
  {
    slug: 'what-happens-at-an-annual-well-woman-exam',
    tag: 'Well-woman',
    title: 'What happens at an annual well-woman exam',
    metaDescription: 'What to expect at an annual well-woman exam and how to prepare, from the team at Lakeside Obstetrics, Gynecology & Fertility in the Inner Richmond, San Francisco.',
    excerpt: firstSentence(ww.intro),
    image: images.blog[0] as string,
    imageAlt: 'A patient sitting on an exam table while a doctor takes notes during a visit',
    intro: [ww.intro],
    sections: [
      { h: ww.expect.q, parts: [{ p: ww.expect.lead }, { ul: ww.expect.items }, { p: ww.expect.after }] },
      { h: ww.prepare.q, parts: [{ p: ww.prepare.lead }, { ul: ww.prepare.items }, { p: ww.prepare.note }] },
    ],
    closing: ww.prepare.closing,
    serviceHref: `/services/${ww.slug}`,
    serviceLabel: 'Annual Well-Woman Exam',
  },
  {
    slug: 'fibroid-symptoms-when-to-talk-to-your-doctor',
    tag: 'Fibroids',
    title: 'Fibroid symptoms: when to talk to your doctor',
    metaDescription: 'Fibroid symptoms and how an OB/GYN treats fibroids, from Lakeside Obstetrics, Gynecology & Fertility in the Inner Richmond, San Francisco.',
    excerpt: firstSentence(fibroids.intro[0]),
    image: images.blog[1] as string,
    imageAlt: 'A woman sitting on a sofa holding her lower abdomen',
    intro: fibroids.intro,
    sections: [
      { h: 'Do fibroids cause symptoms?', parts: q(fibroids.blocks, 'Do fibroids cause symptoms?') },
      { h: 'How does an OB/GYN treat fibroids?', parts: q(fibroids.blocks, 'How does an OB/GYN treat fibroids?') },
    ],
    closing: fibroids.closing,
    related: fibroids.related,
    serviceHref: '/services/fibroids',
    serviceLabel: 'Fibroids',
  },
  {
    slug: 'perimenopause-what-to-expect-and-who-can-help',
    tag: 'Menopause',
    title: 'Perimenopause: what to expect and who can help',
    metaDescription: 'Perimenopause and menopause symptoms and your care team at Lakeside Obstetrics, Gynecology & Fertility in the Inner Richmond, San Francisco.',
    excerpt: firstSentence(menopause.intro[0]),
    image: images.blog[2] as string,
    imageAlt: 'A woman with curly hair relaxing on a sofa at home',
    intro: menopause.intro,
    sections: [
      { h: 'Your care team', parts: q(menopause.blocks, 'Your care team') },
      { h: 'Perimenopause and menopause management', parts: q(menopause.blocks, 'Perimenopause and Menopause Management') },
    ],
    closing: menopause.closing,
    serviceHref: '/services/perimenopausemenopause-management',
    serviceLabel: 'Perimenopause/Menopause Management',
  },
];
