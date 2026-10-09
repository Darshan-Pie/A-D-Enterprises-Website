# A.D. Enterprises — enterprise website starter

A production-oriented Next.js/TypeScript website built from the supplied A.D. Enterprises company brochure.

## What is included

- Responsive enterprise website with Home, About, Products, Quality & Testing, Infrastructure and Contact pages.
- Brochure-derived product and company content.
- Product imagery extracted from the supplied brochure.
- Downloadable company brochure at `/AD_ENTERPRISES.pdf`.
- SEO metadata, canonical URLs, Open Graph basics, `robots.txt`, `sitemap.xml` and Organization structured data.
- Security headers configured in `next.config.mjs`.
- Contact form API with honeypot protection and Resend REST API integration.
- Mobile navigation and accessible focus states.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Configure enquiry emails

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL`
- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`

The `CONTACT_FROM_EMAIL` must be a sender/domain authorized by your transactional email provider.

## Production deployment

The simplest deployment is Vercel:

```bash
npm run build
npm start
```

Or connect the Git repository directly in Vercel and add the environment variables in Project Settings.

Before launch, replace placeholder/derived content with the company's approved final copy, upload official certificate scans and confirm all phone/email/address details.

## Direct contact UX
The website includes click-to-call, WhatsApp, email and Google Maps actions sourced from the company's QR business-card landing page. On mobile, a sticky quick-contact bar is shown across the site.
