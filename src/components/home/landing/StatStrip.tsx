import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { CountUp } from "@/components/home/landing/CountUp";
import { impactContent, impactStats } from "@/data/home";

export function StatStrip() {
  return (
    <Section aria-labelledby="impact-heading" tone="subtle" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Typography id="impact-heading" variant="overline" sx={{ color: "primary.dark" }}>
          {impactContent.eyebrow}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            mt: 2,
            gridTemplateColumns: { xs: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
          }}
        >
          {impactStats.map((stat) => (
            <Stack
              key={stat.id}
              spacing={0.5}
              sx={{
                p: 2,
                height: "100%",
                borderRadius: "18px",
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "border.subtle",
              }}
            >
              <CountUp value={stat.value} />
              <Typography variant="h3" component="h3">
                {stat.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.description}
              </Typography>
            </Stack>
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2, maxWidth: 720 }}>
          {impactContent.description}
        </Typography>
      </PageContainer>
    </Section>
  );
}
