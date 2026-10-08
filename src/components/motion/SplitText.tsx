import Box from "@mui/material/Box";
import Typography, { type TypographyProps } from "@mui/material/Typography";

type SplitTextProps = {
  text: string;
  id?: string;
  component?: "h1" | "h2" | "h3" | "p";
  variant?: TypographyProps["variant"];
  delay?: number;
  color?: string;
};

export function SplitText({
  text,
  id,
  component = "h2",
  variant = "h2",
  delay = 0,
  color,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Typography id={id} variant={variant} component={component} sx={{ color }}>
      {words.map((word, index) => (
        <Box
          key={`${word}-${index}`}
          component="span"
          sx={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", pb: "0.06em" }}
        >
          <Box
            component="span"
            sx={{
              display: "inline-block",
              "@keyframes word-rise": {
                from: { transform: "translateY(110%)" },
                to: { transform: "none" },
              },
              "@media (prefers-reduced-motion: no-preference)": {
                animation: `word-rise 640ms cubic-bezier(0.2, 0, 0, 1) ${delay + index * 60}ms both`,
              },
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </Box>
        </Box>
      ))}
    </Typography>
  );
}
