"use client";

import { useI18n } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useI18n();

  const baseBtn =
    "relative text-xs tracking-[0.12em] uppercase transition-colors";

  return (
    <div
      className={`flex items-center ${compact ? "gap-2" : "gap-3"}`}
      role="group"
      aria-label="Language"
    >
      <button
        onClick={() => setLang("en")}
        className={`${baseBtn} ${
          lang === "en" ? "text-[var(--ll-fg-1)]" : "text-[var(--ll-fg-3)] hover:text-[var(--ll-fg-1)]"
        }`}
        style={{ transitionDuration: "var(--ll-dur-fast)" }}
        aria-pressed={lang === "en"}
        aria-label="English"
      >
        EN
      </button>
      <span
        aria-hidden="true"
        className="w-1 h-1 rounded-full"
        style={{ background: "var(--ll-border-3)" }}
      />
      <button
        onClick={() => setLang("sv")}
        className={`${baseBtn} ${
          lang === "sv" ? "text-[var(--ll-fg-1)]" : "text-[var(--ll-fg-3)] hover:text-[var(--ll-fg-1)]"
        }`}
        style={{ transitionDuration: "var(--ll-dur-fast)" }}
        aria-pressed={lang === "sv"}
        aria-label="Svenska"
      >
        SV
      </button>
    </div>
  );
}
