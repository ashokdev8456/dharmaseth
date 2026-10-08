# Production readiness

Release candidate for the Dharmasethu frontend. This document describes how to build and run that candidate. It does not select a host, a domain, or a payment provider.

## Project overview

Dharmasethu is a public website for reading about seva and reviewing a one-time or monthly gift. Campaign amounts, dates, and supporter counts are samples. Privacy, terms, and cancellation are drafts. The footer email is a placeholder.

There is no database, account system, admin, CMS, or payment gateway.

Package version: `0.1.0`.

## Production architecture

```text
Application:        Next.js frontend (App Router)
Runtime:            Node.js
Package manager:    npm
Install:            npm ci
Build:              next build
Production start:   next start
Output:             Node server plus static pages (not a static export)
Deployment provider: To Be Selected
HTTPS / TLS:        Handled by the deployment platform
Monitoring:         Not yet configured
Analytics:          Not currently integrated
Error reporting:    Not currently integrated
```

Environments that exist today:

```text
Development:  npm run dev
Production:   npm run build, then npm start
Staging:      Not configured
```

`/explore` is rendered on demand because it reads search parameters. Campaign detail and give pages are generated with `generateStaticParams`. Unknown slugs are not generated and return 404. Other public pages are static.

## Requirements

| Tool | Requirement | Used for this candidate |
| --- | --- | --- |
| Node.js | `>=20.9.0` (Next.js 16.3.8) | 24.15.0 |
| npm | lockfile v3 | 11.14.1 |
| Next.js | 16.3.8 | 16.3.8 |
| React | 19.2.8 | 19.2.8 |

`package.json` records the Node range in `engines`. npm is not pinned.

## Environment variables

| Variable | Purpose | Required for a public launch | Public or private | Example |
| --- | --- | --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Origin for metadata, canonical URLs, Open Graph, sitemap, and robots. Trailing slash is removed. | Yes. Without it, those URLs use `http://localhost:3000`. | Public. It is inlined into the browser bundle. | `https://example.org` |

No other environment variables are read. Do not add private keys, tokens, or passwords as `NEXT_PUBLIC_` values.

`.env.example` is the template. Copy it to `.env.local` for a machine-specific origin. `.gitignore` ignores `.env`, `.env.local`, `.env*.local`, and other `.env*` files, then keeps `.env.example`.

A local production check may keep `http://localhost:3000`. `next.config.ts` prints a warning when the variable is unset. That warning is expected for a local build. Set the real `https` origin before a public deployment. Do not invent a domain in source.

## Build instructions

From a clean tree, with the lockfile committed:

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

`npm ci` installs the lockfile exactly and removes `node_modules` first. Stop any process using this project’s `node_modules` before running it.

The build warns when `NEXT_PUBLIC_SITE_URL` is unset. There should be no other warnings.

## Production start instructions

```bash
npm start
```

The server listens on port 3000 unless `PORT` is set by the host. Run `npm run build` first. `npm start` serves the production build, not the development server.

## Deployment checklist

Provider-neutral. The host has not been selected.

```text
1. Choose the host and the public https origin.
2. Commit the release candidate and record the commit. This working tree is not a git tag.
3. Set NEXT_PUBLIC_SITE_URL to that https origin. Do not leave it as localhost.
4. Install with npm ci.
5. Run lint, typecheck, and npm run build on the host or in CI.
6. Start with npm start, or the host’s equivalent of `next start`.
7. Put TLS in front of the Node process. Do not create certificates in this repository.
8. Confirm response headers from the host do not contradict the headers in next.config.ts.
9. Run the smoke test below against the public origin.
10. Do not point DNS at the site until that smoke test passes.
```

Suggested host settings:

```text
Install command:  npm ci
Build command:    npm run build
Start command:    npm start
Node.js:          >=20.9.0
Environment:      NEXT_PUBLIC_SITE_URL
```

## Security checklist

