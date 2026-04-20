import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { BackToTop } from "@/components/back-to-top";
import { ContactSection } from "@/components/contact";
import { TeamGrid } from "@/components/team-grid";
import { Footer } from "@/components/footer";
import { getSite, getConsulting, getTeam, getContact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Consulting — Lone Lodge Studios",
  description:
    "Senior-level Unity, C# and C++ development for games and interactive products. Contract work alongside our own product development.",
};

export default function ConsultingPage() {
  const site = getSite();
  const data = getConsulting();
  const team = getTeam();
  const contact = getContact();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative pt-40 pb-20 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-6">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--ll-ember)" }}
                aria-hidden="true"
              />
              <span>{data.eyebrow}</span>
            </div>

            <h1
              className="text-4xl md:text-6xl leading-[1.08] font-[590] text-[var(--ll-fg-1)] mb-6"
              style={{ letterSpacing: "var(--ll-track-tight)" }}
            >
              {data.headline}
            </h1>

            <p
              className="text-lg md:text-xl text-[var(--ll-fg-2)] max-w-3xl"
              style={{ lineHeight: 1.55 }}
            >
              {data.subline}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-8">
              <a
                href={data.cta.primary.href}
                className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium transition-colors"
                style={{
                  background: "var(--ll-ember)",
                  color: "var(--ll-ember-fg)",
                  transitionDuration: "var(--ll-dur-fast)",
                }}
              >
                {data.cta.primary.label}
              </a>
              {data.cta.secondary.href ? (
                <a
                  href={data.cta.secondary.href}
                  className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium border transition-colors"
                  style={{
                    borderColor: "var(--ll-border-2)",
                    color: "var(--ll-fg-2)",
                    transitionDuration: "var(--ll-dur-fast)",
                  }}
                >
                  {data.cta.secondary.label}
                </a>
              ) : (
                <span
                  className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium border opacity-50 cursor-not-allowed"
                  style={{
                    borderColor: "var(--ll-border-2)",
                    color: "var(--ll-fg-3)",
                  }}
                  title="Calendly link coming soon"
                >
                  {data.cta.secondary.label}
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pitch */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-8">
              What you get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.pitch.map((p) => (
                <div
                  key={p.title}
                  className="p-6 rounded-[12px] border"
                  style={{
                    background: "var(--ll-bg-2)",
                    borderColor: "var(--ll-border-2)",
                  }}
                >
                  <h3
                    className="text-base font-medium text-[var(--ll-fg-1)] mb-2"
                    style={{ letterSpacing: "var(--ll-track-snug)" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm text-[var(--ll-fg-2)]"
                    style={{ lineHeight: 1.65 }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section
          className="py-16 px-6 lg:px-8"
          style={{ background: "var(--ll-bg-1)" }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-8">
              Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {data.services.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-[var(--ll-fg-1)] py-3 border-b"
                  style={{ borderColor: "var(--ll-border-1)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--ll-ember)" }}
                    aria-hidden="true"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Team */}
        <TeamGrid members={team} />

        {/* Worked with */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xs uppercase tracking-[0.12em] text-[var(--ll-fg-3)] mb-6">
              Previously worked with
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {data.worked_with.map((name) => (
                <span
                  key={name}
                  className="text-base text-[var(--ll-fg-2)]"
                  style={{ letterSpacing: "var(--ll-track-snug)" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-16 px-6 lg:px-8 border-y"
          style={{
            borderColor: "var(--ll-border-1)",
            background: "var(--ll-bg-1)",
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl text-[var(--ll-fg-1)] mb-6"
              style={{ letterSpacing: "var(--ll-track-tight)" }}
            >
              Want to talk about a project?
            </h2>
            <a
              href={data.cta.primary.href}
              className="inline-flex items-center px-5 h-10 rounded-[8px] text-sm font-medium transition-colors"
              style={{
                background: "var(--ll-ember)",
                color: "var(--ll-ember-fg)",
                transitionDuration: "var(--ll-dur-fast)",
              }}
            >
              {data.cta.primary.label}
            </a>
          </div>
        </section>

        <ContactSection contact={contact} />
      </main>
      <Footer site={site} />
      <BackToTop />
    </div>
  );
}
