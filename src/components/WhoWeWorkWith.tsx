import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const audiences = [
  "Startups launching new products",
  "Businesses scaling online operations",
  "E-commerce brands expanding their platforms",
  "Companies modernizing internal systems",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as any }
  },
};

const PhilosophyCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      className="p-12 rounded-2xl bg-card relative group cursor-default overflow-hidden border border-border/50"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(24, 85%, 52%, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">
        <h3 className="font-display text-2xl font-medium tracking-tight mb-6">
          A Lighthouse for Your Digital Journey
        </h3>
        <div className="space-y-6 text-foreground/70 text-sm leading-relaxed">
          <p>
            In the open ocean of technology, businesses need clarity, direction, and reliable systems to move forward.
          </p>
          <p>
            Lighthouse Labs exists to guide companies through this complexity — building strong digital foundations that help them operate confidently in the online world.
          </p>
          <p className="text-foreground font-medium pt-4 border-t border-border/50">
            Our goal isn't just to build websites.
            <br />
            It's to build digital infrastructure that businesses can depend on.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const WhoWeWorkWith = () => {
  return (
    <>
      <section className="py-24 overflow-hidden bg-background">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              >
                <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Our Clients</p>
                <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-[1.1] tracking-tight">
                  Built for Businesses Ready to Grow
                </h2>
                <p className="text-foreground/70 mb-10 leading-relaxed max-w-md text-lg">
                  We work with technical teams and founders that understand the importance of truly reliable digital infrastructure.
                </p>
              </motion.div>

              <motion.ul variants={containerVariants} className="space-y-6">
                {audiences.map((a) => (
                  <motion.li
                    key={a}
                    variants={itemVariants}
                    className="flex items-center gap-4 text-foreground/80 font-medium"
                  >
                    <span
                      className="w-[2px] h-4 bg-primary shrink-0 opacity-50"
                    />
                    {a}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Section 9 — Philosophy */}
            <PhilosophyCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeWorkWith;
