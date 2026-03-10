import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden section-dark">
      {/* Orange glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/15 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          Ready to Build Something
          <br />
          <span className="text-gradient-orange">That Lasts?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-lg max-w-xl mx-auto mb-10 opacity-70"
        >
          Let's turn your idea into a product your users love.
        </motion.p>
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="inline-flex px-10 py-4 rounded-full bg-primary text-primary-foreground text-lg font-bold hover:opacity-90 hover:scale-105 transition-all duration-200"
        >
          Let's Talk
        </motion.a>
      </div>
    </section>
  );
};

export default CTABanner;
