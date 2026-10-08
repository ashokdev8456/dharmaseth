import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import { CampaignProgress } from "@/components/campaigns/CampaignProgress";
import { campaignPath } from "@/config/routes";
import type { CampaignListingItem } from "@/types/domain";
import { campaignStatusLabel, causeLabel } from "@/utils/campaignFilters";
import { motion } from "@/theme/motion";

const statusBadge = {
  active: { bgcolor: "#E7F6EC", color: "#146C36", borderColor: "#146C36" },
  upcoming: { bgcolor: "#EAF2FB", color: "#1A4F8B", borderColor: "#1A4F8B" },
  completed: { bgcolor: "#F4F1EA", color: "#4E483F", borderColor: "#C9C0B2" },
} as const;

const badgeBase = {
  height: 28,
  borderRadius: 999,
  border: "1px solid",
  fontWeight: 600,
  fontSize: "0.75rem",
  "& .MuiChip-label": { px: 1.25 },
} as const;

type CampaignCardProps = {
  campaign: CampaignListingItem;
  eager?: boolean;
  titleComponent?: "h2" | "h3";
};

export function CampaignCard({ campaign, eager = false, titleComponent = "h2" }: CampaignCardProps) {
  const supporters =
    campaign.donorCount === 1 ? "1 supporter" : `${campaign.donorCount} supporters`;

  return (
    <Box
      sx={{
        height: "100%",
        "& > a": {
          display: "block",
          height: "100%",
          color: "inherit",
          textDecoration: "none",
          borderRadius: "22px",
          "&:focus-visible": {
            outline: "2px solid",
            outlineColor: "primary.dark",
            outlineOffset: 3,
          },
        },
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "& > a:hover .MuiCard-root": {
            borderColor: "primary.main",
            boxShadow: "0 16px 36px rgba(163, 86, 0, 0.14)",
            transform: "translateY(-4px)",
          },
          "& > a:hover .card-media img": {
            transform: "scale(1.04)",
          },
          "& > a:hover .card-action": {
            transform: "translateX(4px)",
          },
          "& > a:hover .card-badges .badge": {
            transform: "translateY(-4px)",
          },
          "& > a:hover .card-badges .badge-featured": {
            bgcolor: "#FF9F00",
            color: "#171717",
            borderColor: "#C46E00",
          },
        },
      }}
    >
      <Link href={campaignPath(campaign.slug)}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "22px",
            border: "1px solid",
            borderColor: campaign.featured ? "primary.main" : "border.subtle",
            boxShadow: "none",
            "@media (prefers-reduced-motion: no-preference)": {
              transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}, border-color ${motion.duration.fast}ms ${motion.easing.standard}, box-shadow ${motion.duration.standard}ms ${motion.easing.standard}`,
            },
            "& .card-media img": {
              "@media (prefers-reduced-motion: no-preference)": {
                transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
              },
            },
            "& .card-action": {
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              "@media (prefers-reduced-motion: no-preference)": {
                transition: `transform ${motion.duration.fast}ms ${motion.easing.standard}`,
              },
            },
            "& .card-badges .badge": {
              "@media (prefers-reduced-motion: no-preference)": {
                transition: `transform ${motion.duration.standard}ms ${motion.easing.standard}, background-color ${motion.duration.standard}ms ${motion.easing.standard}, color ${motion.duration.fast}ms ${motion.easing.standard}, border-color ${motion.duration.fast}ms ${motion.easing.standard}`,
              },
            },
            "& .card-badges .badge-status": {
              "@media (prefers-reduced-motion: no-preference)": {
                transitionDelay: "40ms",
              },
            },
            "& .card-badges .badge-featured": {
              "@media (prefers-reduced-motion: no-preference)": {
                transitionDelay: "80ms",
              },
            },
          }}
        >
          <Box className="card-media" sx={{ position: "relative", height: { xs: 128, sm: 136 }, flexShrink: 0 }}>
            <Image
              src={campaign.image.src}
              alt={campaign.image.alt}
              fill
              {...(eager ? { loading: "eager" as const } : {})}
              sizes="(min-width: 1200px) 280px, (min-width: 600px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1, flexGrow: 1, p: 2, "&:last-child": { pb: 2 } }}>
            <Stack spacing={1} sx={{ flex: "1 1 auto" }}>
            <Stack className="card-badges" spacing={0.75} sx={{ alignItems: "flex-start" }}>
              <Chip
                className="badge badge-cause"
                size="small"
                label={causeLabel(campaign.causeId)}
                sx={{ ...badgeBase, bgcolor: "#FFF6E5", color: "#171717", borderColor: "#FF9F00" }}
              />
              <Stack direction="row" spacing={0.75}>
                <Chip
                  className="badge badge-status"
                  size="small"
                  label={campaignStatusLabel(campaign.status)}
                  sx={{ ...badgeBase, ...statusBadge[campaign.status] }}
                />
                {campaign.featured ? (
                  <Chip
                    className="badge badge-featured"
                    size="small"
                    label="Featured"
                    sx={{ ...badgeBase, bgcolor: "#FFFDF8", color: "#171717", borderColor: "#C46E00" }}
                  />
                ) : null}
              </Stack>
            </Stack>
            <Typography
              variant="h3"
              component={titleComponent}
              sx={{
                overflowWrap: "break-word",
                fontSize: "1.05rem",
                lineHeight: 1.3,
                minHeight: "2.6em",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {campaign.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                minHeight: "2.7em",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {campaign.summary}
            </Typography>
            {campaign.location ? (
              <Typography variant="body2" color="text.secondary">
                {campaign.location}
              </Typography>
            ) : null}
            </Stack>
            <CampaignProgress raised={campaign.raisedInr} goal={campaign.goalInr} />
            <Typography variant="body2" color="text.secondary">
              {supporters}
            </Typography>
            <Typography className="card-action" variant="label" sx={{ color: "primary.dark" }}>
              View campaign
              <ArrowForwardIcon aria-hidden sx={{ fontSize: 18 }} />
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
}
