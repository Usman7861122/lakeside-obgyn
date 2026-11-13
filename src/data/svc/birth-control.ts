import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'birth-control',
  title: 'Birth Control Specialists',
  menuLabel: 'Birth Control',
  metaDescription:
    'Birth control specialists in the Inner Richmond, San Francisco. Personalized birth control counseling, IUD and implant insertion at Lakeside Obstetrics, Gynecology & Fertility. Call to book.',
  intro: [
    'Many modern types of birth control, including the intrauterine device (IUD), are over 99% effective at preventing unwanted pregnancy. If you’d like to start or change birth control, the team provides personalized birth control counseling at the clinic. Your OB/GYN helps you select the right type of contraception for your needs. Call to book your appointment today.',
  ],
  blocks: [
    {
      q: 'How does birth control work?',
      parts: [
        { p: 'In order for an egg to become fertilized, sperm has to travel up your Fallopian tube and meet with the egg as it travels down toward your uterus. Birth control disrupts the process of a sperm reaching an egg, but they each work a little differently. Below are short descriptions of some of the most common types of contraception and how they work.' },
        { h: 'Long-acting reversible contraceptives' },
        { p: 'Long-acting reversible contraceptives, such as copper and hormonal intrauterine devices (IUDs) and hormonal implants, prevent pregnancy by multiple mechanisms. All IUDs and hormonal implants create an unfavorable environment for implantation of a fertilized egg in the uterus. IUDs and hormonal implants impair sperm motility and prevent the sperm from reaching the egg in the first place. Additionally, hormonal IUDs and implants thicken the cervical mucus, providing yet another barrier impacting sperm migration.' },
        { p: 'Currently, we offer insertion of the following long-acting contraceptives in our office:' },
        { ul: ['PARAGARD® (copper) 10yr IUD', 'MIRENA® 5yr IUD', 'KYLEENA® 5yr IUD', 'LILETTA® 6yr IUD', 'SKYLA® 3yr IUD', 'NEXPLANON® 3yr implant'] },
        { p: 'Coming soon: Miudella (copper) 3yr IUD. It is not available to obtain yet, and our provider has completed the training for insertion.' },
        { h: 'Short-acting hormonal methods' },
        { p: 'Short-acting hormonal birth control, including the traditional pill, the patch, or vaginal ring (combined hormonal contraceptives) work by stopping the release of eggs from your ovaries. In some cases, you may be interested in a progesterone-only pill or injection (Depo Provera) which work primarily by thickening the cervical mucus, slowing the movement of the egg through the fallopian tubes, and thinning the lining of the uterus.' },
        { h: 'Barrier methods' },
        { p: 'Barrier methods, such as the female or male condom or diaphragm, block the sperms’ path so that they cannot reach the egg. They are used at the time of sexual intercourse.' },
        { h: 'Permanent sterilization' },
        { p: 'Permanent sterilization with tubal ligation, also known as having your “tubes tied,” involves removing a portion or the entire fallopian tubes. This permanently prevents the egg from ever meeting the sperm at the time of ovulation. This type of treatment is only an option if your family is complete and you do not want more children in the future.' },
      ],
    },
    {
      q: 'How do I know which type of birth control I need?',
      parts: [
        { p: 'Lakeside Obstetrics, Gynecology & Fertility understands how overwhelming it can be to decide which type of birth control is right for you. To help you choose, your OB/GYN may talk with you about the following considerations:' },
        { ul: ['When do you think you will have children (if ever)?', 'Can you remember to take a pill at the same time daily?', 'Have you had side effects with birth control in the past?', 'Do you have menstrual problems such as PMS, painful periods, or heavy menstrual bleeding?'] },
        { p: 'Your dedicated OB/GYN provider counsels you about the different options available, so you can work together to determine which solution is best for your needs. Lakeside Obstetrics, Gynecology & Fertility offers in-office NEXPLANON® implant insertion or IUD placement (under ultrasound guidance for difficult cases), so you can generally get started on your contraception plan right away.' },
      ],
    },
    {
      q: 'When does birth control become effective?',
      parts: [
        { p: 'Certain types of birth control, such as the Paragard IUD and Nexplanon implant, become effective immediately. In many cases, you need to continue using a backup form of birth control for at least five to seven days, depending on where you are in your cycle. Your OB/GYN provider at Lakeside Obstetrics, Gynecology & Fertility will provide individualized guidance about when your birth control is going to be most effective.' },
      ],
    },
  ],
  closing:
    'Learn more about the many birth control options available by scheduling a consultation at Lakeside Obstetrics, Gynecology & Fertility today. Call our San Francisco office to be seen.',
  photos: [
    { src: '/images/services/birth-control-1.jpg', alt: 'A hand holding a blister pack of birth control pills against a pink background' },
    { src: '/images/services/birth-control-2.jpg', alt: 'A doctor handing a blister pack of birth control pills to a patient during a consultation' },
    { src: '/images/services/birth-control-3.jpg', alt: 'Birth control pills, condoms and an intrauterine device arranged on a purple surface' },
  ],
};
