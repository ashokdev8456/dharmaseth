import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";
import { motion } from "@/theme/motion";

type TrustIndicatorProps = {
  index: number;
  title: string;
  description: string;
  icon: ReactNode;
};

export function TrustIndicator({ index, title, description, icon }: TrustIndicatorProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Stack
      spacing={1.5}
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
      <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", justifyContent: "space-between" }}>
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
        <Box
          aria-hidden
          sx={{
            width: 36,
            height: 36,
            display: "grid",
            placeItems: "center",
            color: "primary.dark",
            bgcolor: "background.subtle",
          }}
        >
          {icon}
        </Box>
      </Stack>
      <Typography variant="h3" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
        {description}
      </Typography>
    </Stack>
  );
}
