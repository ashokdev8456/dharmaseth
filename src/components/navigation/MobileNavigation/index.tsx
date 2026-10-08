import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { Logo } from "@/components/layout/Logo";
import { NavigationLink } from "@/components/navigation/NavigationItem";
import { headerAction, mainNavigation } from "@/config/navigation";

type MobileNavigationProps = {
  open: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileNavigation({ open, pathname, onClose }: MobileNavigationProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{ display: { lg: "none" } }}
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: 360 },
            maxWidth: "100%",
          },
        },
      }}
    >
      <Stack sx={{ minHeight: "100%" }}>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            pt: "env(safe-area-inset-top)",
            minHeight: "calc(64px + env(safe-area-inset-top))",
            borderBottom: 1,
            borderColor: "border.subtle",
          }}
        >
          <Logo size="small" />
          <IconButton aria-label="Close menu" onClick={onClose} edge="end">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Box component="nav" id="mobile-navigation" aria-label="Primary" sx={{ px: 1, py: 2 }}>
          <Stack>
            {mainNavigation.map((item) => (
              <NavigationLink
                key={item.href}
                item={item}
                pathname={pathname}
                layout="drawer"
                onNavigate={onClose}
              />
            ))}
          </Stack>
        </Box>
        <Box sx={{ mt: "auto", p: 2, pb: "calc(16px + env(safe-area-inset-bottom))" }}>
          <Button
            component={Link}
            href={headerAction.href}
            variant="contained"
            fullWidth
            onClick={onClose}
          >
            {headerAction.label}
          </Button>
        </Box>
      </Stack>
    </Drawer>
  );
}
