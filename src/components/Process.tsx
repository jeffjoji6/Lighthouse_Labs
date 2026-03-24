import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We start by understanding your business goals, users, and market to identify the right problems to solve." },
  { num: "02", title: "Design", desc: "Through wireframes and interface design, we transform ideas into structured product experiences." },
  { num: "03", title: "Build", desc: "Clean, production-ready code delivered in agile cycles with transparent progress updates." },
  { num: "04", title: "Launch", desc: "Deployment, monitoring, and ongoing improvements ensure your product performs reliably." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any }
  },
};

const Process = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-20 md:flex items-end justify-between border-b border-border/50 pb-10">
            <div>
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Process</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">How We Work</h2>
            </div>
            <p className="hidden md:block text-muted-foreground text-sm max-w-xs text-right leading-relaxed mb-2">
              A systematic approach to building reliable digital infrastructure.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 relative z-10 w-full pt-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                variants={itemVariants}
                className="relative text-left group cursor-default"
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.span
                    className="font-display text-4xl font-light text-foreground/10 transition-colors duration-500 group-hover:text-primary"
                  >
                    {step.num}
                  </motion.span>
                  <div className="h-[1px] w-8 bg-border transition-colors duration-500 group-hover:bg-primary/50" />
                </div>

                <div className="pr-4">
                  <div className="overflow-hidden mb-4">
                    <motion.h3
                      initial={{ y: "100%" }}
                      whileInView={{ y: "0%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.3, ease: [0.25, 1, 0.5, 1] as any }}
                      className="font-display text-xl font-medium tracking-tight group-hover:text-primary transition-colors duration-300"
                    >
                      {step.title}
                    </motion.h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
