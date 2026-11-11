// SONATA CONTENT — HARD RULE
// Source: docs/source-of-truth/Website-Toolkit-Sonata_051226.pdf (Hologic, B-03477-001 Rev. 001).
// The toolkit says content must not deviate from what is provided.
// Copy wording, numbers and footnotes EXACTLY. Do not paraphrase medical claims.
export const sonata = {
  about:
    'The Sonata® procedure is an incisionless treatment option for women with symptomatic uterine fibroids. This less-invasive approach uses fibroid ablation to treat fibroids from inside the uterus, without abdominal cuts and without removing the uterus, so recovery time is typically minimal.',
  symptoms: [
    'Heavy menstrual bleeding',
    'Abdominal bloating and cramping',
    'Pelvic, back, and leg pain',
    'Pain during sex',
    'Frequent urination',
    'Fatigue',
  ],
  // Procedure overview, as written in the toolkit (footnote numbers kept)
  overview: [
    { label: 'Benefits', value: 'No incisions or stitches, non-hormonal, and uterus-sparing' },
    { label: 'Duration', value: 'The procedure typically takes less than an hour, depending on the number and size of fibroids', fn: 1 },
    { label: 'Recovery', value: 'Most women return to normal activities within 1-2 days', fn: 2 },
  ],
  safetyLine:
    'Ask your doctor if Sonata may be right for you. Side effects may include bleeding, spotting, cramping and/or discharge. For Safety Information or to learn more, visit',
  safetyUrl: 'https://gynsurgicalsolutions.com/important-safety-information/',
  learnMoreUrl: 'https://gynsurgicalsolutions.com/treatment-options/sonata-transcervical-fibroid-ablation/',
  sources: [
    'Bradley LD, Pasic RP, Miller LE. Clinical Performance of Radiofrequency Ablation for Treatment of Uterine Fibroids: Systematic Review and Meta-Analysis of Prospective Studies. J Laparoendosc Adv Surg Tech A. 2019;29:1507-1517.',
    'Chudnoff S, Guido R, Roy K, Levine D, Mihalov L, Garza-Leal JG. Ultrasound- Guided Transcervical Ablation of Uterine Leiomyomas: The SONATA Trial. Obstet Gynecol. 2019 Jan; 133(1): 13-22.',
  ],
  // TODO (full Sonata page): steps, fibroid types, FAQ, 90%/95%/97% statistics — copy exactly from the PDF.
  steps: [] as { title: string; text: string }[],
  faq: [] as { q: string; a: string }[],
};
