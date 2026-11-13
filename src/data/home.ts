import { site } from './site';
import { images } from './images';

export const heroSlides = [
  {
    eyebrow: 'Inner Richmond, San Francisco',
    lead: 'Women’s health care that',
    word: 'listens',
    text: 'A private practice for obstetrics, gynecology and fertility, in San Francisco’s Inner Richmond.',
    cta: { label: 'Meet our providers', href: '#providers' },
    image: images.hero[0],
    art: 'bridge' as const,
  },
  {
    eyebrow: 'Obstetrics & fertility',
    lead: 'Supporting families one baby at a',
    word: 'time.',
    text: 'From the first visit to birth and beyond, we care for you with individualized, low-intervention attention.',
    cta: { label: 'Explore our services', href: '#services' },
    image: images.hero[1],
    art: 'family' as const,
  },
  {
    eyebrow: 'The Sonata® procedure',
    lead: 'Incisionless care for symptomatic',
    word: 'fibroids',
    text: 'The Sonata procedure treats fibroids from inside the uterus, without abdominal cuts and without removing the uterus.',
    cta: { label: 'Learn about Sonata', href: '/services/sonata' },
    image: images.hero[2],
    art: 'care' as const,
  },
];

export const services = [
  { key: 'wellwoman', href: '/services/annual-well-woman-exam', title: 'Well-woman exams', text: 'Annual exams, birth control, and abnormal Pap smear follow-up, with time to ask your questions.', img: images.services.wellwoman, tone: ['#f4c9d9', '#b04c9f'] },
  { key: 'fertility', href: '/services/fertility-femvue', title: 'Fertility & FemVue', text: 'Fertility care, including FemVue testing and on-site ultrasound, in the same office.', img: images.services.fertility, tone: ['#ffd1e6', '#d81070'] },
  { key: 'menopause', href: '/services/perimenopausemenopause-management', title: 'Perimenopause & menopause', text: 'Management of perimenopause and menopause, including hormone therapy.', img: images.services.menopause, tone: ['#e6d6ea', '#882078'] },
  { key: 'fibroids', href: '/services/fibroids', title: 'Fibroids & Sonata®', text: 'Ask your doctor if the Sonata procedure, an incisionless option, may be right for you.', img: images.services.fibroids, tone: ['#d9a6d0', '#5c1650'] },
  { key: 'surgery', href: '/services/minimally-invasive-surgery', title: 'Minimally invasive surgery', text: 'Laparoscopic and other minimally invasive gynecologic surgery.', img: images.services.surgery, tone: ['#b9d0dd', '#2f5d73'] },
  { key: 'lgbtq', href: '/services/lgbtq-care', title: 'LGBTQ+ care', text: 'Welcoming, respectful care for all patients, including gender-affirming surgery.', img: images.services.lgbtq, tone: ['#ffc2dc', '#b04c9f'] },
];

// Life stages: a real sequence, so the timeline order carries meaning.
export const journey = [
  { stage: 'Your first exams', title: 'Care that starts with a conversation', text: 'Annual well-woman exams and birth control, with individualized, low-intervention care.' },
  { stage: 'Starting a family', title: 'Answers in one office', text: 'Fertility care with FemVue testing and on-site ultrasound, so you don’t travel for each step.' },
  { stage: 'Pregnancy & birth', title: 'A team you know', text: 'A father and daughter team of board-certified physicians, with 24/7 care.' },
  { stage: 'When surgery is needed', title: 'Less invasive first', text: 'Laparoscopic and minimally invasive options, including the Sonata® procedure for fibroids.' },
  { stage: 'Menopause & beyond', title: 'Care that keeps pace with you', text: 'Perimenopause and menopause management, with hormone therapy when it’s right for you.' },
];

export const doctors = [
  { key: 'monica', name: 'Monica Hannon, MD', creds: '', role: 'Obstetrician & Gynecologist', img: images.doctors.monica, href: '/provider/monica-hannon-md-facog' },
  { key: 'ziyad', name: 'Ziyad Hannon, MD', creds: '', role: 'Obstetrician & Gynecologist', img: images.doctors.ziyad, href: '/provider/ziyad-hannon-md-facog' },
  { key: 'jeanette', name: 'Jeanette Blanks', creds: 'MSN, FNP-C, MSCP, CNL', role: 'Nurse Practitioner', img: images.doctors.jeanette, href: '/provider/jeanette-blanks-msn-fnp-c-mscp-cnl' },
];

export const portalFeatures = [
  'Insurance updates',
  'Chart summaries',
  'Lab and imaging results',
  'Refill requests',
  'Non-urgent messages to our team',
];

// Home page blog cards. The articles live in src/data/blog.ts (drafts for client review).
import { posts as blogPosts } from './blog';
export const posts = blogPosts.map((p) => ({ tag: p.tag, title: p.title, img: p.image, href: `/blog/${p.slug}` }));

export const contactFacts = {
  phone: site.phone,
  hours: site.hours,
};
