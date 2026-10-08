import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";

export default function AboutLoading() {
  return (
    <Section>
      <PageContainer>
        <Stack spacing={3}>
          <Skeleton width={140} />
          <Skeleton width={120} />
          <Skeleton height={48} width="60%" />
          <Skeleton width="75%" />
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.05fr) minmax(0, 0.95fr)" },
            }}
          >
            <Skeleton variant="rounded" height={48} width={180} />
            <Skeleton variant="rounded" sx={{ aspectRatio: "4 / 3", height: "auto" }} />
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
