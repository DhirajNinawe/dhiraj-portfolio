import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const projects = [
  {
    title: "Brand Identity Design",
    description:
      "Complete visual identity system including logo, color palette, typography, and brand guidelines for a tech startup.",
    category: "Graphic Design",
  },
  {
    title: "E-Commerce Website",
    description:
      "Modern, responsive online store with smooth animations, product filtering, and an intuitive checkout experience.",
    category: "Web Design",
  },
  {
    title: "Cinematic Brand Film",
    description:
      "A 60-second cinematic brand video combining motion graphics, storytelling, and professional color grading.",
    category: "Video Editing",
  },
  {
    title: "Portfolio Website",
    description:
      "A dark-themed personal portfolio with liquid glass effects, scroll animations, and a premium design language.",
    category: "Web Design",
  },
  {
    title: "Social Media Campaign",
    description:
      "A series of 30+ social media graphics for an Instagram campaign, driving 3x engagement growth.",
    category: "Graphic Design",
  },
  {
    title: "YouTube Channel Intro",
    description:
      "Dynamic animated intro sequence with sound design and kinetic typography for a content creator.",
    category: "Video Editing",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 md:py-44 px-6 md:px-28 border-t border-border/30"
    >
      {/* Label */}
      <motion.p
        {...fadeUp(0)}
        className="text-xs tracking-[3px] uppercase text-muted-foreground text-center mb-4"
      >
        PORTFOLIO
      </motion.p>

      {/* Heading */}
      <motion.h2
        {...fadeUp(0.05)}
        className="text-4xl md:text-6xl font-medium tracking-[-2px] text-center mb-6"
      >
        My{" "}
        <span className="font-serif italic font-normal">Projects</span>
      </motion.h2>

      <motion.p
        {...fadeUp(0.1)}
        className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16"
      >
        A curated selection of work spanning web design, video editing, and graphic design.
      </motion.p>

      {/* Video */}
      <motion.div
        {...fadeUp(0.15)}
        className="mb-20 max-w-5xl mx-auto"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl object-cover"
          style={{ aspectRatio: "3/1" }}
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            {...fadeUp(0.1 + i * 0.08)}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="liquid-glass rounded-2xl p-6 group cursor-pointer flex flex-col"
          >
            {/* Thumbnail placeholder */}
            <div className="w-full aspect-video rounded-xl bg-secondary/50 mb-5 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs tracking-[2px] uppercase text-muted-foreground/60">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Category tag */}
            <span className="text-xs tracking-[1px] uppercase text-muted-foreground mb-2">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="font-semibold text-lg mb-2 group-hover:text-foreground transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
              {project.description}
            </p>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="liquid-glass rounded-lg px-5 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground flex items-center justify-center gap-2 transition-colors group-hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              View Project
              <ExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
