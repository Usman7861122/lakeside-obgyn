import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'polycystic-ovary-syndrome',
  title: 'Polycystic Ovary Syndrome Specialists',
  menuLabel: 'Polycystic Ovary Syndrome',
  metaDescription:
    'Polycystic ovary syndrome (PCOS) specialists in the Inner Richmond, San Francisco. PCOS evaluation and personalized treatment at Lakeside Obstetrics, Gynecology & Fertility. Book online or call.',
  intro: [
    'Polycystic ovary syndrome (PCOS) is a common hormonal disorder that occurs during your reproductive years. Click on the online scheduling tool to book your PCOS evaluation or call the office nearest you to book an appointment by phone.',
  ],
  blocks: [
    {
      q: 'What causes polycystic ovary syndrome?',
      parts: [
        { p: 'Polycystic ovary syndrome, more commonly known as PCOS, affects as many as one in 10 patients during their childbearing years. This condition leads to a hormonal imbalance, as well as metabolism issues, that negatively impact your overall health. If you have PCOS, it might be related to:' },
        { ul: ['Obesity', 'High insulin levels', 'Family history of PCOS', 'High androgen (male hormone) levels'] },
        { p: 'But medical experts usually can’t determine a single cause of PCOS. To diagnose your condition, your OB/GYN is likely going to conduct a pelvic exam, perform an in-office ultrasound, and evaluate your hormone levels through a blood test. They may also be able to diagnose you based on your symptoms.' },
      ],
    },
    {
      q: 'What are the symptoms of polycystic ovary syndrome?',
      parts: [
        { p: 'Polycystic ovary syndrome is known for causing irregular periods. You may miss a period or have fewer than eight periods per year. PCOS is also known for leading to:' },
        { ul: ['Darkening of your skin along creases, like under your breasts', 'Acne on your face, upper back, and chest', 'Thinning hair (male-pattern baldness)', 'Skin tags on your armpits or neck', 'Facial and neck hair growth', 'Weight gain'] },
        { p: 'One of the other common issues with PCOS is difficulty getting pregnant. You may not even realize you have PCOS until you see your OB/GYN for infertility issues. In any case, if any of these symptoms are affecting you, the leading OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility can help.' },
      ],
    },
    {
      q: 'How does an OB/GYN treat polycystic ovary syndrome?',
      parts: [
        { p: 'PCOS is certainly manageable, and you can absolutely go on to have a normal and healthy pregnancy (if desired). To manage your PCOS and resolve the symptoms you experience, your dedicated OB/GYN may recommend:' },
        { ul: ['Weight loss support', 'Excessive hair growth management', 'Fertility assistance, including ovulation medications', 'Hormonal therapy, such as birth control pills or progestin'] },
        { p: 'The OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility also help you manage your cycle and resolve issues with irregular periods. Your PCOS treatment plan is entirely personalized to you and your concerns.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility provides expert PCOS management. Don’t hesitate to schedule an evaluation today online or over the phone.',
  photos: [
    { src: '/images/services/polycystic-ovary-syndrome-1.jpg', alt: 'A uterus model beside letter tiles spelling PCOS on a doctor’s desk' },
    { src: '/images/services/polycystic-ovary-syndrome-2.jpg', alt: 'A pair of hands holding a paper model of a uterus and ovaries' },
    { src: '/images/services/polycystic-ovary-syndrome-3.jpg', alt: 'A doctor writing notes on a clipboard during a consultation' },
  ],
};
