import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';

type Item = { label: string; href: string; external?: boolean; children?: { label: string; href: string }[] };

export default function MobileMenu({ items, phone, phoneHref }: { items: Item[]; phone: string; phoneHref: string }) {
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState<string | null>(null);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => { window.removeEventListener('keydown', esc); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
        className="relative z-[60] grid h-11 w-11 place-items-center rounded-[3px] border border-plum-700/25 text-plum-800"
      >
        <span className="sr-only">Menu</span>
        <span aria-hidden className="relative block h-3 w-5">
          <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
          <span className={`absolute left-0 top-[12px] h-px w-5 bg-current transition ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </span>
      </button>
      {typeof document !== 'undefined' && createPortal(<AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[49] flex flex-col justify-start gap-0 overflow-y-auto bg-plum-900 px-8 pb-8 pt-28 text-white"
          >
            {items.map((i, n) => (
              <motion.div
                key={i.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * n + 0.1 }}
                className="border-b border-white/10"
              >
                <div className="flex items-center justify-between">
                  <a href={i.href} {...(i.external ? { target: '_blank', rel: 'noopener' } : {})} onClick={() => setOpen(false)} className="flex-1 py-3.5 font-display text-2xl">{i.label}</a>
                  {i.children && (
                    <button type="button" aria-expanded={sub === i.label} aria-label={`${i.label} menu`} onClick={() => setSub(sub === i.label ? null : i.label)} className="grid h-11 w-11 place-items-center text-rose-200">
                      <svg aria-hidden viewBox="0 0 10 6" className={`h-2 w-3 transition ${sub === i.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 1l4 4 4-4" /></svg>
                    </button>
                  )}
                </div>
                {i.children && sub === i.label && (
                  <ul className="mb-3 grid max-h-[38vh] gap-px overflow-y-auto pl-1">
                    {i.children.map((c) => (
                      <li key={c.href}><a href={c.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-white/80 hover:text-rose-200">{c.label}</a></li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
            <a href={phoneHref} className="mt-8 text-rose-200">Call {phone}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-appt mt-4 self-start">Request appointment</a>
          </motion.nav>
        )}
      </AnimatePresence>, document.body)}
    </div>
  );
}
