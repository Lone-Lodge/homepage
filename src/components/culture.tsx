"use client";

import { motion } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import type { Culture as CultureItem } from "@/lib/schemas";

export function Culture({ items }: { items: CultureItem[] }) {
  return (
    <section
      id="culture"
      className="py-24 px-6 lg:px-8"
      style={{ background: "var(--ll-bg-1)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow }}
        >
          How we work
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderTop: "1px solid var(--ll-border-1)", borderLeft: "1px solid var(--ll-border-1)" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: duration.slow,
                delay: i * stagger.tight,
                ease: ease.out,
              }}
              className="p-6 md:p-8"
              style={{
                borderRight: "1px solid var(--ll-border-1)",
                borderBottom: "1px solid var(--ll-border-1)",
              }}
            >
              <div
                className="text-xs font-mono mb-4"
                style={{ color: "var(--ll-ember)", letterSpacing: "var(--ll-track-eyebrow)" }}
              >
                {item.num}
              </div>
              <h3
                className="text-lg font-medium text-[var(--ll-fg-1)] mb-2"
                style={{ letterSpacing: "var(--ll-track-snug)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-[var(--ll-fg-2)]" style={{ lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
