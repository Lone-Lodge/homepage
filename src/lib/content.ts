import { readFileSync } from "fs";
import { join } from "path";
import { parse } from "yaml";
import {
  siteSchema,
  workSchema,
  cultureSchema,
  aboutSchema,
  openSchema,
  consultingSchema,
  teamMemberSchema,
  contactSchema,
  manifestoSchema,
  translationsSchema,
} from "./schemas";
import type {
  Site,
  Work,
  Culture,
  About,
  Open,
  Consulting,
  TeamMember,
  Contact,
  Translations,
} from "./schemas";
import { z } from "zod/v4";

const contentDir = join(process.cwd(), "content");

function load<T>(file: string, schema: z.ZodType<T>): T {
  const raw = readFileSync(join(contentDir, file), "utf-8");
  const data = parse(raw);
  return schema.parse(data);
}

function loadArray<T>(file: string, schema: z.ZodType<T>): T[] {
  const raw = readFileSync(join(contentDir, file), "utf-8");
  const data = parse(raw);
  return z.array(schema).parse(data);
}

export function getSite(): Site {
  return load("site.yaml", siteSchema);
}

export function getManifesto(): string[] {
  return loadArray("manifesto.yaml", manifestoSchema);
}

export function getWork(): Work[] {
  return loadArray("work.yaml", workSchema);
}

export function getCulture(): Culture[] {
  return loadArray("culture.yaml", cultureSchema);
}

export function getAbout(): About {
  return load("about.yaml", aboutSchema);
}

export function getOpen(): Open[] {
  return loadArray("open.yaml", openSchema);
}

export function getConsulting(): Consulting {
  return load("consulting.yaml", consultingSchema);
}

export function getTeam(): TeamMember[] {
  return loadArray("team.yaml", teamMemberSchema);
}

export function getContact(): Contact {
  return load("contact.yaml", contactSchema);
}

export function getTranslations(): Translations {
  return load("translations.yaml", translationsSchema);
}
