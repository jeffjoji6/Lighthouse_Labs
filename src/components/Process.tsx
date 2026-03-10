import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discover", desc: "We dig into your goals, users, and market to define the right problem to solve." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and a polished UI that makes your product feel inevitable." },
  { num: "03", title: "Build", desc: "Clean, tested code shipped in agile sprints — transparent progress every week." },
  { num: "04", title: "Launch", desc: "Deployment, monitoring, and optimization to ensure a flawless go-live." },
];

const Process = () => {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">How We Work</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-primary/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center md:text-left"
            >
              <span className="inline-block font-display text-3xl font-black text-primary mb-4 relative z-10 bg-background px-2">
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
