import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Hls from "hls.js";

// ─── Contact constants ────────────────────────────────────────────────────────

export const WA_HREF =
  "https://wa.me/918087891860?text=Hey%2C%20I%20have%20work%20for%20you.";

export const MAIL_HREF =
  "mailto:dhirajninawe7@gmail.com?subject=Project%20Inquiry&body=Hi%20Dhiraj%2C%0A%0AI%20have%20work%20for%20you%20and%20would%20like%20to%20discuss%20a%20project.";

// ─── Icon helpers ─────────────────────────────────────────────────────────────

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.116 1.533 5.845L.054 23.447a.5.5 0 0 0 .613.611l5.701-1.498A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.888 9.888 0 0 1-5.032-1.373l-.36-.214-3.733.981.993-3.648-.234-.374A9.86 9.86 0 0 1 2.1 12c0-5.468 4.432-9.9 9.9-9.9 5.469 0 9.9 4.432 9.9 9.9 0 5.469-4.431 9.9-9.9 9.9z" />
    </svg>
  );
}

function MailIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// ─── Shared contact buttons (also exported for reuse in Hero modal) ───────────

export function ContactButtons({ orientation = "row" }: { orientation?: "row" | "col" }) {
  const flex = orientation === "col"
    ? "flex flex-col items-stretch gap-3 w-full max-w-xs"
    : "flex flex-col sm:flex-row items-center justify-center gap-4";

  return (
    <div className={flex}>
      {/* WhatsApp */}
      <motion.a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 font-semibold text-sm tracking-wide transition-shadow"
        style={{
          background: "linear-gradient(135deg, #25D366 0%, #1da851 100%)",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 8px 32px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 4px 20px rgba(37,211,102,0.35)";
        }}
      >
        <WhatsAppIcon size={17} />
        Message on WhatsApp
      </motion.a>

      {/* Email */}
      <motion.a
        href={MAIL_HREF}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center justify-center gap-2.5 liquid-glass rounded-xl px-7 py-3.5 font-semibold text-sm tracking-wide text-foreground transition-shadow"
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            "0 8px 32px rgba(255,255,255,0.1)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "";
        }}
      >
        <MailIcon size={17} />
        Send Email
      </motion.a>
    </div>
  );
}

// ─── Fade-up helper ───────────────────────────────────────────────────────────

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ─── CTA Section ──────────────────────────────────────────────────────────────

export default function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl =
      "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      return () => hls.destroy();
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
      video.addEventListener("loadedmetadata", () => {
        video.play().catch(() => {});
      });
    }
  }, []);

  return (
    <section
      id="contact"
      className="relative py-32 md:py-44 border-t border-border/30 overflow-hidden"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/50 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-foreground/60">
            <div className="w-5 h-5 rounded-full border border-foreground/60" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px] mb-6"
        >
          Have a Project in{" "}
          <span className="font-serif italic font-normal">Mind?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let's collaborate and create something amazing together.
          I'm always open to new ideas and exciting opportunities.
        </motion.p>

        {/* Contact buttons */}
        <motion.div {...fadeUp(0.3)}>
          <ContactButtons />
        </motion.div>
      </div>
    </section>
  );
}
