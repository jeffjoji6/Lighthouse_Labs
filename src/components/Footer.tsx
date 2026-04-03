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
              <a href="https://www.instagram.com/lighthouselabs_/?utm_source=ig_web_button_share_sheet" target="_blank" rel="noopener noreferrer" className="block text-[11px] sm:text-[13px] font-medium text-[#d4d4d8] hover:text-white hover:translate-x-1 origin-left transition-all duration-300">
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
