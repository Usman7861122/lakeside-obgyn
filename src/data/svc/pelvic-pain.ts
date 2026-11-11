import type { GenericService } from './types';

export const service: GenericService = {
  slug: 'pelvic-pain',
  title: 'Pelvic Pain Specialists',
  menuLabel: 'Pelvic Pain',
  metaDescription:
    'Pelvic pain specialists in the Inner Richmond, San Francisco. Pelvic pain exams, testing and treatment at Lakeside Obstetrics, Gynecology & Fertility. Schedule online or call.',
  intro: [
    'Ongoing pelvic pain has many potential causes including infection, abnormal growths (like fibroids), endometriosis, or even bladder problems. If you suffer from pelvic pain, click on the online scheduler to schedule your pelvic pain exam or call the office nearest you to schedule by phone.',
  ],
  blocks: [
    {
      q: 'Why am I having pelvic pain?',
      parts: [
        { p: 'Pelvic pain may be a sign of issues with your urinary tract, reproductive organs, bowels, or even musculoskeletal system. You might even have multiple issues occurring at the same time. In any case, some of the most common causes of pelvic pain include:' },
        { ul: ['Severe menstrual cramps (dysmenorrhea)', 'Irritable bowel syndrome (IBS)', 'Pelvic inflammatory disease', 'Urinary tract infection (UTI)', 'Ovulation (mittelschmerz)', 'Interstitial cystitis', 'Crohn’s disease', 'Kidney stones', 'Endometriosis', 'Ovarian cysts', 'Fibromyalgia', 'Fibroids'] },
        { p: 'These pelvic pain issues, and any others, are treatable with the help of your OB/GYN. To get to the root of why you have pelvic pain and determine which treatment you may need, it’s important to have a comprehensive exam and undergo any recommended screenings.' },
      ],
    },
    {
      q: 'Do I need to see an OB/GYN for pelvic pain?',
      parts: [
        { p: 'Yes! Pelvic pain isn’t something you should ignore or try to manage on your own. The dedicated OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility encourage you to book an exam if you experience any of the following pelvic pain-related problems:' },
        { ul: ['Discomfort during sexual intercourse', 'Diarrhea or constipation', 'Nausea or vomiting', 'Abnormal discharge', 'Irregular bleeding', 'Fever'] },
        { p: 'Lakeside Obstetrics, Gynecology & Fertility OB/GYNs provide expanded diagnostic testing to pinpoint the cause of pelvic pain. Your OB/GYN may recommend a pelvic exam, in-office gynecological ultrasound, blood work, urinalysis, or other screening to confirm your diagnosis and rule out similar conditions.' },
      ],
    },
    {
      q: 'How does an OB/GYN treat pelvic pain?',
      parts: [
        { p: 'Treating pelvic pain depends on your diagnosis, and you may need a combination of therapies to experience relief and effectively treat the underlying condition. Your OB/GYN at Lakeside Obstetrics, Gynecology & Fertility might recommend:' },
        { ul: ['Hormonal birth control', 'Antibiotic medications', 'Dietary changes', 'Pain relievers', 'Pelvic floor physical therapy'] },
        { p: 'If, however, you have abnormal growths or lesions, as with endometriosis, gynecological surgery may be beneficial. Your OB/GYN uses minimally invasive tools and techniques to treat the cause of your pelvic pain, so you experience effective, lasting relief.' },
      ],
    },
  ],
  closing:
    'Before suffering from pelvic pain another day, see how the OB/GYNs at Lakeside Obstetrics, Gynecology & Fertility can help. Schedule an appointment online or call the office to schedule.',
  photos: [
    { src: '/images/services/pelvic-pain-1.jpg', alt: 'A doctor explaining a uterus anatomical model to a patient' },
    { src: '/images/services/pelvic-pain-2.jpg', alt: 'A doctor holding a magnifying glass over a uterus and ovaries model' },
    { src: '/images/services/pelvic-pain-3.jpg', alt: 'A gynecologist showing a model of the female pelvis to a patient' },
  ],
};
