import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";

export default function CampaignLoading() {
  return (
    <Section>
      <PageContainer>
        <Stack spacing={3}>
          <Skeleton width={180} />
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
            }}
          >
            <Skeleton variant="rounded" sx={{ width: "100%", aspectRatio: "3 / 2", height: "auto" }} />
            <Stack spacing={1.5}>
              <Skeleton width={120} />
              <Skeleton height={48} />
              <Skeleton />
              <Skeleton width="80%" />
            </Stack>
          </Box>
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 320px" },
            }}
          >
            <Stack spacing={1.5}>
              <Skeleton width={220} height={36} />
              <Skeleton />
              <Skeleton />
              <Skeleton width="70%" />
            </Stack>
            <Skeleton variant="rounded" height={220} />
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
