import type { GenericService } from './types';

// Typos fixed from the old text (logged in docs/OPEN-QUESTIONS.md): "Gynecologist & Fertility" -> "Gynecology & Fertility",
// "Why causes" -> "What causes", "deeper biopsy that the LEEP" -> "than the LEEP".
export const service: GenericService = {
  slug: 'abnormal-pap-smear',
  title: 'Abnormal Pap Smear Specialists',
  menuLabel: 'Abnormal Pap Smear',
  metaDescription:
    'Abnormal Pap smear specialists in the Inner Richmond, San Francisco. Evaluation and treatment with board-certified OB/GYNs Monica Hannon, MD and Ziyad Hannon, MD. Call to schedule.',
  intro: [
    'Finding out that your Pap smear is abnormal can be alarming and overwhelming. With the help of board-certified OB/GYNs Monica Hannon, MD and Ziyad Hannon, MD, you can receive the evaluation and treatment that you need at Lakeside Obstetrics, Gynecology & Fertility in San Francisco. Call the office to schedule your evaluation.',
  ],
  blocks: [
    {
      q: 'What is a Pap smear?',
      parts: [
        { p: 'A Pap smear is a cervical cancer screening test that helps check for abnormal or precancerous cells, as well as cancer. It is a simple, in-office screening that involves gathering a small sample of cells from your cervix, which is the lowest part of your uterus.' },
        { p: 'A Pap smear often also includes a human papillomavirus (HPV) test.' },
      ],
    },
    {
      q: 'What causes an abnormal Pap test result?',
      parts: [
        { p: 'Having an abnormal Pap smear is common. HPV is a viral infection that is the main cause of abnormal pap tests and cervical cancer. Any cells that are infected with HPV look abnormal under a microscope.' },
        { p: 'Your Pap test may also be abnormal due to other causes:' },
        { ul: ['Other sexually transmitted diseases (STDs), including trichomonas and herpes', 'Inflammation', 'Recent vaginal intercourse', 'Postmenopausal changes'] },
      ],
    },
    {
      q: 'What testing is needed after an abnormal Pap test?',
      parts: [
        { p: 'It is important to remember that an abnormal Pap test is just a screening test, not a diagnosis. Your dedicated OB/GYN physicians at Lakeside Obstetrics, Gynecology & Fertility are likely going to perform additional tests such as colposcopy to find out why your Pap smear was abnormal and whether or not you need any further care.' },
        { p: 'During a colposcopy, your OB/GYN uses a specialized scope (colposcope) to inspect your cervical cells. They apply a solution to your cervix, which helps abnormal cells stand out. If needed, your OB/GYN can take a biopsy if they see abnormal tissue.' },
      ],
    },
    {
      q: 'How are abnormal cervical cells treated?',
      parts: [
        { p: 'If your OB/GYN determines there are abnormal cervical cells that require treatment, your OB/GYN will discuss several options.' },
        { h: 'LEEP' },
        { p: 'The loop electrosurgical excision procedure (LEEP) involves the removal of abnormal areas of the cervix with a thin wire that carries an electric current. This procedure is usually performed in the office under local anesthesia.' },
        { h: 'Cold Knife Conization' },
        { p: 'The conization procedure involves the removal of a cone-shaped wedge of the cervix containing abnormal cells. This procedure is commonly performed under general anesthesia in the operating room as it is a deeper biopsy than the LEEP.' },
        { h: 'Cryotherapy' },
        { p: 'Your OB/GYN may recommend destroying abnormal or precancerous cervical cells through a cryotherapy treatment. This in-office procedure involves applying liquid nitrogen to your cervix, which instantly freezes and destroys abnormal cells.' },
        { p: 'To prevent abnormal Pap smears and to lower your risk of cervical cancer, your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility may also recommend getting an HPV vaccination called GARDASIL®.' },
      ],
    },
  ],
  closing:
    'Lakeside Obstetrics, Gynecology & Fertility provides comprehensive care if you had an abnormal Pap smear. Find out more information by calling the office to schedule an exam.',
  photos: [
    { src: '/images/services/abnormal-pap-smear-1.jpg', alt: 'A gloved hand preparing a cell sample for examination under a microscope' },
    { src: '/images/services/abnormal-pap-smear-2.jpg', alt: 'A gynecologist holding an anatomical uterus model and a speculum' },
    { src: '/images/services/abnormal-pap-smear-3.jpg', alt: 'A smiling gynecologist in a white coat in an exam room' },
  ],
};
