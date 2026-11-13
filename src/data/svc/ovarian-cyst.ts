import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'ovarian-cyst',
  title: 'Ovarian Cyst Specialists',
  menuLabel: 'Ovarian Cyst',
  metaDescription:
    'Ovarian cyst specialists in the Inner Richmond, San Francisco. Evaluation and personalized treatment plans with Monica Hannon, MD and Ziyad Hannon, MD. Call to schedule.',
  intro: [
    'Ovarian cysts are common, but they can cause significant pain and serious complications if they grow too large. If you struggle with ovarian cysts, contact board-certified OBGYNs Monica Hannon, MD or Ziyad Hannon, MD to be evaluated at their San Francisco office. The dedicated OB/GYNs can help you manage and prevent ovarian cysts by providing personalized treatment plans. Call the office to schedule your ovarian cyst evaluation.',
  ],
  blocks: [
    {
      q: 'What causes ovarian cysts?',
      parts: [
        { p: 'Ovarian cysts are sacs or pockets, filled with fluid, that develop on the surface of your ovary.' },
        { p: 'The most common types of cysts are functional cysts known as follicular or corpus luteum cysts. Follicular cysts form at the midpoint of your cycle when the follicle doesn’t release the egg or rupture. Instead, the follicle continues to grow.' },
        { p: 'Corpus luteum cysts form when your follicle releases the egg, but fluid builds up inside of it. No matter the cause of your cyst, your risk increases due to:' },
        // TODO(client): the old site's sentence above ends with a colon and has no list after it. Ask the client for the missing list.
        { todo: 'The old site has a sentence ending with "your risk increases due to:" and no list after it. Ask the client for the missing list. Do not invent it.' },
        { p: 'There are other types of ovarian cysts that can develop such as dermoid cysts (teratomas), mucinous cystadenomas, or serous cystadenomas that are diagnosed on ultrasound.' },
        { p: 'If you have suffered from ovarian cysts in the past, you are more likely to develop them again in the future.' },
      ],
    },
    {
      q: 'How does an OB/GYN diagnose an ovarian cyst?',
      parts: [
        { p: 'To confirm that you have an ovarian cyst and to rule out related conditions that cause pelvic pain — like fibroids — your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility will conduct a comprehensive evaluation which typically includes a pelvic exam and an on-site gynecological ultrasound. Your OB/GYN also needs to know about any other symptoms you are experiencing including:' },
        { ul: ['Fever', 'Bloating', 'Lower back pain', 'Abnormal vaginal bleeding', 'Pain during sexual intercourse', 'Fullness in your lower abdomen'] },
        { p: 'In some cases, cysts can enlarge and cause the ovary to twist on itself (ovarian torsion). This can cut off the blood supply to your ovary which is a surgical emergency. Because of this, it’s important to have an evaluation at Lakeside Obstetrics, Gynecology & Fertility at the first sign of symptoms, especially if you have a history of ovarian cysts.' },
      ],
    },
    {
      q: 'What is the treatment for an ovarian cyst?',
      parts: [
        { p: 'The physicians at Lakeside Obstetrics, Gynecology & Fertility have extensive experience in diagnosing and treating ovarian cysts. For a minor cyst, your doctor may recommend monitoring it and coming in for regular ultrasounds to see if it resolves after several months. You may also need combined hormonal contraceptives to lower your risk of ovarian cysts.' },
        { p: 'For larger cysts or cysts that continue to grow, your dedicated OB/GYN may recommend surgical removal. Minimally invasive laparoscopic surgery allows your OB/GYN to remove the cyst (ovarian cystectomy) through 5-10mm incisions while leaving your ovary intact.' },
        { p: 'If you have a large ovary or suspicious cystic mass, your OB/GYN can remove the affected ovary entirely, but leave the healthy ovary intact (oophorectomy).' },
      ],
    },
  ],
  closing:
    'If you’re experiencing pelvic pain or have a history of ovarian cysts, contact Lakeside Obstetrics, Gynecology & Fertility for further evaluation. Call the office to schedule a visit.',
  photos: [
    { src: '/images/services/ovarian-cyst-1.jpg', alt: 'A doctor holding an ultrasound probe next to a uterus and ovaries model' },
    { src: '/images/services/ovarian-cyst-2.jpg', alt: 'A paper cut-out of a uterus and ovaries with the word CYST in letter tiles' },
    { src: '/images/services/ovarian-cyst-3.jpg', alt: 'A woman in a gown resting her hands on her lower abdomen beside a nurse' },
  ],
};
