import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";

export default function GiveLoading() {
  return (
    <Section>
      <PageContainer>
        <Stack spacing={3}>
          <Skeleton width={220} height={40} />
          <Skeleton width="70%" />
          <Box
            sx={{
              display: "grid",
              gap: 3,
              gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1fr) 320px" },
            }}
          >
            <Stack spacing={2}>
              <Skeleton width={280} />
              <Skeleton variant="rounded" height={48} />
              <Skeleton variant="rounded" height={56} />
              <Skeleton variant="rounded" height={44} width={160} />
            </Stack>
            <Skeleton variant="rounded" height={280} />
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}
