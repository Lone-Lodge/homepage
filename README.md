# Lone Lodge Studios — Homepage

The public site for Lone Lodge Studios. Built with Next.js 16 (static export), Tailwind v4, and a data-driven YAML content model.

## Stack

- Next.js 16 (app router, static export)
- React 19
- Tailwind CSS v4
- Motion (formerly Framer Motion) for animation
- next-themes for theme switching
- Zod + yaml for content validation

Typography: Inter (UI) + JetBrains Mono (code) + Lora italic (editorial flourish). Single accent: ember `#b85a3a`.

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000/homepage.

## Build

```bash
pnpm build
```

Outputs a static site to `out/` under the basePath `/homepage`.

## Deploy

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`. No manual step — merge to main and the site updates.

## Content

All content lives under `content/` as YAML. Schemas in `src/lib/schemas.ts` validate shape at build time.

| File | What it is |
| --- | --- |
| `site.yaml` | Meta, hero, social links |
| `manifesto.yaml` | Short phrases in the manifesto strip |
| `work.yaml` | Featured projects |
| `culture.yaml` | Values grid |
| `about.yaml` | Paragraphs, personal, interests |
| `open.yaml` | What we share, how to contribute, how we work |
| `consulting.yaml` | Consulting page copy |
| `team.yaml` | Team members (data-driven list) |
| `contact.yaml` | Contact links |
| `translations.yaml` | EN/SV strings |

### Add a team member

Append a new object to `content/team.yaml` — the grid picks it up automatically.

```yaml
- slug: new-person
  name: "Name"
  role: "Role"
  bio: "One-line bio."
  skills: ["Skill A", "Skill B"]
  portfolio: "https://..."
  photo: "/team/filename.jpg"   # optional; falls back to initials
  location: "City, Country"
```

Drop their photo into `public/team/`.
