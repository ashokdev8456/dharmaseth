import Box from "@mui/material/Box";
import { PageTransition } from "@/components/motion/PageTransition";

type MainContentProps = {
  children: React.ReactNode;
};

export function MainContent({ children }: MainContentProps) {
  return (
    <Box
      component="main"
      id="main-content"
      tabIndex={-1}
      sx={{ flexGrow: 1, outline: "none", minWidth: 0 }}
    >
      <PageTransition>{children}</PageTransition>
    </Box>
  );
}
