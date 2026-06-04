import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Layers,
  Code2,
  Film,
  Zap,
  Brain,
  Target,
  Lightbulb,
  ChevronLeft,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CaseStudy {
  story: string;
  psychologyUsed?: string[];
  approach?: string;           // Creative Approach (multi-paragraph, \n\n separated)
  softwareUsed?: { name: string; bullets: string[] }[]; // Per-tool breakdown
  creativeGoal: string;
  videoEmbedUrl?: string;      // Google Drive / YouTube embed src
}

interface Project {
  id: string;
  title: string;
  brand: string;
  tagline: string;
  categoryTag: string;
  description?: string;
  thumbnail?: string;
  videoUrl?: string;
  externalLink?: string;
  tags?: string[];
  year?: string;
  caseStudy?: CaseStudy;
}

interface Category {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  glowColor: string;
  gradientFrom: string;
  gradientTo: string;
  Icon: React.ElementType;
  stats: { label: string; value: string }[];
  technologies: string[];
  projects: Project[];
  coverThumbnail?: string; // category card hero image
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = [
  {
    id: "graphic-designs",
    title: "Graphic Designs",
    subtitle: "Visual Identity & Creative Assets",
    description:
      "Branding projects, social media creatives, posters, marketing assets, and visual identities that communicate your message with clarity and style.",
    accentColor: "#C084FC",
    glowColor: "rgba(192,132,252,0.4)",
    gradientFrom: "rgba(88,28,135,0.85)",
    gradientTo: "rgba(0,0,0,0)",
    Icon: Layers,
    coverThumbnail: "/graphic-design-collage.png",
    stats: [
      { label: "Projects Completed", value: "3" },
      { label: "Brands Featured", value: "3" },
      { label: "Assets Delivered", value: "3+" },
    ],
    technologies: ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma"],
    projects: [
      {
        id: "gd-milton",
        title: "Temperature Ka Boss",
        brand: "Milton",
        tagline: "Temperature Ka Boss",
        categoryTag: "Advertising Campaign",
        description:
          "A bold campaign communicating Milton's core value — temperature retention — through striking split-composition design.",
        thumbnail: "https://i.ibb.co/WWxFw63L/milton-poster-design.png",
        tags: ["Advertising", "Poster Design", "Brand Campaign"],
        year: "2025",
        caseStudy: {
          story:
            "This campaign was created to communicate Milton's core value proposition — temperature retention.\n\nInstead of focusing only on product visuals, the design highlights the benefit users actually care about: keeping beverages hot or cold for long hours.\n\nThe red and white split composition visually represents hot and cold temperature zones, while the '24 Hours Hot / Cold' claim creates instant trust and product authority.",
          psychologyUsed: [
            "Contrast Psychology",
            "Benefit-First Marketing",
            "Authority Through Quantifiable Claims",
          ],
          creativeGoal:
            "To make Milton's insulation performance understandable within seconds.",
        },
      },
      {
        id: "gd-swiggy",
        title: "Craving Something? We Deliver.",
        brand: "Swiggy",
        tagline: "Craving Something? We Deliver.",
        categoryTag: "Creative Advertising",
        description:
          "A concept that transforms the delivery motorcycle into food itself — connecting cravings with instant delivery through visual metaphor.",
        thumbnail: "https://i.ibb.co/N6FLD6Bv/Swiggy-Poster-Redesign.png",
        tags: ["Visual Metaphor", "Food & Beverage", "Creative Concept"],
        year: "2025",
        caseStudy: {
          story:
            "This concept transforms the delivery vehicle into food itself.\n\nThe motorcycle is built using burgers, pizza, and bread elements to visually connect cravings with delivery.\n\nInstead of showing a normal delivery process, the design communicates desire, hunger, and instant gratification.",
          psychologyUsed: [
            "Visual Metaphor",
            "Pattern Interruption",
            "Appetite Trigger Design",
          ],
          creativeGoal:
            "To make food delivery feel fast, memorable, and impossible to ignore.",
        },
      },
      {
        id: "gd-zomato",
        title: "Har Weather, Hum Saath Hain",
        brand: "Zomato",
        tagline: "Har Weather, Hum Saath Hain",
        categoryTag: "Brand Awareness Campaign",
        description:
          "A campaign celebrating the resilience of Zomato delivery partners, with the rider as the hero and the red umbrella as a symbol of unwavering commitment.",
        thumbnail: "https://i.ibb.co/RkDVfHCW/Zomato-poster-design.png",
        tags: ["Brand Awareness", "Emotional Design", "Human-Centered"],
        year: "2025",
        caseStudy: {
          story:
            "This campaign focuses on the dedication of delivery partners during harsh weather conditions.\n\nThe rider becomes the hero of the story, reinforcing trust and reliability while highlighting the people behind the service.\n\nThe red umbrella acts as a symbol of protection and commitment.",
          psychologyUsed: [
            "Hero Framing",
            "Emotional Trust Building",
            "Human-Centered Storytelling",
          ],
          creativeGoal:
            "To show that reliability is not just a service feature — it is a promise.",
        },
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Digital Experiences & Interfaces",
    description:
      "Landing pages, SaaS websites, portfolio websites, and business websites built with modern frameworks and award-winning design sensibilities.",
    accentColor: "#38BDF8",
    glowColor: "rgba(56,189,248,0.4)",
    gradientFrom: "rgba(12,74,110,0.85)",
    gradientTo: "rgba(0,0,0,0)",
    Icon: Code2,
    stats: [
      { label: "Sites Launched", value: "—" },
      { label: "Frameworks Used", value: "4+" },
      { label: "Avg Lighthouse Score", value: "—" },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    projects: [],
  },
  {
    id: "commercial-edits",
    title: "Commercial Edits",
    subtitle: "Cinematic Brand Films & Campaigns",
    description:
      "Advertisements, promotional videos, product campaigns, and brand films that captivate audiences and drive real results.",
    accentColor: "#FB923C",
    glowColor: "rgba(251,146,60,0.4)",
    gradientFrom: "rgba(124,45,18,0.85)",
    gradientTo: "rgba(0,0,0,0)",
    Icon: Film,
    coverThumbnail: "/car-dealers.png",
    stats: [
      { label: "Videos Produced", value: "2" },
      { label: "Brands Featured", value: "2" },
      { label: "Campaign Types", value: "2" },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Audition"],
    projects: [
      {
        id: "ce-car-dealers",
        title: "Premium Drive",
        brand: "Car Dealers",
        tagline: "Luxury Meets Performance",
        categoryTag: "Automotive Commercial",
        description:
          "A cinematic commercial edit for a luxury car dealership — moody lighting, sweeping camera moves, and premium brand positioning.",
        thumbnail: "/car-dealers.png",
        tags: ["Automotive", "Commercial", "Cinematic", "Premiere Pro", "After Effects"],
        year: "2025",
        caseStudy: {
          story:
            "This commercial was crafted to position a luxury car dealership as the premium choice in a competitive market.\n\nThe edit uses slow, sweeping camera movements, dramatic lighting, and sharp cuts to reflect the precision and prestige of the vehicles on offer.\n\nEvery visual decision was made to evoke desire, exclusivity, and aspiration in the target audience.",
          psychologyUsed: [
            "Aspirational Desire Framing",
            "Scarcity & Exclusivity Cues",
            "Cinematic Brand Authority",
          ],
          creativeGoal:
            "To make luxury car ownership feel within reach while maintaining an aura of exclusivity and prestige.",
        },
      },
      {
        id: "ce-shops-businesses",
        title: "Open For Business",
        brand: "Shops & Businesses",
        tagline: "Your Story, Our Edit",
        categoryTag: "Business Promotional",
        description:
          "A warm, inviting promotional edit for local shops and businesses — showcasing atmosphere, personality, and brand story.",
        thumbnail: "/shops-businesses.png",
        tags: ["Retail", "Business", "Promotional", "Premiere Pro", "Color Grading"],
        year: "2025",
        caseStudy: {
          story:
            "This edit was designed to help local shops and businesses stand out in a crowded marketplace.\n\nThe warm color grading, close-up product shots, and human-centered storytelling create an emotional connection between the brand and its audience.\n\nThe edit balances professionalism with approachability — making the business feel both trustworthy and welcoming.",
          psychologyUsed: [
            "Warmth & Trust Building",
            "Human-Centered Storytelling",
            "Local Community Appeal",
          ],
          creativeGoal:
            "To transform a simple promotional video into a brand story that builds loyalty and drives foot traffic.",
        },
      },
    ],
  },
  {
    id: "saas-explainers",
    title: "SaaS Explainers",
    subtitle: "Product Stories & UI Animations",
    description:
      "Product explainers, UI animations, onboarding videos, and software walkthroughs that turn complex products into compelling stories.",
    accentColor: "#34D399",
    glowColor: "rgba(52,211,153,0.4)",
    gradientFrom: "rgba(6,78,59,0.85)",
    gradientTo: "rgba(0,0,0,0)",
    Icon: Zap,
    coverThumbnail: "/saas-showreel.png",
    stats: [
      { label: "Showreels Produced", value: "1" },
      { label: "Agencies Featured", value: "1" },
      { label: "Tools Used", value: "2" },
    ],
    technologies: ["After Effects", "Premiere Pro", "Motion Graphics", "Typography Animation"],
    projects: [
      {
        id: "saas-frameflows",
        title: "Agency Showreel",
        brand: "FrameFlows Studios",
        tagline: "Agency Showreel",
        categoryTag: "Agency Showcase",
        description:
          "A fast-paced, motion-driven showreel showcasing FrameFlows Studios' creative capabilities, services, and professional positioning for potential clients.",
        videoUrl: "https://drive.google.com/file/d/1nWHEIxNSi1_XGnhvL2Iij3mL3rSwWCwj/view?usp=drive_link",
        tags: ["Agency Showreel", "Motion Graphics", "Brand Film", "After Effects", "Premiere Pro"],
        year: "2025",
        caseStudy: {
          videoEmbedUrl: "https://drive.google.com/file/d/1nWHEIxNSi1_XGnhvL2Iij3mL3rSwWCwj/preview",
          story:
            "This showreel was created for FrameFlows Studios to showcase the agency's services in a visually engaging and fast-paced format.\n\nThe objective was to communicate the agency's capabilities, creative expertise, and service offerings within a short attention span while maintaining a premium and modern visual style.\n\nThe edit combines motion graphics, dynamic transitions, typography, service highlights, and brand-focused storytelling to create a strong first impression for potential clients.",
          approach:
            "Instead of listing services in a static manner, the video presents FrameFlows Studios' offerings through motion-driven visual storytelling.\n\nEach sequence was designed to capture attention quickly, maintain viewer engagement, communicate services clearly, and reinforce the agency's professional positioning.\n\nThe pacing, animations, and transitions were intentionally crafted to feel modern, energetic, and agency-grade.",
          softwareUsed: [
            {
              name: "Adobe After Effects",
              bullets: [
                "Motion graphics",
                "Typography animation",
                "Visual effects",
                "Dynamic transitions",
              ],
            },
            {
              name: "Adobe Premiere Pro",
              bullets: [
                "Video editing",
                "Sequence assembly",
                "Audio synchronization",
                "Final pacing and delivery",
              ],
            },
          ],
          psychologyUsed: [],
          creativeGoal:
            "To create a portfolio-ready agency showreel that introduces FrameFlows Studios, showcases its services, and leaves viewers with a strong impression of the agency's creative capabilities.",
        },
      },
    ],
  },

];

// ─── Card Thumbnail ───────────────────────────────────────────────────────────

function CardThumbnail({
  category,
}: {
  category: Category;
}) {
  if (category.coverThumbnail) {
    return (
      <img
        src={category.coverThumbnail}
        alt={category.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    );
  }
  // Fallback: stylised gradient placeholder
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 40%, ${category.accentColor}18 0%, transparent 60%),
                       radial-gradient(ellipse at 70% 70%, ${category.accentColor}0d 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(${category.accentColor} 1px, transparent 1px),
                            linear-gradient(90deg, ${category.accentColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <category.Icon size={40} style={{ color: category.accentColor, opacity: 0.3 }} strokeWidth={1} />
      <span className="mt-3 text-xs tracking-[3px] uppercase" style={{ color: category.accentColor, opacity: 0.35 }}>
        Coming Soon
      </span>
    </div>
  );
}

// ─── Category Card ────────────────────────────────────────────────────────────

interface CategoryCardProps {
  category: Category;
  index: number;
  onClick: () => void;
}

function CategoryCard({ category, index, onClick }: CategoryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.012 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group cursor-pointer rounded-2xl overflow-hidden relative"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid rgba(255,255,255,${hovered ? "0.12" : "0.06"})`,
        boxShadow: hovered
          ? `0 0 0 1px ${category.accentColor}22, 0 24px 60px rgba(0,0,0,0.6), 0 0 40px ${category.glowColor}`
          : "0 8px 32px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.4s ease, border-color 0.3s ease",
      }}
      aria-label={`Open ${category.title} category`}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <div className="absolute inset-0">
          <CardThumbnail category={category} />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)` }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ background: `linear-gradient(135deg, ${category.gradientFrom} 0%, ${category.gradientTo} 60%)` }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[3px] uppercase mb-1.5 font-medium" style={{ color: category.accentColor }}>
                {category.subtitle}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight">
                {category.title}
              </h3>
            </div>
            <motion.div
              animate={{ scale: hovered ? 1 : 0.85, opacity: hovered ? 1 : 0.5, rotate: hovered ? 0 : -15 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: `${category.accentColor}22`, border: `1px solid ${category.accentColor}44` }}
            >
              <ArrowUpRight size={15} style={{ color: category.accentColor }} />
            </motion.div>
          </div>
        </div>
        {category.projects.length > 0 && (
          <div
            className="absolute top-4 right-4 text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-full font-medium"
            style={{ background: `${category.accentColor}22`, border: `1px solid ${category.accentColor}44`, color: category.accentColor }}
          >
            {category.projects.length} {category.projects.length === 1 ? "Project" : "Projects"}
          </div>
        )}
      </div>
      <div className="px-5 py-4 flex items-center gap-3 flex-wrap">
        {category.technologies.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[10px] tracking-[1.5px] uppercase text-muted-foreground/60">
            {tech}
          </span>
        ))}
        {category.technologies.length > 3 && (
          <span className="text-[10px] text-muted-foreground/40">+{category.technologies.length - 3} more</span>
        )}
      </div>
    </motion.article>
  );
}

// ─── Project Poster Card (inside category panel) ──────────────────────────────

interface ProjectPosterProps {
  project: Project;
  accentColor: string;
  onClick: () => void;
}

function ProjectPosterCard({ project, accentColor, onClick }: ProjectPosterProps) {
  const [hovered, setHovered] = useState(false);
  const isVideo = !!project.videoUrl;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer group rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid rgba(255,255,255,${hovered ? "0.12" : "0.06"})`,
        boxShadow: hovered
          ? `0 0 0 1px ${accentColor}30, 0 20px 60px rgba(0,0,0,0.5), 0 0 32px ${accentColor}28`
          : "0 4px 24px rgba(0,0,0,0.3)",
        transition: "box-shadow 0.35s ease, border-color 0.3s ease",
      }}
      aria-label={`View ${project.brand} — ${project.title} case study`}
    >
      {/* Thumbnail — portrait for posters, 16:9 for video projects */}
      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: isVideo ? "56.25%" : "120%" }}
      >
        <div className="absolute inset-0">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.brand} — ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            /* Video placeholder with play icon */
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{
                background: `radial-gradient(ellipse at center, ${accentColor}18 0%, transparent 70%)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: `${accentColor}20`, border: `1px solid ${accentColor}50` }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5" style={{ color: accentColor }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[2px] uppercase" style={{ color: accentColor, opacity: 0.5 }}>
                Agency Showreel
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }}
          />

          {/* Hover CTA */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.35)" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: `${accentColor}22`,
                border: `1px solid ${accentColor}66`,
                color: accentColor,
                backdropFilter: "blur(8px)",
              }}
            >
              {isVideo ? "Watch & Read" : "View Case Study"} <ArrowUpRight size={12} />
            </div>
          </motion.div>

          {/* Category tag */}
          <div className="absolute top-3 left-3">
            <span
              className="text-[9px] tracking-[2px] uppercase px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}44`, color: accentColor, backdropFilter: "blur(8px)" }}
            >
              {project.categoryTag}
            </span>
          </div>

          {/* Video badge */}
          {isVideo && (
            <div className="absolute top-3 right-3">
              <div
                className="flex items-center gap-1 text-[9px] tracking-[1px] uppercase px-2 py-1 rounded-full font-semibold"
                style={{ background: `${accentColor}22`, border: `1px solid ${accentColor}55`, color: accentColor, backdropFilter: "blur(8px)" }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Video
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card footer */}
      <div className="p-4 flex flex-col gap-1">
        <p className="text-[10px] tracking-[2.5px] uppercase font-semibold" style={{ color: accentColor }}>
          {project.brand}
        </p>
        <h4 className="text-sm font-semibold text-white/90 leading-snug">
          {project.title}
        </h4>
        {project.description && (
          <p className="text-xs text-white/40 mt-1 leading-relaxed line-clamp-2">{project.description}</p>
        )}
      </div>
    </motion.div>
  );
}


