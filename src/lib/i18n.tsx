"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Translations } from "./schemas";

type Lang = "en" | "sv";

const STORAGE_KEY = "ll-lang";

interface I18nCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nCtx | null>(null);

export function I18nProvider({
  children,
  translations,
}: {
  children: ReactNode;
  translations: Translations;
}) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (saved === "en" || saved === "sv") {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (key: string): string => {
    const bucket = translations[lang] ?? translations.en;
    return bucket[key] ?? translations.en[key] ?? key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>
  );
}

export function useI18n(): I18nCtx {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    // Fall back to a no-op (works at SSR/hydration time if provider hasn't mounted yet).
    return {
      lang: "en",
      setLang: () => {},
      t: (key) => key,
    };
  }
  return ctx;
}

export function getTranslation(translations: Translations, lang: Lang, key: string): string {
  const bucket = translations[lang] ?? translations.en;
  return bucket[key] ?? translations.en[key] ?? key;
}
