import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { faqCategories } from "@/data/faq";
import type { FAQFilter } from "@/types/faq";

type FAQCategoryFilterProps = {
  value: FAQFilter;
  onChange: (value: FAQFilter) => void;
};

export function FAQCategoryFilter({ value, onChange }: FAQCategoryFilterProps) {
  return (
    <Box role="group" aria-label="Question categories" sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
      {faqCategories.map((category) => {
        const selected = value === category.id;
        return (
          <Button
            key={category.id}
            aria-pressed={selected}
            variant={selected ? "contained" : "outlined"}
            onClick={() => onChange(category.id)}
          >
            {category.label}
          </Button>
        );
      })}
    </Box>
  );
}