// ─── Case Study Detail View ───────────────────────────────────────────────────

interface CaseStudyViewProps {
  project: Project;
  accentColor: string;
  onBack: () => void;
}

function CaseStudyView({ project, accentColor, onBack }: CaseStudyViewProps) {
  const cs = project.caseStudy;
  const isVideoProject = !!cs?.videoEmbedUrl;

  return (
    <motion.div
      key="case-study"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
      className="flex flex-col gap-8"
    >
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs tracking-wide font-medium w-fit group"
        style={{ color: "rgba(255,255,255,0.45)" }}
      >
        <ChevronLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
        Back to Projects
      </button>

      {/* Title + tags */}
      <div>
        <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-2" style={{ color: accentColor }}>
          {project.brand} · {project.categoryTag}
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight">
          {project.title}
        </h3>
        {project.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
                style={{ background: `${accentColor}14`, border: `1px solid ${accentColor}30`, color: accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ────────────────────────────────────────────────────────────────
          VIDEO PROJECT LAYOUT
      ──────────────────────────────────────────────────────────────── */}
      {isVideoProject ? (
        <div className="flex flex-col gap-7">

          {/* Embedded video player */}
          {cs?.videoEmbedUrl && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Film size={13} style={{ color: accentColor }} />
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Showreel</span>
              </div>
              <div
                className="w-full rounded-2xl overflow-hidden relative"
                style={{
                  paddingTop: "56.25%",
                  border: `1px solid ${accentColor}35`,
                  boxShadow: `0 0 60px ${accentColor}22`,
                }}
              >
                <iframe
                  src={cs.videoEmbedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title={`${project.brand} — ${project.title}`}
                  style={{ border: "none" }}
                />
              </div>
              <p className="text-[10px] text-white/25 mt-2 text-center tracking-wide">
                Ensure the Google Drive file is set to "Anyone with the link can view" if it doesn't load.
              </p>
            </div>
          )}

          {/* Project Overview */}
          {cs?.story && (
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={13} style={{ color: accentColor }} />
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Project Overview</span>
              </div>
              <div className="space-y-3">
                {cs.story.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-white/65 leading-[1.9]">{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Creative Approach */}
          {cs?.approach && (
            <div
              className="rounded-2xl p-6"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Brain size={13} style={{ color: accentColor }} />
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Creative Approach</span>
              </div>
              <div className="space-y-3">
                {cs.approach.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-white/65 leading-[1.9]">{para}</p>
                ))}
              </div>
            </div>
          )}

          {/* Software Used */}
          {cs?.softwareUsed && cs.softwareUsed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={13} style={{ color: accentColor }} />
                <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Software Used</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.softwareUsed.map((sw) => (
                  <div
                    key={sw.name}
                    className="rounded-xl p-5"
                    style={{ background: `${accentColor}09`, border: `1px solid ${accentColor}25` }}
                  >
                    <p className="text-sm font-semibold mb-3" style={{ color: accentColor }}>{sw.name}</p>
                    <div className="flex flex-col gap-2">
                      {sw.bullets.map((b) => (
                        <div key={b} className="flex items-center gap-2.5 text-xs text-white/60">
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accentColor, opacity: 0.6 }} />
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Creative Goal */}
          {cs?.creativeGoal && (
            <div
              className="rounded-2xl p-6"
              style={{ background: `${accentColor}0a`, border: `1px solid ${accentColor}28` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Target size={13} style={{ color: accentColor }} />
                <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: accentColor }}>
                  Creative Goal
                </span>
              </div>
              <p className="text-sm text-white/75 leading-[1.85] italic">"{cs.creativeGoal}"</p>
            </div>
          )}
        </div>

      ) : (
        /* ────────────────────────────────────────────────────────────────
           POSTER / IMAGE PROJECT LAYOUT (side by side)
        ──────────────────────────────────────────────────────────────── */
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Poster */}
          <div className="w-full lg:w-[360px] flex-shrink-0">
            <div
              className="rounded-2xl overflow-hidden w-full"
              style={{ border: `1px solid ${accentColor}30`, boxShadow: `0 0 60px ${accentColor}28` }}
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={`${project.brand} — ${project.title}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              )}
            </div>
          </div>

          {/* Story column */}
          <div className="flex-1 flex flex-col gap-7 min-w-0">
            {/* Project Overview */}
            {cs?.story && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={13} style={{ color: accentColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Project Overview</span>
                </div>
                <div className="space-y-3">
                  {cs.story.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/65 leading-[1.85]">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Psychology Used */}
            {cs?.psychologyUsed && cs.psychologyUsed.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={13} style={{ color: accentColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">Psychology Used</span>
                </div>
                <div className="flex flex-col gap-2">
                  {cs.psychologyUsed.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                      <span className="text-white/70">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Goal */}
            {cs?.creativeGoal && (
              <div
                className="rounded-2xl p-5"
                style={{ background: `${accentColor}0a`, border: `1px solid ${accentColor}25` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target size={13} style={{ color: accentColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: accentColor }}>
                    Creative Goal
                  </span>
                </div>
                <p className="text-sm text-white/75 leading-[1.8] italic">"{cs.creativeGoal}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}


// ─── Category Detail Panel ────────────────────────────────────────────────────

interface DetailPanelProps {
  category: Category;
  onClose: () => void;
}

function DetailPanel({ category, onClose }: DetailPanelProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (activeProject) setActiveProject(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, activeProject]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      key="detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ backdropFilter: "blur(18px)", background: "rgba(0,0,0,0.82)" }}
      onClick={onClose}
    >
      <motion.div
        key="detail-panel"
        initial={{ opacity: 0, y: 60, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="relative w-full md:max-w-6xl max-h-[93vh] md:max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl"
        style={{
          background: "linear-gradient(180deg, #0c0c0c 0%, #050505 100%)",
          border: `1px solid rgba(255,255,255,0.08)`,
          boxShadow: `0 0 0 1px ${category.accentColor}22, 0 40px 120px rgba(0,0,0,0.95)`,
          scrollbarWidth: "thin",
          scrollbarColor: `${category.accentColor}33 transparent`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Accent top line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${category.accentColor}90, transparent)` }}
        />

        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Panel header (always visible) */}
        <div className="flex items-start justify-between p-6 md:p-8 pb-0">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${category.accentColor}18`, border: `1px solid ${category.accentColor}33` }}
              >
                <category.Icon size={15} style={{ color: category.accentColor }} />
              </div>
              <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: category.accentColor }}>
                {category.subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {category.title}
            </h2>
            {!activeProject && (
              <p className="text-muted-foreground text-sm mt-2.5 max-w-xl leading-relaxed">
                {category.description}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            aria-label="Close panel"
            className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <X size={15} className="text-white/60" />
          </button>
        </div>

        {/* ── Main body: either gallery or case study ── */}
        <div className="px-6 md:px-8 mt-7 pb-10">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <CaseStudyView
                key={activeProject.id}
                project={activeProject}
                accentColor={category.accentColor}
                onBack={() => setActiveProject(null)}
              />
            ) : (
              <motion.div
                key="gallery-view"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stats row */}
                <div
                  className="grid grid-cols-3 gap-px mb-8 rounded-xl overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  {category.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center py-5 px-3 text-center"
                      style={{ background: "#060606" }}
                    >
                      <span
                        className="text-2xl md:text-3xl font-semibold tracking-tight"
                        style={{ color: category.accentColor }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] tracking-[1.5px] uppercase text-muted-foreground/60 mt-1">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-3">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full font-medium"
                        style={{
                          background: `${category.accentColor}12`,
                          border: `1px solid ${category.accentColor}30`,
                          color: category.accentColor,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Gallery */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50">
                      Project Gallery
                    </h3>
                    {category.projects.length > 0 && (
                      <span className="text-[10px] text-muted-foreground/40">
                        {category.projects.length} {category.projects.length === 1 ? "item" : "items"}
                      </span>
                    )}
                  </div>

                  {category.projects.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                      {category.projects.map((project) => (
                        <ProjectPosterCard
                          key={project.id}
                          project={project}
                          accentColor={category.accentColor}
                          onClick={() => setActiveProject(project)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="rounded-2xl flex flex-col items-center justify-center py-16 text-center"
                      style={{
                        background: `radial-gradient(ellipse at center, ${category.accentColor}08 0%, transparent 70%)`,
                        border: `1px dashed ${category.accentColor}25`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                        style={{ background: `${category.accentColor}12` }}
                      >
                        <category.Icon size={20} style={{ color: category.accentColor, opacity: 0.6 }} />
                      </div>
                      <p className="text-sm font-medium mb-1" style={{ color: category.accentColor, opacity: 0.7 }}>
                        Portfolio Coming Soon
                      </p>
                      <p className="text-xs text-muted-foreground/40 max-w-xs leading-relaxed">
                        Real work will be added here soon. Check back for {category.title.toLowerCase()} projects.
                      </p>
                    </div>
                  )}
                </div>

                {/* Case Study placeholder (only if no real case studies yet) */}
                {category.projects.every((p) => !p.caseStudy) && (
                  <div className="mt-8">
                    <h3 className="text-[10px] tracking-[3px] uppercase text-muted-foreground/50 mb-4">
                      Case Studies
                    </h3>
                    <div
                      className="rounded-xl p-5 flex items-center gap-4"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                        style={{ background: `${category.accentColor}12` }}
                      >
                        <Layers size={14} style={{ color: category.accentColor, opacity: 0.7 }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white/60">Detailed case studies in progress</p>
                        <p className="text-xs text-muted-foreground/40 mt-0.5">
                          Process breakdowns, results, and insights will be published here.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Showcase Video (preserved) ───────────────────────────────────────────────

function ShowcaseVideo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-20 max-w-5xl mx-auto relative"
    >
      <div
        className="rounded-2xl overflow-hidden relative"
        style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 0 80px rgba(0,0,0,0.6)" }}
      >
        <video
          autoPlay loop muted playsInline
          className="w-full object-cover"
          style={{ aspectRatio: "3/1" }}
          aria-label="Portfolio showreel"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)" }} />
      </div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const openCategory = useCallback((cat: Category) => setActiveCategory(cat), []);
  const closeCategory = useCallback(() => setActiveCategory(null), []);

  return (
    <>
      <section
        id="projects"
        className="py-32 md:py-44 px-6 md:px-28 border-t border-border/30"
        aria-label="Projects"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs tracking-[3px] uppercase text-muted-foreground text-center mb-4"
        >
          PORTFOLIO
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-medium tracking-[-2px] text-center mb-6"
        >
          My <span className="font-serif italic font-normal">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16"
        >
          A curated selection of work spanning web design, video editing, and graphic design.
        </motion.p>

        <ShowcaseVideo />

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-5xl mx-auto"
          role="list"
          aria-label="Project categories"
        >
          {CATEGORIES.map((cat, i) => (
            <div key={cat.id} role="listitem">
              <CategoryCard category={cat} index={i} onClick={() => openCategory(cat)} />
            </div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeCategory && (
          <DetailPanel category={activeCategory} onClose={closeCategory} />
        )}
      </AnimatePresence>
    </>
  );
}
