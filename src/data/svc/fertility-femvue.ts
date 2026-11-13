import type { GenericService } from './types';

// Typo fixed from the old text (logged in docs/OPEN-QUESTIONS.md): "Gynecology, & Fertility" -> "Gynecology & Fertility".
export const service: GenericService = {
  slug: 'fertility-femvue',
  title: 'Fertility & FemVue Specialist',
  menuLabel: 'Fertility & FemVue',
  metaDescription:
    'Fertility and FemVue specialist in the Inner Richmond, San Francisco. Infertility evaluation, semen analysis and in-office FemVue tubal patency testing at Lakeside Obstetrics, Gynecology & Fertility.',
  intro: [
    'Infertility, or the inability to conceive a child after 6-12 months of active trying, can cause significant stress and worry for a couple. The OBGYN physicians at Lakeside Obstetrics, Gynecology & Fertility can help with your infertility evaluation including laboratory testing, semen analysis, and in-office FemVue for tubal patency testing. Call our San Francisco office to schedule an exam.',
  ],
  blocks: [
    {
      q: 'What is FemVue®?',
      parts: [
        { p: 'To assess whether fallopian tubes are open or blocked, the OBGYN physicians utilize ultrasound equipment and FemVue, a safe and simple method that relies on the injection of air bubbles and sterile water for assessment, rather than the traditional method of using x-ray and radiopaque dye.' },
        { todo: 'TODO: Dr. Hannon\'s FemVue website video link (not in her email). Add the video here.' },
      ],
    },
    {
      q: 'What can I expect during a fertility evaluation?',
      parts: [
        { p: 'Lakeside Obstetrics, Gynecology & Fertility is dedicated to helping all patients achieve their goals of having a child. If, at your specific age, pregnancy is not achieved in a reasonable period of time, we can investigate common male and female fertility factors. During your fertility evaluation, your OB/GYN may perform a workup of infertility causes and gynecological health evaluations. They may:' },
        { ul: ['Conduct sexually transmitted (STD) testing', 'Perform a pelvic or transvaginal ultrasound', 'Conduct a FemVue® in-office tubal patency test', 'Run labs to check your hormones and egg reserves', 'Request a semen analysis from your partner'] },
        { p: 'Your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility also evaluates your personal medical history to determine if there are any factors that may be affecting your fertility. By the end of your fertility assessment, you have answers to all of your questions and information about any potential complications that may affect you.' },
        { p: 'Rest assured, with the caring providers at Lakeside Obstetrics, Gynecology & Fertility on your side, you can receive the quality care you need throughout your fertility path.' },
      ],
    },
  ],
  closing:
    'Schedule your infertility evaluation at Lakeside Obstetrics, Gynecology & Fertility today. Call the office to find out more information.',
  photos: [
    { src: '/images/services/fertility-femvue-1.jpg', alt: 'A woman talking with a fertility specialist at a desk' },
    { src: '/images/services/fertility-femvue-2.jpg', alt: 'A doctor reviewing a tablet with a couple in a clinic' },
    { src: '/images/services/fertility-femvue-3.jpg', alt: 'A couple holding hands while talking with a doctor' },
  ],
};
