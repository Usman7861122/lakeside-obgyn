import { images } from './images';
import { site } from './site';

// Menu structure taken from lakesideobgyn.org (header: Home, Our Providers, Services, Patient Portal,
// Reviews, Office Locations). Service and provider lists copied from the old site's /services and
// /contents/our-providers pages. Sonata is added because the client's toolkit requires it.
// Old-site URL slugs are kept for the service pages so they can be redirected 1:1 later.
export const providersMenu = [
  { name: 'Monica Hannon, MD', creds: '', role: 'Obstetrician & Gynecologist', img: images.doctors.monica, href: '/provider/monica-hannon-md-facog' },
  { name: 'Ziyad Hannon, MD', creds: '', role: 'Obstetrician & Gynecologist', img: images.doctors.ziyad, href: '/provider/ziyad-hannon-md-facog' },
  { name: 'Jeanette Blanks', creds: 'MSN, FNP-C, MSCP, CNL', role: 'Nurse Practitioner', img: images.doctors.jeanette, href: '/provider/jeanette-blanks-msn-fnp-c-mscp-cnl' },
];

export const servicesMenu = [
  { label: 'Annual Well-Woman Exam', href: '/services/annual-well-woman-exam' },
  { label: 'Birth Control', href: '/services/birth-control' },
  { label: 'Abnormal Pap Smear', href: '/services/abnormal-pap-smear' },
  { label: 'Irregular Bleeding', href: '/services/irregular-bleeding' },
  { label: 'Pelvic Pain', href: '/services/pelvic-pain' },
  { label: 'Ovarian Cyst', href: '/services/ovarian-cyst' },
  { label: 'PCOS / PMOS', href: '/services/polycystic-ovary-syndrome' },
  { label: 'Fibroids', href: '/services/fibroids' },
  { label: 'The Sonata Procedure', href: '/services/sonata' },
  { label: 'Ultrasound', href: '/services/ultrasound' },
  { label: 'Minimally Invasive & Laparoscopic Surgery', href: '/services/minimally-invasive-surgery' },
  { label: 'Perimenopause/Menopause Management', href: '/services/perimenopausemenopause-management' },
  { label: 'Fertility & FemVue', href: '/services/fertility-femvue' },
  { label: 'Weight Loss & Management', href: '/services/weight-loss-management' },
  { label: 'Sexual Health & Sexual Pain', href: '/services/sexual-health' },
  { label: 'LGBTQ Care', href: '/services/lgbtq-care' },
];

export const mainNav = [
  { label: 'Our Providers', href: '/providers', mega: 'providers' as const },
  { label: 'Services', href: '/services', mega: 'services' as const },
  { label: 'Sonata', href: '/services/sonata' },
  { label: 'Patient Portal', href: site.portalUrl, external: true },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Office Location', href: '/locations' },
];
