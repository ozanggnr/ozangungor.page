import { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;
    
    // Easing loop to make the outer circle follow the inner dot smoothly
    const render = () => {
      setTrailingPosition((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className="fixed pointer-events-none z-[9999] w-8 h-8 rounded-full border border-primary/60 hidden md:block"
        style={{ 
          transform: `translate(${trailingPosition.x - 16}px, ${trailingPosition.y - 16}px) ${isPointer ? 'scale(1.5)' : 'scale(1)'}`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#00ff9f] hidden md:block"
        style={{ 
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CursorTracker;
