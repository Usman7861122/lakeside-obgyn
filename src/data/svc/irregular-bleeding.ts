import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'irregular-bleeding',
  title: 'Irregular Bleeding Specialists',
  menuLabel: 'Irregular Bleeding',
  metaDescription:
    'Irregular bleeding specialists in the Inner Richmond, San Francisco. Evaluation and treatment at Lakeside Obstetrics, Gynecology & Fertility. Call to schedule an exam.',
  intro: [
    'Irregular bleeding is a health issue that you should not ignore, especially if it is affecting your daily activities, work, or sleep. Before irregular bleeding affects you another day, call the office to schedule an exam.',
  ],
  blocks: [
    {
      q: 'What is irregular bleeding?',
      parts: [
        { p: 'Irregular bleeding means something different to everyone. In general, irregular bleeding is something that isn’t normal for you or that affects your daily life. Abnormal bleeding may include:' },
        { ul: ['Bleeding or spotting between periods', 'Having menstrual periods that last longer than seven days', 'Getting up more than twice nightly to change your pad or tampon', 'Doubling up on feminine hygiene (combining pads and tampons)', 'Skipping periods'] },
        { p: 'Irregular bleeding is also defined as any bleeding that occurs outside of the normal cycle length. Your menstrual cycle should last 21-35 days. If cycles are shorter or longer than this, it may be a cause for concern.' },
      ],
    },
    {
      q: 'Why do I have irregular bleeding?',
      parts: [
        { p: 'If any of the issues above sound familiar, it’s time to come in to Lakeside Obstetrics, Gynecology & Fertility for an evaluation. Irregular bleeding may be a sign of:' },
        { ul: ['Uterine fibroids', 'Hormonal imbalance', 'Pregnancy complications', 'Intrauterine device (IUD) issues', 'Polycystic ovary syndrome (PCOS)', 'Pelvic inflammatory disease (PID)', 'Sexually transmitted diseases (STDs)'] },
        { p: 'Though less common, occasionally, irregular bleeding is a sign of gynecological cancer, but your dedicated OB/GYN at Lakeside Obstetrics, Gynecology & Fertility conducts a comprehensive workup to get to the root of your abnormal bleeding. Your OB/GYN may conduct laboratory testing, gynecological ultrasound, STD testing, or endometrial biopsy testing, if needed.' },
      ],
    },
    {
      q: 'How does an OB/GYN treat irregular bleeding?',
      parts: [
        { p: 'Treating irregular bleeding depends on the cause. After your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility diagnoses you, they may recommend any of the following treatments:' },
        { ul: ['Changing your birth control', 'Antibiotic medications', 'Hormonal management'] },
        { p: 'The OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility specialize in minimally invasive gynecological surgery. If you do need surgical management, your OB/GYN may recommend a laparoscopy to treat your condition.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility can help treat your irregular bleeding issues. Don’t hesitate to call the office to book an evaluation today.',
  photos: [
    { src: '/images/services/irregular-bleeding-1.jpg', alt: 'A woman holding a calendar with marked days of her menstrual cycle' },
    { src: '/images/services/irregular-bleeding-2.jpg', alt: 'A doctor taking notes on a tablet during a gynecology appointment' },
    { src: '/images/services/irregular-bleeding-3.jpg', alt: 'A gynecologist pointing to an anatomical model of the female reproductive system' },
  ],
};
