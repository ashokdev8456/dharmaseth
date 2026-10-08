import Box from "@mui/material/Box";
import { zIndex as layers } from "@/theme/zIndex";

export function SkipLink() {
  return (
    <Box
      component="a"
      href="#main-content"
      sx={{
        position: "absolute",
        left: 8,
        top: -48,
        zIndex: layers.tooltip,
        px: 2,
        py: 1,
        borderRadius: 1,
        bgcolor: "primary.main",
        color: "primary.contrastText",
        textDecoration: "none",
        "&:focus": {
          top: 8,
          outline: "2px solid",
          outlineColor: "background.paper",
          outlineOffset: 2,
        },
      }}
    >
      Skip to main content
    </Box>
  );
}
