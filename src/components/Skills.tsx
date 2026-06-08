import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── Skill data ──────────────────────────────────────────────────────────────
const SKILLS = [
  {
    id: "ae",
    label: "After Effects",
    proficiency: "Advanced",
    orbitRadius: 270, // pushed out from 190 to clear the enlarged center title
    orbitDuration: 14,
    startAngle: -90,
    color: "#9999FF",
    glow: "rgba(153,102,255,0.7)",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#00005B" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          fill="#9999FF" fontSize="13" fontWeight="700" fontFamily="Inter,Arial,sans-serif">
          Ae
        </text>
      </svg>
    ),
  },
  {
    id: "pr",
    label: "Premiere Pro",
    proficiency: "Advanced",
    orbitRadius: 300, // pushed out from 210
    orbitDuration: 22,
    startAngle: 40,
    color: "#E878F0",
    glow: "rgba(232,120,240,0.7)",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#1A0033" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          fill="#E878F0" fontSize="13" fontWeight="700" fontFamily="Inter,Arial,sans-serif">
          Pr
        </text>
      </svg>
    ),
  },
  {
    id: "ps",
    label: "Photoshop",
    proficiency: "Proficient",
    orbitRadius: 390, // pushed out from 290
    orbitDuration: 32,
    startAngle: 160,
    color: "#31A8FF",
    glow: "rgba(49,168,255,0.7)",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#001933" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          fill="#31A8FF" fontSize="13" fontWeight="700" fontFamily="Inter,Arial,sans-serif">
          Ps
        </text>
      </svg>
    ),
  },
  {
    id: "canva",
    label: "Canva",
    proficiency: "Expert",
    orbitRadius: 480, // pushed out from 370
    orbitDuration: 44,
    startAngle: 250,
    color: "#00C4CC",
    glow: "rgba(0,196,204,0.7)",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="#001A1B" />
        <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle"
          fill="#00C4CC" fontSize="10" fontWeight="700" fontFamily="Inter,Arial,sans-serif">
          Canva
        </text>
      </svg>
    ),
  },
];

// ─── Starfield ────────────────────────────────────────────────────────────────
interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  duration: number;
  delay: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    r: Math.random() * 1.6 + 0.2,
    opacity: Math.random() * 0.7 + 0.1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 6,
  }));
}

const STARS = generateStars(140);

// ─── Dust Particles ───────────────────────────────────────────────────────────
interface Dust {
  x: number;
  y: number;
  opacity: number;
  r: number;
  duration: number;
  delay: number;
}

function generateDust(count: number): Dust[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    opacity: Math.random() * 0.25 + 0.03,
    r: Math.random() * 90 + 20,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 10,
  }));
}

const DUST = generateDust(6);

// ─── Responsive orbit scale ───────────────────────────────────────────────────
function useOrbitScale() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      // Scaled down slightly to compensate for the larger arena (max orbit 480 vs 370 before)
      if (w < 400) setScale(0.42);
      else if (w < 480) setScale(0.50);
      else if (w < 640) setScale(0.60);
      else if (w < 768) setScale(0.66);
      else if (w < 1024) setScale(0.76);
      else if (w < 1280) setScale(0.88);
      else setScale(1);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return scale;
}

// ─── Planet Component ─────────────────────────────────────────────────────────
interface PlanetProps {
  skill: (typeof SKILLS)[0];
  orbitRadius: number; // already scaled
  paused: boolean;
  onHover: (id: string | null) => void;
  hoveredId: string | null;
}

