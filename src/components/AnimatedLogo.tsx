"use client";

import { motion } from "framer-motion";

const AnimatedLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* SVG Geometric Logo with overflow-visible to allow the square to float outside the bounding box */}
      <svg viewBox="0 0 100 100" className="w-8 h-8 shrink-0 overflow-visible">
        {/* Outer L */}
        <path d="M 0 0 H 26 V 74 H 100 V 100 H 0 Z" className="fill-foreground transition-colors" />
        
        {/* Inner L */}
        <path d="M 37 0 H 63 V 37 H 100 V 63 H 37 Z" className="fill-foreground transition-colors" />
        
        {/* Floating Animated Orange Square */}
        <motion.rect
          x="74"
          y="0"
          width="26"
          height="26"
          className="fill-primary"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          style={{ originX: "87px", originY: "13px" }}
        />
      </svg>

      {/* Typographic Lockup */}
      <div className="flex flex-col font-display font-bold leading-[1.1] tracking-widest text-foreground transition-colors uppercase">
        <span className="text-[12px] sm:text-[13px] tracking-[0.1em]">Lighthouse</span>
        <span className="text-[12px] sm:text-[13px] text-foreground/70 tracking-[0.1em]">Labs</span>
      </div>
    </div>
  );
};

export default AnimatedLogo;
