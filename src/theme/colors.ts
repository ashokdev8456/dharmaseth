/**
 * DharmaSetHu Trust palette.
 * Logo artwork stays #FF9F00. Text, focus, and small controls use darker saffron
 * so orange on white still meets WCAG AA.
 */
export const colors = {
  brand: {
    50: "#FFF6E5",
    100: "#FFE8C2",
    200: "#FFD48A",
    300: "#FFC04D",
    400: "#FFAF1A",
    500: "#FF9F00",
    600: "#E08800",
    700: "#C46E00",
    800: "#A35600",
    900: "#8C4A00",
  },
  primary: {
    main: "#FF9F00",
    light: "#FFD48A",
    dark: "#A35600",
    contrastText: "#171717",
  },
  secondary: {
    main: "#8C4A00",
    light: "#C46E00",
    dark: "#6E3A00",
    contrastText: "#FFFFFF",
  },
  background: {
    default: "#FFFdf8",
    paper: "#FFFFFF",
    subtle: "#F8F5EE",
  },
  text: {
    primary: "#26211B",
    secondary: "#4E483F",
    muted: "#756E64",
  },
  border: {
    default: "#E4DCCE",
    subtle: "#EDE5D6",
  },
  status: {
    success: "#1B6B43",
    warning: "#8A5A10",
    error: "#8E2A2A",
    info: "#3A3A3A",
  },
} as const;