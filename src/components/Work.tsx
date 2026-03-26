"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    img: "/project-zenith.png",
    name: "Zenith @ Twilight",
    tags: "Hospitality · Website",
    desc: "A luxury villa resort website showcasing secluded accommodations in Thrissur, featuring immersive visuals and seamless booking integration.",
    url: "https://zenithtwilight.in/",
  },
  {
    img: "/project-loadster.png",
    name: "Loadster",
    tags: "Food & Beverage · Website",
    desc: "A bold, visually-driven brand website for Thrissur's ultimate loaded fries, fried chicken, and smashed burger destination.",
    url: "https://eatloadster.in/",
  },
  {
    img: "/project-jager.png",
    name: "Jager Clothing",
    tags: "E-Commerce · Platform",
    desc: "A premium streetwear e-commerce platform with custom apparel design tools, product drops, and nationwide shipping.",
    url: "https://www.jagerclothing.in/",
  },
  {
    img: "/project-docqueue.png",
    name: "DocQueue",
    tags: "Healthcare · Web App",
    desc: "A healthcare scheduling platform enabling seamless appointment booking, hospital discovery, and visit management.",
    url: "https://docqueue-main-frontend.onrender.com/",
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
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] overflow-hidden">
          <motion.img
            variants={{}} // Crucial: Stop itemVariants cascading down and bouncing the element
            src={p.img}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover object-top blur-[3px] opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:blur-0 group-hover:opacity-100"
            style={{ y: yParallax, scale: 1.15 }} // Scaled up slightly to prevent bounds clipping during parallax
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/30 md:from-[#0a0a0a]/90 md:via-[#0a0a0a]/30 md:to-transparent flex flex-col justify-end p-6 md:p-10 opacity-100 md:opacity-90 transition-opacity duration-500 group-hover:opacity-100">
            <p className="text-[10px] md:text-xs text-primary font-semibold tracking-widest uppercase mb-2 md:mb-3">
              {p.tags}
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-2 text-white">
              {p.name}
            </h3>
            <p className="text-white/80 md:text-white/70 text-sm mb-4 md:mb-6 max-w-sm leading-relaxed drop-shadow-md md:drop-shadow-none">
              {p.desc}
            </p>
            <span className="text-white text-sm font-semibold flex items-center gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Visit Project <span className="text-primary">→</span>
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">
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
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">Work That Speaks</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
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
