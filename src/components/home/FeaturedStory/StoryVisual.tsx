import Box from "@mui/material/Box";
import Image from "next/image";
import { featuredStory } from "@/data/home";

export function StoryVisual() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: { xs: "4 / 3", md: "4 / 5" },
        borderRadius: 1.5,
        border: 1,
        borderColor: "rgba(248, 245, 238, 0.2)",
      }}
    >
      <Image
        src={featuredStory.image}
        alt={featuredStory.imageAlt}
        fill
        sizes="(min-width: 900px) 42vw, 100vw"
        style={{ objectFit: "cover" }}
      />
    </Box>
  );
}
