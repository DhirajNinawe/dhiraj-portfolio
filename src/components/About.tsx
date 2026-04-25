import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

const skills = [
  {
    title: "Motion Graphics",
    description: "Eye-catching animated visuals that bring ideas to life.",
    gradient: "from-purple-500/10 to-blue-500/10",
  },
  {
    title: "Documentary Style Animations",
    description: "Storytelling-driven animations with cinematic depth.",
    gradient: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Commercial Advertisement",
    description: "High-impact ad content designed to convert and engage.",
    gradient: "from-orange-500/10 to-rose-500/10",
  },
];

export default function About() {
  return (
    <section id="about" className="pt-0 pb-32 md:pb-44 px-6 md:px-28">
      <div className="max-w-5xl mx-auto">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-20"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[800px] aspect-square object-cover rounded-3xl"
          >
            <source
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              {...fadeUp(0.1 + i * 0.12)}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="liquid-glass rounded-2xl p-6 group cursor-pointer flex flex-col items-center text-center"
            >
              {/* Animated thumbnail */}
              <div
                className={`w-full aspect-video rounded-xl bg-gradient-to-br ${skill.gradient} mb-5 overflow-hidden relative group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-shadow duration-500`}
              >
                {/* Subtle motion effect — animated gradient shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    className="w-12 h-12 rounded-full border border-foreground/20"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base mb-2 group-hover:text-foreground transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
