import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { cookieConsent } from '../../data/cookies';

type Choice = Record<string, boolean>;
const { storageKey, version, intro, policyHref, categories } = cookieConsent;
const defaults = (): Choice => Object.fromEntries(categories.map((c) => [c.key, c.locked]));
const all = (on: boolean): Choice => Object.fromEntries(categories.map((c) => [c.key, c.locked || on]));

function read(): Choice | null {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return null;
    const v = JSON.parse(raw);
    return v && v.version === version ? v.choice : null;
  } catch { return null; }
}

export default function CookieBanner() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [choice, setChoice] = useState<Choice>(defaults());
  const box = useRef<HTMLDivElement>(null);

  const save = (c: Choice) => {
    try { localStorage.setItem(storageKey, JSON.stringify({ version, choice: c, at: new Date().toISOString() })); } catch { /* storage blocked */ }
    (window as unknown as { cookieConsent?: Choice }).cookieConsent = c;
    window.dispatchEvent(new CustomEvent('cookie-consent', { detail: c }));
    setOpen(false); setCustom(false);
  };

  useEffect(() => {
    const saved = read();
    if (saved) { setChoice({ ...defaults(), ...saved }); (window as unknown as { cookieConsent?: Choice }).cookieConsent = saved; }
    else setOpen(true);
    const reopen = () => { const s = read(); setChoice(s ? { ...defaults(), ...s } : defaults()); setCustom(true); setOpen(true); };
    window.addEventListener('open-cookie-settings', reopen);
    return () => window.removeEventListener('open-cookie-settings', reopen);
  }, []);

  useEffect(() => { if (open) box.current?.focus(); }, [open, custom]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={box} tabIndex={-1} role="dialog" aria-modal="false" aria-labelledby="ck-h" className="ck"
          initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          onKeyDown={(e) => { if (e.key === 'Escape' && custom) setCustom(false); }}
        >
          <h2 id="ck-h">Cookie settings</h2>
          <p>{intro} <a href={policyHref} className="svc-link">Read our Privacy Policy</a>.</p>
          {custom && (
            <ul className="ck-list">
              {categories.map((c) => (
                <li className="ck-item" key={c.key}>
                  <strong id={`ck-${c.key}`}>{c.label}</strong>
                  <button type="button" role="switch" aria-checked={choice[c.key]} aria-labelledby={`ck-${c.key}`} disabled={c.locked} className="ck-sw"
                    onClick={() => setChoice((p) => ({ ...p, [c.key]: !p[c.key] }))} />
                  <span className="d">{c.text}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="ck-actions">
            <button type="button" className="ck-btn ck-btn-main" onClick={() => save(all(true))}>Accept all</button>
            <button type="button" className="ck-btn" onClick={() => save(all(false))}>Reject optional</button>
            {custom
              ? <button type="button" className="ck-btn" onClick={() => save(choice)}>Save choices</button>
              : <button type="button" className="ck-btn" onClick={() => setCustom(true)}>Customize</button>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
