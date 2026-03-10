import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { img: project1, name: "NovaPay Dashboard", tags: "Fintech · Web App", desc: "A real-time analytics platform handling millions of transactions daily." },
  { img: project2, name: "PulseHealth", tags: "Healthcare · Mobile", desc: "A patient engagement app used across 40+ clinics nationwide." },
  { img: project3, name: "CartCraft", tags: "E-Commerce · Platform", desc: "A headless commerce engine powering $20M+ in annual revenue." },
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">Work That Speaks</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-border"
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-primary/20 transition-colors duration-300 flex flex-col justify-end p-8">
                <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-2">{p.tags}</p>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 text-primary-foreground">{p.name}</h3>
                <p className="text-primary-foreground/80 text-sm mb-3">{p.desc}</p>
                <span className="text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Case Study →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
