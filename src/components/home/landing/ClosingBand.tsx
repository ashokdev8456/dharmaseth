import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";
import { homepageCta } from "@/data/home";

export function ClosingBand() {
  return (
    <Box component="section" aria-labelledby="cta-heading" sx={{ py: { xs: 6, md: 8 }, background: "linear-gradient(180deg, #E08800 0%, #C46E00 100%)", color: "#171717" }}>
      <PageContainer>
        <Stack spacing={2.5} sx={{ alignItems: "center", textAlign: "center", maxWidth: 720, mx: "auto" }}>
          <Typography
            id="cta-heading"
            component="h2"
            sx={{
              fontFamily: "var(--font-sans), \"Segoe UI\", sans-serif",
              fontWeight: 600,
              fontSize: "clamp(2rem, 1.2rem + 2vw, 3.25rem)",
              lineHeight: 1.1,
              color: "#171717",
            }}
          >
            {homepageCta.title}
          </Typography>
          <Typography variant="body1" sx={{ color: "#171717", maxWidth: 560 }}>
            {homepageCta.description}
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
            <AppButton
              href={routes.explore}
              variant="contained"
              sx={{
                "&&": { borderRadius: 999, bgcolor: "#FFFFFF", color: "#171717", borderColor: "#FFFFFF" },
                "&&:hover": { bgcolor: "#F8F5EE", borderColor: "#F8F5EE" },
              }}
            >
              Review a gift
            </AppButton>
            <AppButton
              href={routes.monthly}
              variant="contained"
              sx={{
                "&&": { borderRadius: 999, bgcolor: "#171717", color: "#F8F5EE", borderColor: "#171717" },
                "&&:hover": { bgcolor: "#2A241C", borderColor: "#2A241C" },
              }}
            >
              Give monthly
            </AppButton>
          </Stack>
        </Stack>
      </PageContainer>
    </Box>
  );
}
