import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'lgbtq-care',
  title: 'LGBTQ Care',
  menuLabel: 'LGBTQ Care',
  metaDescription:
    'LGBTQ care in the Inner Richmond, San Francisco. Compassionate gynecological and fertility care, including gender-affirming laparoscopic hysterectomy, at Lakeside Obstetrics, Gynecology & Fertility.',
  intro: [
    'It’s important for members of the LGBTQ community to receive compassionate gynecological and fertility care. Click on the online scheduler to book your LGBTQ evaluation today, or call the clinic nearest you directly to book a visit.',
  ],
  blocks: [
    {
      q: 'What is LGBTQ care?',
      parts: [
        { p: 'LGBTQ care is a personalized approach to gynecological care that aims to eliminate specific barriers to care and to address known health disparities among members of the LGBTQ community. Enhancing efforts to improve LGBT health are necessary to ensure that LGBT individuals can lead long, healthy lives.' },
        { p: 'No matter how you identify, it is important for anyone with breasts and/or a vulva, uterus, cervix, ovaries, and vagina to have regular gynecological exams and screening. As long as you’re generally healthy, you should have a gynecological exam once a year. However, if you have specific concerns such as pelvic pain or an abnormal Pap test, more frequent visits may be necessary.' },
      ],
    },
    {
      q: 'How can an OB/GYN help me if I am LGBTQ?',
      parts: [
        { p: 'The compassionate OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility understand the unique challenges LGBTQ folks face. They’re dedicated to ensuring you receive the quality medical care you deserve in a safe, supportive, and welcoming environment.' },
        { p: 'Your OB/GYN can help you stay up-to-date with routine screening guidelines and ensure that you are seen by other LGBT-friendly specialists as needed.' },
        { p: 'For transgender patients, the physicians at Lakeside Obstetrics, Gynecology & Fertility offer gender-affirming laparoscopic hysterectomy and collaborate with other specialists including urologists, plastic surgeons, and vascular surgeons during transition.' },
        { p: 'Your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility can support you with family planning if you are ready to become a parent. They can provide preconception counseling and guidance for intrauterine insemination (IUI), in vitro fertilization (IVF), or adoption to help you on your journey to parenthood.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility provides quality LGBTQ care in a safe, supportive environment. Schedule your appointment through the website or call the San Francisco office directly.',
  photos: [
    { src: '/images/services/lgbtq-care-1.jpg', alt: 'A group of friends laughing together outdoors while one holds up a rainbow pride flag' },
    { src: '/images/services/lgbtq-care-2.jpg', alt: 'A person with a buzz cut in a purple hoodie looking to the side against a pink wall' },
    { src: '/images/services/lgbtq-care-3.jpg', alt: 'A smiling woman with curly hair and heart-shaped sunglasses at the beach' },
  ],
};
