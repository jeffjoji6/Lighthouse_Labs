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
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text with subtle scroll parallax */}
          <motion.div
            style={{ y: textY }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px" }}
          >
            <motion.p variants={textVariants} className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">About</motion.p>
            <motion.h2 variants={textVariants} className="font-display text-3xl sm:text-4xl md:text-5xl font-medium mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Your Partner for Digital Growth
            </motion.h2>
            <div className="space-y-4 md:space-y-6 text-foreground/70 leading-relaxed text-base md:text-lg max-w-md">
              <motion.p variants={textVariants}>
                In today's digital world, a website is more than just an online presence — it's the
                foundation of how businesses attract customers, communicate value, and scale operations.
              </motion.p>
              <motion.p variants={textVariants}>
                At Lighthouse Labs, we help businesses navigate this landscape by designing and building
                modern websites, scalable web platforms, and digital systems that work reliably as
                companies grow.
              </motion.p>
              <motion.p variants={textVariants}>
                Whether launching a new product, improving an existing website, or building custom
                functionality, our focus is simple: <span className="text-foreground font-medium">build technology that moves businesses forward.</span>
              </motion.p>
            </div>
          </motion.div>

          {/* Visual accent with aggressive scroll mapping */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <motion.div 
              style={{ y: visualY }}
              className="w-80 h-80 rounded-full bg-card flex items-center justify-center relative overflow-hidden"
            >
              {/* Scroll-mapped Lighthouse Beam */}
              <motion.div 
                style={{
                  rotate: beamRotation,
                  background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(24, 85%, 52%, 0.25) 60deg, transparent 120deg)'
                }}
                className="absolute inset-[-50%] pointer-events-none mix-blend-plus-lighter"
              />
              <div className="relative z-10 w-full h-full text-center px-8 flex flex-col items-center justify-center bg-card/90 backdrop-blur-2xl rounded-full m-1 border border-white/5">
                <p className="font-display text-6xl font-medium tracking-tighter text-foreground mb-4">
                  LL
                </p>
                <p className="text-[10px] text-foreground/40 font-semibold tracking-[0.2em] uppercase">Lighthouse Labs</p>
              </div>
            </motion.div>
            
            {/* Decorative rings that stay fixed to separate planes */}
            <div className="absolute w-96 h-96 rounded-full border border-border border-dashed opacity-50" />
            <div className="absolute w-[450px] h-[450px] rounded-full border border-border border-dashed opacity-25" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
