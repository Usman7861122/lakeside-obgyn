// SONATA CONTENT — HARD RULE
// Source: docs/source-of-truth/Website-Toolkit-Sonata_051226.pdf (Hologic, B-03477-001 Rev. 001).
// The toolkit says content must not deviate from what is provided.
// Copy wording, numbers and footnotes EXACTLY. Do not paraphrase medical claims.
// Footnote numbers are written inline as ^1, ^2, ^3, ^4 and are drawn as superscript links to the Sources list.
// Only change from the toolkit: "Suberserosal" is written "Subserosal" (typo in the toolkit, see docs/CONFLICTS.md).
export const sonata = {
  about:
    'The Sonata® procedure is an incisionless treatment option for women with symptomatic uterine fibroids. This less-invasive approach uses fibroid ablation to treat fibroids from inside the uterus, without abdominal cuts and without removing the uterus, so recovery time is typically minimal.',
  about2:
    'The Sonata procedure uses radiofrequency energy (heat) to ablate fibroids, causing proteins in the fibroids to break down. Treated fibroids will soften, changing in consistency from that of a baseball to a marshmallow and shrink in the following weeks and months, reducing fibroid symptoms.',

  // Icon files come from the toolkit (page 4)
  symptoms: [
    'Heavy menstrual bleeding',
    'Abdominal bloating and cramping',
    'Pelvic, back, and leg pain',
    'Pain during sex',
    'Frequent urination',
    'Fatigue',
  ],
  symptomIcons: [
    '/images/sonata/symptom-bleeding.png',
    '/images/sonata/symptom-cramping.png',
    '/images/sonata/symptom-pain.png',
    '/images/sonata/symptom-sex.png',
    '/images/sonata/symptom-urination.png',
    '/images/sonata/symptom-fatigue.png',
  ],

  treatable: {
    intro:
      'Fibroids are noncancerous tumors that grow in or around the uterus and are classified by their location. The Sonata procedure treats fibroids from inside the uterus, including intramural, submucosal and some subserosal fibroids.',
    types: [
      { letter: 'A', name: 'Subserosal fibroid', text: 'Fibroids located on the outer uterus wall' },
      { letter: 'B', name: 'Submucosal fibroid', text: 'Fibroids located inside the uterine cavity' },
      { letter: 'C', name: 'Intramural fibroid', text: 'Fibroids located within the uterus walls' },
    ],
    outro: 'Your physician will help determine which treatment is best depending on the size, location and symptoms of the fibroid.',
    image: '/images/sonata/fibroid-types.png',
    imageAlt:
      'Diagram of the uterus with three fibroids marked A on the outer wall, B inside the uterine cavity and C within the uterus wall',
  },

  expect: {
    intro:
      'Before starting the procedure, your doctor will issue a pregnancy test to ensure you’re not pregnant. The procedure is performed under general anesthesia for patient comfort.',
    steps: [
      {
        title: 'Insertion',
        text: 'The cervix is dilated and a slim ultrasound probe is gently inserted into the uterus to locate fibroids.',
        image: '/images/sonata/step-insertion.png',
        alt: 'Diagram of the ultrasound probe entering the uterus through the cervix',
      },
      {
        title: 'Placement',
        text: 'Once the fibroid is located, the tip of the device is inserted into the center of the fibroid.',
        image: '/images/sonata/step-placement.png',
        alt: 'Diagram of the device tip placed in the center of a fibroid',
      },
      {
        title: 'Ablation',
        text: 'Targeted heat is then used to ablate and treat the fibroid. This process may be repeated until each intrauterine fibroid is treated.',
        image: '/images/sonata/step-ablation.png',
        alt: 'Diagram of heat treating a fibroid inside the uterus',
      },
      {
        title: 'End of Procedure',
        text: 'The device is removed from the uterus, and over time, the treated fibroid tissue shrinks, softens and is naturally absorbed by the body.*',
        image: '/images/sonata/step-end.png',
        alt: 'Diagram of the uterus after the device is removed, with a clock showing healing over time',
      },
    ],
    note: '*Most patients reported significant relief within three months during the 12-month Sonata Clinical Trial',
  },

  // Procedure overview, as written in the toolkit (footnote numbers kept)
  overview: [
    { label: 'Benefits', value: 'No incisions or stitches, non-hormonal, and uterus-sparing' },
    { label: 'Duration', value: 'The procedure typically takes less than an hour, depending on the number and size of fibroids^1' },
    { label: 'Recovery', value: 'Most women return to normal activities within 1-2 days^2' },
    { label: 'Results', value: '90% of patients reported a reduction in menstrual bleeding at 3 months^3 and 95% at 12 months^2' },
    {
      label: 'Satisfaction rate',
      value: '97% of patients were satisfied with the Sonata procedure,^2 and 97% said they would recommend it to a friend^2',
    },
  ],

  safetyLine:
    'Ask your doctor if Sonata may be right for you. Side effects may include bleeding, spotting, cramping and/or discharge. For Safety Information or to learn more, visit',
  safetyUrl: 'https://gynsurgicalsolutions.com/important-safety-information/',
  learnMoreUrl: 'https://gynsurgicalsolutions.com/treatment-options/sonata-transcervical-fibroid-ablation/',

  // Frequently asked questions. Block types: p (paragraph), ul (bullets), cmp (bold label + text).
  faq: [
    {
      q: 'What can I expect after the Sonata procedure?',
      a: [
        {
          p: 'In terms of when you will see symptom relief, it depends on how big the fibroid is and what symptoms you were experiencing. Each fibroid is different, and each symptom is different, so the timeline truly varies from woman to woman.',
        },
        {
          ul: [
            'In clinical studies, 50% of patients were able to return to normal activities the next day.^2',
            'You may experience cramping and mild pain, bleeding, discharge or spotting and in some cases post-ablation inflammation.',
            'Most women see improvement in heavy menstrual bleeding within 3 months and continual improvement through 12 months.^2',
            'Any discomfort is generally managed with over-the-counter medications.',
          ],
        },
      ],
    },
    {
      q: 'How will I feel after the Sonata procedure?',
      a: [{ p: 'Any discomfort is generally managed with over-the-counter medications.' }],
    },
    {
      q: 'How long does the Sonata procedure take?',
      a: [{ p: 'The procedure typically takes less than an hour, depending on the size and number of fibroids.^4' }],
    },
    {
      q: 'What types of fibroids can the Sonata procedure treat?',
      a: [
        {
          p: 'The Sonata procedure can be used to treat almost all symptomatic uterine fibroid types, including subserosal, intramural, transmural, and certain submucosal. Sonata can be used to treat multiple fibroids in one procedure.',
        },
        { p: 'Your doctor will consider your fibroid type(s), size(s), location(s), and number to determine whether you may be a good candidate.' },
      ],
    },
    {
      q: 'Are patients satisfied with the Sonata procedure?',
      a: [
        {
          p: 'Yes, Sonata is clinically proven to shrink fibroids and reduce menstrual bleeding without hormones. Women surveyed 12 months after their Sonata treatment reported the following results:^2',
        },
        {
          ul: [
            '97% of patients were satisfied with the procedure',
            '97% said they would recommend the procedure to a friend',
            '95% of patients reported a reduction in menstrual bleeding',
          ],
        },
      ],
    },
    {
      q: 'Is the Sonata procedure covered by insurance?',
      a: [
        {
          p: 'Many insurance companies and Medicaid carriers cover the procedure. We suggest scheduling an appointment with a Sonata-trained physician to discuss whether the procedure is appropriate for you. If the Sonata procedure is a match for your fibroids, then your physician’s office will request insurance approval in advance by submitting a pre-authorization request.',
        },
      ],
    },
    {
      q: 'How does the Sonata procedure compare to other common fibroid treatment options?',
      a: [
        {
          p: 'Common treatment options include hysterectomy, laparoscopic myomectomy, and uterine artery embolization (UAE). Of these options, transcervical radiofrequency ablation, Sonata, is the only one that allows the patient to go home the day of the procedure. See how the Sonata procedure compares to:',
        },
        {
          cmp: [
            {
              b: 'Hysterectomy',
              t: 'The Sonata procedure allows you to keep your uterus and has a quicker recovery time than a hysterectomy. However, hysterectomy is a definitive treatment, so after recovery, there is no chance fibroid symptoms will return.',
            },
            {
              b: 'Laparoscopic myomectomy',
              t: 'Both are laparoscopic surgeries. While laparoscopic myomectomy surgically removes fibroid tissues from the uterus, the Sonata procedure applies heat directly into the fibroid, causing it to shrink over time.',
            },
            {
              b: 'UAE',
              t: 'UAE is an outpatient procedure that restricts blood flow to fibroids which causes the fibroids to shrink.',
            },
          ],
        },
      ],
    },
  ] as { q: string; a: ({ p: string } | { ul: string[] } | { cmp: { b: string; t: string }[] })[] }[],

  // Numbers match the footnote numbers 1 to 4 in the toolkit (source 4 repeats source 1 there).
  sources: [
    'Bradley LD, Pasic RP, Miller LE. Clinical Performance of Radiofrequency Ablation for Treatment of Uterine Fibroids: Systematic Review and Meta-Analysis of Prospective Studies. J Laparoendosc Adv Surg Tech A. 2019;29:1507-1517.',
    'Chudnoff S, Guido R, Roy K, Levine D, Mihalov L, Garza-Leal JG. Ultrasound- Guided Transcervical Ablation of Uterine Leiomyomas: The SONATA Trial. Obstet Gynecol. 2019 Jan; 133(1): 13-22.',
    'Brölmann H, Bongers M, Garza-Leal JG, et al. The FAST-EU trial: 12-month clinical outcomes of women after intrauterine sonography-guided transcervical radiofrequency ablation of uterine fibroids. Gynecol Surg. 2016;13:27-35.',
    'Bradley LD, Pasic RP, Miller LE. Clinical Performance of Radiofrequency Ablation for Treatment of Uterine Fibroids: Systematic Review and Meta-Analysis of Prospective Studies. J Laparoendosc Adv Surg Tech A. 2019;29:1507-1517.',
  ],
};
