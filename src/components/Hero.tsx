import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X } from "lucide-react";
import { ContactButtons } from "./CTA";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ─── Sample Work Modal ────────────────────────────────────────────────────────

function SampleWorkModal({ onClose }: { onClose: () => void }) {
  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      key="sample-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      style={{ backdropFilter: "blur(22px)", background: "rgba(0,0,0,0.80)" }}
      onClick={onClose}
    >
      <motion.div
        key="sample-panel"
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="relative w-full max-w-lg rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #0e0e0e 0%, #070707 100%)",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.04), 0 40px 120px rgba(0,0,0,0.9)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10 z-10"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <X size={14} className="text-white/50" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Icon badge */}
          <div className="flex justify-center mb-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <Sparkles size={22} className="text-white/70" />
            </div>
          </div>

          {/* Heading */}
          <h2
            className="text-2xl md:text-3xl font-semibold text-white text-center tracking-tight leading-tight mb-4"
          >
            Let's Start with a{" "}
            <span className="font-serif italic font-normal">Sample</span>
          </h2>

          {/* Body copy */}
          <p className="text-sm text-white/55 leading-[1.85] text-center mb-3">
            Send me a raw clip, product image, or project brief and I'll create
            a sample concept or edit — at no cost — to demonstrate my creative
            approach and how I'd handle your project.
          </p>

          {/* What to send list */}
          <div
            className="rounded-2xl p-5 mb-8 space-y-2.5"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-[10px] tracking-[2.5px] uppercase text-white/30 mb-3">
              What you can send
            </p>
            {[
              "A raw video clip for editing",
              "A product photo for a poster/ad design",
              "A brand brief or project description",
              "A reference you'd like recreated",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.35)" }}
                />
                <span className="text-sm text-white/60 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Contact buttons */}
          <ContactButtons orientation="col" />

          {/* Fine print */}
          <p className="text-[10px] text-white/22 text-center mt-5 tracking-wide">
            No commitment required. Sample delivered within 48 hours.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export default function Hero() {
  const [sampleOpen, setSampleOpen] = useState(false);
  const openSample  = useCallback(() => setSampleOpen(true), []);
  const closeSample = useCallback(() => setSampleOpen(false), []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/60 z-[1]" />

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-[2]" />

        {/* Content */}
        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          style={{ transform: "translateY(-3%)" }}
        >
          {/* Status badge */}
          <motion.div
            {...fadeUp(0)}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Sparkles size={14} className="text-foreground/60" />
              <span>Worked with creative projects &amp; growing brands</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-10"
          >
            Dhiraj{" "}
            <span className="font-serif italic font-normal">Ninawe</span>
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp(0.2)}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-foreground text-background rounded-full px-8 py-3.5 font-medium text-sm tracking-wide inline-flex items-center gap-2 transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
            >
              View Projects
            </motion.a>
            <motion.button
              onClick={openSample}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-full px-8 py-3.5 font-medium text-sm tracking-wide text-foreground inline-flex items-center gap-2"
            >
              <Sparkles size={14} className="opacity-70" />
              Try Sample Work
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center"
          >
            {/* Mouse outline */}
            <div className="w-6 h-10 rounded-full border-2 border-foreground/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 6, 0], opacity: [0.8, 0.2, 0.8] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-2 rounded-full bg-foreground/70"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sample Work Modal */}
      <AnimatePresence>
        {sampleOpen && <SampleWorkModal onClose={closeSample} />}
      </AnimatePresence>
    </>
  );
}
