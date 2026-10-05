# Portfolio (Next.js 14, App Router, TypeScript, Tailwind)

## Structure
```
app/
  layout.tsx          → root layout (Navbar + Footer wrap every page)
  page.tsx             → home ("/")
  about/page.tsx        → "/about"
  projects/page.tsx     → "/projects" (list)
  projects/[slug]/page.tsx → "/projects/:slug" (dynamic detail page)
  contact/page.tsx      → "/contact"
  not-found.tsx         → custom 404
  globals.css
components/
  Navbar.tsx
  Footer.tsx
lib/
  projects.ts          → placeholder project data (swap for CMS/DB later)
```

## Setup
```bash
npm install
npm run dev
```

## Next steps (once the skeleton is in place)
- Replace placeholder text, links, and `lib/projects.ts` data with real content.
- Add animations (Framer Motion is a natural fit with the App Router).
- Wire the contact form to an API route, Resend, or Formspree.
- Add an `og-image` and refine `metadata` per page for SEO.
- Optional: pull projects from MDX files or a headless CMS instead of the static array.

## Deploy
Works on Vercel out of the box, or Netlify via `@netlify/plugin-nextjs`.
