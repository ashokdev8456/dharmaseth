import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { PageContainer } from "@/components/common/PageContainer";
import { Reveal } from "@/components/common/Reveal";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TrustIndicator } from "@/components/home/Trust/TrustIndicator";
import { trustContent, trustPoints } from "@/data/home";
import type { TrustIconName } from "@/types/home";

const trustIcons: Record<TrustIconName, ReactNode> = {
  purpose: <VisibilityOutlinedIcon />,
  contact: <MailOutlinedIcon />,
  policies: <ArticleOutlinedIcon />,
  plain: <InfoOutlinedIcon />,
};

export function Trust() {
  return (
    <Section aria-labelledby="trust-heading">
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, lg: 4 },
            alignItems: "start",
            gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.85fr) minmax(0, 1.15fr)" },
          }}
        >
        <Reveal>
          <SectionHeading
            id="trust-heading"
            eyebrow={trustContent.eyebrow}
            title={trustContent.title}
            description={trustContent.description}
            rule={false}
          />
        </Reveal>
        <Box
          sx={{
            display: "grid",
            gap: 2,
            alignItems: "stretch",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            "& > *": { height: "100%" },
          }}
        >
          {trustPoints.map((point, index) => (
            <Reveal key={point.id} delay={index * 90}>
              <TrustIndicator
                index={index}
                title={point.title}
                description={point.description}
                icon={trustIcons[point.icon]}
              />
            </Reveal>
          ))}
        </Box>
        </Box>
      </PageContainer>
    </Section>
  );
}
