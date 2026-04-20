"use client";

import { ArrowUp } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setVisible(v > 400);
  });

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--ll-bg-2)] border border-[var(--ll-border-2)] hover:bg-[var(--ll-bg-3)] backdrop-blur-sm transition-colors"
      style={{ transitionDuration: "var(--ll-dur-med)", transitionTimingFunction: "var(--ll-ease)" }}
      aria-label="Back to top"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : 10,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
    >
      <ArrowUp className="w-4 h-4 text-[var(--ll-fg-2)]" />
    </motion.button>
  );
}
