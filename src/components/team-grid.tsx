"use client";

import { motion } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import type { TeamMember } from "@/lib/schemas";
import { TeamCard } from "./team-card";

export function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <section aria-label="Team" className="py-16 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow }}
        >
          Current team
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: duration.slow,
                delay: i * stagger.tight,
                ease: ease.out,
              }}
            >
              <TeamCard member={m} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
