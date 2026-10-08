import type { ThemeOptions } from "@mui/material/styles";

export const fontFamilySans = 'var(--font-sans), "Segoe UI", sans-serif';
export const fontFamilySerif = fontFamilySans;

const serif = {
  fontFamily: fontFamilySerif,
  fontWeight: 600,
} as const;

export const typography: ThemeOptions["typography"] = {
  fontFamily: fontFamilySans,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  display: {
    ...serif,
    fontWeight: 500,
    fontSize: "clamp(2.75rem, 1.4rem + 3.2vw, 4.75rem)",
    lineHeight: 1.08,
    letterSpacing: "-0.02em",
  },
  h1: {
    ...serif,
    fontSize: "clamp(1.875rem, 1.4rem + 1.5vw, 2.5rem)",
    lineHeight: 1.2,
    letterSpacing: "-0.02em",
  },
  h2: {
    ...serif,
    fontSize: "clamp(1.5rem, 1.25rem + 0.8vw, 1.875rem)",
    lineHeight: 1.25,
    letterSpacing: "-0.015em",
  },
  h3: {
    ...serif,
    fontSize: "clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem)",
    lineHeight: 1.3,
  },
  h4: {
    ...serif,
    fontSize: "1.25rem",
    lineHeight: 1.35,
  },
  h5: {
    ...serif,
    fontSize: "1.125rem",
    lineHeight: 1.4,
  },
  h6: {
    ...serif,
    fontSize: "1rem",
    lineHeight: 1.45,
  },
  subtitle1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    fontWeight: 500,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    fontWeight: 600,
  },
  bodyLarge: {
    fontSize: "1.125rem",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  body1: {
    fontSize: "1rem",
    lineHeight: 1.7,
    fontWeight: 400,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.6,
    fontWeight: 400,
  },
  label: {
    fontSize: "0.875rem",
    lineHeight: 1.4,
    fontWeight: 600,
  },
  button: {
    fontSize: "0.9375rem",
    lineHeight: 1.4,
    fontWeight: 600,
    textTransform: "none",
  },
  caption: {
    fontSize: "0.75rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },
  overline: {
    fontSize: "0.72rem",
    lineHeight: 1.5,
    fontWeight: 600,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
  },
};
