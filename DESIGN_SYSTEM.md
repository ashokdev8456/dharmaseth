# Dharmasethu design system

Light theme only. Use these tokens instead of raw values in components.

## Color

| Role | Value | Use |
|---|---|---|
| Brand orange | `#FF9F00` | Logo color, primary button fill, section accents |
| Brand ink | `#A35600` | Links, focus, current navigation, small controls |
| Button text | `#171717` | Text on brand orange |
| Secondary | `#8C4A00` | Darker saffron for supporting emphasis |
| Background | `#FFFFFF` | Page, cards, header, dialogs |
| Subtle | `#F8F8F8` | Alternating sections |
| Text | `#171717` | Headings and body |
| Text secondary | `#333333` | Supporting copy |
| Text muted | `#555555` | Captions and metadata |
| Border | `#E5E5E5` | Inputs and dividers |
| Border subtle | `#F0F0F0` | Cards and header edge |

The official logo is `public/images/brand/dharmasethu-trust-logo.svg`. Do not recolor or redraw it.

`#FF9F00` on white is below WCAG AA for text. Links, focus rings, and outlined controls use `#A35600`. Primary buttons use `#FF9F00` with `#171717` text and a `#C46E00` edge.

Success, warning, error, and info are reserved for status. Do not use them as decoration.

## Typography

Two families, loaded with `next/font`:

- Source Serif 4 for display and headings
- Source Sans 3 for interface text, body, and buttons

| Style | Variant | Size |
|---|---|---|
| Display | `display` | clamp to 3.25rem |
| H1–H6 | `h1`–`h6` | clamp on h1–h3, fixed from h4 |
| Body large | `bodyLarge` | 1.125rem |
| Body | `body1` | 1rem |
| Body small | `body2` | 0.875rem |
| Label | `label` | 0.875rem, weight 600 |
| Caption | `caption` | 0.75rem |
| Button | `button` | 0.9375rem |

Weights in use are 400, 500, and 600.

## Spacing

`theme.spacing(1)` is 8px.

| Pixels | Multiplier |
|---|---|
| 4 | 0.5 |
| 8 | 1 |
| 12 | 1.5 |
| 16 | 2 |
| 24 | 3 |
| 32 | 4 |
| 40 | 5 |
| 48 | 6 |
| 64 | 8 |
| 80 | 10 |
| 96 | 12 |
| 120 | 15 |

Sections use 48px of vertical padding on the smallest screens, 64px from `sm`, 80px from `md`, and 96px from `lg`. `PageContainer` is centered at the `lg` width (1200px). Horizontal padding is 16px, 24px from `sm`, and 32px from `lg`.

## Breakpoints

`xs` 0, `sm` 600, `md` 900, `lg` 1200, `xl` 1536.

Layouts should hold from 320px through 1920px. Side padding stays 16px on the smallest screens.

## Radius and shadow

Radius: 4, 8, 12, and pill. Buttons and inputs use 8. Cards and dialogs use 12.

Shadows: none, subtle, medium, strong. Prefer a border or a background change. Elevation 0 is the default.

## Components

- `PageContainer`, `Section`, `SectionHeading`
- `AppButton` for the loading state. Use MUI `Button` variants: contained for the main action, outlined for a supporting action, text for a quiet action.
- `ContentCard` and `MediaFrame` for campaign, cause, and story cards
- MUI inputs, checkbox, radio, and switch for forms. Errors use the field helper text.
- `EmptyState`, `ErrorState`
- `PageSkeleton` for the root loading state. Route loading files use a short skeleton that matches that page.
- `useNotification` for a meaningful success, error, warning, or info message

Icon sizes are 20, 24, and 32 (`small`, `medium`, `large`).

Image frames reserve ratio before the picture loads: hero 16:9, campaign 3:2, card 4:3, avatar 1:1. Use `next/image` with `fill` inside `MediaFrame` when real images are added.

## Motion

Ease, then settle. Durations: 150ms for hover and press, 280ms for drawers, dialogs, and menus, 560ms for a section entrance. No bounce, no looping motion.

`prefers-reduced-motion: reduce` shortens transitions and animations. Content must be readable with motion off.

## Accessibility

- Solid buttons are at least 44px tall
- Focus uses a 2px maroon outline, offset from the control
- Do not remove the outline
- Dialogs have a title and description
- Empty states use `role="status"`. Errors use an alert
- Muted text still meets contrast on ivory and white surfaces
