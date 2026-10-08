import Link from "next/link";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import { SectionHeading } from "@/components/common/SectionHeading";
import { routes } from "@/config/routes";

export function ExploreHero() {
  return (
    <Box component="header">
      <Breadcrumbs aria-label="Breadcrumb" sx={{ mb: 1.5, "& a": { color: "text.secondary" } }}>
        <Link href={routes.home}>Home</Link>
        <Typography color="text.primary">Explore</Typography>
      </Breadcrumbs>
      <SectionHeading
        component="h1"
        eyebrow="Seva"
        title="Explore seva"
        description="Browse seva by cause and status. Open one to read the purpose and review a gift."
        rule={false}
      />
    </Box>
  );
}
