import type { GenericService } from './types';

// Medical text: copied exactly, including drug names and spellings as written on the old site (for example "drosperinone").
// The old page says both Dr. Monica Hannon and Jeanette Blanks are certified menopause specialists through the Menopause Society.
export const service: GenericService = {
  slug: 'perimenopausemenopause-management',
  title: 'Perimenopause/Menopause Management',
  menuLabel: 'Perimenopause/Menopause Management',
  introHeading: 'Perimenopause and Menopause Care',
  qaLabel: 'Perimenopause and menopause care',
  metaDescription:
    'Perimenopause and menopause management in the Inner Richmond, San Francisco. Hormone and nonhormonal treatment led by Dr. Monica Hannon, Dr. Ziyad Hannon and Jeanette Blanks, MSN, FNP-C. Call 415-741-1000.',
  intro: [
    'Experiencing perimenopause or menopause can bring a range of challenging physical and emotional changes, most commonly affecting patients in their 40s and 50s. However, sometimes these symptoms begin earlier.',
  ],
  blocks: [
    {
      q: 'Your care team',
      parts: [
        { p: 'Perimenopausal and menopausal symptoms can be significantly disruptive to daily life, overall well-being, and sense of self. At Lakeside Obstetrics, Gynecology and Fertility, we emphasize an individualized approach to care, recognizing that every patient’s experience is unique and deserves personalized treatment.' },
        { p: 'Your care is led by Dr. Monica Hannon, Dr. Ziyad Hannon, and our nurse practitioner Jeanette Blanks. Both Dr. Monica Hannon and Jeanette Blanks, MSN, FNP-C are certified menopause specialists through the Menopause Society.' },
      ],
    },
    {
      q: 'Perimenopause and Menopause Management',
      parts: [
        { p: 'Perimenopause and menopause management focuses on relieving symptoms and supporting your long-term health during this life transition. You may benefit from evaluation and treatment if you experience any of the most common symptoms including:' },
        { ul: ['Hot flashes or night sweats', 'Sleep disturbances', 'Mood swings, anxiety, or irritability', 'Difficulty concentrating or brain fog', 'Unexplained weight gain, particularly around the abdomen', 'New onset joint pains or muscle aches', 'Vaginal dryness or discomfort with sexual intercourse', 'Decreased libido', 'Urinary frequency, urgency, or incontinence', 'Recurrent vaginal infections or urinary tract infections', 'More frequent headaches'] },
        { p: 'Both hormonal and nonhormonal treatment options are available and tailored to your individual needs and goals.' },
      ],
    },
    {
      q: 'Treatment Options for Perimenopause and Menopause',
      parts: [
        { p: 'Your provider will review your symptoms, medical history, and lifestyle to develop a personalized treatment plan. Lab testing may be used selectively when clinically appropriate.' },
        { h: 'Hormone Therapy' },
        { p: 'Modern menopause hormone therapy is safe and highly effective for many patients, especially when started before age 60 or within 10 years of menopause onset. Current evidence shows that hormone therapy can provide significant benefits, including:' },
        { ul: ['Relief of hot flashes and night sweats', 'Improved sleep quality and mood', 'Reduction in vaginal dryness and pain during sexual intercourse', 'Preservation of bone density and reduced fracture risk', 'Reduced risk of type 2 diabetes in appropriate patients', 'Reduced risk of colon cancer', 'Potential cardiovascular benefits when started early in eligible patients'] },
        { p: 'Your customized treatment plan may include:' },
        { ul: ['Systemic estrogen therapy in the form of transdermal patches, oral tablets, topical gels/pumps/sprays, or vaginal ring (Femring)', 'Oral progesterone including bioidentical micronized progesterone, medroxyprogesterone, norethindrone acetate, and drosperinone (Slynd)', 'Conjugated estradiol/bazedoxifene (Duavee)', 'Vaginal estrogen therapy using cream, tablets, or a ring for localized symptoms'] },
        { p: 'You can expect to have regular follow up appointments to titrate or adjust your hormone therapy. Treatment is typically prescribed at the lowest effective dose that manages symptoms and regularly reassessed to ensure safety and effectiveness.' },
        { h: 'Nonhormonal Treatment Options' },
        { p: 'For patients who prefer or require nonhormonal care, effective options include:' },
        { ul: ['Selective serotonin reuptake inhibitors and serotonin norepinephrine reuptake inhibitors (SSRIs/SNRIs) for vasomotor symptoms and mood', 'Gabapentin for night sweats', 'Fezolinetant (Veozah) or elinzanetant (Lynkuet) for hot flashes and sleep disturbances', 'Nutritional counseling and weight management', 'Calcium and vitamin D supplementation', 'Regular physical activity', 'Pelvic floor therapy and Kegel exercises'] },
      ],
    },
    {
      q: 'Vaginal and Sexual Health',
      parts: [
        { p: 'Sexual health is an integral part of a woman’s overall health and well-being and should not be overlooked during menopause. Hormonal changes can significantly impact comfort, intimacy, and quality of life.' },
        { p: 'We provide comprehensive and individualized treatment for genitourinary syndrome of menopause including:' },
        { ul: ['Vaginal estrogen therapy using cream, tablets, or a ring', 'Selective estrogen receptor modulator (SERM) such as ospemifene (Osphena)', 'Over the counter silicone lubricants and long-acting vaginal moisturizers', 'Referral for pelvic floor physical therapy'] },
      ],
    },
    {
      q: 'Treatment for Decreased Libido/Hypoactive Sexual Desire Disorder',
      parts: [
        { p: 'Decreased sexual desire or libido is relatively common during perimenopause and menopause and can meaningfully affect quality of life and relationships. Arousal and orgasm may also be affected by these hormonal changes in perimenopause and menopause. Effective, individualized treatment options are available.' },
        { p: 'After a thorough evaluation, treatment may include:' },
        { ul: ['Testosterone therapy that is carefully dosed and monitored for women', 'Flibanserin (Addyi), an oral medication that supports sexual desire', 'Bremelanotide (Vyleesi), an on demand injectable therapy used prior to sexual activity'] },
        { p: 'All treatments are tailored to your symptoms, medical history, and personal goals.' },
      ],
    },
  ],
  closing:
    'At Lakeside Obstetrics, Gynecology and Fertility, we are committed to helping you navigate menopause with confidence, comfort, and expert care through a personalized approach that prioritizes your overall health and well-being. Regular follow up ensures that your treatment remains safe and effective as your needs evolve. Please call our office 415-741-1000 to schedule your consultation to get started.',
  photos: [
    { src: '/images/services/perimenopausemenopause-management-1.jpg', alt: 'A smiling doctor and an older patient standing together in a bright clinic room' },
    { src: '/images/services/perimenopausemenopause-management-2.jpg', alt: 'A doctor taking notes while a smiling patient talks with her' },
    { src: '/images/services/perimenopausemenopause-management-3.jpg', alt: 'A smiling patient in a clinic room during a consultation' },
  ],
};
