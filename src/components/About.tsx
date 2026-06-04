import { motion } from "framer-motion";

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
      </div>
    </section>
  );
}
