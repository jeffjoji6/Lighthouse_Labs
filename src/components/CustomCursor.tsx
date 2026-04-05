"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Very tight, responsive spring so it feels snappy and attached exactly to the underlying mouse
  const springConfig = { damping: 25, stiffness: 700, mass: 0.1 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    // Ignore mobile since there's no hover
    if (window.matchMedia("(hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Track interactive elements anywhere on the page
      if (target.closest("button, a, [role='button']")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference w-[100px] h-[100px] -ml-[50px] -mt-[50px] hidden lg:block"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isHovering ? 1 : 0,
        scale: isHovering ? 1 : 0.2, // Scaling from 0.2 gives it a satisfying snap out
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative w-full h-full animate-[spin_6s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
          <path
            id="cursorTextPath"
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" // Perfect circle r=35
            fill="none"
          />
          <text 
             className="text-[10px] font-display font-medium uppercase fill-white"
          >
            {/* Circumference is 2 * 3.14 * 35 = ~220. textLength forces perfect seamless wrap */}
            <textPath href="#cursorTextPath" startOffset="0%" textLength="215" lengthAdjust="spacingAndGlyphs">
               CLICK TO EXPLORE • CLICK TO EXPLORE • 
            </textPath>
          </text>
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full" />
      </div>
    </motion.div>
  );
}
