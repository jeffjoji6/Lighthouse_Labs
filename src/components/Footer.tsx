"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-[#a1a1aa] overflow-hidden pt-16 md:pt-24 pb-10 md:pb-12">
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl">

        {/* Top Dark "Safety Priority" Emulation Area */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24 pb-12 md:pb-20 border-b border-white/10"
        >
          <div>
            <h2 className="font-display text-white text-2xl sm:text-3xl font-medium tracking-tight mb-3 md:mb-4 leading-tight">
              Built with reliability<br />as a priority
            </h2>
            <p className="text-sm leading-relaxed max-w-sm">
              Our engineering systems are designed to perform reliably under pressure, securing your business operations and providing confident uptime.
            </p>
            <a href="#contact" className="mt-6 md:mt-8 inline-block px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-sm hover:bg-neutral-200 transition-colors">
              Get Started
            </a>
          </div>
          <div className="relative flex items-center justify-center p-8 bg-black/50 border border-white/5 rounded-2xl overflow-hidden min-h-[180px] md:min-h-0">
            {/* Minimalist radial circle abstraction */}
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/5 rounded-full" />
            <div className="absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] border border-white/10 rounded-full" />
            <div className="absolute w-[60px] h-[60px] md:w-[100px] md:h-[100px] border border-white/20 rounded-full" />
            <div className="absolute w-[2px] h-[2px] bg-primary rounded-full shadow-[0_0_15px_1px_var(--primary)]" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Brand */}
          <motion.div variants={columnVariants} className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-white font-display font-bold text-lg sm:text-xl tracking-tight">Lighthouse Labs.</span>
            </div>
            <p className="text-xs">Engineering What's Next.</p>
          </motion.div>

          {/* Services */}
          <motion.div variants={columnVariants}>
            <h4 className="font-display font-medium text-[11px] sm:text-xs uppercase tracking-widest text-[#d4d4d8] mb-4 md:mb-6">Services</h4>
            <div className="space-y-2.5 md:space-y-3">
              {["Website Development", "Shopify Development", "Custom Web Applications", "Digital Presence Optimization"].map((s) => (
                <a key={s} href="#services" className="block text-xs hover:text-white transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={columnVariants}>
            <h4 className="font-display font-medium text-[11px] sm:text-xs uppercase tracking-widest text-[#d4d4d8] mb-4 md:mb-6">Company</h4>
            <div className="space-y-2.5 md:space-y-3">
              {["About", "Process", "Work", "Contact"].map((s) => (
                <a key={s} href={`#${s.toLowerCase()}`} className="block text-xs hover:text-white transition-colors duration-300">
                  {s}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={columnVariants} className="col-span-2 md:col-span-1">
            <h4 className="font-display font-medium text-[11px] sm:text-xs uppercase tracking-widest text-[#d4d4d8] mb-4 md:mb-6">Get in Touch</h4>
            <div className="space-y-2.5 md:space-y-3">
              <a href="mailto:labs.lighthouse@gmail.com" className="block text-xs hover:text-white transition-colors duration-300">
                labs.lighthouse@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/lighthouse-labs/" target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-white transition-colors duration-300">
                LinkedIn
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Metadata */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6"
        >
          <p className="text-[10px] leading-relaxed max-w-2xl opacity-50">
            Lighthouse Labs is a technical development studio specializing in modern internet systems, e-commerce architectures, and advanced web applications.
          </p>
          <p className="text-[10px] uppercase tracking-widest opacity-50 shrink-0">
            © {new Date().getFullYear()} Lighthouse Labs.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
