import { Reveal } from './ui';
import { trackPointer } from './motionUtils';

const links = [
  { label: 'Email', value: 'ozanggnr@gmail.com', href: 'mailto:ozanggnr@gmail.com' },
  { label: 'GitHub', value: 'github.com/ozanggnr', href: 'https://github.com/ozanggnr', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/ozanggnr', href: 'https://linkedin.com/in/ozanggnr', external: true },
  { label: 'Phone', value: '+90 533 662 81 08', href: 'tel:+905336628108' },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-16 pt-20 md:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[60vh] bg-[radial-gradient(ellipse_60%_80%_at_50%_100%,rgba(94,106,210,0.28),transparent)]" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">
            <span className="text-accent-soft">04</span>
            <span className="h-px w-8 bg-hairline-strong" aria-hidden="true" />
            Contact
          </p>
          <h2 className="max-w-4xl text-5xl font-semibold leading-[1] tracking-[-0.04em] md:text-8xl">
            Let&apos;s build <span className="text-gradient-accent">something great.</span>
          </h2>
          <p className="mt-6 text-lg text-ink-subtle">Based in Ankara, Turkey · Replies within a day.</p>
        </Reveal>

        <ul className="mt-16 grid gap-3 sm:grid-cols-2">
          {links.map((l, i) => (
            <li key={l.label}>
              <Reveal delay={i * 0.06}>
                <a
                  href={l.href}
                  onMouseMove={trackPointer}
                  {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="spotlight group flex items-center justify-between gap-4 rounded-2xl border border-hairline bg-surface-1 p-6 transition-[transform,border-color] duration-300 hover:border-hairline-strong active:scale-[0.99]"
                >
                  <span className="min-w-0">
                    <span className="block font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">{l.label}</span>
                    <span className="mt-1 block truncate text-lg text-ink md:text-xl">{l.value}</span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-ink-subtle transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink">↗</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-6 text-sm text-ink-faint">
          <p>© {new Date().getFullYear()} Ozan Güngör</p>
          <a href="#top" className="transition-colors hover:text-ink">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}
