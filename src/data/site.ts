// Practice facts. Source: old website lakesideobgyn.org (fetched 2026-11-11) + client documents.
// Anything not in a client doc or the old site stays null and goes in docs/OPEN-QUESTIONS.md.
export const site = {
  name: 'Lakeside Obstetrics, Gynecology & Fertility',
  shortName: 'Lakeside Obgyn',
  descriptor: 'Obstetrician and Gynecologist in the Inner Richmond neighborhood, San Francisco, CA',
  tagline: 'Supporting families one baby at a time.',
  phone: '415-741-1000',
  phoneHref: 'tel:+14157411000',
  email: null as string | null,
  address: { line1: '402 8th Avenue, Suite 201', city: 'San Francisco', state: 'CA', zip: '94118' },
  hours: 'Monday to Friday, 8:30 am to 5 pm',
  portalUrl: 'https://16523.portal.athenahealth.com/',
  appointmentHref: '#contact',
  social: {
    facebook: 'https://www.facebook.com/LakesideObstetricsGynecology',
    yelp: null as string | null, // old site links Yelp; exact URL not captured yet
  },
  rating: { score: '4.95', count: '456', note: 'From old website footer — refresh before launch' },
  insurance: 'Hill Physicians HMO, Brown & Toland HMO, and most PPO plans',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=402+8th+Avenue+Suite+201+San+Francisco+CA+94118',
};

export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Providers', href: '/#providers' },
  { label: 'Sonata', href: '/#sonata' },
  { label: 'Patient Portal', href: '/#portal' },
  { label: 'Visit Us', href: '/#visit' },
];
