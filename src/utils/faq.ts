import { faqCategories } from "@/data/faq";
import type { FAQFilter, FAQItem } from "@/types/faq";

export function faqAnswerText(item: FAQItem) {
  return item.answer.map((part) => part.text).join("");
}

export function filterFaqItems(items: readonly FAQItem[], search: string, category: FAQFilter) {
  const query = search.trim().toLowerCase();

  return items.filter((item) => {
    if (category !== "all" && item.category !== category) {
      return false;
    }
    if (!query) {
      return true;
    }

    const categoryLabel = faqCategories.find((entry) => entry.id === item.category)?.label ?? "";
    const haystack = [item.question, faqAnswerText(item), categoryLabel, ...(item.keywords ?? [])]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}
