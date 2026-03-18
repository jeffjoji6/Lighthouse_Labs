import { motion } from "framer-motion";
import { Globe, ShoppingCart, Cpu, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Modern, high-performance websites designed to represent your business and convert visitors into customers.",
    bullets: ["Business websites", "Corporate platforms", "Landing pages", "Performance-optimized builds"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Online Platforms",
    desc: "We build scalable online storefronts and commerce platforms designed for growing businesses.",
    bullets: ["Shopify development", "Custom commerce solutions", "Headless e-commerce architecture", "Store optimization and automation"],
  },
  {
    icon: Cpu,
    title: "Custom Web Applications",
    desc: "When off-the-shelf tools aren't enough, we design and build custom systems tailored to your operations.",
    bullets: ["Dashboards", "Internal tools", "Workflow systems", "Business automation platforms"],
  },
  {
    icon: TrendingUp,
    title: "Digital Presence & Optimization",
    desc: "A strong online presence goes beyond launching a website. We help businesses structure their digital foundations.",
    bullets: ["SEO-ready websites", "Analytics setup", "Performance monitoring", "Digital strategy consultation"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
            Digital Solutions That Move Businesses Forward
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:glow-orange-border hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
