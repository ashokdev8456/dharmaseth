import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";

export default function MonthlyLoading() {
  return (
    <Section>
      <PageContainer>
        <Stack spacing={3}>
          <Skeleton width={160} />
          <Skeleton height={56} width="70%" />
          <Skeleton width="80%" />
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.1fr) minmax(0, 0.9fr)" },
            }}
          >
            <Skeleton variant="rounded" height={220} />
            <Skeleton variant="rounded" sx={{ aspectRatio: "4 / 3", height: "auto" }} />
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
