import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type ErrorStateProps = {
  title?: string;
  message: string;
  action?: React.ReactNode;
};

export function ErrorState({
  title = "Something went wrong",
  message,
  action,
}: ErrorStateProps) {
  return (
    <Stack spacing={2} sx={{ maxWidth: 560, py: 2 }}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Alert severity="error">{message}</Alert>
      {action}
    </Stack>
  );
}
