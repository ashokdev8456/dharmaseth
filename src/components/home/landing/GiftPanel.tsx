import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/common/PageContainer";
import { Section } from "@/components/common/Section";
import { AppButton } from "@/components/ui/AppButton";
import { routes } from "@/config/routes";
import { monthlyImpact } from "@/data/monthlyGiving";
import { motion } from "@/theme/motion";
import { formatInr } from "@/utils/money";

const amounts = [500, 1000, 2500, 5000, 10000];
const ease = motion.easing.standard;

export function GiftPanel() {
  return (
    <Section screen accent tone="subtle" aria-labelledby="gift-heading">
      <PageContainer>
        <Box
          sx={{
            display: "grid",
            width: "100%",
            maxWidth: 1040,
            mx: "auto",
            overflow: "hidden",
            borderRadius: "32px",
            border: "1px solid",
            borderColor: "border.subtle",
            bgcolor: "background.paper",
            boxShadow: "0 28px 70px rgba(38, 33, 27, 0.18)",
            gridTemplateColumns: { xs: "1fr", md: "minmax(230px, 0.82fr) minmax(0, 1.18fr)" },
          }}
        >
          <Box sx={{ position: "relative", minHeight: { xs: 190, md: "100%" }, overflow: "hidden" }}>
            <Image
              src="/images/home/sanctum-lamps.jpg"
              alt="Oil lamps lining a carved stone temple sanctum, with people seated before the shrine."
              fill
              sizes="(min-width: 900px) 420px, 100vw"
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(23, 23, 23, 0.72) 0%, rgba(23, 23, 23, 0.05) 55%)",
              }}
            />
            <Typography
              variant="overline"
              sx={{
                position: "absolute",
                left: 20,
                right: 20,
                bottom: 18,
                color: "#FFFDF8",
                letterSpacing: "0.16em",
              }}
            >
              Lamps of the sanctum
            </Typography>
          </Box>
          <Stack spacing={2.25} sx={{ p: { xs: 2.5, md: 4 }, justifyContent: "center" }}>
            <Typography variant="overline" sx={{ color: "primary.dark", textAlign: "center", letterSpacing: "0.16em" }}>
              Review a gift
            </Typography>
            <Typography
              id="gift-heading"
              variant="h2"
              component="h2"
              sx={{ textAlign: "center", fontSize: { xs: "2rem", md: "2.45rem" }, lineHeight: 1.1 }}
            >
              Choose an amount
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: "center", lineHeight: 1.6 }}>
              Select an amount, then review the gift. Monthly giving repeats. A one-time gift is chosen on the seva page.
            </Typography>
            <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.25, justifyContent: "center" }}>
              {amounts.map((amount, index) => {
                const selected = index === 2;
                return (
                  <Link key={amount} href={routes.monthly} style={{ textDecoration: "none" }}>
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        px: 2.75,
                        minHeight: 52,
                        display: "inline-flex",
                        alignItems: "center",
                        borderRadius: 999,
                        fontWeight: 700,
                        fontSize: "1.05rem",
                        border: "1px solid",
                        borderColor: selected ? "#C46E00" : "border.default",
                        bgcolor: "background.subtle",
                        color: "#171717",
                        boxShadow: selected ? "0 10px 24px rgba(255, 159, 0, 0.28)" : "none",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: selected ? "100%" : 0,
                          bgcolor: "primary.main",
                          zIndex: 0,
                        },
                        "& > span": { position: "relative", zIndex: 1 },
                        "&:hover": {
                          borderColor: "#C46E00",
                          color: "#171717",
                          transform: "translateY(-4px)",
                          boxShadow: "0 14px 28px rgba(163, 86, 0, 0.22)",
                          "&::before": { height: "100%" },
                        },
                        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
                          transition: `transform ${motion.duration.standard}ms ${ease}, box-shadow ${motion.duration.standard}ms ${ease}, border-color ${motion.duration.fast}ms ${ease}`,
                          "&::before": {
                            transition: `height ${motion.duration.emphasis}ms ${ease}`,
                          },
                        },
                        "@media (prefers-reduced-motion: reduce)": {
                          "&:hover": { transform: "none" },
                        },
                      }}
                    >
                      <span>{formatInr(amount)}</span>
                    </Box>
                  </Link>
                );
              })}
            </Stack>
            <Box
              sx={{
                display: "grid",
                gap: 1.25,
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
              }}
            >
              {monthlyImpact.levels.map((level) => (
                <Stack
                  key={level.amount}
                  spacing={0.5}
                  sx={{
                    p: 1.5,
                    borderRadius: "16px",
                    bgcolor: "background.subtle",
                    border: "1px solid",
                    borderColor: "border.subtle",
                    minHeight: 44,
                  }}
                >
                  <Typography variant="label" sx={{ color: "primary.dark" }}>
                    {formatInr(level.amount)}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, lineHeight: 1.35 }}>
                    {level.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.45 }}>
                    {level.description}
                  </Typography>
                </Stack>
              ))}
            </Box>
            <AppButton
              href={routes.explore}
              variant="contained"
              sx={{
                borderRadius: 999,
                alignSelf: "center",
                minHeight: 52,
                px: 3.5,
                fontSize: "1.05rem",
              }}
            >
              Review a gift
            </AppButton>
          </Stack>
        </Box>
      </PageContainer>
    </Section>
  );
}
