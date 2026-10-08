import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { DrawRule } from "@/components/motion/DrawRule";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  component?: "h1" | "h2" | "h3";
  id?: string;
  index?: string;
  rule?: boolean;
};

const variantFor = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
} as const;

export function SectionHeading({
  eyebrow,
  title,
  description,
  component = "h2",
  id,
  index,
  rule = true,
}: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} sx={{ maxWidth: 720 }}>
      {index ? (
        <Typography component="p" aria-hidden variant="overline" sx={{ color: "text.muted", m: 0 }}>
          {index}
        </Typography>
      ) : null}
      {eyebrow ? (
        <Typography variant="overline" sx={{ color: "primary.dark" }}>
          {eyebrow}
        </Typography>
      ) : null}
      {rule ? <DrawRule /> : null}
      <Typography id={id} variant={variantFor[component]} component={component}>
        {title}
      </Typography>
      {description ? (
        <Typography variant="bodyLarge" color="text.secondary">
          {description}
        </Typography>
      ) : null}
    </Stack>
  );
}
