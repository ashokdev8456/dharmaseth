import Box from "@mui/material/Box";

export function DrawRule() {
  return (
    <Box
      component="svg"
      viewBox="0 0 72 2"
      aria-hidden
      sx={{
        width: 72,
        height: 2,
        display: "block",
        color: "primary.main",
        "& line": {
          stroke: "currentColor",
          strokeWidth: 2,
          strokeDasharray: 72,
          strokeDashoffset: 0,
        },
        "@media (prefers-reduced-motion: no-preference)": {
          "& line": {
            strokeDashoffset: 72,
            animation: "rule-draw 800ms cubic-bezier(0.2, 0, 0, 1) both",
            animationTimeline: "view()",
            animationRange: "entry 0% cover 35%",
          },
        },
        "@keyframes rule-draw": {
          to: { strokeDashoffset: 0 },
        },
      }}
    >
      <line x1="0" y1="1" x2="72" y2="1" />
    </Box>
  );
}
