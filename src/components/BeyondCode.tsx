import { motion } from 'motion/react';
import { Reveal } from './ui';
import { EASE, trackPointer } from './motionUtils';

const languages = [
  { name: 'Turkish', level: 'Native', value: 5, hue: 'from-accent to-accent-soft' },
  { name: 'English', level: 'Proficient', value: 4, hue: 'from-violet to-accent-soft' },
  { name: 'Spanish', level: 'Beginner', value: 1, hue: 'from-sky to-accent-soft' },
];

const interests = [
  { name: 'American Football', dot: 'bg-accent-soft' },
  { name: 'Skating', dot: 'bg-sky' },
  { name: 'Running', dot: 'bg-violet' },
  { name: 'Hiking', dot: 'bg-success' },
  { name: 'Reading', dot: 'bg-fuchsia' },
  { name: 'Guitar', dot: 'bg-amber-300' },
];

export default function BeyondCode() {
  return (
    <div className="mt-20 md:mt-24">
      <Reveal className="mb-8 flex items-center gap-4">
        <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">Beyond the code</h3>
        <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-hairline-strong to-transparent" />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-5">
        {/* Languages: level meters */}
        <Reveal className="md:col-span-2">
          <div
            onMouseMove={trackPointer}
            className="spotlight h-full rounded-3xl border border-hairline bg-gradient-to-br from-surface-2 to-surface-1 p-7"
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">Spoken languages</h4>
            <ul className="mt-6 space-y-5">
              {languages.map((l, i) => (
                <li key={l.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="font-medium text-ink">{l.name}</span>
                    <span className="text-sm text-ink-subtle">{l.level}</span>
                  </div>
                  <div
                    role="img"
                    aria-label={`${l.name}: ${l.level}`}
                    className="flex gap-1.5"
                  >
                    {Array.from({ length: 5 }).map((_, n) => (
                      <motion.span
                        key={n}
                        className={`h-1.5 flex-1 origin-left rounded-full ${
                          n < l.value ? `bg-gradient-to-r ${l.hue}` : 'bg-white/10'
                        }`}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 + i * 0.12 + n * 0.07, ease: EASE }}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Interests: chip cloud */}
        <Reveal delay={0.08} className="md:col-span-3">
          <div
            onMouseMove={trackPointer}
            className="spotlight h-full rounded-3xl border border-hairline bg-gradient-to-br from-surface-1 to-surface-2 p-7"
          >
            <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">Interests</h4>
            <p className="mt-4 max-w-md text-ink-subtle">
              Away from the keyboard you will usually find me on a field, a trail or with a guitar.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {interests.map((it, i) => (
                <motion.li
                  key={it.name}
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE }}
                  className="flex items-center gap-2.5 rounded-full border border-hairline-strong bg-white/[0.04] px-4 py-2 text-sm text-ink"
                >
                  <span aria-hidden="true" className={`size-2 rounded-full ${it.dot}`} />
                  {it.name}
                </motion.li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
