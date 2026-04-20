"use client";

import { motion } from "motion/react";
import { duration } from "@/lib/motion";

export function Manifesto({ items }: { items: string[] }) {
  return (
    <section
      aria-label="Manifesto"
      className="py-8 px-6 lg:px-8 border-y"
      style={{ borderColor: "var(--ll-border-1)", background: "var(--ll-bg-1)" }}
    >
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow }}
        >
          {items.map((phrase, i) => (
            <span key={phrase} className="inline-flex items-center gap-3">
              {i > 0 && (
                <span aria-hidden="true" style={{ color: "var(--ll-ember)" }}>
                  ·
                </span>
              )}
              <span>{phrase}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
