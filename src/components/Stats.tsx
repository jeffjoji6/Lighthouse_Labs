"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "End-to-End Ownership",
    desc: "From planning to deployment, we take full ownership of the technology so you can focus on your business.",
  },
  {
    icon: Zap,
    title: "Startup-Speed Execution",
    desc: "Lean development cycles, rapid iterations, and clear weekly progress keep projects moving forward.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    desc: "Every system we build is designed with scalability, reliability, and long-term performance in mind.",
  },
  {
    icon: Globe,
    title: "Technology That Works in the Real World",
    desc: "We focus on practical solutions that improve how businesses operate, sell, and grow online.",
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
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] as any }
  },
};

const FeatureCard = ({ f, index }: { f: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Asymmetric Scroll Parallax: Alternating cards shift at different speeds
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [40, index % 2 === 0 ? -20 : 20]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: yParallax }}
      variants={itemVariants}
      className="flex flex-col gap-4 cursor-default"
    >
      <div className="relative">
        <f.icon className="w-5 h-5 text-foreground opacity-60 relative z-10" strokeWidth={1.5} />
      </div>
      <div>
        <div className="overflow-hidden mb-2">
          <motion.h3
            initial={{ y: "100%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1), ease: [0.25, 1, 0.5, 1] as any }}
            className="font-display font-medium tracking-tight text-base"
          >
            {f.title}
          </motion.h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
      </div>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-base sm:text-lg text-foreground/60 mb-12 md:mb-20 max-w-2xl mx-auto tracking-tight"
        >
          Trusted by startups, growing businesses, and ambitious digital products.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
