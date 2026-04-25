import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 500);
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-container"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Logo ring */}
              <div className="w-12 h-12 rounded-full border-2 border-foreground/20 border-t-foreground/80 animate-spin" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="text-sm text-muted-foreground tracking-[3px] uppercase"
            >
              Dhiraj Ninawe
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
