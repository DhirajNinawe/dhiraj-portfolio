import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ═══════════════════════════════════════════════════════════════════════════════
// § 1 · SVG ICONS
// ═══════════════════════════════════════════════════════════════════════════════

function PremierePro({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Premiere Pro">
      <rect width="56" height="56" rx="10" fill="#2D0040"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#A77BFF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">Pr</text>
    </svg>
  );
}
function AfterEffects({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe After Effects">
      <rect width="56" height="56" rx="10" fill="#00005B"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#9999FF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">Ae</text>
    </svg>
  );
}
function Photoshop({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Photoshop">
      <rect width="56" height="56" rx="10" fill="#001E36"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#31A8FF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">Ps</text>
    </svg>
  );
}
function Illustrator({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Illustrator">
      <rect width="56" height="56" rx="10" fill="#2D1B00"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#FF9A00" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">Ai</text>
    </svg>
  );
}
function FigmaIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 56" fill="none" aria-label="Figma">
      <rect x="0" y="0"  width="19" height="19" rx="9.5" fill="#F24E1E"/>
      <rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262"/>
      <rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF"/>
      <rect x="0" y="38" width="19" height="19" rx="9.5" fill="#0ACF83"/>
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
    </svg>
  );
}
function CanvaIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Canva">
      <rect width="56" height="56" rx="28" fill="#7D2AE8"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize="22" fontWeight="800" fontFamily="Inter,Arial,sans-serif">C</text>
    </svg>
  );
}
function AIToolsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="AI Tools">
      <defs>
        <radialGradient id="ws-ai" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A78BFA"/>
          <stop offset="100%" stopColor="#3B0764"/>
        </radialGradient>
      </defs>
      <circle cx="28" cy="28" r="28" fill="url(#ws-ai)"/>
      <circle cx="28" cy="28" r="5.5" fill="#fff" fillOpacity="0.9"/>
      <line x1="28" y1="14" x2="28" y2="22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="28" y1="34" x2="28" y2="42" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="14" y1="28" x2="22" y2="28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="34" y1="28" x2="42" y2="28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="18.1" y1="18.1" x2="23.8" y2="23.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="37.9" y1="18.1" x2="32.2" y2="23.8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  );
}
function MotionGraphicsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Motion Graphics">
      <rect width="56" height="56" rx="12" fill="#0C0A1E"/>
      <circle cx="28" cy="28" r="16" stroke="rgba(167,139,250,0.4)" strokeWidth="1" fill="none"/>
      <circle cx="28" cy="28" r="9"  stroke="rgba(167,139,250,0.6)" strokeWidth="1.2" fill="none"/>
      <circle cx="28" cy="28" r="3.5" fill="#A78BFA"/>
      <path d="M13 28 C18 20, 22 36, 28 28 C34 20, 38 36, 43 28"
        stroke="#E879F9" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}
function VideoEditingIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Video Editing">
      <rect width="56" height="56" rx="12" fill="#0A0505"/>
      <rect x="10" y="14" width="36" height="28" rx="4" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" fill="rgba(251,146,60,0.07)"/>
      <rect x="13" y="18" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="13" y="34" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="38" y="18" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="38" y="34" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <polygon points="22,22 22,34 36,28" fill="#FB923C"/>
    </svg>
  );
}
function WebDevIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Web Development">
      <rect width="56" height="56" rx="12" fill="#0F1117"/>
      <rect x="4" y="4" width="48" height="48" rx="9" stroke="rgba(56,189,248,0.35)" strokeWidth="1"/>
      <polyline points="14,22 8,28 14,34"  stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="42,22 48,28 42,34" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="32" y1="16" x2="24" y2="40" stroke="#818CF8" strokeWidth="2.2" strokeLinecap="round" opacity="0.8"/>
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 2 · SKILL DATA  (positions are art-directed for a 1060×540 desktop canvas)
// ═══════════════════════════════════════════════════════════════════════════════

interface SkillDef {
  id: string;
  name: string;
  experience: string;
  level: number;
  description: string;
  responsibilities: string[];
  projects: string[];
  Icon: React.ComponentType<{ size: number }>;
  iconSize: number;
  // Desktop placement
  left: string;
  top: string;
  rotation: number;   // base Z-rotation (art direction)
  floatPhase: number; // 0..2π, unique per card
  floatSpeed: number; // oscillation speed multiplier
}

