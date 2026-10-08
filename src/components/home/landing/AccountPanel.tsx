import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PolicyOutlinedIcon from "@mui/icons-material/PolicyOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { liftCardSx } from "@/components/home/landing/cardMotion";
import { routes } from "@/config/routes";
import { trustContent, trustPoints } from "@/data/home";
import type { TrustIconName } from "@/types/home";

const icons: Record<TrustIconName, typeof InfoOutlinedIcon> = {
  purpose: VisibilityOutlinedIcon,
  contact: MailOutlinedIcon,
  policies: ArticleOutlinedIcon,
  plain: InfoOutlinedIcon,
};

const hrefFor: Record<string, string> = {
  purpose: routes.about,
  contact: routes.contact,
  policies: routes.privacy,
  plain: routes.faq,
};

const pages = [
  { label: "About", href: routes.about, Icon: InfoOutlinedIcon },
  { label: "Privacy", href: routes.privacy, Icon: PolicyOutlinedIcon },
  { label: "Terms", href: routes.terms, Icon: GavelOutlinedIcon },
  { label: "Cancellation", href: routes.cancellation, Icon: ArticleOutlinedIcon },
  { label: "FAQs", href: routes.faq, Icon: HelpOutlinedIcon },
];

export function AccountPanel() {
  return (
    <Section screen accent aria-labelledby="trust-heading" sx={{ bgcolor: "background.default" }}>
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 3, md: 4, lg: 5 },
            alignItems: { xs: "start", lg: "center" },
            height: { lg: "100%" },
            minHeight: 0,
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(0, 1.1fr)" },
          }}
        >
          <Stack spacing={2}>
            <Typography variant="overline" sx={{ color: "primary.dark" }}>
              {trustContent.eyebrow}
            </Typography>
            <Typography id="trust-heading" variant="h2" component="h2">
              {trustContent.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {trustContent.description}
            </Typography>
            <Stack
              spacing={1}
              sx={{
                mt: 1,
                p: 2,
                borderRadius: "18px",
                border: "1px solid",
                borderColor: "border.subtle",
                bgcolor: "background.paper",
              }}
            >
              <Typography variant="overline" sx={{ color: "primary.dark" }}>
                Pages you can open
              </Typography>
              {pages.map(({ label, href, Icon }) => (
                <Link key={href} href={href} style={{ textDecoration: "none", color: "inherit" }}>
                  <Stack
                    direction="row"
                    spacing={1.25}
                    sx={{
                      alignItems: "center",
                      minHeight: 44,
                      px: 1,
                      borderRadius: "12px",
                      "&:hover": { bgcolor: "background.subtle" },
                    }}
                  >
                    <Box
                      aria-hidden
                      sx={{
                        width: 36,
                        height: 36,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        borderRadius: "10px",
                        color: "primary.dark",
                        bgcolor: "background.subtle",
                      }}
                    >
                      <Icon fontSize="small" />
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600 }}>
                      {label}
                    </Typography>
                  </Stack>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Stack spacing={1.5}>
            {trustPoints.map((point) => {
              const Icon = icons[point.icon];
              return (
                <Link key={point.id} href={hrefFor[point.id] ?? routes.about} style={{ textDecoration: "none", color: "inherit" }}>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{
                    alignItems: "center",
                    p: 2,
                    borderRadius: "18px",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    bgcolor: "background.paper",
                    ...liftCardSx,
                  }}
                >
                  <Box
                    aria-hidden
                    sx={{
                      width: 40,
                      height: 40,
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      color: "primary.dark",
                      bgcolor: "background.subtle",
                    }}
                  >
                    <Icon />
                  </Box>
                  <Stack spacing={0.25}>
                    <Typography variant="h3" component="h3">
                      {point.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {point.description}
                    </Typography>
                  </Stack>
                </Stack>
                </Link>
              );
            })}
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
