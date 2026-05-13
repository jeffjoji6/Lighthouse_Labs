"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { Send, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const formRed = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    if (!formRed.current) return;

    try {
      // 1. Send data to CRM
      const formData = new FormData(formRed.current);
      const data = Object.fromEntries(formData.entries());
      
      // Placeholder API endpoint for the CRM - replace with your actual CRM endpoint
      const crmEndpoint = process.env.NEXT_PUBLIC_CRM_URL 
        ? `${process.env.NEXT_PUBLIC_CRM_URL}/api/webhooks/contact`
        : 'https://app.lighthouselabs.in/api/webhooks/contact';

      // We don't await this so it doesn't block the EmailJS send, 
      // or we can await it if we want to guarantee it. We'll do it in parallel or fire-and-forget.
      fetch(crmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      }).catch(err => console.error("CRM Sync Error:", err));

      // 2. Keep EmailJS as it is
      await emailjs.sendForm('service_43dnadc', 'template_ry940gb', formRed.current, {
        publicKey: 'l_eHLlAfKqqbOy4Xe',
      });

      setStatus("success");
      formRed.current?.reset();
    } catch (error: any) {
      console.error('FAILED...', error.text || error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const radialLines = Array.from({ length: 72 }).map((_, i) => (
    <div
      key={i}
      className="absolute w-full h-[1px] bg-black origin-center"
      style={{ transform: `rotate(${i * 5}deg)` }}
    />
  ));

  return (
    <main className="min-h-screen lg:h-screen bg-[#fafafa] text-[#111] flex flex-col relative lg:overflow-hidden">
      <Navbar />

      <section className="flex-1 relative px-0 sm:px-10 py-16 lg:py-0 flex flex-col justify-center">
        {/* Ultra-minimalist Ambient Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Quarter Ray Rotating Effect (Positioned bottom right behind the form) */}
          <div className="absolute -bottom-[30vw] -right-[30vw] w-[110vw] h-[110vw] flex items-center justify-center animate-[spin_240s_linear_infinite] opacity-[0.12]"
            style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)', maskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)' }}>
            {radialLines}
            <div className="absolute w-[40%] h-[40%] bg-[#fafafa] rounded-full" />
            <div className="absolute w-[60%] h-[60%] border border-dashed border-black rounded-full" />
            <div className="absolute w-[80%] h-[80%] border border-dashed border-black opacity-50 rounded-full" />
          </div>

          {/* Ambient Glows */}
          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-black/[0.02] blur-[100px] mix-blend-multiply" />

          {/* Premium Noise Texture */}
          <div className="absolute inset-0 opacity-[0.06] mix-blend-darken" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="container mx-auto max-w-[1400px] relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 lg:mb-10 xl:mb-16"
          >
          </motion.div>

          {/* Desktop Single-Screen Layout Lock */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative w-full pt-2">
            {/* Left Col - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="lg:col-span-5 flex flex-col"
            >
              <h1 className="font-display text-5xl md:text-6xl xl:text-[4.5rem] font-medium tracking-tight leading-[1.05] mb-6 xl:mb-8 mt-2">
                Let's turn your idea into <span className="text-primary italic font-serif">reality.</span>
              </h1>
              <p className="text-black/70 text-base md:text-lg xl:text-xl font-light max-w-md leading-relaxed mb-4">
                Have a project in mind or just want to say hi? We'd love to hear from you. Drop us a message below, or email us directly at <a href="mailto:sales@lighthouselabs.in" className="text-black hover:text-primary transition-colors border-b border-black/40 hover:border-primary pb-0.5">sales@lighthouselabs.in</a>.
              </p>
            </motion.div>

            {/* Right Col - Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <form
                ref={formRed}
                onSubmit={sendEmail}
                className="w-full flex flex-col gap-6 xl:gap-8 bg-white border border-black/10 rounded-3xl p-6 md:p-8 xl:p-10 shadow-2xl shadow-black-[0.03]"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 xl:gap-8">
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">First Name</label>
                    <input
                      required
                      type="text"
                      name="user_firstname"
                      className="w-full bg-transparent border-b border-black/30 py-2 xl:py-3 text-base xl:text-lg focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none"
                      placeholder="John"
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Last Name</label>
                    <input
                      required
                      type="text"
                      name="user_lastname"
                      className="w-full bg-transparent border-b border-black/30 py-2 xl:py-3 text-base xl:text-lg focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Email Address</label>
                  <input
                    required
                    type="email"
                    name="user_email"
                    className="w-full bg-transparent border-b border-black/30 py-2 xl:py-3 text-base xl:text-lg focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={1}
                    className="w-full bg-transparent border-b border-black/30 py-2 xl:py-3 text-base xl:text-lg focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 resize-none min-h-[3rem] xl:min-h-[4rem] rounded-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 xl:mt-4 bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-xs xl:text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-primary/20"
                >
                  {isSubmitting ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending</>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 ml-1" /></>
                  )}
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-3 xl:p-4 text-xs font-medium text-green-700 bg-green-500/10 border border-green-500/20 rounded-lg text-center mt-2">
                      We've received your message! We will get back to you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-3 xl:p-4 text-xs font-medium text-red-700 bg-red-500/10 border border-red-500/20 rounded-lg text-center mt-2">
                      Oops! Something went wrong. Please check your EmailJS setup.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
