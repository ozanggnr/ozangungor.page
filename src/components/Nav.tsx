import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { EASE } from './motionUtils';

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Nav() {
  const [active, setActive] = useState('');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-accent via-accent-soft to-fuchsia-300"
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
        className="fixed inset-x-0 top-4 z-40 flex justify-center px-4"
      >
        <nav
          aria-label="Primary"
          className="flex items-center gap-1 rounded-full border border-white/10 bg-surface-1/70 p-1.5 pl-4 shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        >
          <a
            href="#top"
            className="mr-1 flex items-center gap-2 pr-2 text-sm font-semibold tracking-tight text-ink"
            aria-label="Ozan Güngör, back to top"
          >
            <span className="grid size-6 place-items-center rounded-md bg-accent text-[11px] font-bold text-white">
              OG
            </span>
          </a>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? 'true' : undefined}
              className={`relative hidden rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 sm:block ${
                active === l.id ? 'text-ink' : 'text-ink-subtle hover:text-ink'
              }`}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-white/10"
                />
              )}
              <span className="relative">{l.label}</span>
            </a>
          ))}
          <a
            href="mailto:ozanggnr@gmail.com"
            className="ml-1 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[1.04] active:scale-95"
          >
            Say hi
          </a>
        </nav>
      </motion.header>
    </>
  );
}
