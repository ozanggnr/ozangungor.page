import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="mb-10">
      <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mb-4 text-sm md:text-lg opacity-80">
        <span className="text-green-500">visitor@ozangungor</span>
        <span className="text-white">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-white">$</span>
        <span>ls -l ./contact</span>
      </div>

      <div className="flex flex-col space-y-2 overflow-x-auto terminal-scrollbar pb-2">
        <a href="mailto:ozanggnr@gmail.com" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block break-all">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 22</span>
          <span className="text-blue-400 font-bold">email</span> {'->'} <span className="opacity-80 underline">ozanggnr@gmail.com</span>
        </a>
        <a href="https://github.com/ozanggnr" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 29</span>
          <span className="text-blue-400 font-bold">github</span> {'->'} <span className="opacity-80 underline">github.com/ozanggnr</span>
        </a>
        <a href="https://linkedin.com/in/ozanggnr" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 32</span>
          <span className="text-blue-400 font-bold">linkedin</span> {'->'} <span className="opacity-80 underline">linkedin.com/in/ozanggnr</span>
        </a>
        <a href="tel:+905336628108" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 16</span>
          <span className="text-blue-400 font-bold">phone</span> {'->'} <span className="opacity-80 underline">+90 533 662 81 08</span>
        </a>
        <div className="p-2 -ml-2 text-sm opacity-50">
          <span className="hidden md:inline">lrwxrwxrwx 1 ozan ozan 14 </span>
          <span className="text-blue-400 font-bold">location</span> {'-> '} Ankara, Turkey
        </div>
      </div>
    </div>
  );
};

export default Contact;
