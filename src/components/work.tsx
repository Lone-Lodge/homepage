"use client";

import { motion } from "motion/react";
import { ease, duration, stagger } from "@/lib/motion";
import { ExpandableCard } from "./expandable-card";
import type { Work as WorkItem } from "@/lib/schemas";

function WorkPreview({ project }: { project: WorkItem }) {
  return (
    <div className="text-left">
      <div className="flex items-baseline gap-4 mb-2">
        <h3
          className="text-xl md:text-2xl text-[var(--ll-fg-1)]"
          style={{ letterSpacing: "var(--ll-track-snug)" }}
        >
          {project.title}
        </h3>
        <span className="text-sm text-[var(--ll-fg-3)] hidden md:inline">
          {project.role}
        </span>
      </div>
      <p className="text-[var(--ll-fg-2)] mb-3" style={{ lineHeight: 1.65 }}>
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-3 py-1 rounded-full border"
            style={{
              background: "var(--ll-bg-2)",
              color: "var(--ll-fg-2)",
              borderColor: "var(--ll-border-1)",
            }}
          >
            {tag}
          </span>
        ))}
        <span className="text-sm text-[var(--ll-fg-3)] ml-1 font-mono">
          {project.year}
        </span>
      </div>
    </div>
  );
}

function WorkDetails({ project }: { project: WorkItem }) {
  if (!project.details) return null;
  return (
    <>
      <p className="text-sm text-[var(--ll-fg-3)] md:hidden">{project.role}</p>
      {project.details.split("\n\n").map((para, i) => (
        <p key={i} style={{ lineHeight: 1.75 }} className="text-[var(--ll-fg-2)]">
          {para}
        </p>
      ))}
    </>
  );
}

export function Work({ projects }: { projects: WorkItem[] }) {
  return (
    <section id="work" className="py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: duration.slow, ease: ease.out }}
        >
          Selected work
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: duration.slow,
                delay: i * stagger.normal,
                ease: ease.out,
              }}
            >
              <ExpandableCard
                preview={<WorkPreview project={project} />}
                details={project.details ? <WorkDetails project={project} /> : undefined}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
