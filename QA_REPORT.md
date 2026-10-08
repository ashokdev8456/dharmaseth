# Phase 19 QA report

Frontend-only check of the current Dharmasethu site. No new pages, payment provider, or persistence were added.

Product routes differ from the example names in the phase brief. Those example paths are not defects.

| Brief name | Product route |
| --- | --- |
| `/campaigns` | `/explore` |
| `/campaigns/[slug]` | `/explore/[slug]` |
| `/campaigns/[slug]/support` | `/explore/[slug]/give` |
| `/monthly-giving` | `/monthly` |

Environment: Next.js 16.3.8 production server at `http://localhost:3000`. Browser: Cursor embedded Chromium. `prefers-reduced-motion` is on in that browser. Firefox, Safari, and Lighthouse were not run.

## Summary

| Result | Count |
| --- | --- |
| Total test cases in this matrix | 57 |
| Passed | 50 |
| Failed | 0 |
| Blocked | 0 |
| Not applicable | 7 |

Defects found in application behavior: none. No application source file was changed. `scripts/qa-logic.ts` had one incorrect expectation (`lamps` matches two sample titles, not one). That expectation was corrected and the script then passed.

## Matrix

| Test ID | Area | Route | Scenario | Steps | Expected Result | Actual Result | Status | Severity | Fix Applied | Retest Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| HOME-01 | Header | `/` | Logo, nav, CTA | Open home. Read header. | Logo links home. Nav and Give monthly are present. | Present on desktop at 1280px and in the mobile drawer. | PASS | — | None | — |
| HOME-02 | Header | `/` | Mobile drawer | Open menu, close with the drawer button, open again, press Escape. | Drawer opens and closes. Escape dismisses it. Focus is not trapped. | Close button and Escape both closed it. Header returned to Open menu. | PASS | — | None | — |
| HOME-03 | Hero | `/` | Hero content | Read the first heading and actions. | One h1. Both CTAs are links. | h1 “A bridge to living tradition”. Support a seva and Give monthly are links. | PASS | — | None | — |
| HOME-04 | Layout | `/` | Narrow overflow | Measure scroll width near 369px. | No horizontal overflow. | Overflow 0. | PASS | — | None | — |
| EXP-01 | Listing | `/explore` | Page load | Open the listing. | Heading, breadcrumb, and campaign cards render. | “Explore seva”, breadcrumb Home → Explore, 8 cards on an unfiltered visit. | PASS | — | None | — |
| EXP-02 | Search | `/explore` | No match | Search `zzzz-not-a-campaign`. | Empty state. Count is 0. No crash. | “0 campaigns”, “No campaigns found”, remove chip, URL keeps `q`. | PASS | — | None | — |
| EXP-03 | Filters | `/explore?q=lamps&status=active&sort=ending` | Search, status, sort | Open that URL. | Two active lamp campaigns. Chips and count match. | “2 campaigns”. Chips for search and Active. Clear all is available. | PASS | — | None | — |
| EXP-04 | History | `/explore` then a campaign | Back and forward | Open a filtered listing, open a card, go back, go forward. | Query returns, then the campaign returns. | Back restored `?q=lamps&status=active&sort=ending`. Forward restored `/explore/daily-lamps`. | PASS | — | None | — |
| EXP-05 | Routing | `/explore/` | Trailing slash | Request the slash URL without following redirects. | Redirect to `/explore`. | HTTP 308 to `/explore`. | PASS | — | None | — |
| EXP-06 | Routing | filtered `/explore` | Direct URL | Load the filtered URL directly. | Results match the query. Page is noindex. Canonical is `/explore`. | 2 results. `robots` is `noindex, follow`. Canonical is `http://localhost:3000/explore`. | PASS | — | None | — |
| CARD-01 | Progress | `/explore/grove-care` | Raised above goal | Read progress. | Text shows ₹1,25,000 of ₹1,00,000. Bar and percent stay at 100. | “100%”. Bar transform is full width, not past it. | PASS | — | None | — |
| CARD-02 | Progress | `/explore/year-of-study` | Raised is 0 | Read the amount. | ₹0 of ₹80,000. Sample supporter count stays labeled. | “₹0 raised of ₹80,000” and “4 supporters · sample count”. | PASS | — | None | — |
| CARD-03 | Progress | `/explore/goal-unset` | Goal is 0 | Read progress. | “No goal set”. No percent. Upcoming copy. No objectives block. | “No goal set”, “0 supporters · sample count”, “This campaign has not opened.” | PASS | — | None | — |
| CARD-04 | Cards | `/explore` filtered | Long title | Read the night puja card. | Title and summary wrap. Layout stays usable. | Full title and longer summary visible. Overflow 0 at the measured widths. | PASS | — | None | — |
| DET-01 | Detail | `/explore/daily-lamps` | Active campaign | Open from a card and directly. | Detail loads. Support links go to the give route. | Title matches. Support this campaign links to `/explore/daily-lamps/give`. | PASS | — | None | — |
| DET-02 | Detail | `/explore/resident-care` | Completed | Read CTAs. | Contribution is not offered as the next step. | “Explore other campaigns” and “Explore campaigns”. “Campaign completed”. Ended 1 March 2026. | PASS | — | None | — |
| DET-03 | Give | `/explore/shared-meals/give` | Upcoming | Open the give URL. | Closed state. No amount form. No success claim. | h1 “This campaign is not currently accepting contributions.” Links to explore and back to the campaign. | PASS | — | None | — |
| DET-04 | Related | `/explore/year-of-study` | Same cause | Read the related section. | Another Vedic education campaign appears. | “More in Vedic education” links to the pathashala roof sample. | PASS | — | None | — |
| DET-05 | 404 | `/explore/not-a-real-campaign` and `.../give` | Unknown slug | Request both URLs. | HTTP 404. One h1. No stack trace. | Both 404. Title “Page not found \| Dharmasethu”. h1 “Page not found”. Home link works. | PASS | — | None | — |
| DET-06 | Share | `/explore/grove-care` | No Web Share API | Press Share. | No crash. Failure is explained if copy fails. | `navigator.share` is absent. Message: “The link could not be copied”. | PASS | — | None | — |
| GIVE-01 | Amount | `/explore/daily-lamps/give` | Empty continue | Continue with no amount. | Stay on step 1. Field invalid. “Enter an amount.” | Helper became “Enter an amount.” Field focused and `aria-invalid`. Summary stayed “Not chosen yet”. | PASS | — | None | — |
| GIVE-02 | Amount | `/explore/daily-lamps/give` | Preset | Choose ₹500 and continue. | Step 2 opens with ₹500. | Amount field became 500. Details step opened. | PASS | — | None | — |
| GIVE-03 | Details | `/explore/daily-lamps/give` | Invalid fields | Name “A”, email `not-an-email`, phone `12345`, consent off, continue. | Stay on details. Each error is readable. | “Enter your full name.” “Enter a valid email address.” “Enter a 10-digit Indian mobile number.” Consent error shown. | PASS | — | None | — |
| GIVE-04 | Review | `/explore/daily-lamps/give` | Valid details | Name Asha Rao, `user+tag@example.com`, `+91 98765 43210`, consent on. | Review matches. Email and phone are masked. | ₹500, Asha Rao, `u***@example.com`, “Ending in 3210”. | PASS | — | None | — |
| GIVE-05 | Payment | `/explore/daily-lamps/give` | Preparation | Continue to payment, then continue again. | No success, receipt, or charge claim. | “No payment provider is connected yet.” Prepared amount ₹500 (INR). “No payment was started.” | PASS | — | None | — |
| MON-01 | Monthly | `/monthly` | Amount wording | Read presets and summary. | Amounts are per month. No charge claim. | Presets say “₹… / month”. Summary says “Every month” and “no payment has been started.” | PASS | — | None | — |
| MON-02 | Monthly | `/monthly` | Full review | Choose ₹1,000, valid details, review, payment. | Review and payment say ₹1,000 / month. No subscription claim. | Review: “₹1,000 / month”, “Every month”, “Nothing has been charged, and no subscription is active.” Payment: “Prepared amount: ₹1,000 / month (INR)” then “No payment was started.” | PASS | — | None | — |
| FAQ-01 | FAQ | `/faq` | Accordion | Activate “What is Dharmasethu?” | It expands and shows the answer. Others stay collapsed. | `aria-expanded` true. Answer text visible, including the purpose link sentence. | PASS | — | None | — |
| FAQ-02 | FAQ | `/faq` | Empty search | Search `zzzz-not-a-question`. | Empty state and a way to clear. | “Showing 0 of 19 questions”. “No questions found”. Clear search and Clear filters. | PASS | — | None | — |
| FAQ-03 | FAQ | `/faq` | Reset | Clear the search. | All 19 return. | “19 questions”. | PASS | — | None | — |
| FAQ-04 | FAQ | `/faq` | Category | Press Payments. | Only payment questions. | “Showing 3 of 19 questions”. Payments pressed. | PASS | — | None | — |
| ABOUT-01 | About | `/about` | Content | Read sections. | Mission, vision, values, focus areas, CTA. No founders, dates, or fake stats. | Page says those details are unpublished. Sample campaigns are labeled. | PASS | — | None | — |
| LEG-01 | Legal | `/privacy` | Draft | Read the top of the page. | Draft is identified. Headings and in-page links work. | “Legal review required” is in the shared legal template. Visible line: “No approved review date.” Sections from Introduction through Contact. | PASS | — | None | — |
| LEG-02 | Legal | `/terms` | Draft | Read the page at 834px. | Same draft treatment. No overflow. | Draft sentence visible. In-page links present. Overflow 0. | PASS | — | None | — |
| LEG-03 | Legal | `/cancellation` | Draft | Request the page. | HTTP 200 and the review notice. | HTTP 200. HTML contains “Legal review required”. h1 Cancellation. | PASS | — | None | — |
| LEG-04 | Contact | `/contact` | Placeholder | Open the page. | It says a form is not here yet. | h1 Contact. “A contact form will be added in a later phase.” | PASS | — | None | — |
| NAV-01 | Links | Header and footer | Internal links | Follow logo, nav, legal, and campaign links across the pages above. | They resolve. Mailto is the placeholder address. | Links reached the routes in this matrix. `hello@dharmasethu.org` is `mailto` and labeled a placeholder. | PASS | — | None | — |
| SEO-01 | SEO | `/robots.txt`, `/sitemap.xml` | Crawl files | Request both. | Allow `/`. Sitemap lists public routes and campaign details, not give URLs, and has no `lastmod`. | Matches. 8 campaign URLs. No `/give`. | PASS | — | None | — |
| SEO-02 | SEO | filtered `/explore` | Robots | Read meta on the filtered URL. | noindex, canonical `/explore`. | `noindex, follow`. Canonical `http://localhost:3000/explore`. | PASS | — | None | — |
| SEO-03 | SEO | `/explore/daily-lamps/give` | Robots | Read meta. | noindex. Canonical is the give URL. | `noindex, follow`. Canonical is the give URL. | PASS | — | None | — |
| SEO-04 | Headings | Tested pages | One h1 | Count h1 on home, FAQ, about, campaign, terms, 404, contact. | One h1 each. | One h1 on each of those checks. | PASS | — | None | — |
| A11Y-01 | Accessibility | Give, FAQ, header | Names and state | Read the accessibility tree. | Fields have names. Errors set invalid. Accordion exposes expanded. Drawer has a name and close button. | Amount, name, email, phone, and consent expose invalid. FAQ button expands. Drawer is “Primary” with Close menu. | PASS | — | None | — |
| A11Y-02 | Motion | Give and monthly payment | Reduced motion | Continue on the payment step in a reduced-motion browser. | No artificial wait. The unavailable message appears. Content does not depend on motion. | Alert “No payment was started” appeared without a preparing delay. | PASS | — | None | — |
| RESP-01 | Responsive | See viewport list | Overflow | Set each width and compare scroll width to client width. | Overflow is 0. | Overflow 0 at every measured width below. | PASS | — | None | — |
| RESP-02 | Header | `/about`, campaign detail | Desktop nav | At 1280 and 1440, read the header. | Menu button is hidden. Primary links are shown. | Open menu `display: none`. Home through Contact and Give monthly are shown. Overflow 0. | PASS | — | None | — |
| RESP-03 | Header | Widths below 1200 | Mobile nav | At 320 through 1024, read the header. | Menu button is available. | Open menu remained available at 1024 (client width 1009). | PASS | — | None | — |
| LOGIC-01 | Logic | `scripts/qa-logic.ts` | Pure checks | Run `npx tsx scripts/qa-logic.ts`. | Progress 0–100, overfund 100, zero goal 0, currency, amount, email, phone, name, filters, FAQ filters, dates, image files. | `LOGIC PASS` after the lamps expectation was set to 2. | PASS | — | Script expectation only | PASS |
| SEC-01 | Security | Source | Secrets and storage | Search source for storage APIs and review JSON-LD. | No localStorage. No contribution payload logged. JSON-LD escapes `<`. | No `localStorage` or `sessionStorage` in `src`. No application `console.log`. JSON-LD is the existing escaped script. | PASS | — | None | — |
| DATA-01 | Data | Campaign records | Consistency | Run the logic script over all 8 campaigns. | Unique slugs, non-negative amounts, sample flag, images on disk, dates parse. | All checks passed. Raised 0 with 4 supporters on year-of-study is labeled sample. | PASS | — | None | — |
| BUILD-01 | Build | Production | Install, lint, types, build, start | Run the commands in this phase, then request the main routes. | Commands exit 0. Routes respond. | `npm install` 0 vulnerabilities. Lint exit 0. Typecheck exit 0. Build exit 0, 30 pages. Start listening. Smoke: 200 on public routes, 404 on `/explore/missing`. | PASS | — | None | — |
| NA-01 | Gallery | Campaign detail | Lightbox | Look for a gallery. | Not part of the current UI. | No gallery control. | NOT APPLICABLE | — | None | — |
| NA-02 | Theme | Site | Dark mode | Look for a theme switch. | Light theme only. | No dark-mode control. Light surfaces stayed consistent. | NOT APPLICABLE | — | None | — |
| NA-03 | Listing | `/explore` | Pagination | Look for paging or load more. | Not implemented. All 8 cards render. | No pager. | NOT APPLICABLE | — | None | — |
| NA-04 | Routing | `/campaigns` | Alias | — | This path is not a product route. | Not requested as a live route. Listing is `/explore`. | NOT APPLICABLE | — | None | — |
| NA-05 | Routing | `/campaigns/[slug]/support` | Alias | — | This path is not a product route. | Give flow is `/explore/[slug]/give`. | NOT APPLICABLE | — | None | — |
| NA-06 | Routing | `/monthly-giving` | Alias | — | This path is not a product route. | Monthly flow is `/monthly`. | NOT APPLICABLE | — | None | — |
| NA-07 | FAQ | `/faq` | Query string | Change search and category. | Current design keeps FAQ state in the page, not the URL. | URL stayed `/faq` while search and Payments updated the list. | NOT APPLICABLE | — | None | — |

