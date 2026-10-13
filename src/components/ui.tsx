import { motion, type HTMLMotionProps } from 'motion/react';
import type { ReactNode } from 'react';
import { EASE } from './motionUtils';

/** Scroll-triggered reveal: fades, lifts and un-blurs once. */
export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: { children: ReactNode; delay?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  blurb,
}: {
  index: string;
  label: string;
  title: ReactNode;
  blurb?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16 max-w-2xl">
      <div className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">
        <span className="text-accent-soft">{index}</span>
        <span className="h-px w-8 bg-hairline-strong" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <h2 className="text-3xl font-semibold leading-[1.1] tracking-[-0.03em] md:text-5xl">{title}</h2>
      {blurb && <p className="mt-5 text-base leading-relaxed text-ink-subtle md:text-lg">{blurb}</p>}
    </Reveal>
  );
}
