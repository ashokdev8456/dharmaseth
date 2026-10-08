import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { AppButton } from "@/components/ui/AppButton";
import { monthlyHero } from "@/data/monthlyGiving";
import { enterSx, visualEnterSx } from "@/theme/motion";

export function MonthlyGivingHero() {
  return (
    <Box
      component="section"
      aria-labelledby="monthly-heading"
      sx={{
        boxSizing: "border-box",
        pt: { xs: 3, md: 4 },
        pb: { xs: 3, md: 4 },
        borderBottom: "4px solid #FF9F00",
        background: "linear-gradient(180deg, rgba(255, 159, 0, 0.16) 0px, rgba(255, 253, 248, 0) 140px)",
      }}
    >
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
            gap: { xs: 2.5, md: 4 },
            alignItems: "center",
          }}
        >
          <Stack spacing={2.5} sx={enterSx(0)}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              {monthlyHero.eyebrow}
            </Typography>
            <Typography id="monthly-heading" variant="h1" component="h1">
              {monthlyHero.title}
            </Typography>
            <Typography variant="bodyLarge" color="text.secondary" sx={{ maxWidth: 560 }}>
              {monthlyHero.description}
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button href="#monthly-form" variant="contained" sx={{ width: { xs: "100%", sm: "auto" } }}>
                {monthlyHero.primaryCta}
              </Button>
              <AppButton href={monthlyHero.secondaryCta.href} variant="outlined" sx={{ width: { xs: "100%", sm: "auto" } }}>
                {monthlyHero.secondaryCta.label}
              </AppButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              ...visualEnterSx(80),
              position: "relative",
              overflow: "hidden",
              aspectRatio: { xs: "16 / 9", md: "4 / 3" },
              maxHeight: { md: 420 },
              borderRadius: "24px",
              border: 1,
              borderColor: "border.subtle",
              bgcolor: "background.subtle",
            }}
          >
            <Image
              src={monthlyHero.image}
              alt={monthlyHero.imageAlt}
              fill
              priority
              sizes="(min-width: 900px) 42vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Box>
      </PageContainer>
    </Box>
  );
}
