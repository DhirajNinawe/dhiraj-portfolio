import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function PremierePro({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Premiere Pro">
      <rect width="56" height="56" rx="10" fill="#2D0040"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#A77BFF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">
        Pr
      </text>
    </svg>
  );
}

function AfterEffects({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe After Effects">
      <rect width="56" height="56" rx="10" fill="#00005B"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#9999FF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">
        Ae
      </text>
    </svg>
  );
}

function Photoshop({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Photoshop">
      <rect width="56" height="56" rx="10" fill="#001E36"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#31A8FF" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">
        Ps
      </text>
    </svg>
  );
}

function Illustrator({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Adobe Illustrator">
      <rect width="56" height="56" rx="10" fill="#2D1B00"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#FF9A00" fontSize="16" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="-0.5">
        Ai
      </text>
    </svg>
  );
}

function CanvaIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Canva">
      <rect width="56" height="56" rx="28" fill="#7D2AE8"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fill="#fff" fontSize="14" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="0.5">
        C
      </text>
    </svg>
  );
}

function FigmaIcon({ size }: { size: number }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 38 56" fill="none" aria-label="Figma">
      {/* Figma wordmark approximation using authentic shape */}
      <rect x="0" y="0" width="19" height="19" rx="9.5" fill="#F24E1E"/>
      <rect x="19" y="0" width="19" height="19" rx="9.5" fill="#FF7262"/>
      <rect x="0" y="19" width="19" height="19" rx="9.5" fill="#A259FF"/>
      <rect x="0" y="38" width="19" height="19" rx="9.5" fill="#0ACF83"/>
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
    </svg>
  );
}

function AIToolsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="AI Tools">
      <circle cx="28" cy="28" r="28" fill="url(#ai-grad)"/>
      <defs>
        <radialGradient id="ai-grad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#A78BFA"/>
          <stop offset="100%" stopColor="#3B0764"/>
        </radialGradient>
      </defs>
      {/* Sparkle / neural network icon */}
      <circle cx="28" cy="28" r="6" fill="#fff" fillOpacity="0.9"/>
      <line x1="28" y1="14" x2="28" y2="22" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="28" y1="34" x2="28" y2="42" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="14" y1="28" x2="22" y2="28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="34" y1="28" x2="42" y2="28" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75"/>
      <line x1="18.1" y1="18.1" x2="23.8" y2="23.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="32.2" y1="32.2" x2="37.9" y2="37.9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="37.9" y1="18.1" x2="32.2" y2="23.8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
      <line x1="23.8" y1="32.2" x2="18.1" y2="37.9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
    </svg>
  );
}

function WebDevIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Web Development">
      <rect width="56" height="56" rx="12" fill="#0F1117"/>
      <rect x="4" y="4" width="48" height="48" rx="9" stroke="rgba(56,189,248,0.35)" strokeWidth="1"/>
      {/* Angle brackets */}
      <polyline points="14,22 8,28 14,34" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="42,22 48,28 42,34" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="32" y1="16" x2="24" y2="40" stroke="#818CF8" strokeWidth="2.2" strokeLinecap="round" opacity="0.8"/>
    </svg>
  );
}

function MotionGraphicsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Motion Graphics">
      <rect width="56" height="56" rx="12" fill="#0C0A1E"/>
      <circle cx="28" cy="28" r="16" stroke="rgba(167,139,250,0.4)" strokeWidth="1" fill="none"/>
      <circle cx="28" cy="28" r="9" stroke="rgba(167,139,250,0.6)" strokeWidth="1.2" fill="none"/>
      <circle cx="28" cy="28" r="3.5" fill="#A78BFA"/>
      {/* Motion lines */}
      <path d="M13 28 C18 20, 22 36, 28 28 C34 20, 38 36, 43 28" stroke="#E879F9" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

function VideoEditingIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Video Editing">
      <rect width="56" height="56" rx="12" fill="#0A0505"/>
      {/* Film strip */}
      <rect x="10" y="14" width="36" height="28" rx="4" stroke="rgba(251,146,60,0.5)" strokeWidth="1.5" fill="rgba(251,146,60,0.07)"/>
      {/* Sprocket holes */}
      <rect x="13" y="18" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="13" y="34" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="38" y="18" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      <rect x="38" y="34" width="5" height="4" rx="1" fill="rgba(251,146,60,0.6)"/>
      {/* Play triangle */}
      <polygon points="22,22 22,34 36,28" fill="#FB923C"/>
    </svg>
  );
}

