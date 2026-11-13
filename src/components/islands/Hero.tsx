import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/site';

export type Slide = {
  eyebrow: string;
  lead: string;      // headline text before the changing word
  word: string;      // last word, shown in logo colors
  text: string;
  cta: { label: string; href: string };
  image: { src: string | null; alt: string };
  art: 'bridge' | 'family' | 'care';
};

const INTERVAL = 8000;

function Art({ kind }: { kind: Slide['art'] }) {
  // Temporary artwork, used until the real photograph is placed in src/data/images.ts
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            kind === 'bridge'
              ? 'linear-gradient(180deg,#e9d4e6 0%,#f4c9d9 38%,#9db8c8 62%,#3d6a82 100%)'
              : kind === 'family'
              ? 'radial-gradient(120% 90% at 70% 30%,#f7cfe0 0%,#c987b9 45%,#5c1650 100%)'
              : 'radial-gradient(110% 90% at 30% 20%,#b04c9f 0%,#5c1650 55%,#240a24 100%)',
        }}
      />
      {kind === 'bridge' && (
        <svg viewBox="0 0 1600 700" preserveAspectRatio="xMidYMax slice" className="absolute inset-x-0 bottom-0 h-[78%] w-full">
          <g fill="none" stroke="#3a1038" strokeOpacity=".55" strokeWidth="3">
            <path d="M0 470 Q400 380 560 250 Q720 380 1200 470 L1600 470" />
            <path d="M560 250 L560 560 M1000 250 L1000 560" strokeWidth="10" strokeOpacity=".7" />
            <path d="M560 250 Q780 420 1000 250" />
            <path d="M0 470 L1600 470" strokeWidth="6" />
            {Array.from({ length: 30 }).map((_, i) => (
              <path key={i} d={`M${600 + i * 14} ${300 + Math.abs(15 - i) * 4} L${600 + i * 14} 470`} strokeWidth="1" strokeOpacity=".35" />
            ))}
          </g>
          <rect x="0" y="470" width="1600" height="230" fill="#2f5d73" opacity=".55" />
        </svg>
      )}
      <div className="absolute -right-24 top-1/4 h-[34rem] w-[34rem] rounded-full border border-white/20" />
      <div className="absolute -right-4 top-[34%] h-[22rem] w-[22rem] rounded-full border border-white/20" />
      <div className="absolute right-20 top-[44%] h-[10rem] w-[10rem] rounded-full border border-white/25" />
    </div>
  );
}

export default function Hero({ slides }: { slides: Slide[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback((n: number) => setI((n + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused || reduce) return;
    timer.current = setTimeout(() => go(i + 1), INTERVAL);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [i, paused, reduce, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Welcome"
      className="relative isolate min-h-[100svh] overflow-hidden bg-plum-900 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => { if (e.key === 'ArrowRight') go(i + 1); if (e.key === 'ArrowLeft') go(i - 1); }}
    >
      {/* Slides (all in the DOM so search engines read every headline) */}
      {slides.map((s, n) => {
        const active = n === i;
        return (
          <div
            key={n}
            role="group"
            aria-roledescription="slide"
            aria-label={`${n + 1} of ${slides.length}`}
            aria-hidden={!active}
            className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
          >
            <motion.div
              className="absolute inset-0"
              animate={reduce ? undefined : { scale: active ? 1.08 : 1 }}
              transition={{ duration: active ? 12 : 1.4, ease: 'linear' }}
            >
              {s.image.src ? (
                <img src={s.image.src} alt={s.image.alt} className="h-full w-full object-cover" fetchPriority={n === 0 ? 'high' : 'low'} loading={n === 0 ? 'eager' : 'lazy'} />
              ) : (
                <Art kind={s.art} />
              )}
            </motion.div>
            {/* readable text zone + gentle plum tint */}
            <div className="absolute inset-0 bg-[linear-gradient(95deg,rgb(36_10_36/.88)_0%,rgb(36_10_36/.62)_42%,rgb(36_10_36/.12)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />

            <div className="wrap relative flex h-full min-h-[100svh] flex-col justify-center pb-32 pt-44 md:pt-48">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={n}
                    initial={reduce ? false : { opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.25 }}
                    className="max-w-[40rem] on-dark"
                  >
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h2 className="mt-6 text-[clamp(2.5rem,6.2vw,5.2rem)] leading-[1.02] text-white">
                      {s.lead} <span className="shift">{s.word}</span>
                    </h2>
                    <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-white/85">{s.text}</p>
                    <div className="mt-10 flex flex-wrap items-center gap-4">
                      <a href={site.phoneHref} className="btn-appt">Call {site.phone}</a>
                      <a href={s.cta.href} className="btn">{s.cta.label}</a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );
      })}

      {/* Controls */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="wrap flex items-end justify-between gap-6 pb-8">
          <div className="flex flex-1 items-center gap-3 sm:max-w-md" role="tablist" aria-label="Choose slide">
            {slides.map((s, n) => (
              <button
                key={n}
                role="tab"
                aria-selected={n === i}
                aria-label={`Show slide ${n + 1}`}
                onClick={() => go(n)}
                className="group relative h-6 flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-white/30" />
                <span
                  key={`${n}-${i === n}`}
                  className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-white"
                  style={{
                    width: n < i ? '100%' : n === i ? (reduce ? '100%' : undefined) : '0%',
                    animation: n === i && !reduce ? `fill ${INTERVAL}ms linear forwards` : undefined,
                    animationPlayState: paused ? 'paused' : 'running',
                  }}
                />
              </button>
            ))}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <button aria-label="Previous slide" onClick={() => go(i - 1)} className="grid h-11 w-11 place-items-center rounded-[3px] border border-white/40 text-white transition hover:bg-white hover:text-plum-900">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3 5 8l5 5" /></svg>
            </button>
            <button aria-label="Next slide" onClick={() => go(i + 1)} className="grid h-11 w-11 place-items-center rounded-[3px] border border-white/40 text-white transition hover:bg-white hover:text-plum-900">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m6 3 5 5-5 5" /></svg>
            </button>
          </div>
        </div>
      </div>
      <style>{`@keyframes fill { from { width: 0 } to { width: 100% } }`}</style>
    </section>
  );
}
