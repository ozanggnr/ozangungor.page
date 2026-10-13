import { SectionHeader, Reveal } from './ui';
import { trackPointer } from './motionUtils';
import { certifications } from '../data/certifications';

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          label="Certifications"
          title={<>Validated expertise, <span className="text-ink-subtle">continual learning.</span></>}
          blurb="Official licenses & accredited credentials across AI capabilities, API engineering, machine learning, and security."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal
              key={c.title}
              delay={(i % 3) * 0.08}
              className={i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <div
                onMouseMove={trackPointer}
                className="spotlight group flex h-full flex-col justify-between rounded-3xl border border-hairline bg-surface-1 p-7 transition-[transform,border-color] duration-300 hover:border-hairline-strong active:scale-[0.99]"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 font-mono text-xs font-medium ${c.badgeColor || 'border-hairline bg-surface-2 text-ink-subtle'}`}
                    >
                      <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                      {c.issuer}
                    </span>
                    <span className="font-mono text-xs tabular-nums text-ink-faint">
                      {c.issueDate}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-ink md:text-2xl">
                    {c.title}
                  </h3>

                  {c.credentialId && (
                    <div className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-faint">
                      <span>ID:</span>
                      <code className="truncate rounded bg-surface-2 px-2 py-0.5 text-ink-subtle">
                        {c.credentialId}
                      </code>
                    </div>
                  )}

                  {c.skills && c.skills.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Associated skills">
                      {c.skills.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-hairline bg-surface-2/60 px-2.5 py-1 font-mono text-[11px] text-ink-subtle"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="mt-6 border-t border-hairline/60 pt-4">
                  <a
                    href={c.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-soft transition-colors hover:text-ink"
                  >
                    <span>Show credential</span>
                    <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
