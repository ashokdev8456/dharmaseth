import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FlareOutlinedIcon from "@mui/icons-material/FlareOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import ParkOutlinedIcon from "@mui/icons-material/ParkOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import TempleHinduOutlinedIcon from "@mui/icons-material/TempleHinduOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import Link from "next/link";
import type { SevaArea, SevaIconName } from "@/types/home";
import { motion } from "@/theme/motion";

const icons: Record<SevaIconName, typeof TempleHinduOutlinedIcon> = {
  temple: TempleHinduOutlinedIcon,
  learning: MenuBookOutlinedIcon,
  beings: ParkOutlinedIcon,
  service: VolunteerActivismOutlinedIcon,
  meals: RestaurantOutlinedIcon,
  events: FlareOutlinedIcon,
};

type SevaAreaCardProps = {
  area: SevaArea;
};

export function SevaAreaCard({ area }: SevaAreaCardProps) {
  const Icon = icons[area.icon];
  const card = (
    <Card
      sx={{
        height: "100%",
        transition: `border-color ${motion.duration.fast}ms ${motion.easing.standard}, box-shadow ${motion.duration.fast}ms ${motion.easing.standard}, transform ${motion.duration.standard}ms ${motion.easing.standard}`,
        "& .seva-icon": {
          transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}`,
        },
        "& .seva-action": {
          display: "inline-flex",
          transition: `transform ${motion.duration.fast}ms ${motion.easing.standard}`,
        },
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, height: "100%" }}>
        <Box
          className="seva-icon"
          sx={{
            width: 44,
            height: 44,
            display: "grid",
            placeItems: "center",
            borderRadius: 1,
            bgcolor: "background.subtle",
            color: "primary.dark",
          }}
        >
          <Icon aria-hidden />
        </Box>
        <Typography variant="h3" component="h3">
          {area.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {area.description}
        </Typography>
        {area.href ? (
          <Typography
            className="seva-action"
            variant="label"
            sx={{ display: "inline-flex", alignItems: "center", gap: 0.5, color: "primary.dark" }}
          >
            Explore
            <ArrowForwardIcon aria-hidden sx={{ fontSize: 18 }} />
          </Typography>
        ) : null}
      </CardContent>
    </Card>
  );

  if (!area.href) {
    return card;
  }

  return (
    <Box
      sx={{
        height: "100%",
        "& > a": {
          display: "block",
          height: "100%",
          color: "inherit",
          textDecoration: "none",
          borderRadius: 1.5,
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 3,
          },
        },
        "@media (hover: hover)": {
          "& > a:hover .MuiCard-root": {
            borderColor: "primary.main",
            boxShadow: 1,
            transform: "translateY(-4px)",
          },
          "& > a:hover .seva-icon": {
            transform: "translateY(-2px)",
          },
          "& > a:hover .seva-action": {
            transform: "translateX(4px)",
          },
        },
        "@media (prefers-reduced-motion: reduce)": {
          "& .seva-icon, & .seva-action, & .MuiCard-root": {
            transition: "none",
          },
          "& > a:hover .MuiCard-root, & > a:hover .seva-icon, & > a:hover .seva-action": {
            transform: "none",
          },
        },
      }}
    >
      <Link href={area.href}>{card}</Link>
    </Box>
  );
}
