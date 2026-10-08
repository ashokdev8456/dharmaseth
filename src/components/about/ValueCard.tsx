import type { ElementType } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { motion } from "@/theme/motion";

type ValueCardProps = {
  title: string;
  description: string;
  icon: ElementType;
};

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
  return (
    <Stack
      spacing={1.5}
      sx={{
        height: "100%",
        p: { xs: 3, md: 3.5 },
        borderRadius: 1.5,
        border: 1,
        borderColor: "border.subtle",
        bgcolor: "background.paper",
        boxShadow: "none",
        transition: `border-color ${motion.duration.standard}ms ${motion.easing.standard}, transform ${motion.duration.standard}ms ${motion.easing.standard}`,
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "&:hover": { borderColor: "primary.main", transform: "translateY(-5px)" },
          "&:hover h3": { color: "primary.dark" },
        },
      }}
    >
      <Box
        className="value-icon"
        aria-hidden
        sx={{
          width: 44,
          height: 44,
          display: "grid",
          placeItems: "center",
          borderRadius: 1,
          color: "primary.dark",
          bgcolor: "background.subtle",
        }}
      >
        <Icon />
      </Box>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Stack>
  );
}