// ─── Skill Data with icons ────────────────────────────────────────────────────

interface SkillDef {
  id: string;
  label: string;
  size: number;
  iconSize: number;
  /** Art-directed base position as fraction of [0..1] of the canvas.
   *  Values slightly outside [0,1] intentionally crop at edges. */
  fx: number; // fractional x  (0 = left, 1 = right)
  fy: number; // fractional y  (0 = top,  1 = bottom)
  Icon: React.ComponentType<{ size: number }>;
}

// Art-directed positions — organically balanced, not symmetrical.
// fx/fy slightly outside (< 0 or > 1) allow intentional edge-cropping.
const SKILLS: SkillDef[] = [
  { id: "premiere",   label: "Adobe Premiere Pro",   size: 96, iconSize: 48, fx: 0.12,  fy: 0.22,  Icon: PremierePro },
  { id: "ae",         label: "Adobe After Effects",   size: 90, iconSize: 46, fx: 0.38,  fy: 0.14,  Icon: AfterEffects },
  { id: "photoshop",  label: "Photoshop",             size: 82, iconSize: 40, fx: 0.62,  fy: 0.28,  Icon: Photoshop },
  { id: "illustrator",label: "Illustrator",           size: 80, iconSize: 40, fx: 0.87,  fy: 0.16,  Icon: Illustrator },
  { id: "canva",      label: "Canva",                 size: 78, iconSize: 38, fx: -0.04, fy: 0.60,  Icon: CanvaIcon },
  { id: "figma",      label: "Figma",                 size: 82, iconSize: 32, fx: 0.28,  fy: 0.55,  Icon: FigmaIcon },
  { id: "ai",         label: "AI Tools",              size: 76, iconSize: 38, fx: 0.56,  fy: 0.68,  Icon: AIToolsIcon },
  { id: "webdev",     label: "Web Development",       size: 94, iconSize: 46, fx: 1.02,  fy: 0.52,  Icon: WebDevIcon },
  { id: "motion",     label: "Motion Graphics",       size: 88, iconSize: 44, fx: 0.75,  fy: 0.80,  Icon: MotionGraphicsIcon },
  { id: "video",      label: "Video Editing",         size: 86, iconSize: 44, fx: 0.18,  fy: 0.84,  Icon: VideoEditingIcon },
];

// ─── Physics constants ────────────────────────────────────────────────────────

const DAMPING       = 0.91;   // velocity friction per tick
const SPRING_K      = 0.016;  // spring strength returning to base
const REPEL_DIST    = 175;    // px — cursor repel radius
const REPEL_FORCE   = 2.6;    // cursor push strength
const COLLIDE_SLACK = 10;     // extra gap between bubbles
const FLOAT_SCALE   = 18;     // idle float amplitude (px)
const FLOAT_SPEED   = 0.00024;// idle float angular speed

// ─── Types ────────────────────────────────────────────────────────────────────

interface BubbleState {
  id: string;
  label: string;
  size: number;
  iconSize: number;
  Icon: React.ComponentType<{ size: number }>;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
  phaseX: number;
  phaseY: number;
}

// ─── Art-directed seed positions ─────────────────────────────────────────────

function computeBasePositions(
  containerW: number,
  containerH: number
): { baseX: number; baseY: number; x: number; y: number }[] {
  return SKILLS.map((s) => {
    // Convert fractional coords to pixel coords
    // fx/fy can be slightly outside [0,1] for intentional edge-cropping
    const cx = s.fx * containerW;
    const cy = s.fy * containerH;
    return { baseX: cx, baseY: cy, x: cx, y: cy };
  });
}

// ─── Fade-up animation variant (matches site-wide system) ────────────────────

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ─── BubbleCanvas — the physics playground ───────────────────────────────────

interface BubbleCanvasProps {
  visible: boolean;
}

