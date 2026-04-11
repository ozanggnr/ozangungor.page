import { useState, useEffect } from 'react';

const bootMessages = [
  "BIOS Date 10/24/25 10:24:32 Ver 08.00.10",
  "CPU : AMD Ryzen 9 7950X",
  "Speed : 4.5 GHz",
  "16384 MB RAM OK",
  "Auto-Detecting PRI Master..IDE Hard Disk",
  "Auto-Detecting PRI Slave...Not Detected",
  "Booting from hard disk...",
  "Loading OS Kernel...",
  "Mounting /dev/sda1 (ext4)... [ OK ]",
  "Starting network interface... [ OK ]",
  "Starting local web server...  [ OK ]",
  "Fetching user identity...",
  "User 'ozangungor' authenticated.",
  "Starting GUI session...",
];

interface BootSequenceProps {
  onComplete: () => void;
}

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let currentMessage = 0;
    
    // Simulate fast staggered boot lines
    const interval = setInterval(() => {
      if (currentMessage < bootMessages.length) {
        setMessages(prev => [...prev, bootMessages[currentMessage]]);
        currentMessage++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 500); // fade out effect duration
        }, 600);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 bg-[#0d0d0d] z-50 flex flex-col justify-end p-4 md:p-8 font-mono text-primary transition-opacity duration-500 pointer-events-none ${isDone ? 'opacity-0' : 'opacity-100'}`}>
      <div className="w-full h-full max-w-4xl mx-auto flex flex-col justify-end pb-10">
        <div className="space-y-1 md:text-lg">
          {messages.map((msg, idx) => (
            <div key={idx} className="opacity-90">{msg}</div>
          ))}
          {!isDone && (
            <div className="flex gap-2 items-center mt-2">
              <span className="w-3 h-5 bg-primary animate-blink"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BootSequence;