- [x] Secret scan of source, markdown, and env examples. Matches were the words “secret” in comments telling people not to commit secrets. No live keys.
- [x] Only one public variable, and it is an origin, not a credential.
- [x] No `localStorage`, `sessionStorage`, cookies, or IndexedDB in `src`.
- [x] Contribution fields stay in React state for the visit. Refresh clears them. They are not logged.
- [x] No application `console.log`. The only console output added for release is the missing-origin warning in `next.config.ts`.
- [x] `poweredByHeader` is false. `productionBrowserSourceMaps` is false.
- [x] JSON-LD is built from site configuration and escapes `<`. It is not used for request or form text.
- [x] No remote image hosts are configured. Images are local SVGs.
- [x] No analytics, chat, or third-party scripts.
- [x] Fonts are loaded by `next/font` (Source Sans 3 and Source Serif 4), not a font CDN.
- [x] App headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Permissions-Policy` with camera, microphone, and geolocation disabled.
- [ ] Content-Security-Policy is not set. Next.js bootstrap scripts and Emotion inline styles need a policy tested against this app. Add it at the host only after that test. Do not add `unsafe-inline` by habit.
- [ ] Strict-Transport-Security is not set in the app. The TLS terminator should send it, and only on https. Sending it from local `npm start` would be wrong.
- [x] No CORS middleware. There is no API. A future payment or form service must set its own CORS.
- [x] HTTPS is a host concern. This repository does not create certificates.

## Performance checklist

- [x] Production build completed. Route table is in the final validation section of the phase report.
- [x] Explore stays dynamic so filtered URLs can be `noindex`. Other routes stay static.
- [x] Client components are limited to the header, navigation item, theme registry, explore filters, FAQ explorer, contribution flow, monthly flow, share, notifications, app button, and the error boundary.
- [x] Images are small local SVGs. `next/image` uses `unoptimized` for SVG. No remote image host.
- [x] Two font families, `display: swap`. No extra font files were added.
- [x] No new client bundle was added in this phase. Dependency versions were not upgraded.
- [ ] A Lighthouse run was not executed. Chrome is not installed in this environment. Do not treat development timings as production timings.

## SEO checklist

- [x] `metadataBase` comes from `NEXT_PUBLIC_SITE_URL`, or `http://localhost:3000` when that variable is unset.
- [x] Each page sets its own canonical path. Filtered explore URLs canonical to `/explore` and are `noindex, follow`.
- [x] Give pages are `noindex, follow` and canonical to themselves.
- [x] Unknown URLs use the not-found page, which is `noindex`.
- [x] `/robots.txt` allows `/` and points at the sitemap. Give URLs are not disallowed; the pages themselves are `noindex`.
- [x] `/sitemap.xml` lists public routes and campaign detail URLs. It omits give URLs and has no `lastmod`.
- [x] Structured data is `WebSite` plus `BreadcrumbList` where breadcrumbs are visible. No organization, rating, review, or donate action.
- [x] Open Graph title, description, and URL are set. Twitter card is `summary`. There is no default social image and no social account.
- [ ] A public launch must not ship localhost in the sitemap or canonicals. Set `NEXT_PUBLIC_SITE_URL` first.

## Accessibility checklist

- [x] Skip link, landmarks, one h1 on the pages checked in Phase 19, form labels, and visible invalid state remain in the production build.
- [x] Mobile drawer still closes with its close button and Escape.
- [x] Reduced motion still shortens transitions in the theme.
- [x] The error boundary now offers “Try again” and “Back to home”, without a stack trace.
- [ ] A screen reader session and a full keyboard pass in Firefox or Safari were not run. Phase 19 records the same limit for the embedded browser.

## Smoke test checklist

Run this against the origin that was just deployed.

