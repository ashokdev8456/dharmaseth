"use client";

import { useMemo, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { FAQCategoryFilter } from "@/components/faq/FAQCategoryFilter";
import { FAQSearch } from "@/components/faq/FAQSearch";
import { faqCategories } from "@/data/faq";
import type { FAQFilter, FAQItem } from "@/types/faq";
import { filterFaqItems } from "@/utils/faq";

type FAQExplorerProps = {
  items: FAQItem[];
};

export function FAQExplorer({ items }: FAQExplorerProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<FAQFilter>("all");
  const results = useMemo(() => filterFaqItems(items, search, category), [items, search, category]);
  const trimmed = search.trim();
  const filtered = category !== "all" || trimmed.length > 0;
  const categoryLabel = faqCategories.find((entry) => entry.id === category)?.label ?? "All";

  function reset() {
    setSearch("");
    setCategory("all");
  }

  const countLabel = filtered
    ? `Showing ${results.length} of ${items.length} questions`
    : `${items.length} questions`;

  const emptyDescription = trimmed
    ? `Nothing matches "${trimmed}"${category !== "all" ? ` in ${categoryLabel}` : ""}. Try another keyword, another category, or clear the filters.`
    : `Nothing is listed under ${categoryLabel}. Clear the filters to see every question.`;

  return (
    <Stack spacing={3} sx={{ mt: { xs: 4, md: 5 } }}>
      <FAQSearch value={search} onChange={setSearch} onClear={() => setSearch("")} />
      <FAQCategoryFilter value={category} onChange={setCategory} />
      <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ alignItems: { sm: "center" }, justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {countLabel}
        </Typography>
        {filtered && results.length > 0 ? (
          <Button variant="text" onClick={reset}>
            Clear filters
          </Button>
        ) : null}
      </Stack>
      {results.length > 0 ? (
        <FAQAccordion items={results} />
      ) : (
        <Stack spacing={1.5} sx={{ maxWidth: 560, py: 2 }}>
          <Typography variant="h3" component="h3">
            No questions found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {emptyDescription}
          </Typography>
          <Button variant="contained" onClick={reset} sx={{ width: { xs: "100%", sm: "auto" }, alignSelf: { sm: "flex-start" } }}>
            Clear filters
          </Button>
        </Stack>
      )}
    </Stack>
  );
}
