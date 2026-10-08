import Box from "@mui/material/Box";
import { mediaRatio, type MediaRatio } from "@/theme/media";

type MediaFrameProps = {
  ratio?: MediaRatio;
  children: React.ReactNode;
};

export function MediaFrame({ ratio = "card", children }: MediaFrameProps) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: mediaRatio[ratio],
        bgcolor: "background.subtle",
      }}
    >
      {children}
    </Box>
  );
}
