import type { ThemeOptions } from "@mui/material/styles";
import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";

function focusRing(color: string) {
  return {
    "&:focus-visible": {
      outline: `2px solid ${color}`,
      outlineOffset: 2,
    },
  };
}

export const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        minHeight: "100vh",
      },
      "a, button, input, textarea, select, [role='button']": {
        scrollMarginTop: 96,
      },
      ".MuiBreadcrumbs-root a": {
        textDecoration: "underline",
        textUnderlineOffset: "0.15em",
      },
      "@media (prefers-reduced-motion: reduce)": {
        "*, *::before, *::after": {
          animationDuration: "0.01ms !important",
          animationIterationCount: "1 !important",
          transitionDuration: "0.01ms !important",
          scrollBehavior: "auto !important",
        },
      },
    },
  },
  MuiStack: {
    defaultProps: {
      useFlexGap: true,
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      fontSizeSmall: { fontSize: 20 },
      fontSizeMedium: { fontSize: 24 },
      fontSizeLarge: { fontSize: 32 },
      root: {
        "&&.MuiSvgIcon-colorPrimary": {
          color: colors.primary.dark,
        },
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        "&&.MuiTypography-colorPrimary": {
          color: colors.primary.dark,
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.medium,
        minHeight: 44,
        paddingInline: 20,
        textTransform: "none",
        fontWeight: 600,
        transition: theme.transitions.create(["background-color", "box-shadow", "border-color", "color", "transform"], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
        "@media (prefers-reduced-motion: no-preference)": {
          "&:active": {
            transform: "scale(0.98)",
          },
        },
        ...focusRing(theme.palette.primary.dark),
        "&.MuiButton-contained.MuiButton-colorPrimary": {
          backgroundColor: colors.primary.main,
          color: colors.primary.contrastText,
          border: `2px solid ${colors.brand[700]}`,
          "&:hover": {
            backgroundColor: colors.brand[600],
            borderColor: colors.brand[800],
          },
        },
        "&.MuiButton-outlined.MuiButton-colorPrimary": {
          color: colors.primary.dark,
          borderColor: colors.primary.dark,
          "&:hover": {
            color: colors.brand[900],
            borderColor: colors.brand[900],
            backgroundColor: colors.brand[50],
          },
        },
        "&.MuiButton-text.MuiButton-colorPrimary": {
          color: colors.primary.dark,
          "&:hover": {
            color: colors.brand[900],
            backgroundColor: colors.brand[50],
          },
        },
      }),
      sizeSmall: {
        minHeight: 36,
        paddingInline: 14,
      },
      sizeLarge: {
        minHeight: 48,
        paddingInline: 24,
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        minWidth: 44,
        minHeight: 44,
        ...focusRing(theme.palette.primary.dark),
      }),
    },
  },
  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.medium,
        backgroundColor: theme.palette.background.paper,
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.border.default,
        },
        "&.Mui-focused": {
          outline: `2px solid ${theme.palette.primary.dark}`,
          outlineOffset: 2,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderWidth: 1.5,
        },
        "& input::placeholder, & textarea::placeholder": {
          color: theme.palette.text.muted,
          opacity: 1,
        },
      }),
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        fontWeight: 600,
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        marginLeft: 0,
      },
    },
  },
  MuiCheckbox: {
    defaultProps: { color: "primary" },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.dark,
        "&.Mui-checked": { color: theme.palette.primary.dark },
        ...focusRing(theme.palette.primary.dark),
      }),
    },
  },
  MuiRadio: {
    defaultProps: { color: "primary" },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.dark,
        "&.Mui-checked": { color: theme.palette.primary.dark },
        ...focusRing(theme.palette.primary.dark),
      }),
    },
  },
  MuiSwitch: {
    defaultProps: { color: "primary" },
    styleOverrides: {
      switchBase: ({ theme }) => ({
        "&.Mui-checked": {
          color: theme.palette.primary.dark,
        },
      }),
    },
  },
  MuiCard: {
    defaultProps: {
      elevation: 0,
      variant: "outlined",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.large,
        backgroundColor: theme.palette.background.paper,
        borderColor: theme.palette.border.subtle,
      }),
    },
  },
  MuiPaper: {
    defaultProps: {
      elevation: 0,
    },
    styleOverrides: {
      rounded: {
        borderRadius: radii.large,
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      fullWidth: true,
      maxWidth: "xs",
    },
    styleOverrides: {
      paper: {
        borderRadius: radii.large,
      },
    },
  },
  MuiAppBar: {
    defaultProps: {
      color: "inherit",
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.border.subtle}`,
        boxShadow: "none",
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
        borderRight: `1px solid ${theme.palette.border.subtle}`,
      }),
    },
  },
  MuiChip: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: radii.small,
        fontWeight: 600,
        "&.MuiChip-deletable": {
          minHeight: 40,
        },
        ...focusRing(theme.palette.primary.dark),
        "&.MuiChip-outlined.MuiChip-colorPrimary": {
          color: theme.palette.primary.dark,
          borderColor: theme.palette.primary.dark,
        },
      }),
    },
  },
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: 2,
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: ({ theme }) => ({
        textTransform: "none",
        fontWeight: 600,
        ...focusRing(theme.palette.primary.dark),
      }),
    },
  },
  MuiAccordion: {
    defaultProps: {
      disableGutters: true,
      elevation: 0,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: "transparent",
        borderTop: `1px solid ${theme.palette.border.subtle}`,
        "&:before": { display: "none" },
        "&:last-of-type": {
          borderBottom: `1px solid ${theme.palette.border.subtle}`,
        },
      }),
    },
  },
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: radii.medium,
        alignItems: "center",
      },
    },
  },
  MuiLink: {
    defaultProps: {
      underline: "always",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.primary.dark,
        textUnderlineOffset: "0.15em",
        "&:hover": { color: colors.brand[900] },
        ...focusRing(theme.palette.primary.dark),
      }),
    },
  },
};
