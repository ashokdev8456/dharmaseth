import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Reveal } from "@/components/common/Reveal";
import type { StoryMilestone } from "@/types/about";

type StoryTimelineProps = {
  milestones: readonly StoryMilestone[];
};

export function StoryTimeline({ milestones }: StoryTimelineProps) {
  return (
    <Stack component="ol" spacing={0} sx={{ m: 0, p: 0, listStyle: "none" }}>
      {milestones.map((milestone, index) => (
        <Stack key={milestone.id} component="li" direction="row" spacing={{ xs: 2, md: 3 }} sx={{ alignItems: "stretch" }}>
          <Box aria-hidden sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: 36, flexShrink: 0 }}>
            <Typography variant="overline" sx={{ color: "primary.dark", lineHeight: 1 }}>
              {String(index + 1).padStart(2, "0")}
            </Typography>
            <Box
              sx={{
                width: 9,
                height: 9,
                mt: 1,
                borderRadius: "50%",
                bgcolor: "primary.main",
              }}
            />
            {index < milestones.length - 1 ? (
              <Box
                sx={{
                  width: "1px",
                  flexGrow: 1,
                  minHeight: 24,
                  my: 0.75,
                  bgcolor: "primary.main",
                  transformOrigin: "top",
                  "@keyframes timeline-grow": {
                    from: { transform: "scaleY(0)" },
                    to: { transform: "scaleY(1)" },
                  },
                  "@media (prefers-reduced-motion: no-preference)": {
                    animation: "timeline-grow linear both",
                    animationTimeline: "view()",
                    animationRange: "entry 10% cover 70%",
                  },
                }}
              />
            ) : null}
          </Box>
          <Reveal delay={index * 80}>
            <Stack spacing={0.75} sx={{ pb: index < milestones.length - 1 ? { xs: 4, md: 6 } : 0, minWidth: 0 }}>
              <Typography variant="h3" component="h3">
                {milestone.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {milestone.description}
              </Typography>
            </Stack>
          </Reveal>
        </Stack>
      ))}
    </Stack>
  );
}
