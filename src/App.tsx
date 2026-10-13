import { MotionConfig } from 'motion/react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain relative isolate min-h-screen">
        <div aria-hidden="true" className="ambient pointer-events-none fixed inset-0 -z-10" />
        <a
          href="#experience"
          className="sr-only z-[80] rounded-md bg-ink px-4 py-2 text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Nav />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
