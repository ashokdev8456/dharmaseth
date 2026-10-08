import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { monthlyImpact } from "@/data/monthlyGiving";
import { formatMonthlyAmount } from "@/utils/monthlyGiving";

export function MonthlyImpact() {
  return (
    <Section accent aria-labelledby="monthly-impact" sx={{ py: { xs: 3, md: 4 } }}>
      <PageContainer>
        <Reveal>
          <Stack spacing={2.5}>
            <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
              <Typography variant="overline" sx={{ color: "primary.dark" }}>
                {monthlyImpact.eyebrow}
              </Typography>
              <Typography id="monthly-impact" variant="h2" component="h2">
                {monthlyImpact.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {monthlyImpact.description}
              </Typography>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gap: 1.5,
                gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              }}
            >
              {monthlyImpact.levels.map((level) => (
                <Stack
                  key={level.amount}
                  spacing={1}
                  sx={{
                    p: 2,
                    borderRadius: "22px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                  }}
                >
                  <Typography variant="h3" component="h3">
                    {formatMonthlyAmount(level.amount)}
                  </Typography>
                  <Typography variant="body1">{level.title}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {level.description}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
        </Reveal>
      </PageContainer>
    </Section>
  );
}
