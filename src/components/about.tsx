"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ease, duration } from "@/lib/motion";
import type { About as AboutData } from "@/lib/schemas";

export function About({ about }: { about: AboutData }) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1]);

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow }}
        >
          About
        </motion.h2>

        <motion.div style={{ opacity: contentOpacity }}>
          <div className="space-y-8">
            <div
              className="text-xl md:text-2xl space-y-6 text-[var(--ll-fg-1)]"
              style={{ lineHeight: 1.55, letterSpacing: "var(--ll-track-snug)" }}
            >
              {about.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: duration.slow,
                    delay: i * 0.15,
                    ease: ease.out,
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              className="pt-8 border-t"
              style={{ borderColor: "var(--ll-border-1)" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: duration.slow, delay: 0.3 }}
            >
              <motion.p
                className="text-base md:text-lg text-[var(--ll-fg-2)] mb-6"
                style={{ lineHeight: 1.65 }}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: duration.slow, delay: 0.4 }}
              >
                {about.personal}
              </motion.p>
              <div className="flex flex-wrap gap-3">
                {about.interests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] hover:text-[var(--ll-fg-1)] transition-colors"
                    style={{ transitionDuration: "var(--ll-dur-fast)" }}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: duration.normal,
                      delay: 0.5 + i * 0.06,
                      ease: ease.outSmooth,
                    }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
