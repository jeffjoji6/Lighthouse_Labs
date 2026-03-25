"use client";

import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden section-dark">
      {/* Orange glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-full bg-primary/15 blur-[80px] md:blur-[120px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6"
        >
          Let's Build Something
          <br />
          <span className="text-gradient-orange">That Lasts.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-base sm:text-lg max-w-xl mx-auto mb-8 md:mb-10 opacity-70 px-2 sm:px-0"
        >
          Whether you're launching a new platform, improving your website, or building custom digital
          tools, Lighthouse Labs helps turn ideas into reliable systems.
        </motion.p>
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex px-8 py-3.5 md:px-10 md:py-4 rounded-full bg-primary text-primary-foreground text-base md:text-lg font-bold hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Start a Project
        </motion.a>
      </div>
    </section>
  );
};

export default CTABanner;
