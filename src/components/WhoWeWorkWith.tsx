import { motion } from "framer-motion";

const audiences = [
  "Startups launching new products",
  "Businesses scaling online operations",
  "E-commerce brands expanding their platforms",
  "Companies modernizing internal systems",
];

const WhoWeWorkWith = () => {
  return (
    <>
      {/* Section 8 — Who We Work With */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Our Clients</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Built for Businesses That Are Ready to Grow
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We work with teams that understand the importance of reliable digital infrastructure.
              </p>
              <ul className="space-y-4">
                {audiences.map((a, i) => (
                  <motion.li
                    key={a}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {a}
                  </motion.li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-8 leading-relaxed">
                If your business relies on technology to grow, we can help build the systems that support it.
              </p>
            </motion.div>

            {/* Section 9 — Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 rounded-2xl bg-card border border-border relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Philosophy</p>
              <h3 className="font-display text-2xl font-bold mb-6">
                A Lighthouse for Your Digital Journey
              </h3>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  In the open ocean of technology, businesses need clarity, direction, and reliable systems to move forward.
                </p>
                <p>
                  Lighthouse Labs exists to guide companies through this complexity — building strong digital foundations that help them operate confidently in the online world.
                </p>
                <p className="text-foreground font-medium">
                  Our goal isn't just to build websites.
                  <br />
                  It's to build digital infrastructure that businesses can depend on.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeWorkWith;
