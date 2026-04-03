"use client";

import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section id="contact" className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 font-display">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto sm:rounded-3xl overflow-hidden sm:border border-white/10 bg-white/[0.02] sm:backdrop-blur-3xl px-4 py-12 sm:px-12 md:py-24 text-center sm:shadow-2xl"
        >
          {/* Subtle built-in glowing light for the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] sm:w-[80%] h-[200px] sm:h-[300px] bg-primary/20 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative font-bold text-4xl sm:text-5xl md:text-7xl mb-5 sm:mb-6 tracking-tight leading-[1.05]"
          >
            Let's Build Something
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FFA033]">
              That Lasts.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative text-foreground/60 text-base sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-sans px-2"
          >
            Whether you're launching a new platform, improving your website, or building custom digital
            tools, Lighthouse Labs helps turn ideas into reliable systems.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="relative inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#FF6B00] to-[#E65C00] text-white text-base sm:text-lg font-semibold shadow-[0_0_30px_rgba(255,107,0,0.3)] sm:shadow-[0_0_40px_rgba(255,107,0,0.4)] hover:shadow-[0_0_60px_rgba(255,107,0,0.6)] hover:scale-105 transition-all duration-300 font-sans"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
