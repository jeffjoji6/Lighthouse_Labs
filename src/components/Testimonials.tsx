import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const testimonials = [
  {
    quote: "Lighthouse Labs didn't just build our product — they became an extension of our team. The quality and speed were unmatched.",
    name: "Sarah Chen",
    role: "CTO, NovaPay",
  },
  {
    quote: "We went from concept to App Store in 14 weeks. Their process is dialed in and their communication is world-class.",
    name: "Marcus Johnson",
    role: "Founder, PulseHealth",
  },
  {
    quote: "They understand product, not just code. That's rare. We've tripled our revenue since launching with them.",
    name: "Priya Patel",
    role: "CEO, CartCraft",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as any }
  },
};

const TestimonialCard = ({ t }: { t: any }) => {
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
      className="p-10 rounded-xl bg-card relative group cursor-default overflow-hidden border border-border/50"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(24, 85%, 52%, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute top-0 right-0 p-8 opacity-[0.03] transition-all duration-300">
        <span className="text-9xl font-display font-black text-foreground leading-none">"</span>
      </div>
      <span className="text-4xl font-display font-bold text-foreground/20 leading-none relative z-10 block mb-4">"</span>
      <p className="text-foreground/90 text-sm leading-relaxed mb-8 relative z-10">{t.quote}</p>
      <div className="relative z-10 flex flex-col gap-1 border-t border-border/50 pt-4">
        <p className="font-display font-medium text-sm">{t.name}</p>
        <p className="text-foreground/50 text-xs tracking-wide">{t.role}</p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Clients Who Trust Us</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 group/grid"
          >
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} t={t} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
