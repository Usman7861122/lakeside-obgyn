import type { GenericService } from './types';

// Check with the client: this page says "both office locations" and "Saturday ultrasound appointments", but the site lists one office
// and Monday to Friday hours. Copied as written. Logged in docs/OPEN-QUESTIONS.md.
export const service: GenericService = {
  slug: 'ultrasound',
  title: 'Ultrasound Specialists',
  menuLabel: 'Ultrasound',
  metaDescription:
    'Ultrasound specialists in the Inner Richmond, San Francisco. On-site gynecological and obstetrical ultrasounds at Lakeside Obstetrics, Gynecology & Fertility. Book online or call.',
  intro: [
    'Ultrasounds are routine gynecological tests, as well as normal imaging screenings during pregnancy. Click on the online scheduling tool to book your ultrasound appointment or call the office nearest you directly to schedule a visit.',
  ],
  blocks: [
    {
      q: 'Why do I need an ultrasound?',
      parts: [
        { p: 'An ultrasound uses high-frequency sound waves — undetectable by the human ear — to create images of your internal organs and structures. Not only can your OB/GYN get pictures, they can also watch a live-feed video and observe the functions of your pelvic organs. Your OB/GYN may recommend an ultrasound to diagnose or rule out any of the following conditions:' },
        { ul: ['Ovarian cysts', 'Endometriosis', 'Uterine fibroids', 'Ectopic pregnancy', 'Infertility problems', 'Abnormal bleeding causes'] },
        { p: 'An ultrasound is also necessary to confirm a pregnancy and to monitor your baby’s health throughout their development. Because no radiation is used for an ultrasound, it’s entirely safe to have during every stage of your pregnancy.' },
      ],
    },
    {
      q: 'What happens during an ultrasound?',
      parts: [
        { p: 'Ultrasounds can be either external (abdominal) or internal (transvaginal). During an abdominal ultrasound, your OB/GYN places a warm, clear, jelly-like substance on your lower abdomen and pelvic region. This jelly helps sound waves travel more efficiently for clearer images.' },
        { p: 'The next step involves gliding a handheld transducer tool over your abdomen and pelvic areas. Your provider views the monitor and takes snapshots of any areas of concern or evaluates your baby’s development. They can even record audio, which is common if you’re undergoing an obstetrical ultrasound to monitor your baby’s heart rate.' },
        { p: 'A transvaginal ultrasound works in the same manner, but instead of gliding the transducer over your abdomen, your OB/GYN inserts a thin probe into your vagina to gather images.' },
      ],
    },
    {
      q: 'When will I get my ultrasound results?',
      parts: [
        { p: 'Since most of the ultrasounds are performed by the physicians at Lakeside Obstetrics, Gynecology & Fertility, you will most likely receive the results as the physician is performing the ultrasound. For example, if your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility is checking for ovarian cysts, they can often tell right away if they see anything abnormal and let you know.' },
        { p: 'For obstetrical ultrasounds, your OB/GYN talks with you about what they can see about your baby’s development. Your provider can even let you know about your baby’s gender during your ultrasound (usually after 18-20 weeks).' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility offers on-site gynecological and obstetrical ultrasounds at both office locations. For your convenience, Saturday ultrasound appointments are available with the sonographers in the practice. Schedule an appointment either online or over the phone today.',
  photos: [
    { src: '/images/services/ultrasound-1.jpg', alt: 'A gynecologist performing an abdominal ultrasound scan on a patient' },
    { src: '/images/services/ultrasound-2.jpg', alt: 'A patient smiling while a clinician performs an ultrasound scan' },
    { src: '/images/services/ultrasound-3.jpg', alt: 'A smiling sonographer performing an abdominal ultrasound on a patient' },
  ],
};
