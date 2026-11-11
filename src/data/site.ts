// Practice facts. Source: old website lakesideobgyn.org (fetched 2026-11-11) + client documents.
// Anything not in a client doc or the old site stays null and goes in docs/OPEN-QUESTIONS.md.
export const site = {
  name: 'Lakeside Obstetrics, Gynecology & Fertility',
  shortName: 'Lakeside Obgyn',
  // TODO(client): nearby neighborhoods and cities are not in any client document. This line only uses facts we have
  // (Inner Richmond from the descriptor, Bay Area from Dr. Ziyad Hannon's biography). Ask the client for the real list.
  areaLine: 'Serving patients in the Inner Richmond, San Francisco, and families throughout the San Francisco Bay Area.',
  descriptor: 'Obstetrician and Gynecologist in the Inner Richmond neighborhood, San Francisco, CA',
  tagline: 'Supporting families one baby at a time.',
  phone: '415-741-1000',
  phoneHref: 'tel:+14157411000',
  email: null as string | null,
  address: { line1: '402 8th Avenue, Suite 201', city: 'San Francisco', state: 'CA', zip: '94118' },
  hours: 'Monday to Friday, 8:30 am to 5 pm',
  // Weekly hours for the hours list. Same source as `hours` (old home page). TODO(client): the old Accessibility page
  // says Monday to Saturday, and hours are in no client document. Confirm, then change them here only.
  timezone: 'America/Los_Angeles',
  weekHours: [
    { day: 'Monday', open: '08:30', close: '17:00' },
    { day: 'Tuesday', open: '08:30', close: '17:00' },
    { day: 'Wednesday', open: '08:30', close: '17:00' },
    { day: 'Thursday', open: '08:30', close: '17:00' },
    { day: 'Friday', open: '08:30', close: '17:00' },
    { day: 'Saturday', open: null, close: null },
    { day: 'Sunday', open: null, close: null },
  ] as { day: string; open: string | null; close: string | null }[],
  portalUrl: 'https://16523.portal.athenahealth.com/',
  appointmentHref: '#contact',
  // TODO(dev): set this to the form service or API address that sends the email (for example a Formspree, Resend or
  // serverless function URL). While it is null the contact form shows a "not connected" message and sends nothing.
  contactEndpoint: null as string | null,
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
  { label: 'Services', href: '/services' },
  { label: 'Providers', href: '/#providers' },
  { label: 'Sonata', href: '/#sonata' },
  { label: 'Patient Portal', href: '/#portal' },
  { label: 'Visit Us', href: '/#visit' },
  { label: 'Contact Us', href: '/contact' },
];
