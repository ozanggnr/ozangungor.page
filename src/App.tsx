
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-background text-primary font-mono p-4 md:p-8 overflow-y-auto terminal-scrollbar relative">
      <div className="crt-overlay pointer-events-none mb-10"></div>
      
      <div className="max-w-4xl mx-auto border border-primary/30 rounded p-4 md:p-8 shadow-[0_0_15px_rgba(0,255,159,0.1)] bg-background/95 relative z-10">
        
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
  );
}

export default App;
