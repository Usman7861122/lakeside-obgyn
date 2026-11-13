import { images } from './images';

// Provider facts come from the old site (lakesideobgyn.org/provider/<slug>, fetched 2026-11-11).
// Biography copied word for word from the old site on 2026-11-11 (user gave permission). Client still needs to approve it (see docs/OPEN-QUESTIONS.md).
export type Provider = {
  slug: string;
  name: string;
  title: string; // H1
  creds: string;
  role: string;
  img: string;
  imgAlt: string;
  boardLine?: string;
  honorific?: string; // defaults to 'Dr.'
  tagline?: string; // overrides the practice descriptor in the hero
  careHeading?: { eyebrow: string; heading: string };
  approach?: { eyebrow: string; heading: string; photo: { src: string; alt: string }; items: { label: string; text: string; icon: string }[] };
  photoSmall?: boolean; // portrait file is small; show it in a smaller frame
  photos?: { education: { src: string; alt: string }; credentials?: { src: string; alt: string }; honors: { src: string; alt: string } };
  eduHeading?: string;
  honorsEyebrow?: string;
  honorsHeading?: string;
  badges: { src: string; alt: string; label: string; href?: string; w: number; h: number }[];
  education: { label: string; detail: string }[];
  honors: { label: string; detail: string }[];
  extra?: { label: string; text: string };
  care: { label: string; href?: string }[];
  bio: string[] | null;
  metaDescription: string;
};

