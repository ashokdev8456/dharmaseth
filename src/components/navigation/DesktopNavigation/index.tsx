import Stack from "@mui/material/Stack";
import { mainNavigation } from "@/config/navigation";
import { NavigationLink } from "@/components/navigation/NavigationItem";

type DesktopNavigationProps = {
  pathname: string;
};

export function DesktopNavigation({ pathname }: DesktopNavigationProps) {
  return (
    <Stack
      component="nav"
      aria-label="Primary"
      direction="row"
      spacing={0.5}
      sx={{
        display: { xs: "none", lg: "flex" },
        alignItems: "center",
        flexGrow: 1,
        justifyContent: "flex-end",
      }}
    >
      {mainNavigation.map((item) => (
        <NavigationLink key={item.href} item={item} pathname={pathname} />
      ))}
    </Stack>
  );
}
