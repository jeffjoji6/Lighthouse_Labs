"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const CTABanner = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax for a minimalist geometric background accent
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-background border-y border-border overflow-hidden flex items-center justify-center">
      {/* Abstract Background Element for Awwwards vibe */}
      <motion.div 
        style={{ y }} 
        className="absolute top-0 right-0 w-[800px] h-[800px] border border-foreground/5 rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4"
      />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl font-display">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-primary font-semibold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6"
        >
          Ready to scale?
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-foreground mb-6 sm:mb-8 leading-[1.05]"
        >
          Let's build something <span className="text-foreground/40 block sm:inline">that lasts.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Whether you're launching a new platform or scaling an existing system, we engineer digital solutions that move businesses forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-primary text-primary-foreground text-base font-semibold transition-colors hover:bg-primary/90"
            >
              Start a Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
