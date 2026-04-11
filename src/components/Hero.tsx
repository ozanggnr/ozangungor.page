import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Ozan Güngör';
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="mb-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm md:text-lg opacity-80 opacity-indicator">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>whoami</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-4 flex items-center h-[1.2em]">
        {typedText}
        <span className="w-[0.5ch] h-[1em] bg-primary animate-blink ml-2 inline-block"></span>
      </h1>
      <p className="text-lg md:text-xl opacity-90 max-w-2xl mt-4 leading-relaxed">
        {'>'} Information Systems and Technologies student at Bilkent University.<br/>
        {'>'} Passionate Android & Full-Stack Developer.
      </p>
    </div>
  );
};

export default Hero;
