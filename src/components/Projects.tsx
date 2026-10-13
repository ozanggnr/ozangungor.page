import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { projects, type Project } from '../data/projects';
import { Reveal, SectionHeader } from './ui';
import { EASE, trackPointer } from './motionUtils';

/** Bento layout on a 6-col grid: 2 hero tiles, 3 mid tiles, 2 wide tiles. */
const spans = [
  'md:col-span-3', 'md:col-span-3',
  'md:col-span-2', 'md:col-span-2', 'md:col-span-2',
  'md:col-span-3', 'md:col-span-3',
];

function Card({ p, i, onOpen }: { p: Project; i: number; onOpen: () => void }) {
  return (
    <Reveal delay={(i % 3) * 0.08} className={spans[i % spans.length]}>
      <button
        type="button"
        onClick={onOpen}
        onMouseMove={trackPointer}
        aria-label={`Open details for ${p.name}`}
        className="spotlight group flex h-full min-h-[200px] md:min-h-[240px] w-full flex-col rounded-3xl border border-hairline bg-surface-1 p-7 text-left transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-hairline-strong active:scale-[0.99]"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs tabular-nums text-ink-faint">{String(i + 1).padStart(2, '0')}</span>
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-full border border-hairline-strong text-ink-subtle transition-[transform,background-color,color] duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-canvas"
          >
            ↗
          </span>
        </div>
        <h3 className="mt-auto pt-8 md:pt-10 text-2xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-2 text-ink-subtle">{p.tagline}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t} className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-subtle">
              {t}
            </li>
          ))}
        </ul>
      </button>
    </Reveal>
  );
}

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      prev?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={onClose} aria-hidden="true" />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative max-h-[88svh] w-full max-w-2xl overflow-y-auto overscroll-contain rounded-3xl border border-hairline-strong bg-surface-1 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.7)] md:p-10"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-hairline-strong text-ink-subtle transition-colors hover:bg-white/10 hover:text-ink"
        >
          ✕
        </button>
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">Project</p>
        <h3 id="project-title" className="mt-3 pr-10 text-3xl font-semibold tracking-tight md:text-4xl">{p.name}</h3>
        <p className="mt-2 text-lg text-ink-subtle">{p.tagline}</p>
        <p className="mt-6 leading-relaxed text-ink-muted">{p.description}</p>
        <ul className="mt-6 space-y-2.5">
          {p.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-sm leading-relaxed text-ink-subtle">
              <span aria-hidden="true" className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent-soft" />
              {b}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <ul className="flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <li key={t} className="rounded-full border border-hairline bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-subtle">{t}</li>
            ))}
          </ul>
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-canvas transition-transform hover:scale-[1.04] active:scale-95"
          >
            View on GitHub ↗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          label="Projects"
          title={<>Things I&apos;ve built, <span className="text-ink-subtle">from mobile to market data.</span></>}
          blurb="Native apps, APIs, dashboards and a game engine-less shooter. Pick one for the details."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {projects.map((p, i) => (
            <Card key={p.name} p={p} i={i} onOpen={() => setOpen(i)} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {open !== null && <Modal key={open} p={projects[open]} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
