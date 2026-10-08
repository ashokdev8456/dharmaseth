import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";

export function PageSkeleton() {
  return (
    <PageContainer>
      <Stack spacing={2} sx={{ maxWidth: 720, py: { xs: 6, md: 10 } }}>
        <Skeleton width={120} />
        <Skeleton height={48} />
        <Skeleton />
        <Skeleton width="80%" />
      </Stack>
    </PageContainer>
  );
}
