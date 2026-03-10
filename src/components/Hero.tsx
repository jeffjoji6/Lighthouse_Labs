import { motion } from "framer-motion";

const tags = ["React", "Node.js", "AI/ML", "Mobile", "Cloud", "TypeScript"];

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay dot-grid">
      {/* Orange radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-primary/10 blur-[150px] pointer-events-none" />

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
            className="px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs text-muted-foreground animate-float"
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
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight"
        >
          We Build Software
          <br />
          <span className="text-gradient-orange">That Scales,</span>
          <br />
          Ships, & Lasts.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Lighthouse Labs is a full-service software agency crafting web apps,
          mobile products, and AI-powered tools for ambitious teams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-base hover:glow-orange-sm hover:scale-105 transition-all duration-200"
          >
            Start a Project
          </a>
          <a
            href="#work"
            className="px-8 py-3.5 rounded-full border border-foreground/20 text-foreground font-semibold text-base hover:border-foreground/50 transition-all duration-200"
          >
            See Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
