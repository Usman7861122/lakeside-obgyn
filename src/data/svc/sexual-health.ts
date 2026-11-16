import type { GenericService } from './types';

// Text from Dr. Hannon's attachment "Sexual Health and sexual pain disorders page.docx" (email of Mon Nov 16, 2026).
// Medical wording is copied exactly. Only layout changed (conditions and treatments are list items: "Name: description").
// Saved as a client document in docs/source-of-truth/Sexual-health-page-text-2026-11-16.md.
export const service: GenericService = {
  slug: 'sexual-health',
  title: 'Sexual Health & Sexual Pain Disorder Services',
  menuLabel: 'Sexual Health & Sexual Pain',
  metaDescription:
    'Sexual health and sexual pain disorder services in the Inner Richmond, San Francisco, at Lakeside Obstetrics, Gynecology & Fertility. Call to book.',
  intro: [
    'Sexual health is an important part of a woman’s overall well-being. Pain with intimacy, low desire, difficulty with arousal, or discomfort during exams are common concerns — and they are treatable.',
    'At our practice, we provide compassionate, confidential care for women experiencing sexual health concerns, including sexual pain disorders. You do not have to live with discomfort or feel dismissed. We are here to listen and to help.',
  ],
  blocks: [
    {
      q: 'Understanding Sexual Pain',
      parts: [
        { p: 'Sexual pain can have many causes — physical, hormonal, neurologic, emotional, or a combination. Common symptoms include:' },
        { ul: ['Pain with vaginal penetration', 'Burning or tearing sensation', 'Deep pelvic pain during intercourse', 'Difficulty inserting tampons', 'Anxiety related to intimacy', 'Pain during gynecologic exams'] },
        { p: 'These symptoms are real and medically recognized. Treatment begins with identifying the underlying cause. We evaluate and manage a wide range of sexual health concerns, including:' },
        {
          ul: [
            'Dyspareunia (Painful Intercourse): Pain during or after intercourse, often related to hormonal changes, pelvic floor dysfunction, or underlying medical conditions.',
            'Vaginismus / Genito-Pelvic Pain–Penetration Disorder: Involuntary tightening of pelvic floor muscles that makes penetration painful or impossible.',
            'Vulvodynia: Chronic vulvar pain without an obvious visible cause, often described as burning or rawness.',
            'Hormone-Related Sexual Pain: Low estrogen states (postpartum, breastfeeding, menopause, certain medications) can lead to vaginal dryness and tissue thinning.',
            'Pelvic Floor Dysfunction: Muscle tension or weakness contributing to pain, urinary symptoms, or sexual discomfort.',
            'Low Desire or Arousal Concerns: Hormonal, psychological, medication-related, or relational factors can all play a role.',
          ],
        },
      ],
    },
    {
      q: 'Our Comprehensive Evaluation',
      parts: [
        { p: 'Your evaluation may include:' },
        { ul: ['Detailed medical and sexual history', 'Review of medications and hormonal status', 'Gentle, trauma-informed physical exam', 'Pelvic floor assessment', 'Screening for infections, dermatologic conditions, or hormonal imbalances'] },
        { p: 'We move at your pace and prioritize your comfort throughout the visit.' },
      ],
    },
    {
      q: 'Treatment Options',
      parts: [
        { p: 'Treatment is individualized and may include:' },
        {
          ul: [
            'Education & Counseling: Understanding anatomy, pain pathways, and contributing factors can be empowering and therapeutic.',
            'Pelvic Floor Physical Therapy: Referral to specialized therapists trained in treating pelvic pain and muscle dysfunction.',
            'Topical or Hormonal Therapy: Vaginal estrogen, DHEA, or other therapies when indicated for tissue health.',
            'Medications: Targeted treatments for nerve pain, inflammation, or hormonal support when appropriate.',
            'Lubrication & Moisturizers: Medical-grade options tailored to your needs.',
            'Behavioral & Mind-Body Strategies: Relaxation techniques, desensitization exercises, and guided therapy when helpful.',
          ],
        },
        { p: 'Collaborative Care: We may coordinate with pelvic floor therapists, pain specialists, sex therapists/sexologists, or mental health professionals for comprehensive support.' },
      ],
    },
    {
      q: 'A Safe, Supportive Environment',
      parts: [
        { p: 'We understand that discussing sexual concerns can feel vulnerable. Our goal is to provide:' },
        { ul: ['A judgment-free space', 'Evidence-based care', 'Clear explanations', 'Respect for your boundaries', 'Shared decision-making'] },
        { p: 'Your comfort and dignity are always our priority.' },
      ],
    },
    {
      q: 'When to Seek Care',
      parts: [
        { p: 'Consider scheduling an appointment if you experience:' },
        { ul: ['Persistent pain with intercourse', 'Avoidance of intimacy due to discomfort', 'Ongoing vulvar burning or irritation', 'Anxiety about gynecologic exams', 'Pain lasting longer than three months'] },
        { p: 'Early treatment can prevent chronic pain patterns from becoming more difficult to manage.' },
      ],
    },
  ],
  closing: 'Call the office to book a visit.',
  photos: [
    { src: '/images/services/wellwoman-3.jpg', alt: 'Two smiling women at a bright medical reception desk' },
    { src: '/images/services/wellwoman-2.jpg', alt: 'A patient sitting on an exam table while a doctor takes notes during a visit' },
    { src: '/images/services/wellwoman-1.jpg', alt: 'A smiling doctor in a white coat showing a medical report on a clipboard to a patient' },
  ],
};
