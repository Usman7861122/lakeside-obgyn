// Image manifest. null = temporary art is shown. Swap in a file path when the real photo is chosen.
export const images = {
  hero: [
    { src: '/images/hero/bridge.jpg' as string | null, alt: 'Golden Gate Bridge at sunrise from Fort Point, San Francisco' },
    { src: '/images/hero/family.jpg' as string | null, alt: 'A mother holding her baby by a sunlit window' },
    { src: '/images/hero/consult.jpg' as string | null, alt: 'A doctor and a patient smiling as they look over a clipboard together' },
  ],
  about: { src: '/images/about/consult.jpg' as string | null, alt: 'A doctor and a patient looking at a tablet together in a bright exam room' },
  services: {
    wellwoman: '/images/services/wellwoman.jpg' as string | null,
    fertility: '/images/services/fertility.jpg' as string | null,
    menopause: '/images/services/menopause.jpg' as string | null,
    fibroids: '/images/services/fibroids.jpg' as string | null,
    surgery: '/images/services/surgery.jpg' as string | null,
    lgbtq: '/images/services/lgbtq.jpg' as string | null,
  },
  doctors: {
    monica: '/images/team/monica-hannon.jpg',
    ziyad: '/images/team/ziyad-hannon.jpg' as string | null,
    jeanette: '/images/team/jeanette-blanks.jpg' as string | null,
  },
  blog: ['/images/blog/exam.jpg', '/images/blog/fibroids.jpg', '/images/blog/menopause.jpg'] as (string | null)[],
};
