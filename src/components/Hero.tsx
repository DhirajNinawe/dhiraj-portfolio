import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
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
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-28 md:pt-32">
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
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-full px-8 py-3.5 font-medium text-sm tracking-wide text-foreground inline-flex items-center gap-2"
          >
            Hire Me
          </motion.a>
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
  );
}