## Not executed

These were not run. They are not passes.

| Check | Reason |
| --- | --- |
| Firefox | No Firefox session in this environment. |
| Safari / WebKit | No Safari session in this environment. |
| Lighthouse in installed Chrome | Chrome was not available for Lighthouse. |
| Full keyboard-only pass | Tab in the embedded browser does not move focus. Accordion, buttons, and links were used with pointer activation. Escape did close the drawer. |
| Screen reader session | Accessibility tree only. No NVDA, JAWS, or VoiceOver pass. |
| Successful clipboard or OS share sheet | This browser has no Web Share API and clipboard write was denied. The error message was verified. |
| Motion-enabled payment delay | This browser forces reduced motion, so the zero-delay path was the one tested. |
| Every page at every width | Overflow was measured on representative pages, listed below, not on a full page-by-width grid. |

## Viewports measured

Horizontal overflow was 0 at each of these. Client width is the layout width after scrollbars.

| Requested | Measured client width | Page |
| --- | --- | --- |
| 320 | 320 | `/faq`, `/monthly` |
| ~369 | 369 | `/` |
| 375 | 375 | `/explore/daily-lamps` |
| 390 | 390 | `/explore/daily-lamps` |
| 414 | 414 | `/explore/daily-lamps` |
| 480 | 480 | `/explore/daily-lamps` |
| 768 | 753 | `/about` |
| 834 | 834 | `/explore/daily-lamps`, `/terms` |
| 1024 | 1009 | `/explore/daily-lamps` (mobile menu still shown; desktop nav starts at 1200) |
| 1280 | 1265 | `/about` |
| 1440 | 1425 | `/explore/daily-lamps` |
| 1920 | 1905 | `/about` |

## Observations that are not defects

- While the drawer is open, the header menu button sits under the modal, so it cannot be clicked. The drawer has its own Close menu button, and Escape closes it. The header handler always sets the menu open; that path is not reachable during an open drawer.
- `user..name@example.com` is accepted. The rule is one practical check, not a strict RFC parser.
- Contribution and monthly details live in React state. There is no `localStorage`. Refresh clears them. The pages say so.
- Contact has no form. The page says a form comes later. That is a future enhancement, not a broken form.
- Cursor’s browser adds `data-cursor-ref` attributes. Hydration warnings about those attributes come from the tool, not from the site.

## Commands this phase

```text
npm install     exit 0, 0 vulnerabilities
npm run lint    exit 0
npm run typecheck  exit 0
npm run build   exit 0, Next.js 16.3.8, 30 static pages
npm start       production server http://localhost:3000
npx tsx scripts/qa-logic.ts  LOGIC PASS
```
