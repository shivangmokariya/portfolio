"use client";

import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const secondaryCursorRef = useRef<HTMLDivElement>(null);
  const motionBlurRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if desktop (min-width: 1024px)
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      positionRef.current.mouseX = clientX;
      positionRef.current.mouseY = clientY;
      
      if (!isVisible) setIsVisible(true);

      // Check for hover interactive elements
      const target = event.target as HTMLElement;
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest('[role="button"]') ||
        target.closest('[data-cursor-hover]');
      
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);
      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.15;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.15;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      // We update ONLY the translation on the refs
      // To avoid transition lag, we do not use CSS transitions on the transform property of these elements
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (secondaryCursorRef.current) {
        secondaryCursorRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }

      if (motionBlurRef.current) {
        motionBlurRef.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(positionRef.current.key);
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Primary Dot Wrapper */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-0 h-0 z-[100]"
      >
          {/* Inner Dot and Scale/Color effects */}
          <div className={`w-2 h-2 -ml-1 -mt-1 rounded-full transition-all duration-200 ease-out ${
            isHovered ? "scale-[2] rotate-45 bg-[#00ff41]" : "scale-100 bg-[#00ff9f]"
          }`}
          style={{
            boxShadow: isHovered 
              ? '0 0 15px #00ff41, 0 0 30px #00ff41' 
              : '0 0 10px #00ff9f',
          }} />
      </div>

      {/* Trailing Glow Wrapper */}
      <div
        ref={secondaryCursorRef}
        className="fixed top-0 left-0 w-0 h-0"
      >
          <div className={`w-8 h-8 -ml-4 -mt-4 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/5 transition-all duration-300 ease-out blur-[2px] ${
            isHovered ? "scale-[2.5] bg-[#00ff41]/10 border-[#00ff41]/50" : "scale-100"
          }`}
          style={{
            boxShadow: isHovered 
              ? 'inset 0 0 15px rgba(0, 255, 65, 0.2)' 
              : 'inset 0 0 10px rgba(0, 255, 159, 0.1)',
          }} />
      </div>
      
      {/* Motion Blur Trail Wrapper */}
      <div
        ref={motionBlurRef}
        className="fixed top-0 left-0 w-0 h-0"
      >
          <div className={`w-12 h-12 -ml-6 -mt-6 rounded-full bg-[#00ff9f]/10 blur-[8px] transition-all duration-500 ${
             isHovered ? "opacity-30 scale-150" : "opacity-20 scale-100"
          }`} />
      </div>
    </div>
  );
};
