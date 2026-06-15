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
        fill="#fff" fontSize="22" fontWeight="800" fontFamily="Inter,Arial,sans-serif" letterSpacing="0.5">
        C
      </text>
    </svg>
  );
}

function FigmaIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 56" fill="none" aria-label="Figma">
      <rect x="0"  y="0"  width="19" height="19" rx="9.5" fill="#F24E1E"/>
      <rect x="19" y="0"  width="19" height="19" rx="9.5" fill="#FF7262"/>
      <rect x="0"  y="19" width="19" height="19" rx="9.5" fill="#A259FF"/>
      <rect x="0"  y="38" width="19" height="19" rx="9.5" fill="#0ACF83"/>
      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE"/>
    </svg>
  );
}

function AIToolsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="AI Tools">
      <defs>
        <radialGradient id="sk-ai-g" cx="35%" cy="30%" r="70%">
          <stop offset="0%"   stopColor="#A78BFA"/>
          <stop offset="100%" stopColor="#3B0764"/>
        </radialGradient>
      </defs>
      <circle cx="28" cy="28" r="28" fill="url(#sk-ai-g)"/>
      <circle cx="28" cy="28" r="5.5" fill="#fff" fillOpacity="0.9"/>
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
      <polyline points="14,22 8,28 14,34"  stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="42,22 48,28 42,34" stroke="#38BDF8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="32" y1="16" x2="24" y2="40" stroke="#818CF8" strokeWidth="2.2" strokeLinecap="round" opacity="0.8"/>
    </svg>
  );
}

function MotionGraphicsIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 56 56" fill="none" aria-label="Motion Graphics">
      <rect width="56" height="56" rx="12" fill="#0C0A1E"/>
      <circle cx="28" cy="28" r="16" stroke="rgba(167,139,250,0.4)"  strokeWidth="1"   fill="none"/>
      <circle cx="28" cy="28" r="9"  stroke="rgba(167,139,250,0.6)"  strokeWidth="1.2" fill="none"/>
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

// ─── Skill definitions ────────────────────────────────────────────────────────
// fx/fy  = desktop fractional center position [0..1] in a ~1100×500 canvas
// fxM/fyM = mobile fractional center position in a ~390×720 canvas

interface SkillDef {
  id: string;
  label: string;
  w: number;     // capsule width  (px)
  h: number;     // capsule height (px)
  iconSize: number;
  fx: number;
  fy: number;
  fxM: number;
  fyM: number;
  Icon: React.ComponentType<{ size: number }>;
}

const CAP_H = 56; // uniform height

/*
 * Desktop art-directed scatter — verified non-overlapping.
 * Think: three loose diagonal bands (top-left → centre → bottom-right).
 *
 * Mobile: gentle zigzag single-column (fx alternates ±2% around 0.50).
 */
const SKILLS: SkillDef[] = [
  { id:"premiere",    label:"Adobe Premiere Pro",  w:210, h:CAP_H, iconSize:30, fx:0.11, fy:0.28, fxM:0.48, fyM:0.06, Icon:PremierePro       },
  { id:"ae",          label:"Adobe After Effects", w:210, h:CAP_H, iconSize:30, fx:0.12, fy:0.70, fxM:0.52, fyM:0.16, Icon:AfterEffects       },
  { id:"photoshop",   label:"Photoshop",           w:168, h:CAP_H, iconSize:30, fx:0.31, fy:0.12, fxM:0.50, fyM:0.26, Icon:Photoshop          },
  { id:"illustrator", label:"Illustrator",         w:165, h:CAP_H, iconSize:30, fx:0.68, fy:0.15, fxM:0.48, fyM:0.36, Icon:Illustrator        },
  { id:"figma",       label:"Figma",               w:140, h:CAP_H, iconSize:26, fx:0.37, fy:0.62, fxM:0.52, fyM:0.46, Icon:FigmaIcon          },
  { id:"canva",       label:"Canva",               w:136, h:CAP_H, iconSize:28, fx:0.60, fy:0.75, fxM:0.48, fyM:0.56, Icon:CanvaIcon          },
  { id:"ai",          label:"AI Tools",            w:148, h:CAP_H, iconSize:28, fx:0.85, fy:0.32, fxM:0.52, fyM:0.65, Icon:AIToolsIcon        },
  { id:"motion",      label:"Motion Graphics",     w:218, h:CAP_H, iconSize:30, fx:0.52, fy:0.38, fxM:0.50, fyM:0.74, Icon:MotionGraphicsIcon },
  { id:"video",       label:"Video Editing",       w:182, h:CAP_H, iconSize:30, fx:0.43, fy:0.85, fxM:0.48, fyM:0.83, Icon:VideoEditingIcon   },
  { id:"webdev",      label:"Web Development",     w:198, h:CAP_H, iconSize:30, fx:0.84, fy:0.72, fxM:0.52, fyM:0.92, Icon:WebDevIcon         },
];

