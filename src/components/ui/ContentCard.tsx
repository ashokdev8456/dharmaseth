import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { MediaFrame } from "@/components/common/MediaFrame";
import type { MediaRatio } from "@/theme/media";
import { motion } from "@/theme/motion";

type ContentCardProps = {
  title: string;
  description?: string;
  meta?: React.ReactNode;
  action?: React.ReactNode;
  media?: React.ReactNode;
  mediaRatio?: MediaRatio;
  titleComponent?: "h2" | "h3";
};

export function ContentCard({
  title,
  description,
  meta,
  action,
  media,
  mediaRatio = "card",
  titleComponent = "h3",
}: ContentCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        transition: `border-color ${motion.duration.fast}ms ${motion.easing.standard}, box-shadow ${motion.duration.fast}ms ${motion.easing.standard}`,
        "& .card-media": {
          overflow: "hidden",
        },
        "& .card-media img": {
          transformOrigin: "center",
          transition: `transform ${motion.duration.emphasis}ms ${motion.easing.standard}`,
        },
        "& .card-action": {
          display: "inline-flex",
          transition: `transform ${motion.duration.fast}ms ${motion.easing.standard}`,
        },
        "@media (hover: hover) and (prefers-reduced-motion: no-preference)": {
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: 1,
          },
          "&:hover .card-media img": {
            transform: "scale(1.04)",
          },
          "&:hover .card-action": {
            transform: "translateX(4px)",
          },
        },
        "@media (hover: hover) and (prefers-reduced-motion: reduce)": {
          "&:hover": {
            borderColor: "primary.main",
            boxShadow: 1,
          },
        },
      }}
    >
      {media ? (
        <Box className="card-media">
          <MediaFrame ratio={mediaRatio}>{media}</MediaFrame>
        </Box>
      ) : null}
      <CardContent sx={{ flexGrow: 1 }}>
        {meta ? (
          <Typography variant="label" color="text.secondary" sx={{ display: "block", mb: 1 }}>
            {meta}
          </Typography>
        ) : null}
        <Typography variant="h5" component={titleComponent} gutterBottom>
          {title}
        </Typography>
        {description ? (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        ) : null}
      </CardContent>
      {action ? (
        <CardActions sx={{ px: 2, pb: 2 }}>
          <Box className="card-action">{action}</Box>
        </CardActions>
      ) : null}
    </Card>
  );
}
