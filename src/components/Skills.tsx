import { SectionHeader, Reveal } from './ui';
import { trackPointer } from './motionUtils';
import BeyondCode from './BeyondCode';

const skillGroups = [
  {
    label: 'Languages',
    span: 'md:col-span-2',
    items: [
      { name: 'Kotlin', note: 'Advanced – Android & KMP' },
      { name: 'Python', note: 'FastAPI, scripting, data analysis' },
      { name: 'JavaScript', note: 'React, Node.js, full-stack' },
      { name: 'Java', note: 'Spring Boot, backend' },
      { name: 'Swift', note: 'iOS, UIKit' },
    ],
  },
  {
    label: 'Databases',
    span: 'md:col-span-1',
    items: [
      { name: 'MongoDB', note: 'Document store, indexing, aggregation' },
      { name: 'PostgreSQL', note: 'Relational, time-series schemas' },
    ],
  },
  {
    label: 'Frameworks & Technologies',
    span: 'md:col-span-1',
    items: [
      { name: 'Jetpack Compose', note: 'Modern Android UI' },
      { name: 'Node.js', note: 'REST APIs, backend services' },
      { name: 'FastAPI', note: 'High-performance Python APIs' },
      { name: 'Spring Boot', note: 'Enterprise Java backend' },
      { name: 'React', note: 'Frontend dashboards & SPAs' },
    ],
  },
  {
    label: 'Tools & Platforms',
    span: 'md:col-span-2',
    items: [
      { name: 'Docker', note: 'Containerization & deployments' },
      { name: 'AWS', note: 'Cloud infrastructure' },
      { name: 'Firebase', note: 'Auth, Firestore, hosting' },
      { name: 'Git / GitHub', note: 'Version control, CI/CD' },
      { name: 'Postman', note: 'API testing & documentation' },
      { name: 'Railway', note: 'Cloud deployments' },
      { name: 'Maven', note: 'Java build tooling' },
      { name: 'Jira', note: 'Agile project management' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="03"
          label="Skills"
          title={<>The toolbox, <span className="text-ink-subtle">and the human behind it.</span></>}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <Reveal key={g.label} delay={(gi % 2) * 0.08} className={g.span}>
              <div
                onMouseMove={trackPointer}
                className="spotlight h-full rounded-3xl border border-hairline bg-surface-1 p-7"
              >
                <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-accent-soft">{g.label}</h3>
                <ul className={`mt-6 grid gap-x-8 gap-y-4 ${g.span === 'md:col-span-2' ? 'sm:grid-cols-2' : ''}`}>
                  {g.items.map((it) => (
                    <li key={it.name}>
                      <span className="font-medium text-ink">{it.name}</span>
                      <span className="mt-0.5 block text-sm text-ink-subtle">{it.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <BeyondCode />
      </div>
    </section>
  );
}