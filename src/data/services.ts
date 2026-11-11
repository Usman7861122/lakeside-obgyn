// Service pages. Text is word for word from the old site (lakesideobgyn.org/services/<slug>), read 2026-11-11.
// Client still needs to approve it. Medical wording must not be changed (see CLAUDE.md rule 5).
// One typo in the old text was fixed: "day of your exami" is "day of your exam" here (logged in docs/OPEN-QUESTIONS.md).
export type ServicePhoto = { src: string; alt: string };

export type WellWomanService = {
  slug: string;
  title: string; // H1 (the old site's H1)
  menuLabel: string;
  metaDescription: string;
  intro: string;
  photos: [ServicePhoto, ServicePhoto, ServicePhoto];
  why: { q: string; lead: string; items: string[] };
  expect: { q: string; lead: string; items: string[]; after: string };
  start: { q: string; cards: { label: string; text: string }[] };
  prepare: { q: string; lead: string; items: string[]; note: string; closing: string };
};

export const services: WellWomanService[] = [
  {
    slug: 'annual-well-woman-exam',
    title: 'Annual Well-Woman Exam Specialists',
    menuLabel: 'Annual Well-Woman Exam',
    metaDescription:
      'Annual well-woman exam specialists in the Inner Richmond, San Francisco. Lakeside Obstetrics, Gynecology & Fertility welcomes patients from the LGBTQ community. Book online or call.',
    intro:
      'An annual well-woman exam is necessary to prevent chronic diseases and serious gynecological issues, like cervical cancer. The team welcomes patients from the LGBTQ community who are in need of gynecological exams. You can book your annual well-woman visit through the website, or you can call to speak with a team member at the office nearest you today.',
    photos: [
      { src: '/images/services/wellwoman-1.jpg', alt: 'A smiling doctor in a white coat showing a medical report on a clipboard to a patient' },
      { src: '/images/services/wellwoman-2.jpg', alt: 'A doctor talking with a patient at a desk in a bright consultation room' },
      { src: '/images/services/wellwoman-3.jpg', alt: 'Two smiling women at a bright medical reception desk' },
    ],
    why: {
      q: 'Why is an annual well-woman exam important?',
      lead:
        'An annual well-woman exam is important for any patient who has a vagina, vulva, uterus, cervix, ovaries, or breasts. These exams are essential preventive-care visits designed to:',
      items: [
        'Prevent and treat sexually transmitted diseases (STDs)',
        'Help you with family planning and birth control',
        'Screen for gynecological and breast cancer',
        'Manage menarche or menopause-related symptoms',
      ],
    },
    expect: {
      q: 'What can I expect during an annual well-woman exam?',
      lead:
        'Lakeside Obstetrics, Gynecology & Fertility provides comprehensive well-woman and gynecological exams in a caring environment. During your routine gynecological exam, your OB/GYN may:',
      items: [
        'Screen for STDs',
        'Conduct a pelvic and breast exam',
        'Update your birth control medications',
        'Evaluate your personal and family medical history',
        'Order a mammogram (breast cancer screening)',
        'Perform a Pap smear (cervical cancer screening)',
        'Order laboratory testing, such as a urinalysis or blood draw',
        'Provide a GARDASIL® human papillomavirus (HPV) vaccine',
      ],
      after:
        'Your OB/GYN also needs to know the first day of your most recent menstrual period (if applicable). This is your time to let them know about any concerns or symptoms you have, so they can order the proper screenings and determine if you need further treatments.',
    },
    start: {
      q: 'When should I start having annual well-woman exams?',
      cards: [
        {
          label: 'Ages 13-15',
          text: 'You should start having annual well-woman exams at Lakeside Obstetrics, Gynecology & Fertility between the ages of 13-15. These early exams generally include physicals, menstruation education, and STD prevention counseling.',
        },
        {
          label: 'About age 21',
          text: 'You typically do not need a Pap smear until about the age of 21. However, if you are sexually active and having vaginal, anal, or oral sex before this age, you may need STD testing and routine pelvic exams.',
        },
      ],
    },
    prepare: {
      q: 'How do I prepare for a well-woman exam?',
      lead:
        'To prepare for your upcoming well-woman exam at Lakeside Obstetrics, Gynecology & Fertility, it’s helpful to send over medical records from your previous OB/GYN. You should also:',
      items: [
        'Write down all medications and dosages (or bring in the bottles)',
        'Bring in your updated insurance information',
        'Make a list of any symptoms you have',
      ],
      note:
        'If you need a Pap smear, please notify the office regarding heavy bleeding on the day of your exam in order to prevent interference with the lab result interpretation.',
      closing:
        'If you’re due for an annual well-woman exam, contact Lakeside Obstetrics, Gynecology & Fertility today. You can conveniently schedule an appointment online or over the phone with the office.',
    },
  },
];
