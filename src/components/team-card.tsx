"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/lib/schemas";

function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = initialsOf(member.name);
  const visibleSkills = member.skills.slice(0, 5);

  return (
    <div
      className="group flex flex-col rounded-[12px] border p-6 h-full transition-colors"
      style={{
        background: "var(--ll-bg-2)",
        borderColor: "var(--ll-border-2)",
        transitionDuration: "var(--ll-dur-med)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ll-bg-3)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--ll-bg-2)")}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
          style={{ background: "var(--ll-ember)" }}
          aria-hidden={!member.photo}
        >
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          ) : (
            <span
              className="text-sm font-medium"
              style={{ color: "var(--ll-ember-fg)", letterSpacing: "0.04em" }}
            >
              {initials}
            </span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className="text-base font-medium text-[var(--ll-fg-1)] truncate"
            style={{ letterSpacing: "var(--ll-track-snug)" }}
          >
            {member.name}
          </h3>
          <p className="text-sm text-[var(--ll-fg-3)] truncate">{member.role}</p>
        </div>
      </div>

      <p className="text-sm text-[var(--ll-fg-2)] mb-4" style={{ lineHeight: 1.55 }}>
        {member.bio}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {visibleSkills.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2 py-0.5 rounded-full border"
            style={{
              background: "var(--ll-bg-1)",
              borderColor: "var(--ll-border-1)",
              color: "var(--ll-fg-2)",
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div
        className="mt-auto pt-4 border-t"
        style={{ borderColor: "var(--ll-border-1)" }}
      >
        {member.portfolio ? (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--ll-ember)] hover:text-[var(--ll-ember-hover)] transition-colors"
            style={{ transitionDuration: "var(--ll-dur-fast)" }}
          >
            View portfolio
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs text-[var(--ll-fg-3)]">{member.location}</span>
        )}
      </div>
    </div>
  );
}
