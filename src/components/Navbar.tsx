import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const socialLinks = [
  { icon: InstagramIcon, href: "https://www.instagram.com/dhiraj__11_?igsh=dm8xM2NsdHM1bDRn", label: "Instagram" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/dhiraj-ninawe-148575331", label: "LinkedIn" },
  { icon: GithubIcon, href: "https://github.com/DhirajNinawe", label: "GitHub" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-4"
    >
      {/* Empty left area — logo removed */}
      <div className="w-40" />

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-1 text-sm">
        {navLinks.map((link, i) => (
          <span key={link.label} className="flex items-center">
            <a
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 px-2 py-1"
            >
              {link.label}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-muted-foreground/40 mx-1">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Icon />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
