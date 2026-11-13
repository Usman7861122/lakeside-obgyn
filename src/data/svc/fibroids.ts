import type { GenericService } from './types';

// Treatment list and paragraph updated 2026-11-13 from Dr. Hannon's email (no progesterone injections; tranexamic acid added).
export const service: GenericService = {
  slug: 'fibroids',
  title: 'Fibroids Specialists',
  menuLabel: 'Fibroids',
  metaDescription:
    'Fibroids specialists in the Inner Richmond, San Francisco. Fibroid evaluation and treatment at Lakeside Obstetrics, Gynecology & Fertility. Call to schedule.',
  intro: [
    'Fibroids often lead to pelvic pain, heavy bleeding, and even infertility in some cases. If you have a history of fibroids or are experiencing symptoms, call our San Francisco office to schedule your fibroid evaluation.',
  ],
  blocks: [
    {
      q: 'What are fibroids?',
      parts: [
        { p: 'Fibroids are noncancerous growths that develop in your uterus, usually during your childbearing years. Medically known as leiomyomas, fibroids are abnormal growths, but they don’t increase your risk of uterine cancer.' },
        { p: 'What’s interesting about uterine fibroids is that doctors don’t understand what causes them. However, clinical research suggests that the following factors are to blame:' },
        { ul: ['Presence of certain growth factors, such as an insulin-like growth factor', 'Estrogen and progesterone fluctuations', 'Abnormal genetic changes', 'Family history of fibroids', 'Vitamin D deficiency', 'Obesity'] },
        { p: 'The risk of developing fibroids is also higher among patients who are of African American descent.' },
      ],
    },
    {
      q: 'Do fibroids cause symptoms?',
      parts: [
        { p: 'Fibroids don’t always cause symptoms. Some patients are unaware they have fibroids until they have a screening for another issue, such as infertility. Other times though, fibroids cause a wide variety of symptoms, including:' },
        { ul: ['Painful periods', 'Frequent urination', 'Pain during intercourse', 'Heavy uterine bleeding', 'Full feeling in your pelvic area'] },
        { p: 'Although you can certainly become pregnant when you have fibroids, in some cases, fibroids lead to complications during pregnancy and childbirth. For instance, your risk of needing a Cesarean section is greater if you have fibroids. In any case, if any of these symptoms are affecting you, come in to Lakeside Obstetrics, Gynecology & Fertility for a fibroid evaluation.' },
      ],
    },
    {
      q: 'How does an OB/GYN treat fibroids?',
      parts: [
        { p: 'If your fibroids aren’t bothering you, your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility may recommend watching and observing them over time. If you do have fibroid-related symptoms, your OB/GYN may recommend:' },
        { ul: ['Gonadotropin-releasing hormone agonist medications', 'Over-the-counter pain medications', 'Iron supplements (to treat anemia)', 'Hormonal intrauterine devices (IUDs)', 'Low dose birth control pills and progesterone only pills', 'Nonhormonal tranexamic acid', 'Minimally invasive surgery'] },
        { p: 'For moderate-to-severe fibroid issues, surgery may be the best option. Your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility may recommend a myomectomy or transcervical radiofrequency ablation to treat the fibroids without damaging healthy uterine tissues.' },
        { p: 'But in advanced stages, you may need an endometrial ablation or hysterectomy. These procedures are only an option as a last resort, since you won’t be able to become pregnant afterward.' },
      ],
    },
  ],
  closing:
    'Before struggling with fibroid symptoms another day, see how the OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility can help. Call the clinic to schedule your appointment today.',
  related: { eyebrow: 'Fibroid treatment option', title: 'The Sonata® Procedure for Fibroids', href: '/services/sonata', cta: 'Learn about the Sonata procedure' },
  photos: [
    { src: '/images/services/fibroids-1.jpg', alt: 'A doctor holding a magnifying glass over a uterus and ovaries model' },
    { src: '/images/services/fibroids-2.jpg', alt: 'A doctor pointing to a uterus model while a patient looks on' },
    { src: '/images/services/fibroids-3.jpg', alt: 'A doctor holding a uterus and ovaries anatomical model in an office' },
  ],
};
