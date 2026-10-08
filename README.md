# Dharmasethu

Public website for reading about seva and reviewing a gift. It is a frontend only. There is no account system, database, payment gateway, or admin.

Campaigns, amounts, and supporter counts in the catalogue are samples. Privacy, terms, and cancellation are drafts for legal review. The footer email is a placeholder, not a live inbox.

## Requirements

- Node.js 20.9 or newer
- npm

Deployment, rollback, and the release checklist are in `PRODUCTION_READINESS.md`.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env.local` when the public site URL should differ from `http://localhost:3000`. Use `npm ci` for a deployment install from the lockfile.

`NEXT_PUBLIC_SITE_URL` is the canonical origin for metadata, Open Graph, the sitemap, and robots. It is public. Do not put secrets in it.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build. Run `npm run build` first.

## Stack

Next.js App Router, React, TypeScript, Material UI, and Emotion. Server Components are the default. Client Components are used for the header, explore filters, FAQ search, contribution form, monthly giving form, and the share action.

## Routes

| Path | Purpose |
|---|---|
| `/` | Home |
| `/explore` | Sample campaign catalogue |
| `/explore/[slug]` | Campaign detail |
| `/explore/[slug]/give` | Contribution review. Not a payment. Not indexed. |
| `/monthly` | Monthly giving review. Not a subscription. |
| `/about` | Purpose and values |
| `/faq` | Questions |
| `/contact` | Placeholder until a contact form exists |
| `/privacy`, `/terms`, `/cancellation` | Legal drafts |

Filtered explore URLs stay canonical to `/explore`.

## Layout

```text
src/app          routes, metadata, robots, sitemap
src/components   interface, grouped by feature
src/theme        MUI theme, motion, breakpoints
src/data         static content
src/types        domain types
src/config       site, routes, navigation, form limits
src/utils        formatting, validation, filters
src/services     request builders only; no network calls
```

Design tokens are described in `DESIGN_SYSTEM.md`.
