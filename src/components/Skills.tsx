import { motion } from "framer-motion";
import { Globe, Video, Palette } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const skills = [
  {
    icon: Globe,
    title: "Web Design",
    description:
      "Crafting modern, responsive websites with clean UI/UX that deliver seamless user experiences across all devices.",
  },
  {
    icon: Video,
    title: "Video Editing",
    description:
      "Creating cinematic edits, engaging reels, and visual storytelling that captivate audiences and elevate brands.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Designing logos, brand identities, and social media visuals that communicate your message with clarity and style.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 md:px-28 pt-52 md:pt-64 pb-6 md:pb-9">
      {/* Heading */}
      <motion.div {...fadeUp(0)} className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          Skills &amp;{" "}
          <span className="font-serif italic font-normal">Expertise.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          I specialize in creating digital experiences that blend aesthetics
          with functionality — from pixels to playback.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.title}
            {...fadeUp(0.1 + i * 0.1)}
            className="flex flex-col items-center text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="liquid-glass w-24 h-24 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-shadow duration-500"
            >
              <skill.icon
                size={36}
                strokeWidth={1.5}
                className="text-foreground/80 group-hover:text-foreground transition-colors duration-300"
              />
            </motion.div>
            <h3 className="font-semibold text-base mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-muted-foreground text-sm text-center"
      >
        Turning ideas into digital reality — one pixel at a time.
      </motion.p>
    </section>
  );
}
