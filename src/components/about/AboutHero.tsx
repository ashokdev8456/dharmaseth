import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";
import { aboutHero } from "@/data/about";
import { motion, parallaxSx, visualEnterSx } from "@/theme/motion";

function rise(delay: number) {
  return {
    "@keyframes about-rise": {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "none" },
    },
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `about-rise ${motion.duration.cinematic}ms ${motion.easing.standard} ${delay}ms both`,
    },
  };
}

export function AboutHero() {
  return (
    <Box
      component="section"
      aria-labelledby="about-heading"
      sx={{ bgcolor: "background.subtle", pt: { xs: 4, md: 8 }, pb: { xs: 8, md: 12 } }}
    >
      <PageContainer>
        <Breadcrumbs
          aria-label="Breadcrumb"
          sx={{
            mb: { xs: 4, md: 6 },
            ...rise(0),
            "& .MuiBreadcrumbs-li, & .MuiBreadcrumbs-separator": {
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "text.muted",
            },
            "& a": {
              color: "text.muted",
              textDecoration: "none",
              "&:hover": { color: "primary.dark" },
              "&:focus-visible": {
                outline: "2px solid",
                outlineColor: "primary.dark",
                outlineOffset: 2,
              },
            },
          }}
        >
          <Link href={routes.home}>Home</Link>
          <Typography component="span" sx={{ color: "text.primary", fontSize: "inherit", letterSpacing: "inherit" }}>
            About
          </Typography>
        </Breadcrumbs>
        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            gap: { xs: 5, md: 10 },
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(280px, 0.9fr)" },
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: "primary.dark", ...rise(140) }}>
              {aboutHero.eyebrow}
            </Typography>
            <Typography
              id="about-heading"
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 500,
                fontSize: "clamp(2.75rem, 1.4rem + 3vw, 4.5rem)",
                lineHeight: 1.05,
                textWrap: "balance",
                ...rise(280),
              }}
            >
              {aboutHero.title}
            </Typography>
            <Typography variant="bodyLarge" color="text.secondary" sx={{ maxWidth: 520, ...rise(440) }}>
              {aboutHero.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={rise(600)}>
              <AppButton
                href={aboutHero.primary.href}
                variant="contained"
                trailingArrow
                sx={{ width: { xs: "100%", sm: "auto" } }}
              >
                {aboutHero.primary.label}
              </AppButton>
              <AppButton href={aboutHero.secondary.href} variant="outlined" sx={{ width: { xs: "100%", sm: "auto" } }}>
                {aboutHero.secondary.label}
              </AppButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              ...visualEnterSx(160),
              position: "relative",
              overflow: "hidden",
              aspectRatio: { xs: "4 / 3", md: "4 / 5" },
              borderRadius: 1.5,
              border: 1,
              borderColor: "border.subtle",
              bgcolor: "background.paper",
              "& img": {
                transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
              },
              "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                "&:hover": { borderColor: "primary.main" },
                "&:hover img": { animation: "none", transform: "scale(1.03)" },
              },
            }}
          >
            <Box sx={{ position: "absolute", inset: { xs: 0, md: "-6% 0" }, ...parallaxSx() }}>
              <Image
                src={aboutHero.image}
                alt={aboutHero.imageAlt}
                fill
                priority
                sizes="(min-width: 900px) 42vw, 100vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
