import type { GenericService } from './types';

// The old page's subtitle differs from the other pages ("Obstetrics and Gynecologist located in Inner Richmond & Lakeside neighborhoods").
// We use the standard practice description instead. Logged in docs/OPEN-QUESTIONS.md.
export const service: GenericService = {
  slug: 'laparoscopic-surgery',
  title: 'Laparoscopic Surgery Specialists',
  menuLabel: 'Laparoscopic Surgery',
  metaDescription:
    'Laparoscopic surgery specialists in the Inner Richmond, San Francisco. Minimally invasive gynecological surgery at Lakeside Obstetrics, Gynecology & Fertility. Call to book a consultation.',
  intro: [
    'Laparoscopic surgery is often the preferred method for gynecological procedures. If you need to undergo a gynecological surgery or would like a second opinion, call the office to schedule your consultation today.',
  ],
  blocks: [
    {
      q: 'Why would an OB/GYN recommend laparoscopic surgery?',
      parts: [
        { p: 'A laparoscopic surgery is a modern, minimally invasive procedure that’s performed with thin surgical tools and a laparoscope. The laparoscope is a long, narrow tube with a light and a camera at the end.' },
        { p: 'All your OB/GYN has to do is make a few small incisions for the laparoscope and the surgical tools, and they can view a close glimpse of your internal structures and make precise repairs. This is often the preferred method for gynecological surgery for any of the following reasons or conditions:' },
        { ul: ['Myomectomy (fibroid removal)', 'Partial or full hysterectomy', 'Ovarian cyst removal', 'Endometriosis treatment'] },
        { p: 'Your OB/GYN may also recommend a laparoscopic surgery to biopsy tissues or abnormal growths or to diagnose or rule out certain conditions they can’t confirm through imaging tests.' },
      ],
    },
    {
      q: 'What are the benefits of laparoscopic surgery?',
      parts: [
        { p: 'The OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility find that laparoscopic surgery has numerous benefits for the surgeon and for the patient. This minimally invasive surgical technique:' },
        { ul: ['Results in better outcomes and greater patient satisfaction', 'Lowers your risk of blood loss and infection', 'Causes less postoperative pain', 'Leads to minimal (if any) scarring'] },
        { p: 'Additionally, almost all laparoscopic surgeries from Lakeside Obstetrics, Gynecology & Fertility are same-day surgeries, meaning you can return home shortly after your procedure.' },
      ],
    },
    {
      q: 'How long does it take to recover from laparoscopic surgery?',
      parts: [
        { p: 'Laparoscopic surgery tends to result in a shorter recovery period than traditional open surgeries, which are rarely performed nowadays. The OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility find that while you may be sore and need to rest for a few days, you should be able to return to work within a week or two.' },
        { p: 'Your OB/GYN may recommend avoiding strenuous activity (including sexual intercourse) and exercising for up to four to six weeks, depending on your procedure. But you can gradually start returning to your normal activities as you feel you are able once your incisions have healed.' },
      ],
    },
  ],
  closing:
    'If you need laparoscopic surgery, contact Lakeside Obstetrics, Gynecology & Fertility for an evaluation. Call the office to book a visit.',
  photos: [
    { src: '/images/services/laparoscopic-surgery-1.jpg', alt: 'A surgical team performing a laparoscopic procedure in an operating room' },
    { src: '/images/services/laparoscopic-surgery-2.jpg', alt: 'Close-up of laparoscopic instruments held by gloved surgeons' },
    { src: '/images/services/laparoscopic-surgery-3.jpg', alt: 'A surgeon in blue scrubs performing a laparoscopic operation' },
  ],
};