// ─── Physics constants ────────────────────────────────────────────────────────

const DAMPING      = 0.855;  // velocity friction per tick (higher = settles faster)
const SPRING_K     = 0.022;  // spring constant — how strongly node returns to base
const REPEL_RADIUS = 175;    // px — cursor influence radius
const REPEL_FORCE  = 3.0;    // cursor push magnitude
const FLOAT_AMP    = 7;      // px — idle float amplitude (subtle)
const FLOAT_SPD    = 0.00017;// idle float angular speed (very slow)

// ─── Physics node state ───────────────────────────────────────────────────────

interface PhysNode {
  w: number; h: number;
  x: number; y: number;
  vx: number; vy: number;
  baseX: number; baseY: number;
  phaseX: number; phaseY: number;
}

function buildPhysics(W: number, H: number, mobile: boolean): PhysNode[] {
  return SKILLS.map((s, i) => {
    const fx = mobile ? s.fxM : s.fx;
    const fy = mobile ? s.fyM : s.fy;
    const bx = fx * W;
    const by = fy * H;
    return {
      w: s.w, h: s.h,
      x: bx, y: by,
      vx: 0,  vy: 0,
      baseX: bx, baseY: by,
      phaseX: (i * 1.6180339 * Math.PI) % (Math.PI * 2),
      phaseY: (i * 2.3999632 * Math.PI) % (Math.PI * 2),
    };
  });
}

// ─── Fade-up reveal (site-wide pattern) ──────────────────────────────────────

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" } as const,
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

// ─── CapsuleCanvas ─────────────────────────────────────────────────────────── 
// Owns the RAF physics loop and drives capsule positions IMPERATIVELY
// (direct style.transform on wrapper divs — zero React re-renders per frame)

interface CapsuleCanvasProps { visible: boolean; }

