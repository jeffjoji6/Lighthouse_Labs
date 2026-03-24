import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Start off-screen
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // The outer ring has a trailing spring
  const ringX = useSpring(mouseX, { damping: 40, stiffness: 400, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 40, stiffness: 400, mass: 0.5 });
  
  // The dot is extremely responsive
  const dotX = useSpring(mouseX, { damping: 60, stiffness: 1200, mass: 0.1 });
  const dotY = useSpring(mouseY, { damping: 60, stiffness: 1200, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Determine if the user is hovering over an interactive element
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null || 
        target.closest('button') !== null;
        
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer ? 0 : 1,
          opacity: isPointer ? 0 : 1
        }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Outer Trailing Reaction Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border transition-colors"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 48 : 36,
          height: isPointer ? 48 : 36,
          backgroundColor: "transparent",
          borderColor: isPointer ? "rgba(24, 85%, 52%, 0.2)" : "rgba(24, 85%, 52%, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      />
      
      {/* Ambient Large Trailing Light (Lowest Z index) */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[-1] w-64 h-64 rounded-full bg-primary/10 blur-[80px]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isPointer ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
};

export default CursorGlow;
