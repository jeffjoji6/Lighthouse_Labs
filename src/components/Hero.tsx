"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
};

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 40, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 40, stiffness: 150 });

  // Premium Scroll Parallax Effects
  const { scrollY } = useScroll();
  const bgScale = useTransform(scrollY, [0, 1000], [1, 1.4]);

  useEffect(() => {
    mouseX.set(typeof window !== "undefined" ? window.innerWidth / 2 : 0);
    mouseY.set(typeof window !== "undefined" ? window.innerHeight / 2 : 0);
  }, [mouseX, mouseY]);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent | any) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const maskImage = useMotionTemplate`radial-gradient(450px circle at ${smoothX}px ${smoothY}px, black 0%, transparent 100%)`;

  const radialLines = Array.from({ length: 72 }).map((_, i) => (
    <div
      key={i}
      className="absolute w-full h-[1px] bg-foreground origin-center"
      style={{ transform: `rotate(${i * 5}deg)` }}
    />
  ));
  
  const glowingLines = Array.from({ length: 72 }).map((_, i) => (
    <div
      key={`glow-${i}`}
      className="absolute w-full h-[2px] bg-primary origin-center"
      style={{ transform: `rotate(${i * 5}deg)` }}
    />
  ));

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-background pt-32"
    >
      {/* Background Interactive Visuals tied to Scroll */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        {/* Base dim layer */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05]">
          <div className="relative w-[1500px] h-[1500px] flex items-center justify-center animate-[spin_240s_linear_infinite]">
            {radialLines}
            <div className="absolute w-[600px] h-[600px] bg-background rounded-full" />
            <div className="absolute w-[800px] h-[800px] border border-dashed border-foreground bg-transparent rounded-full" />
            <div className="absolute w-[1000px] h-[1000px] border border-dashed border-foreground opacity-50 bg-transparent rounded-full" />
          </div>
        </div>
        
        {/* Interactive glowing spotlight layer */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center opacity-40 mix-blend-multiply"
          style={{ WebkitMaskImage: maskImage, maskImage }}
        >
          <div className="relative w-[1500px] h-[1500px] flex items-center justify-center animate-[spin_240s_linear_infinite]">
            {glowingLines}
            <div className="absolute w-[600px] h-[600px] bg-background rounded-full" />
            <div className="absolute w-[800px] h-[800px] border-2 border-dashed border-primary bg-transparent rounded-full" />
            <div className="absolute w-[1000px] h-[1000px] border-2 border-dashed border-primary opacity-50 bg-transparent rounded-full" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10 text-center max-w-5xl"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display font-medium text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tighter text-foreground"
        >
          Guiding Businesses <br className="md:hidden" /> Through
          <br className="hidden md:block" /> the <span className="text-foreground/60">Digital Ocean.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 md:mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-foreground/60 font-normal leading-relaxed tracking-wide"
        >
          Lighthouse Labs helps businesses build powerful websites, strengthen their online
          presence, and navigate the digital world with confidence.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded bg-primary text-primary-foreground font-semibold text-sm shadow-sm transition-colors hover:bg-primary/90"
          >
            Start a Project
          </motion.a>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded bg-card text-foreground font-semibold text-sm border border-border/50 transition-colors hover:bg-border/30"
          >
            See Our Work
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="my-16 flex items-center justify-center gap-8 text-xs font-semibold text-foreground/40 uppercase tracking-widest">
          <span>Web Development</span>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-foreground/30" />
          <span>Digital Infrastructure</span>
          <span className="hidden md:inline w-1 h-1 rounded-full bg-foreground/30" />
          <span className="hidden md:inline">E-commerce</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
