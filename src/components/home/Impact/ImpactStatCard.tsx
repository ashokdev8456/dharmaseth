import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ImpactStat } from "@/types/home";
import { motion } from "@/theme/motion";

type ImpactStatCardProps = {
  stat: ImpactStat;
  index: number;
};

function formatStatValue(value: ImpactStat["value"]) {
  if (typeof value === "number") {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return value;
}

export function ImpactStatCard({ stat, index }: ImpactStatCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Stack
      spacing={1}
      sx={{
        height: "100%",
        p: { xs: 2.5, md: 3 },
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        transition: `border-color ${motion.duration.fast}ms ${motion.easing.standard}, transform ${motion.duration.standard}ms ${motion.easing.standard}`,
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "&:hover": {
            borderColor: "primary.main",
            transform: "translateY(-4px)",
          },
        },
      }}
    >
      <Typography
        component="p"
        aria-hidden
        sx={{
          color: "primary.dark",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.16em",
        }}
      >
        {number}
      </Typography>
      <Typography variant="h2" component="p">
        {formatStatValue(stat.value)}
        {stat.suffix}
      </Typography>
      <Typography variant="h3" component="h3">
        {stat.label}
      </Typography>
      {stat.description ? (
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {stat.description}
        </Typography>
      ) : null}
    </Stack>
  );
}
