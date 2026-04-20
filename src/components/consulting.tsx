"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import type { Consulting as ConsultingData } from "@/lib/schemas";

// Short variant used on the homepage as a preview. Full page lives at /consulting.
export function Consulting({ data }: { data: ConsultingData }) {
  return (
    <section
      id="consulting"
      className="py-24 px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow }}
        >
          {data.eyebrow}
        </motion.h2>

        <motion.h3
          className="text-3xl md:text-4xl mb-12 max-w-3xl text-[var(--ll-fg-1)]"
          style={{ letterSpacing: "var(--ll-track-tight)", lineHeight: 1.15 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow, ease: ease.out }}
        >
          {data.headline}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.pitch.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-6 rounded-[12px] border"
              style={{
                background: "var(--ll-bg-2)",
                borderColor: "var(--ll-border-2)",
              }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: duration.slow,
                delay: i * stagger.normal,
                ease: ease.out,
              }}
            >
              <h4
                className="text-base font-medium text-[var(--ll-fg-1)] mb-2"
                style={{ letterSpacing: "var(--ll-track-snug)" }}
              >
                {p.title}
              </h4>
              <p
                className="text-sm text-[var(--ll-fg-2)]"
                style={{ lineHeight: 1.65 }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow, delay: 0.3 }}
        >
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 text-sm text-[var(--ll-ember)] hover:text-[var(--ll-ember-hover)] transition-colors"
            style={{ transitionDuration: "var(--ll-dur-fast)" }}
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
