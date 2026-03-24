"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const ServiceCard = ({ s }: { s: any }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      className="group relative rounded-xl bg-card border border-border/50 overflow-hidden transition-colors duration-300"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(24, 85%, 52%, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 p-10 h-full cursor-default">
        <s.icon className="w-8 h-8 text-foreground mb-8 opacity-80" strokeWidth={1.5} />
        <h3 className="font-display text-xl font-medium tracking-tight mb-3">{s.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
        <ul className="space-y-2">
          {s.bullets.map((b: string) => (
            <li key={b} className="flex items-center gap-3 text-sm text-foreground/80">
              <span className="w-[1.5px] h-3 bg-primary shrink-0 opacity-50" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Services</p>
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">
                Digital Solutions That Move Businesses Forward
              </h2>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 group/grid">
            {services.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
