import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import type { SevaArea } from "@/types/home";
import { motion } from "@/theme/motion";

type SevaPosterCardProps = {
  area: SevaArea;
  image: string;
  imageAlt: string;
  index: number;
};

export function SevaPosterCard({ area, image, imageAlt, index }: SevaPosterCardProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <Box
      sx={{
        height: "100%",
        "& > a": {
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          height: "100%",
          minHeight: { xs: 300, md: 340 },
          overflow: "hidden",
          color: "#F8F5EE",
          textDecoration: "none",
          border: "1px solid",
          borderColor: "divider",
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 3,
          },
        },
        "& img": {
          transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
        },
        "& .card-action": {
          display: "inline-flex",
          transition: `transform ${motion.duration.fast}ms ${motion.easing.standard}`,
        },
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "& > a:hover": { borderColor: "primary.main" },
          "& > a:hover img": { transform: "scale(1.04)" },
          "& > a:hover .card-action": { transform: "translateX(4px)" },
        },
      }}
    >
      <Link href={area.href ?? "/explore"}>
        <Image src={image} alt={imageAlt} fill sizes="(min-width: 900px) 50vw, 100vw" style={{ objectFit: "cover" }} />
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(23,19,15,0.94) 0%, rgba(23,19,15,0.72) 42%, rgba(23,19,15,0.16) 100%)",
          }}
        />
        <Stack spacing={1} sx={{ position: "relative", zIndex: 1, p: { xs: 2.5, md: 3.5 } }}>
          <Typography
            component="p"
            aria-hidden
            sx={{ color: "#E8C99A", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.16em" }}
          >
            {number}
          </Typography>
          <Typography variant="h3" component="h3" sx={{ color: "#F8F5EE" }}>
            {area.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(248,245,238,0.88)", maxWidth: "42ch" }}>
            {area.description}
          </Typography>
          <Typography
            className="card-action"
            variant="label"
            sx={{
              alignItems: "center",
              gap: 0.75,
              mt: 0.5,
              color: "#E8C99A",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Explore
            <ArrowForwardIcon aria-hidden sx={{ fontSize: 16 }} />
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
}
