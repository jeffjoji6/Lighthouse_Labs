import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Bot, Cloud, Lightbulb } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Blazing-fast web apps built with modern frameworks that scale effortlessly." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile experiences for iOS and Android." },
  { icon: Palette, title: "UI/UX Design", desc: "Human-centered design that converts visitors into loyal users." },
  { icon: Bot, title: "AI & Automation", desc: "Intelligent workflows and ML-powered features that give you an edge." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Rock-solid infrastructure with CI/CD pipelines and auto-scaling." },
  { icon: Lightbulb, title: "Product Strategy", desc: "From idea to roadmap — we help you build the right thing, the right way." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 noise-overlay">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">What We Build</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`group p-8 rounded-2xl bg-card border border-border hover:glow-orange-border hover:-translate-y-1 transition-all duration-300 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <s.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
