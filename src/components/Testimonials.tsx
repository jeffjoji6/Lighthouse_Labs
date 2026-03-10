import { motion } from "framer-motion";

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

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Clients Who Trust Us</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <span className="text-5xl font-display font-bold text-primary leading-none">"</span>
              <p className="text-foreground text-sm leading-relaxed mt-2 mb-6">{t.quote}</p>
              <div>
                <p className="font-display font-bold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
