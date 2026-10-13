import { motion } from 'motion/react';
import { EASE } from './motionUtils';

const stack = [
  'Kotlin', 'Jetpack Compose', 'Swift', 'Node.js', 'FastAPI', 'React', 'PostgreSQL',
  'MongoDB', 'Firebase', 'Docker', 'AWS', 'Java', 'Python', 'C++',
];

const words = ['Ozan', 'Güngör'];

const stats = [
  { value: '2', label: 'Engineering internships' },
  { value: '7', label: 'Shipped projects' },
  { value: '3', label: 'Platforms: Android, iOS, Web' },
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-32">
      {/* Atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-lines absolute inset-0" />
        <div className="absolute left-1/2 top-[-18%] h-[70vh] w-[90vw] max-w-[1200px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(94,106,210,0.45),transparent)] blur-3xl will-change-transform" />
        <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vw] animate-aurora rounded-full bg-[radial-gradient(closest-side,rgba(217,70,239,0.16),transparent)] blur-3xl [animation-direction:alternate-reverse]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-3 pr-4 text-sm text-ink-muted backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inset-0 animate-pulse-dot rounded-full bg-success" />
            <span className="relative size-2 rounded-full bg-success" />
          </span>
          Open to internships &amp; new grad roles
        </motion.div>

        <h1 className="text-[clamp(3.25rem,11vw,9rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
          {words.map((w, wi) => (
            <span key={w} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className={`block ${wi === 1 ? 'text-gradient-accent' : 'text-gradient'}`}
                initial={{ y: '110%', rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1.1, delay: 0.35 + wi * 0.12, ease: EASE }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-subtle md:text-xl"
        >
          Android &amp; full-stack developer studying Information Systems and Technologies at{' '}
          <span className="text-ink">Bilkent University</span>. I build native mobile apps and the
          backends behind them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          >
            View my work
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="https://github.com/ozanggnr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-white/[0.08]"
          >
            GitHub
            <span aria-hidden="true" className="text-ink-subtle">↗</span>
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.25 }}
          className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-surface-1/70 p-5 backdrop-blur">
              <dt className="order-2 mt-1 text-sm text-ink-subtle">{s.label}</dt>
              <dd className="text-4xl font-semibold tabular-nums tracking-tight text-ink">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16" aria-hidden="true">
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max animate-marquee gap-3 will-change-transform">
            {[...stack, ...stack].map((t, i) => (
              <span
                key={i}
                className="rounded-full border border-hairline bg-surface-1 px-4 py-1.5 font-mono text-xs text-ink-subtle"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
