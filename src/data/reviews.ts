// Patient reviews copied word for word from the Google reviews slider on the live site
// (lakesideobgyn.org, fetched 2026-11-11). Spelling and punctuation are the reviewers' own.
// One review is left out on purpose: it names a nurse practitioner who is not on the new site.
// See docs/OPEN-QUESTIONS.md (Testimonials).
export type Review = { text: string; name: string; source: string };

export const reviews: Review[] = [
  { text: 'She (Dr. Hannon) takes her time with her patients and listens closely to their concerns.', name: 'Rosanna', source: 'Google review' },
  { text: 'Dr. Hannon always takes her time to understand her patients needs. She is caring.', name: 'Carla', source: 'Google review' },
  { text: 'I would recommend him (Dr. Ziyad Hannon), he is very pleasant, nice and professional Dr.', name: 'Marites', source: 'Google review' },
  { text: 'Dr. Monica is culturally competent, attentive, spends time to check in.', name: 'Yvonne', source: 'Google review' },
  { text: 'What I really like about her is that she is open to considering alternative treatments.', name: 'Carolyn', source: 'Google review' },
  { text: 'Friendliest and professional office in SF!', name: 'Myrna', source: 'Google review' },
];
