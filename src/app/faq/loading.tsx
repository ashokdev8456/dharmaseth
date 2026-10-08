import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";

export default function FaqLoading() {
  return (
    <Section>
      <PageContainer>
        <Stack spacing={2}>
          <Skeleton width={120} />
          <Skeleton width="70%" height={48} />
          <Skeleton width="85%" />
          <Skeleton variant="rounded" height={56} />
          <Skeleton width="100%" height={44} />
          <Skeleton width="90%" />
          <Skeleton width="80%" />
        </Stack>
      </PageContainer>
    </Section>
  );
}
