"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { AppButton } from "@/components/ui/AppButton";
import { campaignPath } from "@/config/routes";
import { campaigns } from "@/data/campaigns";
import { motion } from "@/theme/motion";
import { causeLabel } from "@/utils/campaignFilters";

const slugs = ["night-puja", "shared-meals", "resident-care"];

function prefersFineHover() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function GatheringCards() {
  const items = slugs.flatMap((slug) => {
    const campaign = campaigns.find((item) => item.slug === slug);
    return campaign ? [campaign] : [];
  });

  return (
    <Section
      screen
      accent
      aria-labelledby="gathering-heading"
      sx={{
        bgcolor: "background.default",
        "&&": { height: "auto", minHeight: "auto", overflow: "visible" },
        "&& > .MuiContainer-root": { height: "auto", minHeight: "auto", flex: "none" },
      }}
    >
      <PageContainer>
        <Stack spacing={{ xs: 2.5, lg: 3 }}>
          <SectionHeading
            id="gathering-heading"
            eyebrow="Upcoming seva"
            title="Community events and seva"
            description="A night of worship, a meal for a gathering, and care for a resident sadhu. Open a card to read the seva and review a gift."
            rule={false}
          />
          <Box
            sx={{
              display: "grid",
              gap: 2.5,
              alignItems: "stretch",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            }}
          >
            {items.map((campaign) => (
              <FlipCard key={campaign.slug} campaign={campaign} />
            ))}
          </Box>
        </Stack>
      </PageContainer>
    </Section>
  );
}

function FlipCard({ campaign }: { campaign: (typeof campaigns)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <Box
      onMouseEnter={() => {
        if (prefersFineHover()) setFlipped(true);
      }}
      onMouseLeave={(event) => {
        if (!prefersFineHover()) return;
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
        setFlipped(false);
      }}
      onFocus={() => setFlipped(true)}
      onBlur={(event) => {
        if (event.currentTarget.contains(event.relatedTarget as Node | null)) return;
        setFlipped(false);
      }}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("a")) return;
        if (prefersFineHover()) return;
        setFlipped((value) => !value);
      }}
      sx={{ perspective: "1400px", height: { xs: 520, md: 500 }, cursor: "pointer" }}
    >
      <Box
        sx={{
          position: "relative",
          height: "100%",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          "@media (prefers-reduced-motion: no-preference)": {
            transition: `transform 700ms ${motion.easing.standard}`,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "border.subtle",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: flipped ? "none" : "auto",
          }}
        >
          <Image
            src={campaign.image.src}
            alt={campaign.image.alt}
            fill
            sizes="(min-width: 900px) 33vw, 100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Stack
          spacing={0}
          sx={{
            position: "absolute",
            inset: 0,
            justifyContent: "space-between",
            p: { xs: 2.5, md: 3 },
            borderRadius: "24px",
            border: "1px solid",
            borderColor: "primary.main",
            bgcolor: "background.paper",
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            pointerEvents: flipped ? "auto" : "none",
          }}
        >
          <Stack direction="row" sx={{ justifyContent: "space-between", gap: 1, alignItems: "flex-start" }}>
            <Typography variant="overline" sx={{ color: "primary.dark", letterSpacing: "0.14em" }}>
              {causeLabel(campaign.causeId)}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ flexShrink: 0, pt: 0.5 }}>
              {campaign.endDate ? `Ends ${campaign.endDate}` : "Open"}
            </Typography>
          </Stack>
          <Stack spacing={1.25} sx={{ flex: 1, justifyContent: "center", py: 1.5, minHeight: 0 }}>
            <Typography variant="h3" component="h3" sx={{ fontSize: { xs: "1.45rem", md: "1.6rem" }, lineHeight: 1.2 }}>
              {campaign.title}
            </Typography>
            {campaign.story.split("\n\n").map((paragraph) => (
              <Typography key={paragraph} variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                {paragraph}
              </Typography>
            ))}
            {campaign.objectives?.length ? (
              <Stack component="ul" spacing={0.5} sx={{ m: 0, pl: 2.25 }}>
                {campaign.objectives.map((item) => (
                  <Typography key={item} component="li" variant="body2" sx={{ lineHeight: 1.45 }}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            ) : null}
          </Stack>
          <AppButton href={campaignPath(campaign.slug)} variant="outlined" sx={{ borderRadius: 999, alignSelf: "flex-start", minHeight: 44 }}>
            Read this seva
          </AppButton>
        </Stack>
      </Box>
    </Box>
  );
}
