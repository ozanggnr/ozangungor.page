import { useState } from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import BootSequence from './components/BootSequence';
import MatrixBackground from './components/MatrixBackground';
import CursorTracker from './components/CursorTracker';

function App() {
  const [booting, setBooting] = useState(true);

  return (
    <>
      <CursorTracker />
      <MatrixBackground />
      
      {booting && <BootSequence onComplete={() => setBooting(false)} />}

      <div className={`min-h-screen text-primary font-mono p-2 md:p-8 overflow-y-auto terminal-scrollbar relative transition-opacity duration-1000 ${booting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="crt-overlay pointer-events-none mb-10"></div>
        
        <div className="max-w-4xl mx-auto border border-primary/30 rounded p-3 sm:p-5 md:p-8 shadow-[0_0_15px_rgba(0,255,159,0.2)] bg-[#0d0d0d]/85 relative z-10 backdrop-blur-sm">
          
          {/* Terminal Header */}
          <div className="flex justify-between items-center border-b border-primary/30 pb-2 mb-8 select-none">
            <div className="text-sm opacity-50 hidden md:block">bash - 80x24</div>
            <div className="text-primary font-bold tracking-widest md:text-lg">
               O G _ T E R M I N A L
            </div>
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
               <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
          </div>

          {/* Content */}
          <div className="pb-10">
            <Hero />
            <div className="w-full h-px bg-primary/20 my-8"></div>
            <Experience />
            <div className="w-full h-px bg-primary/20 my-8"></div>
            <Projects />
            <div className="w-full h-px bg-primary/20 my-8"></div>
            <Skills />
            <div className="w-full h-px bg-primary/20 my-8"></div>
            <Contact />
          </div>

          <div className="mt-8 pt-4 border-t border-primary/30 opacity-50 text-sm flex justify-between items-center">
            <p>© {new Date().getFullYear()} Ozan Güngör. System Ready.</p>
            <div className="w-2 h-4 bg-primary animate-blink"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
