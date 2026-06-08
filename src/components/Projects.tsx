import { useState, useEffect, useCallback, useRef } from "react";
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
  Clapperboard,
} from "lucide-react";

// ─── Unified Accent System ───────────────────────────────────────────────────
// ONE accent color for the entire Projects section — no per-category rainbow.
const ACCENT = {
  color: "#E2D9C8",           // warm off-white / champagne
  glow: "rgba(226,217,200,0.25)",
  dimColor: "rgba(226,217,200,0.45)",
  border: "rgba(226,217,200,0.18)",
  borderHover: "rgba(226,217,200,0.32)",
  bg: "rgba(226,217,200,0.07)",
  bgHover: "rgba(226,217,200,0.12)",
  gradientOverlay: "rgba(30,25,18,0.82)",
};

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
      { label: "Projects Completed", value: "4" },
      { label: "Brands Featured", value: "4" },
      { label: "Assets Delivered", value: "4+" },
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
      {
        id: "gd-fifa-2026",
        title: "FIFA World Cup 2026 — Ronaldo vs Messi",
        brand: "FIFA World Cup 2026",
        tagline: "The Greatest Rivalry. One Stage.",
        categoryTag: "Sports Poster Design",
        description:
          "A cinematic fan-concept poster reimagining football's greatest rivalry as the ultimate World Cup 2026 showdown — Ronaldo vs Messi, face-to-face on a global stage.",
        thumbnail: "https://i.ibb.co/NdyLzjbP/fifa-world-cup.png",
        tags: ["Sports Marketing", "Poster Design", "Compositing", "Photoshop", "Fan Concept"],
        year: "2026",
        caseStudy: {
          story:
            "This concept poster was created around one of football's greatest rivalries — Cristiano Ronaldo vs Lionel Messi — reimagined as the ultimate showdown leading into the FIFA World Cup 2026.\n\nThe objective was to create a cinematic and emotionally powerful sports poster capable of generating excitement, anticipation, and fan engagement while showcasing advanced visual storytelling and compositing skills.\n\nRather than presenting the players in a traditional sports advertisement, the design transforms the rivalry into a symbolic battlefield. Both players are positioned face-to-face in military-inspired tactical gear, representing legacy, determination, and competitive spirit.\n\nThe FIFA World Cup trophy sits at the center of the composition, acting as the ultimate objective that visually connects both sides of the story.",
          psychologyUsed: [
            "Rivalry & Competitive Tension",
            "Symmetrical Power Framing",
            "Aspirational Sports Storytelling",
            "Cinematic Visual Authority",
          ],
          approach:
            "Portugal and Argentina color contrast was used to instantly communicate which side of the rivalry each player represents.\n\nA cinematic movie-poster aesthetic with dramatic lighting and high-detail compositing creates a sense of scale and spectacle.\n\nThe symmetrical rivalry composition and strong visual hierarchy guide the viewer's eye from the players toward the World Cup trophy at the center — making the trophy the emotional destination of the entire design.",
          creativeGoal:
            "To create a visually striking poster that instantly communicates the scale of the Ronaldo vs Messi rivalry while building excitement around the FIFA World Cup 2026 — capable of capturing attention across football communities, social media platforms, and sports audiences.",
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
    coverThumbnail: "/swarnam-jewellers.png",
    stats: [
      { label: "Sites Launched", value: "1" },
      { label: "Frameworks Used", value: "4+" },
      { label: "Industries Served", value: "1" },
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    projects: [
      {
        id: "wd-swarnam",
        title: "Swarnam Jewellers Website",
        brand: "Swarnam Jewellers",
        tagline: "Elegance Online.",
        categoryTag: "Business Website",
        description:
          "A premium jewellery business website designed to establish Swarnam Jewellers' online presence, showcase collections, and generate new customer inquiries beyond traditional offline channels.",
        thumbnail: "/swarnam-jewellers.png",
        externalLink: "https://swarnam-jewellers-592128172130.asia-southeast1.run.app/",
        tags: ["Business Website", "Luxury Design", "Mobile-First", "React", "Tailwind CSS"],
        year: "2026",
        caseStudy: {
          story:
            "Swarnam Jewellers previously had no dedicated online presence, making it difficult to attract new customers and establish credibility beyond offline footfall.\n\nTo solve this challenge, a professional website was designed and developed that allows potential customers to discover the business online, explore products, and connect with the brand more easily.\n\nThe business lacked online visibility, digital brand presence, a customer discovery channel, and modern online representation. As a result, customer acquisition was limited primarily to local referrals and physical visits.",
          psychologyUsed: [
            "Premium Luxury Positioning",
            "Trust Through Professional Design",
            "Mobile-First Customer Experience",
            "Product-Focused Visual Hierarchy",
          ],
          approach:
            "A clean and professional jewellery website was created to improve online presence, build trust and credibility, showcase jewellery collections, generate new customer inquiries, and strengthen brand perception.\n\nThe design approach prioritised a premium luxury aesthetic with elegant typography, mobile-first responsiveness, and a product-focused layout aligned with high-end jewellery branding conventions.\n\nEvery design decision was driven by the goal of making Swarnam Jewellers feel trustworthy, aspirational, and easy to discover for new customers searching online.",
          creativeGoal:
            "To help Swarnam Jewellers establish a professional online identity and create a platform capable of attracting new customers beyond traditional offline channels — turning the website into a credibility asset that works around the clock.",
        },
      },
    ],
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
        thumbnail: "/saas-showreel-thumb.png",
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
  {
    id: "documentary-edits",
    title: "Documentary Edits",
    subtitle: "Storytelling Through Reality",
    description:
      "Real stories told through cinematic editing — character-driven narratives, atmospheric sound design, and thoughtful pacing that transforms raw footage into compelling documentary experiences.",
    accentColor: "#F59E0B",
    glowColor: "rgba(245,158,11,0.4)",
    gradientFrom: "rgba(120,53,15,0.85)",
    gradientTo: "rgba(0,0,0,0)",
    Icon: Clapperboard,
    coverThumbnail: "/documentary-cover.png",
    stats: [
      { label: "Documentaries", value: "3" },
      { label: "Stories Told", value: "3" },
      { label: "Tools Used", value: "2" },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects"],
    projects: [
      {
        id: "doc-01",
        title: "Student Pressure – A Silent Crisis",
        brand: "Documentary Series",
        tagline: "A Silent Crisis",
        categoryTag: "Documentary Edit",
        description:
          "A social awareness documentary exploring the growing pressure faced by students in today\u2019s education system — academic expectations, career uncertainty, and mental health struggles that many face silently.",
        thumbnail: "/doc-student-01.png",
        videoUrl: "https://drive.google.com/file/d/1ePQULb-WLhhmtfCRNgLLWoW5Hj4XiUoj/view?usp=sharing",
        tags: ["Social Awareness", "Documentary", "Mental Health", "Premiere Pro", "After Effects"],
        year: "2025",
        caseStudy: {
          videoEmbedUrl: "https://drive.google.com/file/d/1ePQULb-WLhhmtfCRNgLLWoW5Hj4XiUoj/preview",
          story:
            "This documentary explores the growing pressure faced by students in today\u2019s education system.\n\nAcademic expectations, career uncertainty, family pressure, and mental stress are affecting students at an alarming rate.\n\nThe project highlights the reality that many students struggle silently, and in extreme cases some lose hope and take their own lives.\n\nThe purpose of this documentary is to start conversations around mental health, student well-being, and the importance of support systems.",
          softwareUsed: [
            {
              name: "Adobe Premiere Pro",
              bullets: [
                "Timeline assembly & narrative sequencing",
                "Interview editing",
                "Audio mixing & cleanup",
                "Final export & delivery",
              ],
            },
            {
              name: "Adobe After Effects",
              bullets: [
                "Title cards & lower thirds",
                "Cinematic transitions",
                "Motion graphics overlays",
              ],
            },
          ],
          psychologyUsed: [],
          creativeGoal:
            "To raise awareness about student mental health and encourage society to understand the challenges many students face behind closed doors.",
        },
      },
      {
        id: "doc-02",
        title: "Student Pressure – Extended Story Part 02",
        brand: "Documentary Series",
        tagline: "Extended Story Part 02",
        categoryTag: "Documentary Edit",
        description:
          "The second film in the Student Pressure series, continuing the discussion around emotional burden, academic pressure, and the psychological challenges students experience while trying to meet expectations.",
        thumbnail: "/doc-student-02.png",
        videoUrl: "https://drive.google.com/file/d/1UzcX3wuaJdQOF4cNiMsIuyxh2Li1SMIL/view?usp=sharing",
        tags: ["Social Awareness", "Documentary", "Mental Health", "Premiere Pro", "After Effects"],
        year: "2025",
        caseStudy: {
          videoEmbedUrl: "https://drive.google.com/file/d/1UzcX3wuaJdQOF4cNiMsIuyxh2Li1SMIL/preview",
          story:
            "This film continues the discussion started in Student Pressure – A Silent Crisis.\n\nIt further explores the emotional burden, academic pressure, and psychological challenges many students experience while trying to meet expectations from family, institutions, and society.\n\nThe project reinforces the importance of awareness, empathy, and mental health support for young people navigating an increasingly demanding world.",
          softwareUsed: [
            {
              name: "Adobe Premiere Pro",
              bullets: [
                "Narrative continuation editing",
                "Sound design integration",
                "Colour correction",
                "Final delivery",
              ],
            },
            {
              name: "Adobe After Effects",
              bullets: [
                "Title cards & lower thirds",
                "Emotional graphic overlays",
                "Cinematic transitions",
              ],
            },
          ],
          psychologyUsed: [],
          creativeGoal:
            "To continue spreading awareness around student mental health and encourage meaningful conversations that lead to real understanding and support.",
        },
      },
      {
        id: "doc-03",
        title: "Student Pressure – Extended Story Part 03",
        brand: "Documentary Series",
        tagline: "Extended Story Part 03",
        categoryTag: "Documentary Edit",
        description:
          "The final film in the Student Pressure series, continuing the narrative on student stress, emotional struggles, and the consequences of unmanaged pressure within educational environments.",
        thumbnail: "/doc-student-03.png",
        videoUrl: "https://drive.google.com/file/d/1j66o5ozp9tsS0wn2enpHG57aQAnDMhji/view?usp=sharing",
        tags: ["Social Awareness", "Documentary", "Mental Health", "Premiere Pro", "After Effects"],
        year: "2025",
        caseStudy: {
          videoEmbedUrl: "https://drive.google.com/file/d/1j66o5ozp9tsS0wn2enpHG57aQAnDMhji/preview",
          story:
            "This documentary continues the narrative established in the previous films, completing the Student Pressure series.\n\nThe focus remains on student pressure, emotional struggles, and the consequences of unmanaged stress within educational environments.\n\nThe project aims to keep the conversation alive and encourage greater understanding of student well-being among parents, educators, and institutions.",
          softwareUsed: [
            {
              name: "Adobe Premiere Pro",
              bullets: [
                "Series continuation editing",
                "Ambient audio design",
                "Pacing & rhythm editing",
                "Subtitles & captions",
              ],
            },
            {
              name: "Adobe After Effects",
              bullets: [
                "Title cards & lower thirds",
                "Closing sequence animation",
                "Motion graphic overlays",
              ],
            },
          ],
          psychologyUsed: [],
          creativeGoal:
            "To strengthen awareness and empathy around the realities many students face every day — and to inspire action from those in a position to make a difference.",
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
  // Fallback: premium abstract composition
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      {/* Deep radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 40% 45%, ${ACCENT.color}14 0%, transparent 65%),
                       radial-gradient(ellipse at 75% 65%, ${ACCENT.color}08 0%, transparent 45%)`,
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${ACCENT.color}18 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
          opacity: 0.5,
        }}
      />
      {/* Concentric ring decoration */}
      {[80, 130, 180].map((r) => (
        <div
          key={r}
          className="absolute rounded-full"
          style={{
            width: r * 2,
            height: r * 2,
            border: `1px solid ${ACCENT.color}${r === 80 ? "22" : r === 130 ? "12" : "08"}`,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {/* Center icon */}
      <div
        className="relative z-10 flex items-center justify-center rounded-full"
        style={{
          width: 72,
          height: 72,
          background: `radial-gradient(circle at 35% 35%, ${ACCENT.color}18 0%, ${ACCENT.color}06 100%)`,
          border: `1px solid ${ACCENT.border}`,
          boxShadow: `0 0 32px ${ACCENT.glow}`,
        }}
      >
        <category.Icon size={30} style={{ color: ACCENT.color, opacity: 0.7 }} strokeWidth={1.5} />
      </div>
      {/* Category label */}
      <span
        className="relative z-10 mt-4 text-[10px] tracking-[3px] uppercase font-medium"
        style={{ color: ACCENT.dimColor }}
      >
        {category.title}
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
  const cardRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor x within card
    const y = e.clientY - rect.top;  // cursor y within card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Map cursor position to ±6deg rotation
    const rotateY = ((x - centerX) / centerX) * 6;
    const rotateX = -((y - centerY) / centerY) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div style={{ perspective: "800px" }}>
      <motion.article
        ref={cardRef}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer rounded-2xl overflow-hidden relative"
        style={{
          background: "rgba(8,8,8,0.95)",
          border: `1px solid ${hovered ? ACCENT.borderHover : "rgba(255,255,255,0.07)"}`,
          boxShadow: hovered
            ? `0 0 0 1px ${ACCENT.color}18, 0 28px 70px rgba(0,0,0,0.7), 0 0 40px ${ACCENT.glow}`
            : "0 8px 40px rgba(0,0,0,0.5)",
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${hovered ? "8px" : "0px"})`,
          transition: hovered
            ? "transform 0.08s ease, box-shadow 0.4s ease, border-color 0.3s ease"
            : "transform 0.5s ease, box-shadow 0.4s ease, border-color 0.3s ease",
          transformStyle: "preserve-3d",
        }}
        aria-label={`Open ${category.title} category`}
      >
        {/* Subtle top-edge highlight */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
          style={{
            background: `linear-gradient(90deg, transparent, ${ACCENT.color}${hovered ? "55" : "18"}, transparent)`,
            transition: "all 0.4s ease",
          }}
        />

        <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <div className="absolute inset-0">
            <CardThumbnail category={category} />
          </div>
          {/* Dark vignette — same for every card */}
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(to top, rgba(0,0,0,0.94) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.04) 100%)` }}
          />
          {/* Warm tint on hover — same shade for every card */}
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.45 }}
            style={{ background: `linear-gradient(160deg, rgba(30,25,18,0.75) 0%, transparent 60%)` }}
          />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] tracking-[3px] uppercase mb-1.5 font-semibold" style={{ color: ACCENT.dimColor }}>
                  {category.subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight leading-tight">
                  {category.title}
                </h3>
              </div>
              <motion.div
                animate={{ scale: hovered ? 1 : 0.82, opacity: hovered ? 1 : 0.4, rotate: hovered ? 0 : -15 }}
                transition={{ type: "spring", stiffness: 280, damping: 20 }}
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{
                  background: ACCENT.bg,
                  border: `1px solid ${ACCENT.border}`,
                  boxShadow: hovered ? `0 0 16px ${ACCENT.glow}` : "none",
                  transition: "box-shadow 0.3s ease",
                }}
              >
                <ArrowUpRight size={15} style={{ color: ACCENT.color }} />
              </motion.div>
            </div>
          </div>
          {/* Project count badge */}
          {category.projects.length > 0 && (
            <div
              className="absolute top-4 right-4 text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-full font-semibold"
              style={{
                background: `rgba(0,0,0,0.6)`,
                border: `1px solid ${ACCENT.border}`,
                color: ACCENT.color,
                backdropFilter: "blur(8px)",
              }}
            >
              {category.projects.length} {category.projects.length === 1 ? "Project" : "Projects"}
            </div>
          )}
        </div>

        {/* Footer tech tags */}
        <div className="px-5 py-4 flex items-center gap-3 flex-wrap" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          {category.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="text-[10px] tracking-[1.5px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
              {tech}
            </span>
          ))}
          {category.technologies.length > 3 && (
            <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>+{category.technologies.length - 3} more</span>
          )}
        </div>
      </motion.article>
    </div>
  );
}

// ─── Project Poster Card (inside category panel) ──────────────────────────────

interface ProjectPosterProps {
  project: Project;
  accentColor: string;
  onClick: () => void;
}

function ProjectPosterCard({ project, onClick }: ProjectPosterProps) {
  const [hovered, setHovered] = useState(false);
  const isVideo = !!project.videoUrl;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 5;
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 5;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div style={{ perspective: "700px" }}>
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="cursor-pointer group rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: "rgba(8,8,8,0.95)",
        border: `1px solid ${hovered ? ACCENT.borderHover : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered
          ? `0 0 0 1px ${ACCENT.color}18, 0 24px 60px rgba(0,0,0,0.6), 0 0 28px ${ACCENT.glow}`
          : "0 4px 28px rgba(0,0,0,0.4)",
        transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${hovered ? "6px" : "0px"})`,
        transition: hovered
          ? "transform 0.08s ease, box-shadow 0.35s ease, border-color 0.3s ease"
          : "transform 0.5s ease, box-shadow 0.35s ease, border-color 0.3s ease",
        transformStyle: "preserve-3d",
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
                background: `radial-gradient(ellipse at center, ${ACCENT.color}0d 0%, transparent 70%)`,
              }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5" style={{ color: ACCENT.color }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[2px] uppercase" style={{ color: ACCENT.dimColor }}>
                {project.tagline}
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)" }}
          />

          {/* Persistent play icon — shown on video cards that have a thumbnail */}
          {isVideo && project.thumbnail && (
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <motion.div
                animate={{ scale: hovered ? 1.12 : 1, opacity: hovered ? 1 : 0.7 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{
                  background: `rgba(0,0,0,0.55)`,
                  border: `1.5px solid ${ACCENT.border}`,
                  boxShadow: hovered ? `0 0 24px ${ACCENT.glow}` : `0 0 10px ${ACCENT.glow}`,
                  backdropFilter: "blur(6px)",
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5" style={{ color: ACCENT.color }}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          )}

          {/* Hover CTA */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.32)" }}
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: ACCENT.bg,
                border: `1px solid ${ACCENT.borderHover}`,
                color: ACCENT.color,
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
              style={{ background: "rgba(0,0,0,0.55)", border: `1px solid ${ACCENT.border}`, color: ACCENT.color, backdropFilter: "blur(8px)" }}
            >
              {project.categoryTag}
            </span>
          </div>

          {/* Video badge */}
          {isVideo && (
            <div className="absolute top-3 right-3">
              <div
                className="flex items-center gap-1 text-[9px] tracking-[1px] uppercase px-2 py-1 rounded-full font-semibold"
                style={{ background: "rgba(0,0,0,0.55)", border: `1px solid ${ACCENT.border}`, color: ACCENT.color, backdropFilter: "blur(8px)" }}
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
      <div className="p-4 flex flex-col gap-1" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p className="text-[10px] tracking-[2.5px] uppercase font-semibold" style={{ color: ACCENT.dimColor }}>
          {project.brand}
        </p>
        <h4 className="text-sm font-semibold text-white/90 leading-snug">
          {project.title}
        </h4>
        {project.description && (
          <p className="text-xs text-white/40 mt-1 leading-relaxed line-clamp-2">{project.description}</p>
        )}
      </div>
    </div>
    </div>
  );
}


// ─── Case Study Detail View ───────────────────────────────────────────────────

interface CaseStudyViewProps {
  project: Project;
  accentColor: string; // kept in interface for backward compat but CaseStudyView uses ACCENT directly
  onBack: () => void;
}

function CaseStudyView({ project, onBack }: Omit<CaseStudyViewProps, 'accentColor'> & { onBack: () => void }) {
  const cs = project.caseStudy;
  const isVideoProject = !!cs?.videoEmbedUrl;
  const AC = ACCENT.color;

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
        className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium w-fit group"
        style={{ color: "rgba(255,255,255,0.38)" }}
      >
        <ChevronLeft size={13} className="transition-transform group-hover:-translate-x-1" />
        Back to Projects
      </button>

      {/* Hero: brand + title + tags */}
      <div className="pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <p className="text-[10px] tracking-[3px] uppercase font-semibold mb-3" style={{ color: ACCENT.dimColor }}>
          {project.brand} · {project.categoryTag}
        </p>
        <h3 className="text-2xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-4">
          {project.title}
        </h3>
        {project.tags && (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] tracking-[1.5px] uppercase px-2.5 py-1 rounded-full"
                style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}`, color: AC }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* ── VIDEO PROJECT LAYOUT ── */}
      {isVideoProject ? (
        <div className="flex flex-col gap-8">

          {/* Embedded video */}
          {cs?.videoEmbedUrl && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Film size={12} style={{ color: ACCENT.dimColor }} />
                <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Showreel</span>
              </div>
              <div
                className="w-full rounded-2xl overflow-hidden relative"
                style={{
                  paddingTop: "56.25%",
                  border: `1px solid ${ACCENT.border}`,
                  boxShadow: `0 0 60px ${ACCENT.glow}`,
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
              <p className="text-[10px] text-white/20 mt-3 text-center tracking-wide">
                Set the Google Drive file to "Anyone with the link can view" if it doesn't load.
              </p>
            </div>
          )}

          {/* Two-column content zone */}
          <div className="grid md:grid-cols-2 gap-5">
            {/* Project Overview */}
            {cs?.story && (
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-2">
                  <Lightbulb size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Project Overview</span>
                </div>
                <div className="space-y-3">
                  {cs.story.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/60 leading-[1.9]">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Approach */}
            {cs?.approach && (
              <div
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div className="flex items-center gap-2">
                  <Brain size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Creative Approach</span>
                </div>
                <div className="space-y-3">
                  {cs.approach.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/60 leading-[1.9]">{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Software Used */}
          {cs?.softwareUsed && cs.softwareUsed.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Zap size={12} style={{ color: ACCENT.dimColor }} />
                <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Software Used</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.softwareUsed.map((sw) => (
                  <div
                    key={sw.name}
                    className="rounded-xl p-5"
                    style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
                  >
                    <p className="text-xs font-semibold tracking-wide mb-3" style={{ color: AC }}>{sw.name}</p>
                    <div className="flex flex-col gap-2">
                      {sw.bullets.map((b) => (
                        <div key={b} className="flex items-center gap-2.5 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                          <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: ACCENT.dimColor }} />
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
              style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Target size={12} style={{ color: ACCENT.dimColor }} />
                <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: ACCENT.dimColor }}>
                  Creative Goal
                </span>
              </div>
              <p className="text-sm leading-[1.9] italic" style={{ color: "rgba(255,255,255,0.7)" }}>&ldquo;{cs.creativeGoal}&rdquo;</p>
            </div>
          )}
        </div>

      ) : (
        /* ── POSTER / IMAGE PROJECT LAYOUT ── */
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Poster */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <div
              className="rounded-2xl overflow-hidden w-full"
              style={{ border: `1px solid ${ACCENT.border}`, boxShadow: `0 0 50px ${ACCENT.glow}` }}
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
          <div className="flex-1 flex flex-col gap-6 min-w-0">
            {/* Project Overview */}
            {cs?.story && (
              <div className="pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Project Overview</span>
                </div>
                <div className="space-y-3">
                  {cs.story.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/60 leading-[1.9]">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Psychology Used */}
            {cs?.psychologyUsed && cs.psychologyUsed.length > 0 && (
              <div className="pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Design Psychology</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {cs.psychologyUsed.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: ACCENT.dimColor }} />
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Design Approach */}
            {cs?.approach && (
              <div className="pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <Brain size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>Design Approach</span>
                </div>
                <div className="space-y-3">
                  {cs.approach.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/60 leading-[1.9]">{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Creative Goal */}
            {cs?.creativeGoal && (
              <div
                className="rounded-2xl p-5"
                style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Target size={12} style={{ color: ACCENT.dimColor }} />
                  <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: ACCENT.dimColor }}>
                    Creative Goal
                  </span>
                </div>
                <p className="text-sm leading-[1.85] italic" style={{ color: "rgba(255,255,255,0.7)" }}>&ldquo;{cs.creativeGoal}&rdquo;</p>
              </div>
            )}

            {/* Visit Live Site */}
            {project.externalLink && (
              <motion.a
                href={project.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 w-fit px-5 py-3 rounded-xl text-sm font-semibold tracking-wide"
                style={{
                  background: ACCENT.bg,
                  border: `1px solid ${ACCENT.borderHover}`,
                  color: AC,
                  boxShadow: `0 0 24px ${ACCENT.glow}`,
                }}
              >
                Visit Live Site <ArrowUpRight size={14} />
              </motion.a>
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
          style={{ background: `linear-gradient(90deg, transparent, ${ACCENT.color}70, transparent)` }}
        />

        {/* Mobile drag handle */}
        <div className="flex justify-center pt-3 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Panel header (always visible) */}
        <div className="flex items-start justify-between p-6 md:p-8 pb-0">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: ACCENT.bg, border: `1px solid ${ACCENT.border}` }}
              >
                <category.Icon size={15} style={{ color: ACCENT.color }} />
              </div>
              <span className="text-[10px] tracking-[3px] uppercase font-medium" style={{ color: ACCENT.dimColor }}>
                {category.subtitle}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              {category.title}
            </h2>
            {!activeProject && (
              <p className="text-sm mt-2.5 max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.42)" }}>
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
                {/* ── Stats row — premium horizontal bar ── */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {category.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col gap-1 rounded-xl px-4 py-5"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <span
                        className="text-2xl md:text-3xl font-semibold tracking-tight"
                        style={{ color: ACCENT.color }}
                      >
                        {stat.value}
                      </span>
                      <span className="text-[10px] tracking-[1.5px] uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.38)" }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ── Technologies + Gallery in one visual group ── */}
                <div
                  className="rounded-2xl overflow-hidden mb-8"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Tools header */}
                  <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <p className="text-[10px] tracking-[3px] uppercase mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Tools & Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] tracking-[1px] px-3 py-1 rounded-full font-medium"
                          style={{
                            background: ACCENT.bg,
                            border: `1px solid ${ACCENT.border}`,
                            color: ACCENT.color,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Project Gallery ── */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <p className="text-[10px] tracking-[3px] uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                      Project Gallery
                    </p>
                    {category.projects.length > 0 && (
                      <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
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
                          accentColor={ACCENT.color}
                          onClick={() => setActiveProject(project)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div
                      className="rounded-2xl flex flex-col items-center justify-center py-16 text-center"
                      style={{
                        background: `radial-gradient(ellipse at center, ${ACCENT.color}06 0%, transparent 70%)`,
                        border: `1px dashed ${ACCENT.border}`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                        style={{ background: ACCENT.bg }}
                      >
                        <category.Icon size={20} style={{ color: ACCENT.color, opacity: 0.6 }} />
                      </div>
                      <p className="text-sm font-medium mb-1" style={{ color: ACCENT.dimColor }}>
                        No projects yet
                      </p>
                      <p className="text-xs max-w-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Check back for {category.title.toLowerCase()} projects.
                      </p>
                    </div>
                  )}
                </div>

                {/* Case Study placeholder (only if no real case studies yet) */}
                {category.projects.every((p) => !p.caseStudy) && (
                  <div className="mt-8">
                    <div
                      className="rounded-xl p-5 flex items-center gap-4"
                      style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center"
                        style={{ background: ACCENT.bg }}
                      >
                        <Layers size={14} style={{ color: ACCENT.color, opacity: 0.7 }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>Detailed case studies in progress</p>
                        <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
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
