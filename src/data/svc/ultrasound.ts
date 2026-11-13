import type { GenericService } from './types';

// Rewritten 2026-11-13 from Dr. Hannon's email: the practice no longer provides prenatal care or delivers babies.
// Only first trimester ultrasounds. Mostly transvaginal (GYN and early pregnancy dating/viability); occasionally transabdominal
// pelvic ultrasound for a comprehensive evaluation. Her words are used as the base; she should review the page.
export const service: GenericService = {
  slug: 'ultrasound',
  title: 'Ultrasound Specialists',
  menuLabel: 'Ultrasound',
  metaDescription:
    'Ultrasound specialists in the Inner Richmond, San Francisco. On-site gynecological and first trimester pregnancy ultrasounds at Lakeside Obstetrics, Gynecology & Fertility. Call to book.',
  intro: [
    'Ultrasounds are routine gynecological tests. In our office, we also use ultrasound in early (first trimester) pregnancy. Call the office to book your ultrasound appointment.',
  ],
  blocks: [
    {
      q: 'Why do I need an ultrasound?',
      parts: [
        { p: 'An ultrasound uses high-frequency sound waves — undetectable by the human ear — to create images of your internal organs and structures. Not only can your OB/GYN get pictures, they can also watch a live-feed video and observe the functions of your pelvic organs. Your OB/GYN may recommend an ultrasound to diagnose or rule out any of the following conditions:' },
        { ul: ['Ovarian cysts', 'Endometriosis', 'Uterine fibroids', 'Ectopic pregnancy', 'Infertility problems', 'Abnormal bleeding causes'] },
        { p: 'In early pregnancy, we use ultrasound for pregnancy dating and to check viability. We only perform first trimester pregnancy ultrasounds in our office. Because no radiation is used for an ultrasound, it is entirely safe.' },
      ],
    },
    {
      q: 'What happens during an ultrasound?',
      parts: [
        { p: 'We mostly perform transvaginal ultrasounds, for both gynecologic evaluation and for early (first trimester) pregnancy dating and viability. With a transvaginal ultrasound, your OB/GYN inserts a thin probe into your vagina to gather images.' },
        { p: 'Sometimes we need to perform a transabdominal pelvic ultrasound for a comprehensive evaluation. During an abdominal ultrasound, your OB/GYN places a warm, clear, jelly-like substance on your lower abdomen and pelvic region. This jelly helps sound waves travel more efficiently for clearer images. The next step involves gliding a handheld transducer tool over your abdomen and pelvic areas. Your provider views the monitor and takes snapshots of any areas of concern.' },
      ],
    },
    {
      q: 'When will I get my ultrasound results?',
      parts: [
        { p: 'Since most of the ultrasounds are performed by the physicians at Lakeside Obstetrics, Gynecology & Fertility, you will most likely receive the results as the physician is performing the ultrasound. For example, if your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility is checking for ovarian cysts, they can often tell right away if they see anything abnormal and let you know.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility offers on-site gynecological and first trimester pregnancy ultrasounds at our office. Call the office to schedule an appointment today.',
  photos: [
    { src: '/images/services/wellwoman-1.jpg', alt: 'A smiling doctor in a white coat showing a medical report on a clipboard to a patient' },
    { src: '/images/services/ultrasound-2.jpg', alt: 'A patient smiling while a clinician performs an ultrasound scan' },
    { src: '/images/services/ultrasound-3.jpg', alt: 'A smiling sonographer performing an abdominal ultrasound on a patient' },
  ],
};
