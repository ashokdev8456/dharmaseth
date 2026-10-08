import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { BeforeAfter } from "@/components/home/SevaAreas/BeforeAfter";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";

export function HeritagePanel() {
  return (
    <Section screen accent tone="subtle" aria-labelledby="heritage-heading">
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            alignItems: "center",
            height: { lg: "100%" },
            minHeight: 0,
            gap: { xs: 3, md: 4, lg: 5 },
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.2fr) minmax(260px, 0.72fr)" },
          }}
        >
          <Stack spacing={2.5}>
            <Typography variant="overline" sx={{ color: "primary.dark", fontSize: "0.82rem" }}>
              Temple and heritage
            </Typography>
            <Typography
              id="heritage-heading"
              variant="h2"
              component="h2"
              sx={{ fontSize: { xs: "2.15rem", md: "2.85rem" }, lineHeight: 1.12 }}
            >
              A worn place, then the same kind of care
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "1.08rem", md: "1.22rem" }, lineHeight: 1.75, maxWidth: 560 }}
            >
              The left side shows a place without proper upkeep. Open the right side to see the same kind of stone cared for and ready for worship. A gift toward heritage covers lamps, small repair, and the daily cost of keeping a sanctum open, so the work of puja can continue.
            </Typography>
            <AppButton href={routes.explore} variant="contained" sx={{ borderRadius: 999, alignSelf: "flex-start" }}>
              Explore seva
            </AppButton>
          </Stack>
          <Box
            sx={{
              overflow: "hidden",
              height: { lg: "100%" },
              maxHeight: { lg: "100%" },
              display: "flex",
              flexDirection: "column",
              borderRadius: "24px",
              border: "1px solid",
              borderColor: "border.subtle",
              bgcolor: "background.paper",
              boxShadow: "0 16px 40px rgba(38, 33, 27, 0.08)",
              p: 1,
            }}
          >
            <Box sx={{ flex: { lg: 1 }, minHeight: 0 }}>
              <BeforeAfter
                beforeSrc="/images/before/before-temple-tower.jpg"
                afterSrc="/images/temple-tower.jpg"
                alt="Overhead view of a South Indian temple tower, shown worn and then kept in good shape. This illustrates a kind of care. It is not a record of one finished repair."
                active
                minHeight={{ xs: 190, sm: 220, md: 280 }}
              />
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ px: 1, pt: 1.25, pb: 0.25, fontSize: "0.95rem" }}>
              Drag the line to compare the two photographs.
            </Typography>
          </Box>
        </Box>
      </PageContainer>
    </Section>
  );
}
