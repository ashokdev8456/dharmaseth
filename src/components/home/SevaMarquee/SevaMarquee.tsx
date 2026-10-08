import Box from "@mui/material/Box";
import { sevaAreas } from "@/data/home";

export function SevaMarquee() {
  const names = [...sevaAreas, ...sevaAreas];

  return (
    <Box
      aria-hidden
      sx={{
        overflow: "hidden",
        borderTop: 1,
        borderBottom: 1,
        borderColor: "border.subtle",
        bgcolor: "background.subtle",
        py: 1.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "max-content",
          gap: 4,
          "@keyframes seva-marquee": {
            from: { transform: "translateX(0)" },
            to: { transform: "translateX(-50%)" },
          },
          "@media (prefers-reduced-motion: no-preference)": {
            animation: "seva-marquee 36s linear infinite",
          },
        }}
      >
        {names.map((area, index) => (
          <Box
            key={`${area.id}-${index}`}
            component="span"
            sx={{
              flexShrink: 0,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontSize: 13,
              color: "text.primary",
              "&::before": {
                content: '"•"',
                color: "primary.main",
                mr: 4,
              },
            }}
          >
            {area.title}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
