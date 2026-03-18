import { motion } from "framer-motion";
import UnicornScene from "unicornstudio-react";

const tags = ["Website Development", "E-commerce Platforms", "Digital Infrastructure", "Business Websites", "Web Applications", "Digital Growth"];

const tagPositions = [
  "top-[15%] left-[5%]",
  "top-[10%] right-[8%]",
  "top-[45%] right-[3%]",
  "bottom-[20%] right-[10%]",
  "bottom-[15%] left-[3%]",
  "top-[35%] left-[2%]",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Unicorn Background */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-auto">
        <UnicornScene
          projectId="vfZ76bXTgNQ4KVeQSIqb"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.4/dist/unicornStudio.umd.js"
        />
      </div>
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 z-0 bg-background/50 pointer-events-none" />

      {/* Floating tags */}
      {tags.map((tag, i) => (
        <motion.div
          key={tag}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
          className={`absolute hidden lg:block ${tagPositions[i]} z-10`}
        >
          <div
            className="px-5 py-2 rounded-full border border-border/50 bg-background/60 backdrop-blur-md text-sm font-medium text-foreground/90 animate-float shadow-sm"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {tag}
          </div>
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-foreground"
        >
          Guiding Businesses
          <br />
          <span className="text-gradient-orange">Through the</span>
          <br />
          Digital Ocean.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-xl text-foreground/80 font-medium leading-relaxed"
        >
          Lighthouse Labs helps businesses build powerful websites, strengthen their online
          presence, and navigate the digital world with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-full border border-border text-foreground font-semibold text-base hover:border-foreground/30 hover:bg-muted transition-all duration-200"
          >
            See Our Work
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 text-sm font-semibold text-foreground/70 tracking-widest uppercase"
        >
          Web Development · Business Websites · E-commerce Platforms · Digital Infrastructure
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
