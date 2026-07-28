# PNH India Foundation

Website for PNH India Foundation — a patient advocacy organisation supporting
people living with Paroxysmal Nocturnal Haemoglobinuria (PNH) in India.

Built with [Astro](https://astro.build) as a static site, deployed automatically
to GitHub Pages.

**Live site:** https://guptayashu99.github.io/PNHIndiaFoundation/
*(after the one-time Pages setup in [DEPLOYMENT.md](DEPLOYMENT.md))*

---

## Running it locally

Requires Node 20 or newer.

```bash
npm install
npm run dev      # http://localhost:4321/PNHIndiaFoundation
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server with live reload |
| `npm run build` | Build the production site into `dist/` |
| `npm run preview` | Serve the built site locally to check it before pushing |

## Editing the site

**Start with [`src/site.ts`](src/site.ts).** Contact details, social links and
registration information all live there, and changing them updates the header,
footer and contact page at once.

Page content lives in `src/pages/` — one file per page, plain HTML with the text
written inline:

| Page | File |
| --- | --- |
| Home | [`src/pages/index.astro`](src/pages/index.astro) |
| What is PNH? | [`src/pages/about-pnh.astro`](src/pages/about-pnh.astro) |
| Patient Support | [`src/pages/patient-support.astro`](src/pages/patient-support.astro) |
| Resources | [`src/pages/resources.astro`](src/pages/resources.astro) |
| What We Do | [`src/pages/what-we-do.astro`](src/pages/what-we-do.astro) |
| About Us | [`src/pages/about-us.astro`](src/pages/about-us.astro) |
| Support Us | [`src/pages/support-us.astro`](src/pages/support-us.astro) |
| Contact | [`src/pages/contact.astro`](src/pages/contact.astro) |
| 404 | [`src/pages/404.astro`](src/pages/404.astro) |

Shared pieces are in `src/components/` (header, footer, logo) and
`src/layouts/Base.astro` (the page shell and SEO tags). Colours, spacing and
typography are all defined as CSS custom properties at the top of
[`src/styles/global.css`](src/styles/global.css).

### Internal links

The site is served from a subpath on GitHub Pages, so **don't** hard-code
`href="/contact"` — it will 404. Use the helper:

```astro
---
import { url } from '../lib/url';
---
<a href={url('/contact')}>Contact us</a>
```

## Before launching

The scaffolded content contains placeholders that must be filled in or removed.
Find every one of them with:

```bash
grep -rn "TODO" src/ public/ astro.config.mjs
```

They render on the page as visible amber boxes, so nothing can be missed by
accident. The important ones:

- Real contact details, address and social links in `src/site.ts`
- The Foundation's founding story and the people behind it (`about-us.astro`)
- Logo and favicon (`src/components/Logo.astro`, `public/favicon.svg`)
- India-specific treatment access information (`about-pnh.astro`) — **verify
  with a treating haematologist before publishing**
- Legal registration, 12A/80G and FCRA position before publishing any donation
  details (`support-us.astro`)
- A privacy policy before collecting personal data through a form

## A note on the medical content

The clinical information on this site is general and written for a lay audience.
It should be reviewed by a haematologist before launch, and any India-specific
statement about drug availability, government schemes or eligibility should be
checked and dated — patients act on this information.

The site-wide medical disclaimer lives in
[`src/components/Footer.astro`](src/components/Footer.astro).

### Citations

Every clinical or policy claim carrying a number, a drug name or a policy
statement should be traceable to an entry in
[`src/data/sources.ts`](src/data/sources.ts). Each entry has a `checked` date,
rendered on the page by
[`src/components/SourceList.astro`](src/components/SourceList.astro).

**Re-verify these at least every six months.** The India section of
[`about-pnh.astro`](src/pages/about-pnh.astro) is the site's most valuable
content and the fastest to go stale. In particular, re-check:

- whether PNH has been added to the NPRD rare disease list (it was **not** on it
  as of 28 July 2026 — this is the Foundation's headline advocacy issue, and if
  it changes, several pages need updating)
- which complement inhibitors beyond eculizumab have CDSCO approval
- the current Centre of Excellence list and count
- which patient assistance programmes are live

Update the `checked` dates whenever you verify.

## Deployment

Pushing to `main` builds and deploys automatically. Full instructions, including
the one-time GitHub Pages setup and how to attach a custom domain later, are in
[DEPLOYMENT.md](DEPLOYMENT.md).
