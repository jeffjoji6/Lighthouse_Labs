"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const customCubicReveal = [0.76, 0, 0.24, 1] as const;

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for core animation (2.8s) + Reveal (0.8s) + Pause (0.6s)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-full bg-[#050505] selection:bg-primary/30">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.0, ease: customCubicReveal }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]"
          >
            <div className="flex items-center -ml-4 md:-ml-8"> {/* Slight offset to visually balance initial center */}
              {/* Core SVG Logo */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-24 md:h-24 shrink-0 overflow-visible relative z-10">
                <path d="M 0 0 H 26 V 74 H 100 V 100 H 0 Z" className="fill-white" />
                <path d="M 37 0 H 63 V 37 H 100 V 63 H 37 Z" className="fill-white" />

                {/* Clean Single Flow Floating Square Sequence */}
                <motion.g
                  animate={{
                    y: [0, 0, -7, -7, 0],
                    x: [0, 0, 7, 7, 0],
                  }}
                  transition={{
                    duration: 2.8,
                    times: [0, 0.15, 0.25, 0.85, 1],
                    ease: ["linear", "easeOut", "linear", "backIn"],
                  }}
                >
                  <motion.rect
                    x="74"
                    y="0"
                    width="26"
                    height="26"
                    animate={{
                      rotate: [0, 0, 1080],
                      fill: ["#ffffff", "#ffffff", "#ffffff", "#f16822"],
                    }}
                    transition={{
                      rotate: { duration: 2.8, times: [0, 0.25, 1], ease: ["linear", "circOut"] },
                      fill: { duration: 2.8, times: [0, 0.25, 0.95, 1] },
                    }}
                    style={{ transformOrigin: "87px 13px" }}
                  />
                </motion.g>
              </svg>

              {/* Reveal Typography Lockup */}
              <motion.div
                initial={{ width: 0, opacity: 0, filter: "blur(8px)", marginLeft: 0 }}
                animate={{ width: "auto", opacity: 1, filter: "blur(0px)", marginLeft: "1.5rem" }}
                transition={{ delay: 2.8, duration: 0.8, ease: customCubicReveal }}
                className="overflow-hidden flex flex-col font-display font-medium leading-[1.1] text-white/95 whitespace-nowrap md:pl-2"
              >
                <span className="text-4xl md:text-6xl uppercase tracking-[0.05em]">Lighthouse</span>
                <span className="text-4xl md:text-6xl uppercase tracking-[0.05em] text-white/70">Labs</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wrapper to hold children mounted underneath but dramatically pushed up */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: isLoading ? "100vh" : 0 }}
        transition={{ duration: 1.0, ease: customCubicReveal }}
        className="w-full bg-background min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Preloader;