function CapsuleCanvas({ visible }: CapsuleCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stateRef     = useRef<PhysNode[]>([]);
  // Refs to the outer positioning wrappers for each capsule
  const posRefs      = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef       = useRef<number>(0);
  const cursorRef    = useRef<{ x: number; y: number } | null>(null);
  const tickRef      = useRef(0);
  const [dims, setDims]   = useState({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);
  const prefersReduced    = useReducedMotion();

  // ── ResizeObserver ──────────────────────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: Math.round(width), h: Math.round(height) });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Initialize physics when dims change ────────────────────────────────────
  useEffect(() => {
    if (dims.w === 0) return;
    const mobile = dims.w < 768;
    stateRef.current = buildPhysics(dims.w, dims.h, mobile);
    // Immediately snap wrappers to correct positions (avoids flash at origin)
    stateRef.current.forEach((n, i) => {
      const el = posRefs.current[i];
      if (el) {
        el.style.transform = `translate3d(${(n.x - n.w / 2) | 0}px, ${(n.y - n.h / 2) | 0}px, 0)`;
      }
    });
    setReady(true);
  }, [dims]);

  // ── RAF physics loop ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!ready || stateRef.current.length === 0) return;

    const tick = () => {
      tickRef.current++;
      const t   = tickRef.current;
      const ns  = stateRef.current;
      const W   = dims.w;
      const H   = dims.h;
      const cur = cursorRef.current;

      if (prefersReduced) {
        // Respect reduced-motion: lock to base positions
        ns.forEach((n, i) => {
          n.x = n.baseX; n.y = n.baseY;
          const el = posRefs.current[i];
          if (el) el.style.transform = `translate3d(${(n.x - n.w / 2) | 0}px, ${(n.y - n.h / 2) | 0}px, 0)`;
        });
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      // 1. Idle float toward a gently oscillating target
      for (const n of ns) {
        const tx = n.baseX + Math.sin(t * FLOAT_SPD         + n.phaseX) * FLOAT_AMP;
        const ty = n.baseY + Math.cos(t * FLOAT_SPD * 0.71  + n.phaseY) * (FLOAT_AMP * 0.55);
        n.vx += (tx - n.x) * SPRING_K;
        n.vy += (ty - n.y) * SPRING_K;
      }

      // 2. Cursor / touch repulsion — quadratic falloff (feels natural)
      if (cur) {
        for (const n of ns) {
          const dx   = n.x - cur.x;
          const dy   = n.y - cur.y;
          const d    = Math.sqrt(dx * dx + dy * dy);
          if (d < REPEL_RADIUS && d > 1) {
            const t0 = 1 - d / REPEL_RADIUS;
            const f  = t0 * t0 * REPEL_FORCE;
            n.vx += (dx / d) * f;
            n.vy += (dy / d) * f;
          }
        }
      }

      // 3. Capsule-capsule AABB soft repulsion (prevents overlap)
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const a = ns[i], b = ns[j];
          const dx  = b.x - a.x;
          const dy  = b.y - a.y;
          const mxX = (a.w + b.w) / 2 + 22;
          const mxY = (a.h + b.h) / 2 + 14;
          const ox  = Math.abs(dx) < mxX ? mxX - Math.abs(dx) : 0;
          const oy  = Math.abs(dy) < mxY ? mxY - Math.abs(dy) : 0;
          if (ox > 0 && oy > 0) {
            // Separate on the axis with the smaller overlap
            if (ox < oy) {
              const push = (ox / mxX) * 0.22 * Math.sign(dx || 1);
              a.vx -= push; b.vx += push;
            } else {
              const push = (oy / mxY) * 0.18 * Math.sign(dy || 1);
              a.vy -= push; b.vy += push;
            }
          }
        }
      }

      // 4. Integrate velocity + dampen
      for (const n of ns) {
        n.vx *= DAMPING; n.vy *= DAMPING;
        n.x  += n.vx;   n.y  += n.vy;

        // Soft boundary — capsule edges stay near container
        const hw = n.w / 2, hh = n.h / 2;
        const pad = 10; // allow slight overflow
        if (n.x - hw + pad < 0)  { n.x = hw - pad;     n.vx *= -0.2; }
        if (n.x + hw - pad > W)  { n.x = W - hw + pad; n.vx *= -0.2; }
        if (n.y - hh + pad < 0)  { n.y = hh - pad;     n.vy *= -0.2; }
        if (n.y + hh - pad > H)  { n.y = H - hh + pad; n.vy *= -0.2; }
      }

      // 5. Push positions to DOM — no React re-render
      ns.forEach((n, i) => {
        const el = posRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${(n.x - n.w / 2) | 0}px, ${(n.y - n.h / 2) | 0}px, 0)`;
        }
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [ready, dims, prefersReduced]);

  // ── Pointer tracking ────────────────────────────────────────────────────────
  const track = useCallback((cx: number, cy: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    cursorRef.current = { x: cx - rect.left, y: cy - rect.top };
  }, []);

  const onMouseMove  = useCallback((e: React.MouseEvent)  => track(e.clientX, e.clientY), [track]);
  const onMouseLeave = useCallback(()                      => { cursorRef.current = null; }, []);
  const onTouchMove  = useCallback((e: React.TouchEvent)  => {
    e.preventDefault();
    const t = e.touches[0];
    if (t) track(t.clientX, t.clientY);
  }, [track]);
  const onTouchEnd   = useCallback(()                      => { cursorRef.current = null; }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        touchAction: "none",
      }}
      role="img"
      aria-label="Interactive floating skill capsules"
    >
      {SKILLS.map((skill, idx) => (
        /*
         * Outer wrapper: receives RAF-driven transform (position).
         * willChange lets the browser promote this to its own compositing layer.
         */
        <div
          key={skill.id}
          ref={el => { posRefs.current[idx] = el; }}
          style={{
            position:    "absolute",
            top:         0,
            left:        0,
            width:       skill.w,
            height:      skill.h,
            willChange:  "transform",
          }}
        >
          {/*
           * CapsuleNode is a separate component so it holds its own hover state.
           * It only re-renders when hover changes — never at 60 fps.
           */}
          <CapsuleNode
            skill={skill}
            visible={visible && ready}
            delay={idx * 0.065}
          />
        </div>
      ))}
    </div>
  );
}

// ─── CapsuleNode ──────────────────────────────────────────────────────────────
// Handles reveal animation (framer-motion) and hover state (React setState).
// The outer position wrapper is driven imperatively by CapsuleCanvas's RAF loop.

interface CapsuleNodeProps {
  skill: SkillDef;
  visible: boolean;
  delay: number;
}

function CapsuleNode({ skill, visible, delay }: CapsuleNodeProps) {
  const [hovered, setHovered] = useState(false);
  const { w, iconSize, label, Icon } = skill;

  /*
   * Framer-motion controls ONLY opacity and scale here.
   * CSS transition (on the style object) handles bg / border / shadow.
   * We do NOT put translateY on framer-motion to avoid fighting the RAF transform.
   */
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.52 }}
      animate={
        visible
          ? { opacity: 1, scale: hovered ? 1.055 : 1 }
          : { opacity: 0, scale: 0.42 }
      }
      transition={
        visible
          ? {
              opacity: { duration: 0.5, delay, ease: "easeOut" },
              scale:   {
                type:      "spring",
                stiffness: 240,
                damping:   22,
                // Only delay the initial appear, not the hover response
                delay:     hovered ? 0 : delay,
              },
            }
          : {
              opacity: { duration: 0.26 },
              scale:   { duration: 0.22 },
            }
      }
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width:   "100%",
        height:  "100%",
        borderRadius: 999,
        cursor:   "default",
        userSelect: "none",
        overflow: "hidden",
        position: "relative",

        // ── Glass surface ──────────────────────────────────────────────────
        background: hovered
          ? "rgba(255,255,255,0.096)"
          : "rgba(255,255,255,0.048)",
        backdropFilter:       "blur(20px) saturate(165%)",
        WebkitBackdropFilter: "blur(20px) saturate(165%)",
        border: hovered
          ? "1px solid rgba(255,255,255,0.30)"
          : "1px solid rgba(255,255,255,0.12)",
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.40)"
          : "0 4px 18px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.17)",

        // ── Layout ────────────────────────────────────────────────────────
        display:     "flex",
        alignItems:  "center",
        gap:         10,
        // Proportional horizontal padding so short and long capsules look right
        paddingLeft:  Math.round(w * 0.068),
        paddingRight: Math.round(w * 0.085),

        // ── Smooth visual transitions (non-transform properties) ──────────
        transition: "background 0.28s ease, border-color 0.28s ease, box-shadow 0.32s ease",
      }}
    >
      {/* ── Top specular catch-light line ──────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          width: "80%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.36), transparent)",
          pointerEvents: "none",
          borderRadius: 1,
        }}
      />
      {/* ── Subtle bottom rim glint ────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          width: "60%",
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Icon ──────────────────────────────────────────────────────────── */}
      <div
        style={{
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: hovered
            ? "drop-shadow(0 2px 4px rgba(0,0,0,0.60))"
            : "drop-shadow(0 1px 3px rgba(0,0,0,0.44))",
          transition: "filter 0.28s ease",
        }}
      >
        <Icon size={iconSize} />
      </div>

      {/* ── Label ─────────────────────────────────────────────────────────── */}
      <span
        style={{
          fontSize:      12.5,
          fontWeight:    500,
          letterSpacing: "0.022em",
          color: hovered ? "rgba(255,255,255,0.90)" : "rgba(255,255,255,0.68)",
          fontFamily:    "Inter, sans-serif",
          whiteSpace:    "nowrap",
          lineHeight:    1,
          transition:    "color 0.25s ease",
        }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ─── Skills section ───────────────────────────────────────────────────────────

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [canvasH,  setCanvasH ] = useState(500);

  // Responsive canvas height
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if      (w < 480)  setCanvasH(740);
      else if (w < 768)  setCanvasH(700);
      else if (w < 1024) setCanvasH(520);
      else               setCanvasH(500);
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ background: "#000000", paddingTop: "6rem", paddingBottom: "5rem" }}
      aria-label="Skills and Expertise"
    >
      {/* Subtle radial vignette — identical to original section */}
      <div
        aria-hidden="true"
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 85% 65% at 50% 55%, transparent 25%, rgba(0,0,0,0.6) 100%)",
          pointerEvents: "none",
          zIndex:        0,
        }}
      />

      {/* ── Heading — unchanged typography & spacing ── */}
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
            marginTop:     "1rem",
            fontSize:      "0.7rem",
            color:         "rgba(255,255,255,0.38)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontFamily:    "Inter, sans-serif",
          }}
        >
          Creative software mastery
        </motion.p>
      </div>

      {/* ── Floating capsule field ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={visible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full mx-auto"
        style={{ maxWidth: 1100, height: canvasH }}
      >
        <CapsuleCanvas visible={visible} />
      </motion.div>
    </section>
  );
}
