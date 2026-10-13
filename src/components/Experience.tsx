import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { Reveal, SectionHeader } from './ui';

const experiences = [
  {
    company: 'Wellbees',
    location: 'Istanbul, Turkey',
    role: 'Android Developer Intern',
    dates: ['Jul – Aug 2024', 'Jul – Sep 2025'],
    bullets: [
      'Developed Android applications using Kotlin and Jetpack Compose for a real-world corporate product.',
      'Redesigned existing UI screens with modern Compose architecture, improving consistency and UX.',
      'Built new standalone Android features from specification through code review to production.',
      'Worked with Android lifecycle management, state handling, and reactive UI patterns.',
      'Collaborated in a Git-based team development workflow with code reviews and iterative releases.',
    ],
  },
  {
    company: 'Ziraat Technology',
    location: 'Ankara, Turkey',
    role: 'Software Developer Intern',
    dates: ['Sep – Dec 2024'],
    bullets: [
      'Contributed to the full redevelopment of a legacy banking web application in a large enterprise team.',
      'Developed frontend and backend components in a full-stack environment serving millions of users.',
      'Collaborated across teams to understand business requirements and translate them into system design.',
      'Participated in implementation, code review, and system architecture discussions.',
      'Gained exposure to enterprise-grade security standards and deployment practices in banking infrastructure.',
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  return (
    <section id="experience" className="relative px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="01"
          label="Experience"
          title={<>Real products, real teams, <span className="text-ink-subtle">real code review.</span></>}
        />

        <ol ref={ref} className="relative ml-2 space-y-14 pl-8 md:ml-0 md:pl-12">
          <span aria-hidden="true" className="absolute bottom-2 left-0 top-2 w-px bg-hairline md:left-0" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY: line }}
            className="absolute bottom-2 left-0 top-2 w-px origin-top bg-gradient-to-b from-accent-soft to-accent"
          />
          {experiences.map((exp, i) => (
            <li key={exp.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-2 size-[9px] rounded-full bg-accent-soft ring-4 ring-canvas md:-left-[53px]"
              />
              <Reveal delay={i * 0.05} className="grid gap-6 md:grid-cols-[220px_1fr] md:gap-12">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink-subtle">
                    {exp.dates.map((d) => (
                      <span key={d} className="block leading-6 tabular-nums">{d}</span>
                    ))}
                  </p>
                  <p className="mt-3 text-sm text-ink-faint">{exp.location}</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{exp.role}</h3>
                  <p className="mt-1 text-lg text-accent-soft">{exp.company}</p>
                  <ul className="mt-6 space-y-3">
                    {exp.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed text-ink-subtle">
                        <span aria-hidden="true" className="mt-[0.7em] size-1 shrink-0 rounded-full bg-ink-faint" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