function BubbleCanvas({ visible }: BubbleCanvasProps) {
  const canvasRef   = useRef<HTMLDivElement>(null);
  const stateRef    = useRef<BubbleState[]>([]);
  const rafRef      = useRef<number>(0);
  const mouseRef    = useRef<{ x: number; y: number } | null>(null);
  const touchRef    = useRef<{ x: number; y: number } | null>(null);
  const tickRef     = useRef(0);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [, forceRender] = useState(0);
  const prefersReduced = useReducedMotion();

  // Initialise / re-seed on dimension change
  useEffect(() => {
    if (dims.w === 0 || dims.h === 0) return;

    const seeds = computeBasePositions(dims.w, dims.h);
    stateRef.current = SKILLS.map((s, i) => ({
      ...s,
      ...seeds[i],
      vx: 0,
      vy: 0,
      phaseX: (i * 1.618 * Math.PI) % (Math.PI * 2),
      phaseY: (i * 2.399 * Math.PI) % (Math.PI * 2),
    }));
  }, [dims]);

  // Measure container
  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Physics loop
  useEffect(() => {
    if (dims.w === 0 || stateRef.current.length === 0) return;

    const tick = () => {
      tickRef.current++;
      const t = tickRef.current;
      const bubbles = stateRef.current;
      const W = dims.w;
      const H = dims.h;
      const cursor = mouseRef.current ?? touchRef.current;

      if (prefersReduced) {
        for (const b of bubbles) { b.x = b.baseX; b.y = b.baseY; }
        forceRender(n => n + 1);
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // 1. Idle float + spring back to base
      for (const b of bubbles) {
        const targetX = b.baseX + Math.sin(t * FLOAT_SPEED + b.phaseX) * FLOAT_SCALE;
        const targetY = b.baseY + Math.cos(t * FLOAT_SPEED * 0.73 + b.phaseY) * (FLOAT_SCALE * 0.65);

        // spring toward float target
        b.vx += (targetX - b.x) * SPRING_K;
        b.vy += (targetY - b.y) * SPRING_K;
      }

      // 2. Cursor / touch repulsion
      if (cursor) {
        for (const b of bubbles) {
          const dx = b.x - cursor.x;
          const dy = b.y - cursor.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < REPEL_DIST && dist > 0.01) {
            const strength = (1 - dist / REPEL_DIST) * REPEL_FORCE;
            b.vx += (dx / dist) * strength;
            b.vy += (dy / dist) * strength;
          }
        }
      }

      // 3. Bubble–bubble soft collision
      for (let i = 0; i < bubbles.length; i++) {
        for (let j = i + 1; j < bubbles.length; j++) {
          const a = bubbles[i];
          const bj = bubbles[j];
          const dx = bj.x - a.x;
          const dy = bj.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minD = (a.size + bj.size) / 2 + COLLIDE_SLACK;
          if (dist < minD && dist > 0.01) {
            const overlap = (minD - dist) / dist * 0.45;
            const fx = dx * overlap;
            const fy = dy * overlap;
            a.vx -= fx * 0.55;
            a.vy -= fy * 0.55;
            bj.vx += fx * 0.55;
            bj.vy += fy * 0.55;
          }
        }
      }

      // 4. Integrate + dampen + soft boundary (allow slight edge-crop)
      for (const b of bubbles) {
        b.vx *= DAMPING;
        b.vy *= DAMPING;
        b.x += b.vx;
        b.y += b.vy;

        // Soft boundary — allow up to half-radius outside on any edge
        const r = b.size / 2;
        const margin = r * 0.5; // allow 50% crop at edges
        if (b.x - r + margin < 0) { b.x = r - margin; b.vx *= -0.3; }
        if (b.x + r - margin > W) { b.x = W - r + margin; b.vx *= -0.3; }
        if (b.y - r + margin < 0) { b.y = r - margin; b.vy *= -0.3; }
        if (b.y + r - margin > H) { b.y = H - r + margin; b.vy *= -0.3; }
      }

      forceRender(n => n + 1);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [dims, prefersReduced]);

  // Mouse tracking (relative to canvas)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }, []);
  const handleMouseLeave = useCallback(() => { mouseRef.current = null; }, []);

  // Touch tracking
  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !touch) return;
    touchRef.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
  }, []);
  const handleTouchEnd = useCallback(() => { touchRef.current = null; }, []);

  return (
    <div
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        touchAction: "none",
      }}
      role="img"
      aria-label="Floating skill bubbles"
    >
      {stateRef.current.map((b, idx) => (
        <BubbleNode
          key={b.id}
          bubble={b}
          visible={visible}
          revealDelay={idx * 0.055}
        />
      ))}
    </div>
  );
}

