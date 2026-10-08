import { createTheme, type Shadows } from "@mui/material/styles";
import { breakpoints } from "@/theme/breakpoints";
import { colors } from "@/theme/colors";
import { components } from "@/theme/components";
import { motion } from "@/theme/motion";
import { radii } from "@/theme/radii";
import { shadows } from "@/theme/shadows";
import { spacingUnit } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { zIndex } from "@/theme/zIndex";
import "@/theme/types";

function buildShadows(): Shadows {
  const levels = Array.from({ length: 25 }, (_, index) => {
    if (index === 0) {
      return shadows.none;
    }

    if (index === 1) {
      return shadows.subtle;
    }

    if (index === 2) {
      return shadows.medium;
    }

    return shadows.strong;
  });

  // MUI requires a 25-level tuple. This scale only uses four shadows.
  return levels as unknown as Shadows;
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
    success: { main: colors.status.success },
    warning: { main: colors.status.warning },
    error: { main: colors.status.error },
    info: { main: colors.status.info },
    divider: colors.border.default,
    border: colors.border,
  },
  typography,
  spacing: spacingUnit,
  shape: {
    borderRadius: radii.medium,
  },
  breakpoints: {
    values: breakpoints.values,
  },
  shadows: buildShadows(),
  zIndex: {
    appBar: zIndex.header,
    drawer: zIndex.drawer,
    modal: zIndex.modal,
    snackbar: zIndex.notification,
    tooltip: zIndex.tooltip,
  },
  transitions: {
    duration: {
      shortest: motion.duration.instant,
      shorter: motion.duration.fast,
      short: motion.duration.standard,
      standard: motion.duration.standard,
      complex: motion.duration.reveal,
      enteringScreen: motion.duration.standard,
      leavingScreen: motion.duration.fast,
    },
    easing: {
      easeInOut: motion.easing.standard,
      easeOut: motion.easing.standard,
      easeIn: motion.easing.exit,
      sharp: motion.easing.exit,
    },
  },
  components,
});
