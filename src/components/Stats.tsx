import { motion } from "framer-motion";
import { Shield, Zap, TrendingUp } from "lucide-react";

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "6+", label: "Years Building" },
  { num: "100%", label: "Client Retention" },
];

const features = [
  { icon: Shield, title: "End-to-End Ownership", desc: "We handle everything from architecture to deployment — you focus on your business." },
  { icon: Zap, title: "Startup-Speed Execution", desc: "Lean sprints, fast iterations, and weekly deliverables that keep momentum alive." },
  { icon: TrendingUp, title: "Built to Scale", desc: "Every line of code is written with growth in mind — performance-first, always." },
];

const Stats = () => {
  return (
    <section className="py-24 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl font-extrabold text-primary">{s.num}</p>
              <p className="mt-2 text-muted-foreground text-sm">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <h3 className="font-display font-bold text-lg mb-1">{f.title}</h3>
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
