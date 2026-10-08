import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import type { FAQItem } from "@/types/faq";

type FAQAccordionProps = {
  items: readonly FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return items.map((item) => (
    <Accordion
      key={item.id}
      disableGutters
      elevation={0}
      sx={{
        mb: 1.25,
        overflow: "hidden",
        borderRadius: "16px !important",
        border: "1px solid",
        borderColor: "border.subtle",
        borderLeft: "4px solid #FF9F00",
        bgcolor: "#FFFDF8",
        "&:before": { display: "none" },
        "&.Mui-expanded": { bgcolor: "#FFF6E5" },
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "primary.dark" }} />} sx={{ px: 2, minHeight: 56 }}>
        <Typography component="span" variant="bodyLarge" sx={{ fontWeight: 700, pr: 2, overflowWrap: "anywhere" }}>
          {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 2, pt: 0, pb: 2.5 }}>
        <Typography variant="body1" color="text.secondary">
          {item.answer.map((part, index) =>
            part.type === "link" ? (
              <Link key={`${item.id}-${index}`} component={NextLink} href={part.href}>
                {part.text}
              </Link>
            ) : (
              <span key={`${item.id}-${index}`}>{part.text}</span>
            ),
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  ));
}
