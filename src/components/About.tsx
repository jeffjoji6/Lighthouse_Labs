"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as any } 
  },
};

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Real-time scroll triggers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Makes the lighthouse beam rotate down as you scroll
  const beamRotation = useTransform(scrollYProgress, [0, 1], [-90, 270]);
  
  // Creates a floating parallax drift for the main object circle
  const visualY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl flex flex-col items-center text-center relative z-10">
        {/* Subtle background glow added for dynamic structure */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-[40vh] bg-primary/5 blur-[80px] rounded-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        />

        {/* Text centered deeply with stronger scroll effect */}
        <motion.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={textVariants} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            About
          </motion.div>
          
          <motion.h2 variants={textVariants} className="font-display text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl font-bold md:font-medium mb-8 sm:mb-10 tracking-tight px-2">
            Your Partner for <br /> Digital Growth
          </motion.h2>
          
          <div className="space-y-4 sm:space-y-6 text-foreground/70 leading-relaxed text-base sm:text-lg md:text-2xl max-w-3xl mx-auto font-light px-2 sm:px-0">
            <motion.p variants={textVariants} className="opacity-90">
              In today's digital world, a website is more than just an online presence — it's the
              foundation of how businesses attract customers, communicate value, and scale operations.
            </motion.p>
            <motion.p variants={textVariants} className="opacity-90">
              At Lighthouse Labs, we help businesses navigate this landscape by designing and building
              modern websites, scalable web platforms, and digital systems that work reliably as
              companies grow.
            </motion.p>
            <motion.p variants={textVariants} className="pt-6 sm:pt-4">
              <span className="text-foreground font-medium text-lg sm:text-2xl md:text-3xl inline-block px-4 sm:px-0 border-l-2 border-primary sm:border-none pl-4 sm:pl-0 text-left sm:text-center">
                Our focus is simple: build technology that moves businesses forward.
              </span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
