import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: project1,
    name: "NovaPay Dashboard",
    tags: "Fintech · Web App",
    desc: "A real-time analytics platform designed to process and visualize large-scale financial data.",
  },
  {
    img: project3,
    name: "CartCraft",
    tags: "E-Commerce · Platform",
    desc: "A scalable commerce platform powering modern online storefronts and operational workflows.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as any }
  },
};

// Isolated card component to strictly track bounding physics per card
const ProjectCard = ({ p, index }: { p: any, index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Awwwards-tier internal optical parallax tracking
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      className="group relative rounded-xl cursor-pointer bg-card overflow-hidden" // strict overflow hidden
    >
      <div className="relative w-full h-[400px] overflow-hidden">
        <motion.img
          variants={{}} // Crucial: Stop itemVariants cascading down and bouncing the element
          src={p.img}
          alt={p.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ y: yParallax, scale: 1.15 }} // Scaled up slightly to prevent bounds clipping during parallax
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent flex flex-col justify-end p-10 opacity-90 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-xs text-primary font-semibold tracking-widest uppercase mb-3">
            {p.tags}
          </p>
          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2 text-white">
            {p.name}
          </h3>
          <p className="text-white/70 text-sm mb-6 max-w-sm leading-relaxed">
            {p.desc}
          </p>
          <span className="text-white text-sm font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            View Case Study <span className="text-primary">→</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-24 bg-background overflow-hidden">
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
            <p className="text-primary text-xs font-semibold tracking-widest uppercase mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight">Work That Speaks</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.name} p={p} index={i} />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center font-display text-foreground/50 tracking-wide text-sm mt-16"
          >
            Selected examples of products and platforms built by Lighthouse Labs.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
