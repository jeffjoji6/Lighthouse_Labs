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

const OceanWaves = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[180px] md:h-[220px] pointer-events-none z-0 mix-blend-screen opacity-[0.06]">

      {/* Wave 3 - Deep Background, slow */}
      <motion.svg
        animate={{ x: [0, -1200] }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[2400px] h-[120px] md:h-[160px] opacity-30"
        viewBox="0 0 2400 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 140 Q 150 110 300 140 T 600 140 T 900 140 T 1200 140 T 1500 140 T 1800 140 T 2100 140 T 2400 140 V 180 H 0 Z"
          fill="currentColor"
          className="text-primary"
        />
      </motion.svg>

      {/* Wave 2 - Midground, offset phase, medium speed, opposing motion */}
      <motion.svg
        animate={{ x: [-1200, 0] }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[2400px] h-[120px] md:h-[160px] opacity-50"
        viewBox="0 0 2400 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 120 Q 150 160 300 120 T 600 120 T 900 120 T 1200 120 T 1500 120 T 1800 120 T 2100 120 T 2400 120 V 180 H 0 Z"
          fill="white"
        />
      </motion.svg>

      {/* Subtle Lighthouse Silhouette */}
      {/* Positioned between the midground and foreground waves for 3D depth */}
      <svg
        viewBox="0 0 64 128"
        className="absolute bottom-[-10px] right-[10%] md:right-[15%] w-[60px] md:w-[90px] h-auto opacity-70 text-white"
        fill="currentColor"
      >
        <path d="M32 4 L36 10 H28 Z" />
        <rect x="28" y="10" width="8" height="4" />
        <rect x="22" y="14" width="20" height="3" rx="1" />
        <rect x="26" y="17" width="12" height="15" />
        <rect x="20" y="32" width="24" height="4" rx="1" />
        <path d="M24 36 L12 128 H52 L40 36 Z" />
      </svg>

      {/* Wave 1 - Foreground, fast */}
      <motion.svg
        animate={{ x: [0, -1200] }}
        transition={{ duration: 15, ease: "linear", repeat: Infinity }}
        className="absolute bottom-0 left-0 w-[2400px] h-[120px] md:h-[160px] opacity-90"
        viewBox="0 0 2400 180"
        preserveAspectRatio="none"
      >
        <path
          d="M 0 100 Q 150 50 300 100 T 600 100 T 900 100 T 1200 100 T 1500 100 T 1800 100 T 2100 100 T 2400 100 V 180 H 0 Z"
          fill="currentColor"
          className="text-primary"
        />
      </motion.svg>

      {/* Absolute Bottom Solid Cap */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] bg-primary opacity-50" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0a] text-[#a1a1aa] overflow-hidden pt-16 md:pt-24 pb-10 md:pb-10">
      <OceanWaves />
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-8 sm:gap-12 md:gap-16"
        >
          {/* Brand */}
          <motion.div variants={columnVariants} className="col-span-2 md:col-span-1 mb-2 md:mb-0 pr-0 md:pr-4">
            <div className="flex flex-col gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              <span className="text-white font-display font-bold text-xl sm:text-2xl md:text-3xl tracking-tight">Lighthouse Labs.</span>
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-medium tracking-wide">Engineering What's Next.</p>
            </div>
            <p className="text-[11px] sm:text-xs leading-relaxed max-w-sm mt-4 sm:mt-6 opacity-70">
              We design and build modern websites, scalable web platforms, and digital systems that work reliably as companies grow.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h4 className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white mb-4 sm:mb-6">Services</h4>
            <div className="space-y-3 sm:space-y-4">
              {["Website Development", "E-Commerce Development", "Custom Web Applications", "Digital Presence Optimization"].map((s) => (
                <div key={s} className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] transition-all duration-300">
                  {s}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={columnVariants} className="col-span-1">
            <h4 className="font-display font-bold text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white mb-4 sm:mb-6">Get in Touch</h4>
            <div className="space-y-3 sm:space-y-4">
              <a href="mailto:sales@lighthouselabs.in" className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] hover:text-white hover:translate-x-1 origin-left transition-all duration-300">
                sales@lighthouselabs.in
              </a>
              <a href="https://www.linkedin.com/company/lighthouse-labs-in/" target="_blank" rel="noopener noreferrer" className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] hover:text-white hover:translate-x-1 origin-left transition-all duration-300">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/lighthouselabs.in/" target="_blank" rel="noopener noreferrer" className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] hover:text-white hover:translate-x-1 origin-left transition-all duration-300">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/19iHkshHiY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] hover:text-white hover:translate-x-1 origin-left transition-all duration-300">
                Facebook
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
          className="mt-12 md:mt-20 pt-6 md:pt-8  flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6"
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
