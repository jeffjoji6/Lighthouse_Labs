"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Send, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Forms() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    if (!formRef.current) return;

    try {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData.entries());
      
      // Timestamp the signature
      data.signature_timestamp = new Date().toISOString();

      // Placeholder API endpoint for the CRM - replace with your actual CRM endpoint
      const crmEndpoint = process.env.NEXT_PUBLIC_CRM_URL 
        ? `${process.env.NEXT_PUBLIC_CRM_URL}/api/webhooks/onboarding`
        : 'https://app.lighthouselabs.in/api/webhooks/onboarding';

      const res = await fetch(crmEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setStatus("success");
      formRef.current?.reset();
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
    <main className="min-h-screen bg-[#fafafa] text-[#111] flex flex-col relative lg:overflow-hidden">
      
      {/* Simple Header instead of full Navbar for isolation */}
      <header className="w-full py-8 px-6 sm:px-10 flex justify-between items-center z-20 absolute top-0 left-0">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Lighthouse Labs" className="h-8 w-auto object-contain" />
        </Link>
      </header>

      <section className="flex-1 relative px-0 sm:px-10 py-24 lg:py-16 flex flex-col justify-center min-h-screen overflow-y-auto">
        {/* Ultra-minimalist Ambient Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -bottom-[30vw] -right-[30vw] w-[110vw] h-[110vw] flex items-center justify-center animate-[spin_240s_linear_infinite] opacity-[0.12]"
            style={{ WebkitMaskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)', maskImage: 'radial-gradient(circle at center, black 0%, transparent 65%)' }}>
            {radialLines}
            <div className="absolute w-[40%] h-[40%] bg-[#fafafa] rounded-full" />
            <div className="absolute w-[60%] h-[60%] border border-dashed border-black rounded-full" />
            <div className="absolute w-[80%] h-[80%] border border-dashed border-black opacity-50 rounded-full" />
          </div>

          <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-primary/10 blur-[120px] mix-blend-multiply" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-black/[0.02] blur-[100px] mix-blend-multiply" />

          <div className="absolute inset-0 opacity-[0.06] mix-blend-darken" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        </div>

        <div className="container mx-auto max-w-3xl relative z-10 w-full mt-12 mb-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 lg:mb-10 text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl xl:text-6xl font-medium tracking-tight leading-[1.05] mb-4">
              Project <span className="text-primary italic font-serif">Onboarding.</span>
            </h1>
            <p className="text-black/70 text-base md:text-lg font-light max-w-xl mx-auto leading-relaxed">
              We're thrilled to partner with you. Please fill out the details below to help us align with your vision and finalize the setup.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-8 bg-white border border-black/10 rounded-3xl p-6 md:p-10 shadow-2xl shadow-black/[0.03]"
            >
              
              {/* Section 1: Basic Info */}
              <div className="space-y-6">
                <h3 className="font-display text-xl border-b border-black/10 pb-2 mb-4">1. Client Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Company Name</label>
                    <input required type="text" name="company_name" className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none" placeholder="Acme Corp" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Your Role</label>
                    <input required type="text" name="client_role" className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none" placeholder="Founder / CEO" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Email Address</label>
                    <input required type="email" name="client_email" className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none" placeholder="you@company.com" />
                  </div>
                  <div className="relative group">
                    <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Phone Number</label>
                    <input type="tel" name="client_phone" className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Scope */}
              <div className="space-y-6 mt-4">
                <h3 className="font-display text-xl border-b border-black/10 pb-2 mb-4">2. Project Scope</h3>
                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Primary Goals & Objectives</label>
                  <textarea required name="project_goals" rows={3} className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 resize-none rounded-none" placeholder="What does success look like for this project?" />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Brand Assets & Guidelines (Link)</label>
                  <input type="url" name="brand_assets_link" className="w-full bg-transparent border-b border-black/30 py-2 text-base focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/30 rounded-none" placeholder="Google Drive / Figma link..." />
                </div>
              </div>

              {/* Section 3: Digital Signature */}
              <div className="space-y-6 mt-4 bg-[#fafafa] p-6 rounded-2xl border border-black/5">
                <h3 className="font-display text-xl border-b border-black/10 pb-2 mb-4">3. Digital Signature</h3>
                
                <div className="relative group">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/50 block mb-1">Type your Full Legal Name to sign</label>
                  <input required type="text" name="digital_signature" className="w-full bg-transparent border-b border-black/30 py-3 text-lg font-serif italic focus:outline-none focus:border-primary transition-colors text-black placeholder:text-black/20 rounded-none" placeholder="John Doe" />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input required type="checkbox" id="agreement" name="agreement_checked" className="mt-1 w-4 h-4 accent-primary" />
                  <label htmlFor="agreement" className="text-sm text-black/70 cursor-pointer">
                    I confirm that the provided information is accurate and I authorize Lighthouse Labs to proceed with this data according to the agreed terms.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-4 bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] shadow-xl shadow-primary/20"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Submitting</>
                ) : (
                  <>Submit Onboarding <Send className="w-4 h-4 ml-1" /></>
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-4 text-sm font-medium text-green-700 bg-green-500/10 border border-green-500/20 rounded-lg text-center mt-2">
                    Thank you! Your details have been securely submitted to our CRM. We will be in touch shortly.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="p-4 text-sm font-medium text-red-700 bg-red-500/10 border border-red-500/20 rounded-lg text-center mt-2">
                    Oops! Something went wrong communicating with the server. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