const SKILLS: SkillDef[] = [
  {
    id: "premiere", name: "Adobe Premiere Pro",
    experience: "Advanced · 4+ Years", level: 92,
    description: "Primary editing suite for professional video productions, brand commercials, and long-form content delivery.",
    responsibilities: ["Multi-cam editing", "Color grading", "Audio mixing", "Export workflows"],
    projects: ["Brand commercials", "YouTube series", "Event films", "Social campaigns"],
    Icon: PremierePro, iconSize: 50,
    left: "3%", top: "13%", rotation: -4.2, floatPhase: 0.00, floatSpeed: 0.60,
  },
  {
    id: "ae", name: "Adobe After Effects",
    experience: "Advanced · 3+ Years", level: 88,
    description: "Motion graphics and VFX powerhouse — title animations, visual compositing, and cinematic motion design.",
    responsibilities: ["Motion graphics", "VFX compositing", "Title sequences", "Kinetic type"],
    projects: ["Brand animations", "Intro sequences", "Motion reels", "Product showcases"],
    Icon: AfterEffects, iconSize: 50,
    left: "21%", top: "5%", rotation: 2.1, floatPhase: 1.20, floatSpeed: 0.68,
  },
  {
    id: "photoshop", name: "Adobe Photoshop",
    experience: "Advanced · 5+ Years", level: 95,
    description: "Image editing foundation across all visual production — retouching, compositing, and campaign asset creation.",
    responsibilities: ["Retouching", "Compositing", "Thumbnails", "Campaign assets"],
    projects: ["Social media", "Campaign artwork", "Print assets", "Thumbnails"],
    Icon: Photoshop, iconSize: 50,
    left: "38%", top: "3%", rotation: -1.8, floatPhase: 2.40, floatSpeed: 0.57,
  },
  {
    id: "illustrator", name: "Adobe Illustrator",
    experience: "Proficient · 3+ Years", level: 80,
    description: "Vector design for logos, brand identity systems, and scalable marketing assets with precision.",
    responsibilities: ["Logo design", "Brand identity", "Illustrations", "Print-ready art"],
    projects: ["Brand identity", "Logo systems", "Infographics", "Packaging"],
    Icon: Illustrator, iconSize: 50,
    left: "55%", top: "8%", rotation: 3.3, floatPhase: 0.80, floatSpeed: 0.63,
  },
  {
    id: "figma", name: "Figma",
    experience: "Proficient · 2+ Years", level: 82,
    description: "UI/UX design and prototyping — crafting web interfaces, portfolio layouts, and client presentations.",
    responsibilities: ["UI design", "Prototyping", "Design systems", "Client handoffs"],
    projects: ["Portfolio designs", "Web mockups", "Client presentations", "Component libraries"],
    Icon: FigmaIcon, iconSize: 38,
    left: "10%", top: "44%", rotation: -2.5, floatPhase: 1.60, floatSpeed: 0.72,
  },
  {
    id: "canva", name: "Canva",
    experience: "Advanced · 3+ Years", level: 90,
    description: "Rapid content creation for social media, presentations, and quick-turnaround marketing materials.",
    responsibilities: ["Social templates", "Presentations", "Brand kits", "Rapid delivery"],
    projects: ["Social campaigns", "Client decks", "Brand materials", "Event graphics"],
    Icon: CanvaIcon, iconSize: 48,
    left: "28%", top: "49%", rotation: 1.4, floatPhase: 3.10, floatSpeed: 0.59,
  },
  {
    id: "ai", name: "AI Tools",
    experience: "Proficient · 1+ Years", level: 78,
    description: "Integrating generative AI into creative workflows — from ideation and scripting to production asset generation.",
    responsibilities: ["AI image gen", "Script assistance", "Workflow automation", "Prompt crafting"],
    projects: ["AI-enhanced campaigns", "Concept art", "Automated workflows", "Creative experiments"],
    Icon: AIToolsIcon, iconSize: 48,
    left: "46%", top: "41%", rotation: -0.8, floatPhase: 0.50, floatSpeed: 0.66,
  },
  {
    id: "motion", name: "Motion Graphics",
    experience: "Advanced · 3+ Years", level: 87,
    description: "End-to-end motion design — storyboard to final render, 2D animation, transitions, and animated brand assets.",
    responsibilities: ["2D animation", "Storyboarding", "Title design", "Animated logos"],
    projects: ["Brand reveals", "Animated posts", "Explainer videos", "Motion reels"],
    Icon: MotionGraphicsIcon, iconSize: 48,
    left: "64%", top: "31%", rotation: 2.8, floatPhase: 2.00, floatSpeed: 0.62,
  },
  {
    id: "video", name: "Video Editing",
    experience: "Expert · 4+ Years", level: 94,
    description: "Narrative-driven editing for commercial, documentary, and social formats with cinematic pacing and precision.",
    responsibilities: ["Story editing", "Color workflows", "Sound design", "Multi-format delivery"],
    projects: ["Brand films", "Documentary edits", "Reels & Shorts", "Event films"],
    Icon: VideoEditingIcon, iconSize: 48,
    left: "21%", top: "67%", rotation: -3.1, floatPhase: 1.00, floatSpeed: 0.69,
  },
  {
    id: "webdev", name: "Web Development",
    experience: "Proficient · 2+ Years", level: 75,
    description: "Front-end development with React and modern tooling to deliver interactive portfolio and marketing websites.",
    responsibilities: ["React / TypeScript", "UI animations", "Responsive design", "Portfolio sites"],
    projects: ["Portfolio websites", "Landing pages", "Interactive showcases", "Client websites"],
    Icon: WebDevIcon, iconSize: 48,
    left: "41%", top: "67%", rotation: 1.2, floatPhase: 2.80, floatSpeed: 0.55,
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// § 3 · CARD PHYSICS STATE
// ═══════════════════════════════════════════════════════════════════════════════

interface CardPhysics {
  rotX: number;  rotY: number;  transY: number;  scale: number;
  vRotX: number; vRotY: number; vTransY: number; vScale: number;
  tRotX: number; tRotY: number; tTransY: number; tScale: number;
  hovered: boolean; wasHovered: boolean;
}

function initPhysics(): CardPhysics[] {
  return SKILLS.map(() => ({
    rotX: 0, rotY: 0, transY: 0, scale: 1,
    vRotX: 0, vRotY: 0, vTransY: 0, vScale: 0,
    tRotX: 0, tRotY: 0, tTransY: 0, tScale: 1,
    hovered: false, wasHovered: false,
  }));
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 4 · WORKSPACE PROP COMPONENTS  (CSS / SVG objects, purely decorative)
// ═══════════════════════════════════════════════════════════════════════════════

function MacBookProp() {
  return (
    <div style={{ opacity: 0.72 }}>
      {/* Screen lid */}
      <div style={{
        width: 228, height: 144,
        background: "linear-gradient(155deg, #181818 0%, #0d0d0d 100%)",
        borderRadius: "8px 8px 0 0",
        border: "1px solid rgba(255,255,255,0.07)",
        position: "relative",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
        padding: 7,
      }}>
        {/* Display surface */}
        <div style={{
          width: "100%", height: "100%",
          background: "#030303",
          borderRadius: 3,
          border: "1px solid rgba(255,255,255,0.03)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Abstract desktop content lines */}
          <div style={{ position: "absolute", top: 10, left: 8, right: 8, display: "flex", flexDirection: "column", gap: 5 }}>
            {[65, 42, 58, 36, 50, 45].map((w, i) => (
              <div key={i} style={{ height: 2.5, width: `${w}%`, background: "rgba(255,255,255,0.045)", borderRadius: 1 }} />
            ))}
          </div>
          {/* Menu bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: "rgba(255,255,255,0.02)" }} />
        </div>
        {/* Camera dot */}
        <div style={{
          position: "absolute", top: 4, left: "50%", transform: "translateX(-50%)",
          width: 4, height: 4, borderRadius: "50%", background: "#111",
        }} />
      </div>
      {/* Hinge */}
      <div style={{ height: 2, background: "rgba(255,255,255,0.035)", margin: "0 5px" }} />
      {/* Base */}
      <div style={{
        width: 228, height: 10,
        background: "linear-gradient(180deg, #161616 0%, #0c0c0c 100%)",
        borderRadius: "0 0 6px 6px",
        border: "1px solid rgba(255,255,255,0.05)",
        borderTop: "none",
        boxShadow: "0 12px 48px rgba(0,0,0,0.85)",
      }} />
    </div>
  );
}

function CameraProp() {
  return (
    <div style={{ opacity: 0.62, transform: "rotate(-3deg)" }}>
      <svg width="118" height="96" viewBox="0 0 118 96" fill="none">
        {/* Main body */}
        <rect x="12" y="24" width="76" height="52" rx="5" fill="#0d0d0d" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        {/* Lens assembly */}
        <circle cx="50" cy="50" r="22" fill="#070707" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="15" fill="#040404" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <circle cx="50" cy="50" r="7"  fill="#020202"/>
        <circle cx="44" cy="44" r="2.5" fill="rgba(255,255,255,0.035)"/>
        {/* Side handle */}
        <rect x="86" y="18" width="18" height="62" rx="4" fill="#0c0c0c" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        {/* Top rail */}
        <rect x="10" y="16" width="78" height="10" rx="2" fill="#0b0b0b" stroke="rgba(255,255,255,0.055)" strokeWidth="1"/>
        {/* Viewfinder */}
        <rect x="72" y="25" width="16" height="10" rx="2" fill="#060606" stroke="rgba(255,255,255,0.045)" strokeWidth="1"/>
        {/* Record button */}
        <circle cx="24" cy="30" r="4" fill="#110303" stroke="rgba(255,0,0,0.22)" strokeWidth="0.5"/>
        {/* Grip ridges */}
        {[0,1,2,3].map(i => (
          <rect key={i} x="87" y={30+i*10} width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.03)"/>
        ))}
      </svg>
    </div>
  );
}

function NotebookProp() {
  return (
    <div style={{
      width: 108, height: 140,
      background: "linear-gradient(150deg, #0e0e0e 0%, #070707 100%)",
      borderRadius: 3,
      border: "1px solid rgba(255,255,255,0.065)",
      padding: "16px 12px",
      boxShadow: "0 10px 44px rgba(0,0,0,0.75), inset 0 1px 0 rgba(255,255,255,0.03)",
      position: "relative", opacity: 0.78,
    }}>
      {/* Binding */}
      {[0,1,2].map(i => (
        <div key={i} style={{
          position: "absolute", left: 0, top: 18 + i * 18, width: 3, height: 10,
          background: "rgba(255,255,255,0.055)", borderRadius: "0 2px 2px 0",
        }} />
      ))}
      {/* Studio name */}
      <span style={{
        display: "block", fontSize: 6.5, fontWeight: 700,
        letterSpacing: "0.20em", color: "rgba(255,255,255,0.20)",
        fontFamily: "Inter, sans-serif", textTransform: "uppercase", lineHeight: 1.7,
      }}>
        FRAMEFLOWS<br/>STUDIOS
      </span>
      {/* Rule lines */}
      <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 7 }}>
        {[100,80,92,68].map((w,i) => (
          <div key={i} style={{ height: 1, width: `${w}%`, background: "rgba(255,255,255,0.038)", borderRadius: 1 }} />
        ))}
      </div>
    </div>
  );
}

function PenProp() {
  return (
    <div style={{ opacity: 0.60 }}>
      <svg width="12" height="136" viewBox="0 0 12 136" fill="none">
        <rect x="2" y="4"  width="8" height="96" rx="3.5" fill="#111" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5"/>
        <rect x="8" y="8"  width="2" height="76" rx="1"   fill="#090909" stroke="rgba(255,255,255,0.055)" strokeWidth="0.5"/>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="2" y={44 + i*9} width="8" height="2.5" rx="1.5" fill="rgba(255,255,255,0.035)"/>
        ))}
        <path d="M3 100 L6 134 L9 100 Z" fill="#0d0d0d" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
        <rect x="2.5" y="1" width="7" height="5" rx="2.5" fill="#1a1a1a" stroke="rgba(255,255,255,0.09)" strokeWidth="0.5"/>
      </svg>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 5 · SITE-WIDE FADE-UP ANIMATION (unchanged)
// ═══════════════════════════════════════════════════════════════════════════════

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ═══════════════════════════════════════════════════════════════════════════════
// § 6 · SKILL DETAIL MODAL
// ═══════════════════════════════════════════════════════════════════════════════

function SkillModal({ skill, onClose }: { skill: SkillDef; onClose: () => void }) {
  // Escape key
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    /* Outer: fades whole overlay in/out (tracked by AnimatePresence in parent) */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      style={{
        position: "fixed", inset: 0, zIndex: 300,
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      {/* Backdrop — click to dismiss */}
      <div
        onClick={onClose}
        style={{
          position: "absolute", inset: 0,
          background: "rgba(0,0,0,0.80)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      />

      {/* Modal panel */}
      <motion.div
        initial={{ scale: 0.86, y: 28 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.91, y: 14, opacity: 0 }}
        transition={{ type: "spring", stiffness: 340, damping: 30, mass: 0.85 }}
        style={{
          position: "relative", zIndex: 1,
          width: "min(520px, 100%)",
          maxHeight: "86vh", overflowY: "auto",
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 22,
          padding: "36px 36px 32px",
          boxShadow: "0 52px 120px rgba(0,0,0,0.88), inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
      >
        {/* Top specular rim */}
        <div style={{
          position: "absolute", top: 0, left: "12%", width: "76%", height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent)",
          borderRadius: 1, pointerEvents: "none",
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute", top: 18, right: 18,
            width: 34, height: 34, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.09)",
            color: "rgba(255,255,255,0.50)",
            cursor: "pointer", fontSize: 20, lineHeight: "34px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Inter, sans-serif",
            transition: "background 0.2s, color 0.2s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget;
            el.style.background = "rgba(255,255,255,0.11)";
            el.style.color = "#fff";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget;
            el.style.background = "rgba(255,255,255,0.05)";
            el.style.color = "rgba(255,255,255,0.50)";
          }}
        >×</button>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 28 }}>
          <div style={{
            width: 62, height: 62, borderRadius: 14, flexShrink: 0,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.07)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
          }}>
            <skill.Icon size={42} />
          </div>
          <div>
            <h3 style={{
              fontSize: "1.15rem", fontWeight: 600, letterSpacing: "-0.01em",
              color: "rgba(255,255,255,0.95)", fontFamily: "Inter, sans-serif",
              margin: 0, lineHeight: 1.2,
            }}>
              {skill.name}
            </h3>
            <p style={{
              fontSize: "0.65rem", marginTop: 6,
              color: "rgba(255,255,255,0.30)",
              letterSpacing: "0.16em", textTransform: "uppercase",
              fontFamily: "Inter, sans-serif", margin: "6px 0 0",
            }}>
              {skill.experience}
            </p>
          </div>
        </div>

        {/* Proficiency bar */}
        <div style={{ marginBottom: 26 }}>
          <div style={{ height: 2, background: "rgba(255,255,255,0.07)", borderRadius: 1, overflow: "hidden" }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 0.95, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: "100%", background: "rgba(255,255,255,0.44)", borderRadius: 1 }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.20)", letterSpacing: "0.14em", fontFamily: "Inter, sans-serif", textTransform: "uppercase" }}>Proficiency</span>
            <span style={{ fontSize: 9, color: "rgba(255,255,255,0.20)", letterSpacing: "0.06em", fontFamily: "Inter, sans-serif" }}>{skill.level}%</span>
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: "0.875rem", color: "rgba(255,255,255,0.50)",
          lineHeight: 1.68, marginBottom: 26,
          fontFamily: "Inter, sans-serif",
        }}>
          {skill.description}
        </p>

        {/* Capabilities */}
        <div style={{ marginBottom: 22 }}>
          <p style={{
            fontSize: "0.60rem", letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.22)", textTransform: "uppercase",
            fontFamily: "Inter, sans-serif", marginBottom: 11,
          }}>
            Key Capabilities
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skill.responsibilities.map((r, i) => (
              <span key={i} style={{
                fontSize: "0.75rem", padding: "6px 14px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 999, color: "rgba(255,255,255,0.62)",
                fontFamily: "Inter, sans-serif",
              }}>{r}</span>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div>
          <p style={{
            fontSize: "0.60rem", letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.22)", textTransform: "uppercase",
            fontFamily: "Inter, sans-serif", marginBottom: 11,
          }}>
            Delivered Through
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skill.projects.map((p, i) => (
              <span key={i} style={{
                fontSize: "0.75rem", padding: "6px 14px",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 999, color: "rgba(255,255,255,0.42)",
                fontFamily: "Inter, sans-serif",
              }}>{p}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 7 · DESKTOP CREATIVE WORKSPACE
//   Physics: RAF loop → direct DOM transform (no React re-renders per frame)
//   Cards: absolute-positioned, perspective-enabled wrappers
//   Hover: rotateX/Y spring tilt + lift; tracked via refs
// ═══════════════════════════════════════════════════════════════════════════════

const CARD_W  = 128;
const CARD_H  = 154;
const FLOAT_A = 5;    // float amplitude px
const SPR_K   = 0.09; // spring constant
const DAMP    = 0.80; // damping factor

interface WorkspaceProps {
  onCardClick: (s: SkillDef) => void;
  visible: boolean;
}

function WorkspaceScene({ onCardClick, visible }: WorkspaceProps) {
  const wrapRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const faceRefs  = useRef<(HTMLDivElement | null)[]>([]);
  const glossRefs = useRef<(HTMLDivElement | null)[]>([]);
  const physics   = useRef<CardPhysics[]>(initPhysics());
  const rafRef    = useRef<number>(0);
  const prefersReduced = useReducedMotion();

  // One-time setup: give face elements CSS transitions for shadow/border
  useEffect(() => {
    faceRefs.current.forEach(el => {
      if (el) el.style.transition = "box-shadow 0.38s ease, border-color 0.38s ease";
    });
  }, []);

  // RAF physics loop — imperatively updates transforms (no React re-render)
  useEffect(() => {
    if (prefersReduced) return;

    const tick = (t: number) => {
      const ph = physics.current;
      for (let i = 0; i < SKILLS.length; i++) {
        const p  = ph[i];
        const sk = SKILLS[i];
        const innerEl = innerRefs.current[i];
        const glossEl = glossRefs.current[i];
        const faceEl  = faceRefs.current[i];
        if (!innerEl || !glossEl || !faceEl) continue;

        // Idle float
        const fy = Math.sin(t * 0.001 * sk.floatSpeed + sk.floatPhase) * FLOAT_A;

        // Velocity spring
        p.vRotX   += (p.tRotX   - p.rotX)   * SPR_K;
        p.vRotY   += (p.tRotY   - p.rotY)   * SPR_K;
        p.vTransY += (p.tTransY - p.transY)  * SPR_K;
        p.vScale  += (p.tScale  - p.scale)   * SPR_K;

        p.vRotX   *= DAMP; p.vRotY   *= DAMP;
        p.vTransY *= DAMP; p.vScale  *= DAMP;

        p.rotX   += p.vRotX;
        p.rotY   += p.vRotY;
        p.transY += p.vTransY;
        p.scale  += p.vScale;

        // Push position to DOM (GPU-composited, no layout)
        innerEl.style.transform =
          `rotate(${sk.rotation}deg) ` +
          `translateY(${(fy + p.transY).toFixed(2)}px) ` +
          `rotateX(${p.rotX.toFixed(2)}deg) ` +
          `rotateY(${p.rotY.toFixed(2)}deg) ` +
          `scale(${p.scale.toFixed(4)})`;

        // Gloss overlay opacity
        glossEl.style.opacity = p.hovered ? "0.52" : "0.16";

        // Shadow + border only when hovered state actually changes
        if (p.hovered !== p.wasHovered) {
          p.wasHovered = p.hovered;
          faceEl.style.boxShadow = p.hovered
            ? "0 34px 84px rgba(0,0,0,0.90), inset 0 1px 0 rgba(255,255,255,0.16)"
            : "0 20px 56px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.07)";
          faceEl.style.borderColor = p.hovered
            ? "rgba(255,255,255,0.21)"
            : "rgba(255,255,255,0.085)";
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [prefersReduced]);

  // Mouse interaction callbacks (mutate refs only — no React re-renders)
  const onEnter = useCallback((i: number) => {
    const p = physics.current[i];
    p.tTransY = -11; p.tScale = 1.045; p.hovered = true;
  }, []);

  const onMove = useCallback((i: number, e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRefs.current[i];
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const dx = (e.clientX - r.left  - r.width  / 2) / (r.width  / 2);
    const dy = (e.clientY - r.top   - r.height / 2) / (r.height / 2);
    const p  = physics.current[i];
    p.tRotY  = dx * 11;
    p.tRotX  = -dy * 8;
  }, []);

  const onLeave = useCallback((i: number) => {
    const p = physics.current[i];
    p.tRotX = 0; p.tRotY = 0; p.tTransY = 0; p.tScale = 1; p.hovered = false;
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>

      {/* Subtle ambient surface light (not a gradient color change — just depth cue) */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% 95%, rgba(255,255,255,0.013) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Workspace props (decorative, background layer) ── */}

      {/* MacBook — upper right */}
      <div style={{
        position: "absolute", right: "0%", top: "2%",
        transform: "perspective(900px) rotateX(7deg) rotateY(-6deg)",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.4s",
        zIndex: 1,
      }}>
        <MacBookProp />
      </div>

      {/* Cinema camera — far left */}
      <div style={{
        position: "absolute", left: "-1%", top: "26%",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.55s",
        zIndex: 1,
      }}>
        <CameraProp />
      </div>

      {/* Notebook — lower left */}
      <div style={{
        position: "absolute", left: "1%", top: "68%",
        transform: "rotate(2.5deg)",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.65s",
        zIndex: 1,
      }}>
        <NotebookProp />
      </div>

      {/* Pen — lower centre-right */}
      <div style={{
        position: "absolute", left: "63%", top: "73%",
        transform: "rotate(-28deg)",
        pointerEvents: "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s ease 0.72s",
        zIndex: 1,
      }}>
        <PenProp />
      </div>

      {/* ── Glass cards (foreground, interactive) ── */}
      {SKILLS.map((sk, i) => (
        <div
          key={sk.id}
          ref={el => { wrapRefs.current[i] = el; }}
          onMouseEnter={() => onEnter(i)}
          onMouseMove={e  => onMove(i, e)}
          onMouseLeave={() => onLeave(i)}
          onClick={() => onCardClick(sk)}
          style={{
            position:    "absolute",
            left:        sk.left,
            top:         sk.top,
            width:       CARD_W,
            height:      CARD_H,
            cursor:      "pointer",
            perspective: "800px",
            zIndex:      2,
            opacity:     visible ? 1 : 0,
            transition:  `opacity 0.55s ease ${i * 0.058}s`,
          }}
        >
          {/* inner: receives RAF transform  */}
          <div
            ref={el => { innerRefs.current[i] = el; }}
            style={{ width: "100%", height: "100%", transformStyle: "preserve-3d" }}
          >
            {/* face: the glass card surface */}
            <div
              ref={el => { faceRefs.current[i] = el; }}
              style={{
                width: "100%", height: "100%",
                borderRadius: 16,
                background: "linear-gradient(158deg, rgba(26,26,26,0.92) 0%, rgba(12,12,12,0.88) 100%)",
                backdropFilter: "blur(14px) saturate(150%)",
                WebkitBackdropFilter: "blur(14px) saturate(150%)",
                border: "1px solid rgba(255,255,255,0.085)",
                boxShadow: "0 20px 56px rgba(0,0,0,0.72), inset 0 1px 0 rgba(255,255,255,0.07)",
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 10,
                position: "relative", overflow: "hidden",
                userSelect: "none",
              }}
            >
              {/* Top specular rim */}
              <div aria-hidden="true" style={{
                position: "absolute", top: 0, left: "18%", width: "64%", height: 1,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.32), transparent)",
                borderRadius: 1, pointerEvents: "none",
              }} />

              {/* Dynamic gloss — opacity driven by RAF */}
              <div
                ref={el => { glossRefs.current[i] = el; }}
                aria-hidden="true"
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "52%",
                  background: "linear-gradient(180deg, rgba(255,255,255,0.10) 0%, transparent 100%)",
                  borderRadius: "16px 16px 0 0",
                  pointerEvents: "none", opacity: 0.16,
                  transition: "opacity 0.3s ease",
                }}
              />

              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                display: "flex", alignItems: "center", justifyContent: "center",
                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.65))",
              }}>
                <sk.Icon size={sk.iconSize} />
              </div>

              {/* Thin separator */}
              <div style={{
                width: "54%", height: 1,
                background: "rgba(255,255,255,0.055)", borderRadius: 1,
              }} />

              {/* Label */}
              <span style={{
                fontSize: 10.5, fontWeight: 500,
                letterSpacing: "0.028em",
                color: "rgba(255,255,255,0.66)",
                fontFamily: "Inter, sans-serif",
                textAlign: "center", lineHeight: 1.35,
                padding: "0 12px",
              }}>
                {sk.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 8 · MOBILE MASONRY GRID
//   Two-column staggered layout. Float animation via framer-motion.
//   Tap to open modal. No hover physics (touch-inappropriate).
// ═══════════════════════════════════════════════════════════════════════════════

function MobileGrid({ onCardClick }: { onCardClick: (s: SkillDef) => void }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      padding: "0 16px",
      maxWidth: 480,
      margin: "0 auto",
    }}>
      {SKILLS.map((sk, i) => (
        <motion.div
          key={sk.id}
          animate={{ y: [0, -(4 + (i % 3)), 0] }}
          transition={{
            duration: 3.4 + (i % 4) * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.17,
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => onCardClick(sk)}
          style={{
            borderRadius: 14,
            background: "linear-gradient(155deg, rgba(22,22,22,0.94) 0%, rgba(10,10,10,0.90) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 14px 40px rgba(0,0,0,0.68), inset 0 1px 0 rgba(255,255,255,0.055)",
            padding: "20px 12px 16px",
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: 10,
            cursor: "pointer", position: "relative",
            overflow: "hidden", userSelect: "none",
          }}
        >
          {/* Top specular */}
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: "14%", width: "72%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
          }} />

          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.55))",
          }}>
            <sk.Icon size={Math.round(sk.iconSize * 0.85)} />
          </div>

          <div style={{ width: "52%", height: 1, background: "rgba(255,255,255,0.05)", borderRadius: 1 }} />

          <span style={{
            fontSize: 10, fontWeight: 500,
            color: "rgba(255,255,255,0.60)",
            fontFamily: "Inter, sans-serif",
            textAlign: "center", lineHeight: 1.32,
          }}>
            {sk.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// § 9 · MAIN SECTION EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export default function Skills() {
  const sectionRef                           = useRef<HTMLElement>(null);
  const [visible, setVisible]               = useState(false);
  const [isMobile, setIsMobile]             = useState(false);
  const [wsH, setWsH]                       = useState(560);
  const [selectedSkill, setSelectedSkill]   = useState<SkillDef | null>(null);

  // Responsive layout detection
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      setIsMobile(w < 768);
      setWsH(w < 1024 ? 520 : 560);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // IntersectionObserver — drives reveal (same pattern used site-wide)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const openModal  = useCallback((s: SkillDef) => setSelectedSkill(s), []);
  const closeModal = useCallback(() => setSelectedSkill(null), []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#050505", paddingTop: "6rem", paddingBottom: "4rem" }}
      aria-label="Skills and Expertise"
    >
      {/* Radial vignette — matches site-wide depth treatment */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 85% 65% at 50% 55%, transparent 25%, rgba(0,0,0,0.52) 100%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── Heading block ── unchanged typography & spacing ── */}
      <div className="relative z-10 text-center px-6" style={{ marginBottom: "2.5rem" }}>
        <motion.h2
          {...fadeUp(0)}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px] leading-[1.05]"
        >
          Skills &amp;{" "}
          <span className="font-serif italic font-normal">Expertise.</span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.15)}
          style={{
            marginTop: "1rem",
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.38)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Creative software mastery
        </motion.p>

        {/* Supporting paragraph (reference image) */}
        <motion.p
          {...fadeUp(0.26)}
          style={{
            marginTop: "1.2rem",
            fontSize: "0.875rem",
            color: "rgba(255,255,255,0.36)",
            fontFamily: "Inter, sans-serif",
            lineHeight: 1.65,
            maxWidth: 400,
            margin: "1.2rem auto 0",
          }}
        >
          The right tools in the right hands create more than just visuals,
          they create impact.
        </motion.p>
      </div>

      {/* ── Interactive field ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.58, ease: "easeOut" }}
        className="relative z-10 w-full mx-auto"
        style={{ maxWidth: isMobile ? "100%" : 1100 }}
      >
        {isMobile ? (
          /* Mobile: staggered 2-column masonry */
          <div style={{ paddingTop: "0.5rem" }}>
            <MobileGrid onCardClick={openModal} />
          </div>
        ) : (
          /* Desktop: full creative workspace */
          <div style={{ height: wsH }}>
            <WorkspaceScene onCardClick={openModal} visible={visible} />
          </div>
        )}
      </motion.div>

      {/* ── Bottom scroll hint ── */}
      <motion.div
        {...fadeUp(0.42)}
        className="relative z-10 text-center"
        style={{ marginTop: isMobile ? "2.5rem" : "2rem" }}
      >
        {/* Animated mouse icon */}
        <div style={{
          width: 22, height: 36, borderRadius: 11,
          border: "1px solid rgba(255,255,255,0.17)",
          margin: "0 auto 10px",
          position: "relative", overflow: "hidden",
        }}>
          <motion.div
            animate={{ y: [0, 11, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: 6, left: "50%",
              transform: "translateX(-50%)",
              width: 3, height: 6,
              background: "rgba(255,255,255,0.38)",
              borderRadius: 2,
            }}
          />
        </div>
        <p style={{
          fontSize: "0.58rem",
          color: "rgba(255,255,255,0.20)",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          fontFamily: "Inter, sans-serif",
        }}>
          Explore the tools behind the work
        </p>
      </motion.div>

      {/* ── Skill detail modal ── */}
      <AnimatePresence>
        {selectedSkill && (
          <SkillModal
            key="skill-modal"
            skill={selectedSkill}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
