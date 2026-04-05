"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Send, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Contact() {
  const formRed = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // High-performance Framer Motion values for 3D cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [80, 50]), { stiffness: 60, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-25, 25]), { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    if (!formRed.current) return;

    // TODO: Need user's EmailJS tokens here
    // ServiceID, TemplateID, PublicKey
    emailjs
      .sendForm('service_43dnadc', 'template_ry940gb', formRed.current, {
        publicKey: 'l_eHLlAfKqqbOy4Xe',
      })
      .then(
        () => {
          setStatus("success");
          setIsSubmitting(false);
          formRed.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus("error");
          setIsSubmitting(false);
        },
      );
  };

  return (
    <main onMouseMove={handleMouseMove} className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <Navbar />

      <section className="flex-1 relative py-32 md:py-40 px-5 sm:px-6">
        {/* Interactive 3D Spatial Grid Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden [perspective:1200px]">
          <motion.div
            animate={{ rotateZ: [0, 360] }}
            transition={{ rotateZ: { duration: 360, ease: "linear", repeat: Infinity } }}
            className="w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] opacity-50 mix-blend-plus-lighter"
            style={{
              backgroundImage: 'linear-gradient(to right, hsl(var(--primary) / 0.25) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary) / 0.25) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              rotateX,
              rotateY,
            }}
          />
          {/* Deep Vignette Mask to blend edges smoothly into the page */}
          <div className="absolute inset-0 bg-background pointer-events-none" style={{ WebkitMaskImage: 'radial-gradient(circle at center, transparent 15%, black 80%)', maskImage: 'radial-gradient(circle at center, transparent 15%, black 80%)' }} />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" /> Go Back
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left Col - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                Let's turn your idea into <span className="text-primary italic font-serif">reality.</span>
              </h1>
              <p className="text-foreground/70 text-base md:text-lg max-w-md leading-relaxed mb-6">
                Have a project in mind or just want to say hi? We'd love to hear from you. Drop us a message below, or email us directly at <a href="mailto:sales@lighthouselabs.in" className="text-primary hover:underline transition-all">sales@lighthouselabs.in</a>. We'll get back to you as soon as possible.
              </p>
            </motion.div>

            {/* Right Col - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form
                ref={formRed}
                onSubmit={sendEmail}
                className="bg-card w-full p-8 sm:p-10 rounded-2xl border border-white/5 shadow-2xl relative"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">First Name</label>
                      <input
                        required
                        type="text"
                        name="user_firstname"
                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Last Name</label>
                      <input
                        required
                        type="text"
                        name="user_lastname"
                        className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Email Address</label>
                    <input
                      required
                      type="email"
                      name="user_email"
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Your Message</label>
                    <textarea
                      required
                      name="message"
                      rows={4}
                      className="w-full bg-background/50 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded-lg font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Send Message</>
                    )}
                  </button>

                  {status === "success" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 text-xs font-medium text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg text-center">
                      Thank you! Your message has been sent successfully. We will get back to you soon.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 p-4 text-xs font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg text-center">
                      Oops! Something went wrong. Please check your EmailJS configuration or try again later.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
