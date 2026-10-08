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
    <Accordion key={item.id}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: { xs: 0, sm: 1 }, minHeight: 48 }}>
        <Typography component="span" variant="bodyLarge" sx={{ fontWeight: 600, pr: 2, overflowWrap: "anywhere" }}>
          {item.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: { xs: 0, sm: 1 }, pt: 0, pb: 2.5 }}>
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