```text
[ ] / returns 200 and shows “A bridge to living tradition”
[ ] Header logo returns home
[ ] Mobile menu opens and closes
[ ] /explore lists sample campaigns
[ ] Search and filters update the list and the URL
[ ] /explore/daily-lamps returns 200
[ ] /explore/not-a-real-campaign returns 404 with “Page not found” and a home link
[ ] /explore/daily-lamps/give reviews an amount and does not claim a payment
[ ] /explore/shared-meals/give says contributions are not open
[ ] /monthly shows amounts as rupees per month and does not claim a subscription
[ ] /faq search, category, and accordion work
[ ] /about, /privacy, /terms, /cancellation, /contact return 200
[ ] Legal pages still say they need legal review
[ ] /robots.txt and /sitemap.xml use the public origin, not localhost
[ ] Images and fonts load
[ ] No stack trace is visible
```

## Rollback procedure

No host has been selected, so this stays provider-neutral.

```text
1. Identify the bad deployment and the last known-good commit.
2. Stop or disable the bad release on the host.
3. Check out that known-good commit.
4. Set the same NEXT_PUBLIC_SITE_URL used for the good release.
5. Run npm ci, npm run build, and npm start.
6. Run the smoke test.
7. Write down the commit, the time, and what failed.
```

There is no database to restore.

## Known limitations

```text
Real payment processing:     Not integrated
Recurring billing:           Not integrated
Backend:                     Not integrated
Authentication:              Not integrated
Admin:                       Not integrated
CMS:                         Not integrated
Contact form:                Not built. The page says so.
Analytics:                   Not currently integrated
Error reporting:             Not currently integrated
Monitoring:                  Not yet configured
Staging environment:         Not configured
CI/CD:                       Not configured
Production domain:           To Be Selected
Custom favicon / app icon:   Not in the repository. Do not invent a mark.
Legal pages:                 Drafts. They are not an approved policy.
Campaign catalogue:          Samples, labeled as samples.
Footer email:                Placeholder, not a live inbox.
Content-Security-Policy:     Not set. See the security checklist.
```

## Release checklist

- [x] Lint, typecheck, and production build succeed
- [x] Production server starts
- [x] Routes and 404 checked on the production server
- [x] Lockfile matches `package.json`
- [x] No secrets in source
- [x] Environment variable documented in `.env.example`
- [x] Deployment and rollback written without inventing a host
- [ ] Public `NEXT_PUBLIC_SITE_URL` chosen and set on the host
- [ ] Release commit recorded. Current git HEAD is `f90358c`; later work is still uncommitted
- [ ] Legal drafts reviewed before anyone treats them as policy
- [ ] Smoke test run on the public origin

## Release identification

```text
package.json version:  0.1.0
Git HEAD at audit:     f90358c on master
Git tag:               none
```

The candidate includes work that is not in that commit. Before deployment, commit the tree and deploy that commit. Do not deploy from an unrecorded working tree.

Suggested flow for this repository: work on `master`, commit the candidate, deploy that commit. A second long-lived branch is not required.

## CI recommendation

No pipeline is configured. A minimum pipeline, when one is added:

```text
npm ci
npm run lint
npm run typecheck
npm run build
```

Do not add a pipeline in this repository until a host is chosen.

## What must be preserved

```text
Git history
package-lock.json
.env.example
next.config.ts
Approved files under public/images and src/app
The host’s NEXT_PUBLIC_SITE_URL
```

No database backup is required.

## Dependency review

Runtime: `@emotion/react`, `@emotion/styled`, `@mui/icons-material`, `@mui/material`, `@mui/material-nextjs`, `next`, `react`, `react-dom`.

Development: `@types/node`, `@types/react`, `@types/react-dom`, `eslint`, `eslint-config-next`, `typescript`.

Nothing was removed or upgraded in this phase. `npm audit` during install reported 0 vulnerabilities. No unused production dependency was found. `scripts/qa-logic.ts` is a local logic check run with `npx tsx`. `tsx` is not a project dependency.
