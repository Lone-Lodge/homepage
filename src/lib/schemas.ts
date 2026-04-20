import { z } from "zod/v4";

// ── Site ─────────────────────────────────────────────────────────────────
export const siteSchema = z.object({
  meta: z.object({
    title: z.string(),
    description: z.string(),
    url: z.url(),
  }),
  hero: z.object({
    eyebrow: z.string(),
    headline: z.string(),
    subline: z.string(),
    ctaPrimary: z.object({ label: z.string(), href: z.string() }),
    ctaSecondary: z.object({ label: z.string(), href: z.string() }),
  }),
  social: z.object({
    twitter: z.string(),
    discord: z.string(),
    youtube: z.string(),
    github: z.string(),
    fabStore: z.string(),
    email: z.string(),
  }),
  calendly: z.string(),
});

// ── Work ─────────────────────────────────────────────────────────────────
export const workSchema = z.object({
  title: z.string(),
  role: z.string(),
  description: z.string(),
  year: z.string(),
  tags: z.array(z.string()),
  details: z.string().optional(),
});

// ── Culture ──────────────────────────────────────────────────────────────
export const cultureSchema = z.object({
  num: z.string(),
  title: z.string(),
  desc: z.string(),
});

// ── About ────────────────────────────────────────────────────────────────
export const aboutSchema = z.object({
  paragraphs: z.array(z.string()),
  personal: z.string(),
  interests: z.array(z.string()),
});

// ── Open ─────────────────────────────────────────────────────────────────
export const openSchema = z.object({
  category: z.string(),
  tags: z.array(z.string()),
});

// ── Consulting ───────────────────────────────────────────────────────────
export const consultingSchema = z.object({
  eyebrow: z.string(),
  headline: z.string(),
  subline: z.string(),
  pitch: z.array(
    z.object({
      title: z.string(),
      desc: z.string(),
    })
  ),
  services: z.array(z.string()),
  worked_with: z.array(z.string()),
  cta: z.object({
    primary: z.object({ label: z.string(), href: z.string() }),
    secondary: z.object({ label: z.string(), href: z.string() }),
  }),
});

// ── Team ─────────────────────────────────────────────────────────────────
export const teamMemberSchema = z.object({
  slug: z.string(),
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  skills: z.array(z.string()),
  portfolio: z.string(),
  photo: z.string(),
  location: z.string(),
});

// ── Contact ──────────────────────────────────────────────────────────────
export const contactSchema = z.object({
  headline: z.string(),
  footer: z.string(),
  links: z.array(
    z.object({
      icon: z.string(),
      label: z.string(),
      value: z.string(),
      href: z.string(),
    })
  ),
});

// ── Manifesto ────────────────────────────────────────────────────────────
export const manifestoSchema = z.string();

// ── Translations ─────────────────────────────────────────────────────────
export const translationsSchema = z.object({
  en: z.record(z.string(), z.string()),
  sv: z.record(z.string(), z.string()),
});

// ── Types ────────────────────────────────────────────────────────────────
export type Site = z.infer<typeof siteSchema>;
export type Work = z.infer<typeof workSchema>;
export type Culture = z.infer<typeof cultureSchema>;
export type About = z.infer<typeof aboutSchema>;
export type Open = z.infer<typeof openSchema>;
export type Consulting = z.infer<typeof consultingSchema>;
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type Contact = z.infer<typeof contactSchema>;
export type Translations = z.infer<typeof translationsSchema>;