// ─── Individual Bubble ────────────────────────────────────────────────────────

interface BubbleNodeProps {
  bubble: BubbleState;
  visible: boolean;
  revealDelay: number;
}

function BubbleNode({ bubble, visible, revealDelay }: BubbleNodeProps) {
  const { size, iconSize, label, x, y, Icon } = bubble;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.45 }}
      animate={visible
        ? { opacity: 1, scale: hovered ? 1.07 : 1 }
        : { opacity: 0, scale: 0.35 }
      }
      transition={visible
        ? {
            opacity: { duration: 0.6,  delay: revealDelay, ease: "easeOut" },
            scale:   { type: "spring", stiffness: 200, damping: 20, delay: revealDelay },
          }
        : {
            opacity: { duration: 0.3, ease: "easeIn" },
            scale:   { duration: 0.28 },
          }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        cursor: "default",
        willChange: "transform",
        // Glass effect
        background: hovered
          ? "linear-gradient(145deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.13) 100%)"
          : "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)",
        backdropFilter: "blur(20px) saturate(200%)",
        WebkitBackdropFilter: "blur(20px) saturate(200%)",
        border: hovered
          ? "1px solid rgba(255,255,255,0.50)"
          : "1px solid rgba(255,255,255,0.22)",
        boxShadow: hovered
          ? "0 16px 56px rgba(0,0,0,0.50), inset 0 1.5px 1.5px rgba(255,255,255,0.55), 0 0 0 1px rgba(255,255,255,0.08)"
          : "0 8px 32px rgba(0,0,0,0.32), inset 0 1.5px 1px rgba(255,255,255,0.30), 0 0 0 0.5px rgba(255,255,255,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        userSelect: "none",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Top-left specular catch-light */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "5%",
          left: "10%",
          width: "60%",
          height: "34%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse at 38% 28%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.10) 55%, transparent 80%)",
          pointerEvents: "none",
          transform: "rotate(-24deg)",
        }}
      />
      {/* Bottom rim shimmer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "18%",
          width: "64%",
          height: "16%",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(255,255,255,0.09) 0%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: hovered ? "drop-shadow(0 2px 8px rgba(0,0,0,0.6))" : "drop-shadow(0 1px 4px rgba(0,0,0,0.4))",
          transition: "filter 0.3s ease",
          borderRadius: "50%",
        }}
      >
        <Icon size={iconSize} />
      </div>

      {/* Label — small, below icon */}
      <span
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: size >= 90 ? 9.5 : 8.5,
          fontWeight: 500,
          letterSpacing: "0.035em",
          color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
          fontFamily: "Inter, sans-serif",
          lineHeight: 1.2,
          textAlign: "center",
          maxWidth: size * 0.8,
          transition: "color 0.25s ease",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Main Skills Section ──────────────────────────────────────────────────────

export default function Skills() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [canvasH, setCanvasH] = useState(560);

  // Responsive canvas height
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 480)       setCanvasH(580);
      else if (w < 768)  setCanvasH(560);
      else if (w < 1024) setCanvasH(540);
      else               setCanvasH(560);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // IntersectionObserver — drives enter/exit animation (same pattern as Timeline)
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "#000000",
        paddingTop: "6rem",
        paddingBottom: "5rem",
      }}
      aria-label="Skills and Expertise"
    >
      {/* ── Subtle radial vignette ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 85% 65% at 50% 55%, transparent 25%, rgba(0,0,0,0.6) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Heading — site-wide typography + fadeUp reveal ── */}
      <div className="relative z-10 text-center mb-12 px-6">
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
      </div>

      {/* ── Bubble playground ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative z-10 w-full mx-auto"
        style={{ maxWidth: 1100, height: canvasH }}
      >
        <BubbleCanvas visible={visible} />
      </motion.div>
    </section>
  );
}
