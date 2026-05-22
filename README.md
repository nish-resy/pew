# PEW Website

Premium consultancy website for `paulenggworks.com`, positioned around seasoned
mobile engineering, iOS architecture, distributed delivery, and international
product consulting.

## Stack

- Next.js App Router with TypeScript
- Tailwind CSS v4
- shadcn/ui-compatible component structure and primitives
- Framer Motion reveal transitions
- `next-themes` light/dark mode
- Lucide iconography

## Local development

Dependencies are installed locally in this project folder.

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js.

## Production checks

```bash
npm run lint
npm run build
```

## Deployment

1. Push this folder to a Git repository.
2. Import the repository into Vercel.
3. Keep the detected Next.js defaults for build and output settings.
4. Add `paulenggworks.com` and the preferred `www` redirect in the Vercel
   domain settings.
5. Review the public contact and client-work copy before launch.

SEO metadata, Open Graph data, `robots.txt`, and `sitemap.xml` are served from
the App Router files under `src/app`.
