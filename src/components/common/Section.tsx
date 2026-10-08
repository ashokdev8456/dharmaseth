import Box, { type BoxProps } from "@mui/material/Box";

type SectionProps = BoxProps & {
  tone?: "default" | "subtle";
  /** Fill the viewport below the fixed header, one section per screen. */
  screen?: boolean;
  /** Saffron edge and wash, used on the homepage so every band shares the orange theme. */
  accent?: boolean;
};

const screenFrame = {
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: { xs: "calc(100svh - 64px)", lg: "calc(100svh - 72px)" },
  height: { lg: "calc(100svh - 72px)" },
  py: { xs: 2, lg: 2 },
  scrollSnapAlign: "start",
  overflow: { lg: "clip" },
  "& > .MuiContainer-root": {
    flex: { lg: "1 1 auto" },
    minHeight: { lg: 0 },
    height: { lg: "100%" },
    display: { lg: "flex" },
    flexDirection: { lg: "column" },
    justifyContent: { lg: "center" },
  },
};

export function Section({
  children,
  tone = "default",
  screen = false,
  accent = false,
  component = "section",
  sx,
  ...props
}: SectionProps) {
  const sectionSpacing = screen
    ? screenFrame
    : {
        py: { xs: 4, sm: 5, md: 6, lg: 6 },
      };

  const orangeBand = accent
    ? {
        "&&": {
          boxSizing: "border-box",
          borderTop: "4px solid #FF9F00",
          bgcolor: tone === "subtle" ? "#FFF6E5" : "#FFFDF8",
          backgroundImage:
            tone === "subtle"
              ? "linear-gradient(180deg, rgba(255, 159, 0, 0.28) 0px, rgba(255, 159, 0, 0) 128px)"
              : "linear-gradient(180deg, rgba(255, 159, 0, 0.16) 0px, rgba(255, 159, 0, 0) 128px)",
        },
      }
    : null;

  return (
    <Box
      component={component}
      sx={[
        sectionSpacing,
        { bgcolor: tone === "subtle" ? "background.subtle" : "transparent" },
        orangeBand,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      {children}
    </Box>
  );
}
