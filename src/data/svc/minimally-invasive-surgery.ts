import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'minimally-invasive-surgery',
  title: 'Minimally Invasive Surgery Specialists',
  menuLabel: 'Minimally Invasive Surgery',
  metaDescription:
    'Minimally invasive surgery specialists in the Inner Richmond, San Francisco. Gynecological surgery with Monica Hannon, MD, FACOG and Ziyad Hannon, MD, FACOG. Schedule online or call.',
  intro: [
    'In most cases, your OB/GYN can perform gynecological surgery using minimally invasive surgery methods. If you need a procedure or would like to find out more information, schedule an exam with board-certified OB/GYNs Monica Hannon, MD, FACOG or Ziyad Hannon, MD, FACOG at Lakeside Obstetrics, Gynecology & Fertility. Schedule online or call the San Francisco office locations nearest you for an appointment.',
  ],
  blocks: [
    {
      q: 'What is minimally invasive surgery?',
      parts: [
        { p: 'In years past, to perform a gynecologic surgery, your OB/GYN had to make a large incision and work directly on your pelvic organs. This resulted in a large scar, greater length of stay in the hospital, higher risk of complication like infection, and more postoperative pain.' },
        { p: 'Fortunately, with updated technology and techniques, most patients qualify for minimally invasive surgery. Minimally invasive surgery involves using a very thin scope to operate through keyhole incisions.' },
        { p: 'Your OB/GYN makes three small incisions and inflates your pelvic region with gas or air to expand the area for better viewing. They insert the laparoscope into one incision, followed by inserting small surgical tools into other incisions. As the camera at the end of the laparoscope sends live images to the monitor, your OB/GYN can manipulate the surgical tools to make repairs.' },
        { p: 'In some cases, your OB/GYN can even perform your necessary procedure vaginally. Your OB/GYN can perform certain types of hysterectomy procedures through your vagina, rather than going through abdominal incisions with a laparoscope.' },
      ],
    },
    {
      q: 'Do OB/GYNs prefer minimally invasive surgery?',
      parts: [
        { p: 'Usually, yes. Although traditional open surgery is still necessary in some cases, the OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility generally prefer performing minimally invasive procedures whenever possible. Minimally invasive gynecological surgery often results in going home the same day after surgery. The benefits include:' },
        { ul: ['Less postoperative discomfort', 'Reduced risk of infection', 'Minimal scarring', 'Faster recovery'] },
      ],
    },
    {
      q: 'How do I prepare for minimally invasive surgery?',
      parts: [
        { p: 'To help you prepare for your upcoming minimally invasive surgery at Lakeside Obstetrics, Gynecology & Fertility, you need to:' },
        { ul: ['Talk with your OB/GYN about all the medications you take', 'Plan for a ride home and help at home for a few days', 'Have any recommended lab or electrocardiogram (EKG) testing'] },
        { p: 'You may also need to avoid eating or drinking for 8 hours before your procedure. The physicians at Lakeside Obstetrics, Gynecology & Fertility will counsel you about how to prepare for your specific surgery.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility provides modern minimally invasive surgical solutions. Schedule your gynecological surgery consultation through the website or call our San Francisco office directly.',
  photos: [
    { src: '/images/services/minimally-invasive-surgery-1.jpg', alt: 'Gloved hands guiding a laparoscopic instrument during surgery' },
    { src: '/images/services/minimally-invasive-surgery-2.jpg', alt: 'Two surgeons working under operating room lights' },
    { src: '/images/services/minimally-invasive-surgery-3.jpg', alt: 'Gloved hands holding minimally invasive surgical instruments' },
  ],
};
