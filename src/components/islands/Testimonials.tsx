import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

export type Review = { text: string; name: string; source: string };

const INTERVAL = 7000;

export default function Testimonials({ reviews }: { reviews: Review[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const n = reviews.length;

  const go = useCallback((to: number, d: number) => {
    setDir(d);
    setI(((to % n) + n) % n);
  }, [n]);
  const next = useCallback(() => go(i + 1, 1), [go, i]);
  const prev = useCallback(() => go(i - 1, -1), [go, i]);

  useEffect(() => {
    if (reduce || paused) return;
    const t = setTimeout(next, INTERVAL);
    return () => clearTimeout(t);
  }, [i, paused, reduce, next]);

  const r = reviews[i];

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="rounded-[6px] outline-none focus-visible:ring-2 focus-visible:ring-magenta-500 focus-visible:ring-offset-8 focus-visible:ring-offset-transparent"
    >
      <svg aria-hidden="true" viewBox="0 0 48 36" className="h-10 w-12 text-magenta-500" fill="currentColor">
        <path d="M0 36V21.6C0 9.6 6.2 2.4 18.6 0l2 5.6C14 7.6 11 11.4 10.6 16.8H20V36H0zm28 0V21.6C28 9.6 34.2 2.4 46.6 0l2 5.6C42 7.6 39 11.4 38.6 16.8H48V36H28z" />
      </svg>

      <div className="relative mt-6 min-h-[13.5rem] sm:min-h-[12rem]" aria-live={paused ? 'polite' : 'off'}>
        <AnimatePresence mode="wait" initial={false} custom={dir}>
          <motion.figure
            key={i}
            custom={dir}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: 40 * dir }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: -40 * dir }}
            transition={{ duration: reduce ? 0.2 : 0.5, ease: [0.2, 0.7, 0.2, 1] }}
            aria-label={`Review ${i + 1} of ${n}`}
          >
            <blockquote className="font-sans font-light text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.55] tracking-[-0.005em] text-ink">
              {r.text}
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span aria-hidden="true" className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-plum-700 to-magenta-500 font-display text-xl text-white">
                {r.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{r.name}</span>
                <span className="block text-[.72rem] font-bold uppercase tracking-[.2em] text-magenta-600">{r.source}</span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex items-center justify-between gap-6">
        <ul className="flex items-center gap-2" aria-label="Choose a review">
          {reviews.map((_, k) => (
            <li key={k}>
              <button
                type="button"
                onClick={() => go(k, k > i ? 1 : -1)}
                aria-label={`Show review ${k + 1}`}
                aria-current={k === i}
                className="group flex h-6 items-center"
              >
                <span className={`relative block h-[3px] overflow-hidden rounded-full bg-plum-700/20 transition-all duration-500 ${k === i ? 'w-12' : 'w-5 group-hover:bg-plum-700/40'}`}>
                  {k === i && (
                    <motion.span
                      key={`${i}-${paused}`}
                      className="absolute inset-y-0 left-0 block rounded-full bg-gradient-to-r from-plum-700 to-magenta-500"
                      initial={{ width: reduce ? '100%' : paused ? '100%' : '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: reduce || paused ? 0 : INTERVAL / 1000, ease: 'linear' }}
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button type="button" onClick={prev} aria-label="Previous review" className="tm-arrow">
            <svg aria-hidden="true" viewBox="0 0 14 10" className="h-3 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h11M8 1l4 4-4 4" /></svg>
          </button>
          <button type="button" onClick={next} aria-label="Next review" className="tm-arrow">
            <svg aria-hidden="true" viewBox="0 0 14 10" className="h-3 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 5h11M8 1l4 4-4 4" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
