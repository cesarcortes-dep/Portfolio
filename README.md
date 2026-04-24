# Portfolio — César Mateo Cortés León

Personal portfolio of a Senior Front-End Engineer. Dark-mode first, typography-led, built around four sections: Intro, Work, About, Contact.

**Live:** [portfolio-lovat-theta-m79gj4f90e.vercel.app](https://portfolio-lovat-theta-m79gj4f90e.vercel.app/)

> Migrated from a React + Vite build to the Next.js App Router. Previous version: [cesarcortes-dep/Portfolio](https://github.com/cesarcortes-dep/Portfolio).

## Stack

- **Next.js 16** (App Router, Turbopack, React 19)
- **TypeScript** strict
- **Tailwind CSS v4** (CSS-first config via `@theme inline`)
- **Framer Motion** for orchestrated entrance + hover micro-interactions
- **next/font/google** — Bricolage Grotesque (display) + JetBrains Mono (code)
- `clsx` + `tailwind-merge` + `class-variance-authority`
- `lucide-react` for icons

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Structure

```
src/
├── app/
│   ├── layout.tsx         root layout · fonts · SEO metadata
│   ├── page.tsx           single-page composition
│   └── globals.css        design tokens · atmosphere · grain
├── components/
│   ├── shared/            Navbar
│   └── sections/          Hero · Projects · About · Contact
├── data/
│   └── portfolio.ts       single source of truth (bio, stack, projects)
├── lib/
│   └── utils.ts           cn() helper
└── types/
    └── index.ts           Portfolio / Project / Social types
```

## Design notes

- One dominant accent (electric lime `#E0FE10`) on near-black background. No generic blue/purple.
- Extreme typographic weights (200 vs 800) with 3×+ size jumps.
- Atmospheric background: subtle radial gradients + SVG noise grain.
- Asymmetric project grid — no uniform 3-column card grid.
- Respects `prefers-reduced-motion`.

## Deployment

Auto-detected as Next.js by Vercel. Drop the repo into [vercel.com/new](https://vercel.com/new) — no config required.

## License

All content (copy, CV, images) is © César Mateo Cortés León. Code is available for reference.
