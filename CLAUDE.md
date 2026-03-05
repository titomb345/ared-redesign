# CLAUDE.md - ARED Furniture Repair Redesign

## Project Overview

Redesign prototype for ARED Furniture Repair & Antique Restoration (aredrepair.com). A local furniture repair business in Wylie, TX serving the DFW metroplex. Family-owned since 1980, 35+ years experience.

This is a client project for BillBergquist.dev's web design service.

## Tech Stack

- **Astro 5** - Static site generator (no React needed, pure Astro components)
- **Tailwind CSS v4** - Styling
- **TypeScript** - Type safety
- **@astrojs/sitemap** - Auto-generated XML sitemap
- **Netlify** - Hosting (on Bill's existing plan)

## Design Direction

**"Modern Antique"** - Warm, craftsman aesthetic with modern web conventions:
- Warm color palette: deep wood browns, aged gold/brass, cream/parchment, dark charcoal
- Serif headings (Playfair Display or similar) for antique character
- Clean sans-serif body text (Inter or similar) for readability
- Subtle textures hinting at wood grain or aged paper
- Before/after gallery as the portfolio centerpiece
- Mobile-first responsive design

## SEO Priority

SEO is the #1 selling point of this redesign. Every page must have:
- Unique, properly-length title tags (<60 chars)
- Unique meta descriptions (<160 chars)
- Single H1 per page, proper heading hierarchy
- Naturally written copy (NO keyword stuffing)
- Correct LocalBusiness JSON-LD schema
- Service schema for each service offered
- OpenGraph and Twitter Card meta tags
- Proper image alt text (descriptive, not keyword-stuffed)
- FAQ schema where appropriate

## Business Information (NAP - must be consistent everywhere)

- **Name:** ARED Furniture Repair & Antique Restoration
- **Address:** 10 Regency Dr Bldg B, Wylie, TX 75098
- **Phone:** (214) 682-6371
- **Hours:** Mon-Fri 9am-5pm, Sat 9am-3:30pm, Sun Closed
- **Service Area:** Dallas-Fort Worth Metroplex

## Site Structure

```
src/
├── layouts/
│   └── Layout.astro          # Base layout with head, nav, footer, schema
├── pages/
│   ├── index.astro            # Home - hero, services overview, testimonials, CTA
│   ├── services.astro         # Detailed service descriptions (replaces "What We Do")
│   ├── portfolio.astro        # Before/after gallery
│   ├── about.astro            # Story, team, why ARED (replaces "Why ARED")
│   ├── contact.astro          # Form, map, hours, service area
│   ├── blog/
│   │   └── index.astro        # Blog index (ready for future content)
│   ├── privacy-policy.astro
│   └── terms-of-use.astro
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── home/
│   │   ├── Hero.astro
│   │   ├── ServicesPreview.astro
│   │   ├── Testimonials.astro
│   │   └── CTASection.astro
│   ├── services/
│   │   └── ServiceCard.astro
│   ├── portfolio/
│   │   └── GalleryItem.astro
│   ├── contact/
│   │   └── ContactForm.astro
│   └── ui/
│       ├── Button.astro
│       └── SectionHeading.astro
├── content/
│   └── testimonials.json      # Testimonial data
├── styles/
│   └── global.css             # Tailwind imports + custom properties
└── data/
    └── services.ts            # Service definitions for schema + display
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:4321)
npm run build      # Production build
npm run preview    # Preview production build
```

## Writing Style

- Never use emdashes in content copy
- Write naturally, conversationally
- Each keyword phrase used at most 1-2 times per page
- Focus on genuine expertise and craftsmanship story
- Use specific details (materials, techniques, years) for E-E-A-T signals
