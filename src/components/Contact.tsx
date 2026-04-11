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
        <a href="mailto:ozan.gungor@ug.bilkent.edu.tr" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block break-all">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 29</span>
          <span className="text-blue-400 font-bold">email</span> {'->'} <span className="opacity-80 underline">ozan.gungor@ug.bilkent.edu.tr</span>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 18</span>
          <span className="text-blue-400 font-bold">github</span> {'->'} <span className="opacity-80 underline">GitHub Profile</span>
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:bg-primary/20 p-2 -ml-2 rounded transition-colors w-max block">
          <span className="opacity-50 mr-4 hidden md:inline">lrwxrwxrwx 1 ozan ozan 25</span>
          <span className="text-blue-400 font-bold">linkedin</span> {'->'} <span className="opacity-80 underline">LinkedIn Profile</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
