import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-End Ownership",
    desc: "From planning to deployment, we take full ownership of the technology so you can focus on your business.",
  },
  {
    icon: Zap,
    title: "Startup-Speed Execution",
    desc: "Lean development cycles, rapid iterations, and clear weekly progress keep projects moving forward.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    desc: "Every system we build is designed with scalability, reliability, and long-term performance in mind.",
  },
  {
    icon: Globe,
    title: "Technology That Works in the Real World",
    desc: "We focus on practical solutions that improve how businesses operate, sell, and grow online.",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto"
        >
          Trusted by startups, growing businesses, and teams building ambitious digital products.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-4"
            >
              <f.icon className="w-6 h-6 text-primary shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-display font-bold text-base mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
