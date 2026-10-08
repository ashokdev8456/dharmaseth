import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypeText {
    muted: string;
  }

  interface TypeBackground {
    subtle: string;
  }

  interface Palette {
    border: {
      default: string;
      subtle: string;
    };
  }

  interface PaletteOptions {
    border?: {
      default: string;
      subtle: string;
    };
  }

  interface TypographyVariants {
    display: CSSProperties;
    bodyLarge: CSSProperties;
    label: CSSProperties;
  }

  interface TypographyVariantsOptions {
    display?: CSSProperties;
    bodyLarge?: CSSProperties;
    label?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display: true;
    bodyLarge: true;
    label: true;
  }
}

export {};
