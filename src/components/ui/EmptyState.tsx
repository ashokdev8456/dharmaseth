import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type EmptyStateProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <Stack role="status" spacing={1.5} sx={{ maxWidth: 480, py: 4 }}>
      {icon}
      <Typography variant="h4" component="h2">
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      ) : null}
      {action}
    </Stack>
  );
}
