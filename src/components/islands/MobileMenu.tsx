import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Item = { label: string; href: string };

export default function MobileMenu({ items, phone, phoneHref }: { items: Item[]; phone: string; phoneHref: string }) {
  const [open, setOpen] = useState(false);
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
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] flex flex-col justify-center gap-1 bg-plum-900 px-8 text-white"
          >
            {items.map((i, n) => (
              <motion.a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * n + 0.1 }}
                className="border-b border-white/10 py-4 font-display text-3xl"
              >
                {i.label}
              </motion.a>
            ))}
            <a href={phoneHref} className="mt-8 text-rose-200">Call {phone}</a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-appt mt-4 self-start">Request appointment</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}
