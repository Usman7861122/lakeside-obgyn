import type { GenericService } from './types';

// PLACEHOLDER (2026-11-13): Dr. Hannon asked for a Sexual Health / Sexual Pain service tile and will send the text.
// Only a short neutral intro is shown. The real text goes in `blocks` once the client sends it. Logged in docs/OPEN-QUESTIONS.md.
export const service: GenericService = {
  slug: 'sexual-health',
  title: 'Sexual Health & Sexual Pain',
  menuLabel: 'Sexual Health & Sexual Pain',
  metaDescription:
    'Sexual health and sexual pain care in the Inner Richmond, San Francisco, at Lakeside Obstetrics, Gynecology & Fertility. Call to book.',
  intro: [
    'Sexual health and sexual pain care at Lakeside Obstetrics, Gynecology & Fertility. Call the office to book a visit.',
  ],
  blocks: [
    { q: 'Sexual health and sexual pain care', parts: [{ todo: 'TODO: text from Dr. Hannon (she will send it). Do not write medical text for this page.' }] },
  ],
  closing: 'Call the office to book a visit.',
  photos: [
    { src: '/images/services/wellwoman-3.jpg', alt: 'Two smiling women at a bright medical reception desk' },
    { src: '/images/services/wellwoman-2.jpg', alt: 'A patient sitting on an exam table while a doctor takes notes during a visit' },
    { src: '/images/services/wellwoman-1.jpg', alt: 'A smiling doctor in a white coat showing a medical report on a clipboard to a patient' },
  ],
};
