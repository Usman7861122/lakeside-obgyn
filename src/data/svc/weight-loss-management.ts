import type { GenericService } from './types';

// The old page links "Nourish" with a paid-ad tracking address. We link the plain https://www.nourish.com instead.
// Logged in docs/OPEN-QUESTIONS.md. Medical text is copied exactly (including "dietician" and "dietitian" as written).
export const service: GenericService = {
  slug: 'weight-loss-management',
  title: 'Weight Loss & Management',
  menuLabel: 'Weight Loss & Management',
  qaLabel: 'Weight loss and management',
  metaDescription:
    'Weight loss and management in the Inner Richmond, San Francisco. Nutrition counseling with dietitian partners and medically supervised pharmacotherapy at Lakeside Obstetrics, Gynecology & Fertility.',
  intro: [
    'At Lakeside Obstetrics, Gynecology and Fertility, we recognize that nutrition and healthy weight play an important role in women’s overall well-being, reproductive health, and long term disease prevention.',
    'Our providers integrate weight and metabolic health into your gynecologic care through a high level medical evaluation. We review your health history, medications, lifestyle patterns, and prior weight management efforts. We then identify medical, hormonal, or metabolic factors that may be contributing to weight changes. We also provide practical guidance to help you set realistic goals that fit your life.',
  ],
  blocks: [
    {
      q: 'Collaborative Nutrition Counseling',
      parts: [
        { p: 'Meaningful change often requires ongoing nutrition support. When more detailed counseling is appropriate, we partner with independent registered dietitian groups such as Nourish. Qualified dietitians provide in-depth nutrition counseling and individualized planning tailored to your dietary preferences, cultural needs, and health goals.' },
        { p: 'During your weight management visits in our office, we may:' },
        { ul: ['Review eating patterns and key barriers', 'Discuss foundational nutrition strategies', 'Set initial goals and next steps', 'Identify when a referral for more comprehensive nutrition counseling would be helpful'] },
        { p: 'With our dietician partners, you can expect:' },
        { ul: ['Detailed dietary assessment and meal planning', 'Support for challenges such as emotional eating or cravings', 'Practical strategies for real world settings', 'Ongoing accountability and follow up'] },
        { p: 'We remain involved in your overall care and coordinate with the dietitian team as needed.' },
        { plink: { before: 'Learn more about our registered dietitian partner, ', text: 'Nourish', href: 'https://www.nourish.com', after: ', here.' } },
      ],
    },
    {
      q: 'Medically Supervised Pharmacotherapy',
      parts: [
        { p: 'For some patients, nutrition and lifestyle changes alone may not be enough to achieve meaningful metabolic improvement. In select cases, we offer medically supervised pharmacotherapy as part of a comprehensive weight management plan.' },
        { p: 'This may include GLP-1 agonist medications such as semaglutide and tirzepatide. These medications can help reduce appetite, improve fullness, and support blood sugar regulation. They work best when paired with nutrition and lifestyle changes, and we often coordinate care with our dietitian partner during treatment.' },
        { p: 'We follow evidence based clinical guidelines when considering medical therapy. You may qualify if you have:' },
        { ul: ['BMI 30 or greater', 'BMI 27 or greater with a weight related condition such as hypertension, Type 2 diabetes, prediabetes, high cholesterol, or sleep apnea'] },
        { p: 'If you meet criteria, we will evaluate:' },
        { ul: ['Your medical history and overall health', 'Medication safety, contraindications, and interactions', 'Benefits and risks', 'Your goals and readiness for treatment'] },
      ],
    },
  ],
  closing:
    'Our goal is to provide safe, personalized care with realistic expectations and sustainable outcomes. Medication is not a standalone solution. Success on your weight loss journey requires a coordinated, comprehensive plan designed around your needs. Whether you want to improve overall nutrition, lose weight, enhance fertility, manage menopausal changes, or prevent chronic disease, we are here to support you with compassionate, individualized care.',
  photos: [
    { src: '/images/services/weight-loss-management-1.jpg', alt: 'A smiling doctor holding a red apple at her desk with fresh fruit' },
    { src: '/images/services/weight-loss-management-2.jpg', alt: 'A smiling doctor holding a tape measure and fresh vegetables' },
    { src: '/images/services/weight-loss-management-3.jpg', alt: 'A smiling doctor working on a laptop beside a bowl of fruit' },
  ],
};