export const providers: Provider[] = [
  {
    slug: 'monica-hannon-md-facog',
    name: 'Monica Hannon',
    title: 'Monica Hannon, MD',
    creds: 'MD',
    role: 'Obstetrician & Gynecologist',
    img: images.doctors.monica,
    imgAlt: 'Dr. Monica Hannon, obstetrician and gynecologist in San Francisco',
    boardLine: 'Board certified by the American Board of Obstetrics and Gynecology',
    photos: {
      education: { src: '/images/provider/education.jpg', alt: 'Medical books and a stethoscope on a desk' },
      credentials: { src: '/images/provider/credentials.jpg', alt: 'A doctor in a white coat with a framed certificate on the wall behind her' },
      honors: { src: '/images/provider/community.jpg', alt: 'Two mothers holding their newborn baby at home' },
    },
    badges: [
      { src: '/images/badges/menopause-society-seal.png', alt: 'Menopause Society Certified Practitioner badge', label: 'Menopause Society Certified Practitioner (MSCP)', w: 260, h: 260 },
      { src: '/images/badges/isswsh-badge.png', alt: 'ISSWSH, International Society for the Study of Women’s Sexual Health', label: 'Member, International Society for the Study of Women’s Sexual Health', href: 'https://www.isswsh.org/', w: 155, h: 121 },
    ],
    education: [
      { label: 'High school', detail: 'Lowell High School alumna' },
      { label: 'Undergraduate', detail: 'University of Pennsylvania, magna cum laude' },
      { label: 'Medical school', detail: 'Doctor of Medicine, George Washington University School of Medicine' },
      { label: 'Residency', detail: 'Obstetrics and gynecology, George Washington University. Chief Administrative Resident in her final year.' },
    ],
    honors: [
      { label: 'Honor society', detail: 'Inducted into the Gold Humanism Honor Society' },
      { label: 'Residency', detail: 'Selected by her colleagues as OB/GYN Resident of the Year' },
    ],
    extra: { label: 'Community', text: 'Active member of Our Family Coalition, a community-based queer family support and advocacy organization.' },
    eduHeading: 'Where she trained',
    honorsEyebrow: 'Honors and community',
    honorsHeading: 'Recognized by colleagues and community',
    care: [
      { label: 'Contraception', href: '/services/birth-control' },
      { label: 'Fibroids', href: '/services/fibroids' },
      { label: 'Abnormal bleeding', href: '/services/irregular-bleeding' },
      { label: 'PCOS', href: '/services/polycystic-ovary-syndrome' },
      { label: 'Pelvic and sexual pain', href: '/services/pelvic-pain' },
      { label: 'Endometriosis' },
      { label: 'Perimenopause and menopause', href: '/services/perimenopausemenopause-management' },
      { label: 'Hormone therapy' },
      { label: 'Low libido' },
      { label: 'Abnormal Pap tests', href: '/services/abnormal-pap-smear' },
      { label: 'Pelvic organ prolapse' },
      { label: 'Preconception counseling' },
      { label: 'Infertility workup' },
      { label: 'Early pregnancy care' },
      { label: 'Minimally invasive surgery (laparoscopic and vaginal)', href: '/services/minimally-invasive-surgery' },
      { label: 'LGBTQ-inclusive care, including gender-affirming services', href: '/services/lgbtq-care' },
    ],
    bio: [
      "Dr. Monica Hannon is a San Francisco native who returned to the city by the bay as a private practice physician to provide comprehensive gynecology services. She is a Lowell High School alum. She graduated magna cum laude from University of Pennsylvania, and then earned her Doctor of Medicine from The George Washington University School of Medicine in Washington, DC. She completed her residency in Obstetrics and Gynecology at The George Washington University, serving as Chief Administrative Resident in her final year. During her training, she was the recipient of multiple awards, including induction into the “Gold Humanism Honor Society” and selection by her colleagues as “OB/GYN Resident of the Year.”",
      "Dr. Monica Hannon is committed to providing patient-centric, trauma-informed, comprehensive women’s healthcare services. Dr. Monica Hannon is board certified by the American Board of Obstetrics and Gynecology. She is a member of the International Society for the Study of Women’s Sexual Health (ISSWSH) and a Menopause Society Certified Practitioner (MSCP). She specializes in the management of contraception, fibroids, abnormal bleeding, PCOS, genitopelvic and sexual pain, endometriosis, perimenopause and menopause, low libido, hormone therapy, abnormal pap tests, and pelvic organ prolapse. Dr. Monica Hannon also provides preconception counseling, infertility workup, and early pregnancy verification/management. She provides minimally invasive surgical options including laparoscopic and vaginal approaches when indicated. She enjoys educating patients about their health and developing collaborative treatment plans.",
      "Dr. Monica Hannon is also a strong healthcare advocate within the LGBTQ community. She takes pride in offering respectful and individualized care for her LGBTQ patients – from assisting with conception for queer families to performing gender-affirming surgery and health services for transgender patients.",
      "When not in the office or on-call, Dr. Monica Hannon spends time with her wife and two young kids. She is an active member in Our Family Coalition, a community-based queer family support and advocacy organization. When not at the zoo or the park, Dr. Monica Hannon enjoys going to Ocean beach (even in the freezing cold!), playing baseball with her kids, rollerskating, riding her e-bike, and exploring new corners of the beautiful Bay Area."
    ],
    metaDescription: 'Monica Hannon, MD, board certified obstetrician and gynecologist in the Inner Richmond, San Francisco. Menopause Society Certified Practitioner. Call 415-741-1000.',
  },
  {
    slug: 'ziyad-hannon-md-facog',
    name: 'Ziyad Hannon',
    title: 'Ziyad Hannon, MD',
    creds: 'MD',
    role: 'Obstetrician & Gynecologist',
    img: images.doctors.ziyad ?? '',
    imgAlt: 'Dr. Ziyad Hannon, obstetrician and gynecologist in San Francisco',
    photos: {
      education: { src: '/images/provider/education-2.jpg', alt: 'A purple stethoscope resting on an open book with other books behind it' },
      honors: { src: '/images/services/surgery.jpg', alt: 'A surgeon in blue scrubs performing a minimally invasive procedure' },
    },
    badges: [],
    eduHeading: 'Where he trained',
    education: [
      { label: 'High school', detail: 'Lowell High School, San Francisco' },
      { label: 'Undergraduate', detail: 'Bachelor of Arts degree in Biochemistry, University of California, Berkeley. Bachelor of Science in Computer Science, University of San Francisco.' },
      { label: 'Medical school', detail: 'Doctor of Medicine degree, UCLA School of Medicine, Los Angeles' },
      { label: 'Residency', detail: 'Four years of residency training at Parkland Memorial Hospital, Dallas, Texas, one of the largest maternity hospitals in the United States. Published his research paper on Ectopic Pregnancies.' },
    ],
    honorsEyebrow: 'Teaching and hospital leadership',
    honorsHeading: 'Teacher, surgeon and hospital leader',
    honors: [
      { label: 'Teaching award', detail: '“2010 Outstanding Teacher Award” from the University of California San Francisco, School of Medicine' },
      { label: 'Teaching', detail: 'Continues his volunteer clinical teaching' },
      { label: 'Active staff', detail: 'Department of Obstetrics & Gynecology, California Pacific Medical Center, San Francisco' },
      { label: 'Chief of Gynecology', detail: 'Active staff and Chief of Gynecology at St. Mary’s Hospital and Medical Center, San Francisco' },
    ],
    extra: { label: 'Outside work', text: 'Dr. Hannon enjoys swimming and creative writing, but most of all he enjoys wrestling with his grandchildren.' },
    care: [
      { label: 'Management of fertility issues', href: '/services/fertility-femvue' },
      { label: 'Abdominal & pelvic surgery' },
      { label: 'Minimally invasive procedures', href: '/services/minimally-invasive-surgery' },
    ],
    bio: [
      "Since establishing his private practice in 1984, Ziyad Hannon, MD, has built a reputation for cutting-edge OB/GYN health care. He welcomes patients to Lakeside Obstetrics, Gynecology & Fertility, at our state-of-the-art San Francisco location on 8th Avenue at Geary Boulevard.",
      "A graduate of Lowell High School, San Francisco, Dr. Hannon earned a Bachelor of Arts degree in Biochemistry from the University of California, Berkeley, and a Bachelor of Science in Computer Science from the University of San Francisco. He then attended UCLA School of Medicine, Los Angeles, where he obtained his Doctor of Medicine degree. He spent the next four years in residency training at one of the largest maternity hospitals in the United States: Parkland Memorial Hospital, Dallas, Texas. There, he published his research paper on Ectopic Pregnancies.",
      "His commitment to medical student education earned him the “2010 Outstanding Teacher Award” from the University of California San Francisco, School of Medicine. He continues his volunteer clinical teaching, as well as maintaining membership on active staff in the Department of Obstetrics & Gynecology at California Pacific Medical Center, San Francisco. He is also on active staff and serves as Chief of Gynecology at St. Mary’s Hospital and Medical Center, San Francisco.",
      "Dr. Hannon has been serving the needs of families throughout the San Francisco Bay Area since 1984. He has expertise in the management of fertility issues, abdominal & pelvic surgery, including minimally invasive procedures. He has delivered multi-generational families and maintains a full schedule, providing personalized care to his patients.",
      "Outside work, Dr. Hannon enjoys swimming and creative writing, but most of all he enjoys wrestling with his grandchildren."
    ],
    metaDescription: 'Ziyad Hannon, MD, obstetrician and gynecologist in the Inner Richmond, San Francisco. Private practice since 1984, with expertise in fertility, abdominal and pelvic surgery, and minimally invasive procedures.',
  },
  {
    slug: 'jeanette-blanks-msn-fnp-c-mscp-cnl',
    name: 'Jeanette Blanks',
    honorific: '',
    title: 'Jeanette Blanks, MSN, FNP-C, MSCP, CNL',
    creds: 'MSN, FNP-C, MSCP, CNL',
    role: 'Nurse Practitioner',
    tagline: 'Nurse Practitioner located in Inner Richmond, San Francisco, CA',
    img: images.doctors.jeanette ?? '/images/team/jeanette-blanks.jpg',
    imgAlt: 'Jeanette Blanks, family nurse practitioner in San Francisco',
    // Text below is word for word from the old site (lakesideobgyn.org), read 2026-11-11. Client still needs to approve it.
    approach: {
      eyebrow: 'Her approach',
      heading: 'Care for the whole person',
      photo: { src: '/images/provider/education-3.jpg', alt: 'A pink stethoscope and a notebook on a light wooden table' },
      items: [
        { label: 'Evidence-based care', icon: '<path d="M4 4h12a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4z"/><path d="m9 12 2 2 4-4"/>', text: 'Jeanette is committed to evidence-based care that supports patients through hormonal transitions while promoting long-term wellness and quality of life.' },
        { label: 'Coordinated care', icon: '<circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M18 14a6 6 0 0 1 3 6"/>', text: 'She provides care to a diverse patient population to manage acute and chronic conditions while emphasizing preventive screening and patient education. She conducts thorough assessments, develops individualized treatment plans, and collaborates closely with interdisciplinary teams to ensure coordinated, seamless care. Her approach prioritizes shared decision-making, clear communication, and continuity across all stages of care.' },
        { label: 'Integrative background', icon: '<path d="M12 21c-4-3-7-6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4-3 7-7 10z"/>', text: 'Jeanette brings a unique, integrative perspective shaped by more than 20 years of prior experience as a naturopathic practitioner and nutrition therapist. This background enhances her ability to address the whole person by thoughtfully incorporating lifestyle, nutrition, and behavioral strategies alongside conventional medical treatments. She strives to create a supportive, respectful environment where patients feel heard, informed, and empowered in their healthcare decisions.' },
      ],
    },
    badges: [],
    education: [],
    honors: [],
    careHeading: { eyebrow: 'Clinical practice', heading: 'Comprehensive gynecologic and primary care' },
    care: [
      { label: 'Perimenopause/menopause symptom management & hormone replacement therapy', href: '/services/perimenopausemenopause-management' },
      { label: 'Low libido/Hypoactive sexual desire disorder' },
      { label: 'Weight loss counseling & medication', href: '/services/weight-loss-management' },
      { label: 'Preventative care screening' },
      { label: 'Contraceptive counseling', href: '/services/birth-control' },
      { label: 'STD screening and vaginitis treatment' },
      { label: 'Menstrual management', href: '/services/irregular-bleeding' },
    ],
    // Paragraph 1 is the old site's text. Paragraph 2 was written 2026-11-13 ONLY from facts already on this site (team, location, her care list).
    // No new claims. Needs Dr. Hannon's approval. Logged in docs/OPEN-QUESTIONS.md.
    bio: [
      'Jeanette Blanks is a Family Nurse Practitioner and Menopause Society Certified Practitioner. Her clinical practice centers on comprehensive gynecologic and primary care.',
      'Jeanette is a nurse practitioner at Lakeside Obstetrics, Gynecology & Fertility in the Inner Richmond, San Francisco, where she works with Dr. Monica Hannon and Dr. Ziyad Hannon. Her care includes perimenopause and menopause symptom management and hormone replacement therapy, weight loss counseling and medication, contraceptive counseling, and menstrual management.',
    ],
    metaDescription: 'Jeanette Blanks, MSN, FNP-C, MSCP, CNL, nurse practitioner in the Inner Richmond, San Francisco. Menopause care, hormone therapy, contraception and preventive screening at Lakeside Obstetrics, Gynecology & Fertility.',
  },
];
