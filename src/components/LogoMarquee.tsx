"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp", "Velocity", "Quantum AI", "NovaPay",
  "Orbis Health", "ScaleUp", "DataForge", "CloudNine",
];

const LogoMarquee = () => {
  return (
    <section className="py-10 md:py-16 border-y border-border overflow-hidden bg-muted/50">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-xs sm:text-sm text-muted-foreground mb-6 md:mb-10 tracking-widest uppercase font-medium"
      >
        Trusted by ambitious teams
      </motion.p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="mx-6 sm:mx-8 md:mx-12 flex items-center text-base sm:text-lg md:text-xl font-display font-bold text-muted-foreground/30 select-none"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
