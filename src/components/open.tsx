"use client";

import { motion } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import type { Open as OpenItem } from "@/lib/schemas";

export function Open({ categories }: { categories: OpenItem[] }) {
  return (
    <section
      id="open"
      className="py-24 px-6 lg:px-8"
      style={{ background: "var(--ll-bg-1)" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow, ease: ease.out }}
        >
          Open
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: duration.slow,
                delay: i * stagger.normal,
                ease: ease.out,
              }}
            >
              <h3 className="text-sm text-[var(--ll-fg-3)] mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border"
                    style={{
                      background: "var(--ll-bg-2)",
                      borderColor: "var(--ll-border-2)",
                      color: "var(--ll-fg-2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