function Planet({ skill, orbitRadius, paused, onHover, hoveredId }: PlanetProps) {
  const isHovered = hoveredId === skill.id;
  const prefersReduced = useReducedMotion();

  // Each planet is absolutely centered on the orbit ring, then animated
  // via CSS custom-property driven transform so we can pause it cleanly.
  const animName = `orbit-${skill.id}`;
  const size = 56;

  return (
    <>
      {/* Inject keyframe via <style> tag per planet */}
      <style>{`
        @keyframes ${animName} {
          from { transform: rotate(${skill.startAngle}deg) translateX(${orbitRadius}px) rotate(-${skill.startAngle}deg); }
          to   { transform: rotate(${skill.startAngle + 360}deg) translateX(${orbitRadius}px) rotate(-${skill.startAngle + 360}deg); }
        }
        .planet-${skill.id} {
          animation: ${animName} ${prefersReduced ? "0s" : skill.orbitDuration + "s"} linear infinite;
          animation-play-state: ${paused ? "paused" : "running"};
          will-change: transform;
        }
      `}</style>

      {/* Wrapper: absolutely centered, rotates around center */}
      <div
        className={`planet-${skill.id}`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: -size / 2,
          marginLeft: -size / 2,
          width: size,
          height: size,
          cursor: "pointer",
          zIndex: 10,
        }}
        onMouseEnter={() => onHover(skill.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(skill.id)}
        onBlur={() => onHover(null)}
        tabIndex={0}
        role="button"
        aria-label={`${skill.label} – ${skill.proficiency}`}
      >
        {/* Planet orb */}
        <motion.div
          animate={isHovered ? { scale: 1.28 } : { scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          style={{
            width: size,
            height: size,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 30%, ${skill.color}33 0%, ${skill.color}11 60%, transparent 100%)`,
            border: `1.5px solid ${skill.color}55`,
            boxShadow: isHovered
              ? `0 0 28px 8px ${skill.glow}, 0 0 60px 16px ${skill.glow}44`
              : `0 0 12px 2px ${skill.glow}66`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "visible",
          }}
        >
          {/* Icon */}
          <div style={{ width: 36, height: 36, flexShrink: 0 }}>{skill.icon}</div>

          {/* Hover tooltip */}
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "rgba(0,0,0,0.88)",
                border: `1px solid ${skill.color}55`,
                borderRadius: 10,
                padding: "8px 14px",
                whiteSpace: "nowrap",
                zIndex: 99,
                backdropFilter: "blur(12px)",
                boxShadow: `0 4px 32px ${skill.glow}55`,
                pointerEvents: "none",
              }}
            >
              <div style={{ color: skill.color, fontWeight: 700, fontSize: 12, letterSpacing: "0.06em" }}>
                {skill.label}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, marginTop: 2, letterSpacing: "0.04em" }}>
                {skill.proficiency}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </>
  );
}

// ─── Orbit Ring ───────────────────────────────────────────────────────────────
function OrbitRing({ radius, color }: { radius: number; color: string }) {
  const d = radius * 2;
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        width: d,
        height: d,
        marginTop: -radius,
        marginLeft: -radius,
        borderRadius: "50%",
        border: `1px solid ${color}30`,
        boxShadow: `0 0 8px 0 ${color}18`,
        pointerEvents: "none",
      }}
    />
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function Skills() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const scale = useOrbitScale();
  const sectionRef = useRef<HTMLElement>(null);

  const maxOrbit = Math.max(...SKILLS.map((s) => s.orbitRadius));
  const arenaSize = (maxOrbit + 70) * 2; // px at scale=1
  const scaledArena = arenaSize * scale;
  // Only show pill fallback on very tiny screens where the solar system is still small
  const showPills = scale < 0.48;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        background: "#000000",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 0",
      }}
      aria-label="Skills and Expertise"
    >
      {/* ── Starfield ── */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}
      >
        {STARS.map((s, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.r * 2,
              height: s.r * 2,
              borderRadius: "50%",
              background: "#fff",
              opacity: s.opacity,
            }}
            animate={{ opacity: [s.opacity, s.opacity * 0.2, s.opacity] }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Soft nebula dust blobs */}
        {DUST.map((d, i) => (
          <motion.div
            key={"dust" + i}
            style={{
              position: "absolute",
              left: `${d.x}%`,
              top: `${d.y}%`,
              width: d.r,
              height: d.r,
              borderRadius: "50%",
              background:
                i % 3 === 0
                  ? "radial-gradient(circle, rgba(99,60,255,0.18) 0%, transparent 70%)"
                  : i % 3 === 1
                  ? "radial-gradient(circle, rgba(49,168,255,0.12) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(0,196,204,0.1) 0%, transparent 70%)",
              opacity: d.opacity,
              transform: "translate(-50%,-50%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [d.opacity, d.opacity * 1.4, d.opacity] }}
            transition={{
              duration: d.duration,
              repeat: Infinity,
              delay: d.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Solar Arena ── */}
      <div
        aria-hidden="false"
        style={{
          position: "relative",
          width: scaledArena,
          height: scaledArena,
          flexShrink: 0,
        }}
      >
        {/* Scale wrapper — keeps all coordinates consistent */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${scale})`,
            transformOrigin: "center center",
          }}
        >
          {/* Orbit rings */}
          {SKILLS.map((s) => (
            <OrbitRing key={s.id + "-ring"} radius={s.orbitRadius} color={s.color} />
          ))}

          {/* Center Text — enlarged to be the dominant focal point */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              pointerEvents: "none",
              zIndex: 5,
              width: 480, // widened safe zone matching the larger title
            }}
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                fontSize: "clamp(40px, 5.5vw, 74px)", // ~40% larger than before
                fontWeight: 600,
                letterSpacing: "-2px",
                lineHeight: 1.05,
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                textShadow: "0 0 60px rgba(255,255,255,0.3), 0 0 120px rgba(255,255,255,0.08)",
              }}
            >
              Skills &{" "}
              <span
                style={{
                  display: "block",
                  fontFamily: "Instrument Serif, Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Expertise.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              style={{
                marginTop: 14,
                fontSize: 12,
                color: "rgba(255,255,255,0.38)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Creative software mastery
            </motion.p>
          </div>

          {/* Planets */}
          {SKILLS.map((skill) => (
            <Planet
              key={skill.id}
              skill={skill}
              orbitRadius={skill.orbitRadius}
              paused={hoveredId === skill.id}
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Skill Pill List (fallback for very tiny phones only) ── */}
      {showPills && (
      <div
        className="flex flex-wrap justify-center gap-3 mt-8 px-6"
        aria-label="Skill list"
      >
        {SKILLS.map((s) => (
          <div
            key={s.id + "-pill"}
            style={{
              padding: "6px 16px",
              borderRadius: 999,
              border: `1px solid ${s.color}44`,
              background: `${s.color}0d`,
              color: s.color,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.06em",
              boxShadow: `0 0 10px ${s.glow}44`,
            }}
          >
            {s.label}
          </div>
        ))}
      </div>
      )}
    </section>
  );
}
