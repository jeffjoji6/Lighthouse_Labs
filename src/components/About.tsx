import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Your Partner for Digital Growth
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                In today's digital world, a website is more than just an online presence — it's the
                foundation of how businesses attract customers, communicate value, and scale operations.
              </p>
              <p>
                At Lighthouse Labs, we help businesses navigate this landscape by designing and building
                modern websites, scalable web platforms, and digital systems that work reliably as
                companies grow.
              </p>
              <p>
                Whether launching a new product, improving an existing website, or building custom
                functionality, our focus is simple: <span className="text-foreground font-medium">build technology that moves businesses forward.</span>
              </p>
            </div>
          </motion.div>

          {/* Visual accent */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="w-80 h-80 rounded-3xl bg-muted/60 border border-border flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10 text-center px-8">
                <p className="font-display text-6xl font-black text-primary mb-2">LL</p>
                <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">Lighthouse Labs</p>
                <p className="text-xs text-muted-foreground/60 mt-2">Engineering What's Next</p>
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute w-96 h-96 rounded-full border border-primary/10" />
            <div className="absolute w-[480px] h-[480px] rounded-full border border-primary/5" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
