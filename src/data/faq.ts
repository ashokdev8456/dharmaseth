import { routes } from "@/config/routes";
import type { FAQCategory, FAQItem } from "@/types/faq";

export const faqCategories: FAQCategory[] = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "campaigns", label: "Campaigns" },
  { id: "contributions", label: "One-time gifts" },
  { id: "monthly-giving", label: "Monthly giving" },
  { id: "payments", label: "Payments" },
];

export const faqItems: FAQItem[] = [
  {
    id: "what-is-dharmasethu",
    category: "general",
    question: "What is Dharmasethu?",
    keywords: ["organization", "purpose", "about"],
    answer: [
      {
        type: "text",
        text: "Dharmasethu is a place to read about seva and to review a gift. It connects people who wish to give with temples, teachers, living beings, and those who serve them. A formal history, registrations, and results are not published yet. ",
      },
      { type: "link", text: "Read the purpose", href: routes.about },
      { type: "text", text: "." },
    ],
  },
  {
    id: "live-record",
    category: "general",
    question: "Are the campaigns a live record?",
    keywords: ["sample", "placeholder", "totals"],
    answer: [
      {
        type: "text",
        text: "Each campaign shows the seva, its status, the goal, and the amount recorded for it.",
      },
    ],
  },
  {
    id: "contact",
    category: "general",
    question: "How can I contact someone?",
    keywords: ["email", "help", "phone"],
    answer: [
      {
        type: "text",
        text: "Write to hello@dharmasethu.org. Hours are printed in the footer. ",
      },
      { type: "link", text: "Open the contact page", href: routes.contact },
      { type: "text", text: "." },
    ],
  },
  {
    id: "what-is-a-campaign",
    category: "campaigns",
    question: "What is a campaign?",
    keywords: ["cause", "seva", "appeal"],
    answer: [
      {
        type: "text",
        text: "A campaign is one seva. It shows the story, the status, and, when a goal is set, the amount raised.",
      },
    ],
  },
  {
    id: "find-campaigns",
    category: "campaigns",
    question: "How do I find campaigns?",
    keywords: ["browse", "search", "filter", "explore"],
    answer: [
      { type: "text", text: "Open " },
      { type: "link", text: "Explore", href: routes.explore },
      {
        type: "text",
        text: ". You can search by words and filter by cause, status, and whether a campaign is marked featured.",
      },
    ],
  },
  {
    id: "campaign-status",
    category: "campaigns",
    question: "Can I support a campaign that has ended or not started?",
    keywords: ["upcoming", "completed", "closed", "active"],
    answer: [
      {
        type: "text",
        text: "Only a campaign marked active opens the contribution form. A completed campaign, or one that has not opened, says it is not currently accepting contributions.",
      },
    ],
  },
  {
    id: "more-than-one",
    category: "campaigns",
    question: "Can I support more than one campaign?",
    keywords: ["multiple", "several"],
    answer: [
      {
        type: "text",
        text: "Each review is for one campaign. You can open another active campaign and review a separate gift. Nothing is charged from these pages.",
      },
    ],
  },
  {
    id: "how-to-contribute",
    category: "contributions",
    question: "How can I contribute to a campaign?",
    keywords: ["donate", "give", "support", "gift"],
    answer: [
      { type: "text", text: "Open an active campaign from " },
      { type: "link", text: "Explore", href: routes.explore },
      {
        type: "text",
        text: " and choose support. You review an amount and your details. The last step does not start a payment.",
      },
    ],
  },
  {
    id: "choose-amount",
    category: "contributions",
    question: "Can I choose the amount?",
    keywords: ["custom", "minimum", "rupee", "preset"],
    answer: [
      {
        type: "text",
        text: "Yes. The form offers ₹500, ₹1,000, ₹2,500, ₹5,000, and ₹10,000, or a whole-rupee amount you type. The smallest amount is ₹500.",
      },
    ],
  },
  {
    id: "anonymous",
    category: "contributions",
    question: "Can I contribute anonymously?",
    keywords: ["name", "private", "public"],
    answer: [
      {
        type: "text",
        text: "The form has a choice to keep your name off the public campaign page. This site does not publish a supporter list. The choice stays in the browser for that visit and is not sent anywhere.",
      },
    ],
  },
  {
    id: "required-details",
    category: "contributions",
    question: "What information is asked?",
    keywords: ["email", "phone", "form", "consent"],
    answer: [
      {
        type: "text",
        text: "A name, an email address, and a phone number are required. A short message is optional. You must tick a consent box, which starts unchecked. Those details are not sent to a server.",
      },
    ],
  },
  {
    id: "receipt",
    category: "contributions",
    question: "Will I receive a receipt?",
    keywords: ["tax", "invoice", "email"],
    answer: [
      {
        type: "text",
        text: "No. This site does not create a receipt or send an email. Tax treatment is not stated here, because it has not been defined.",
      },
    ],
  },
  {
    id: "what-is-monthly",
    category: "monthly-giving",
    question: "What is monthly giving?",
    keywords: ["recurring", "subscription", "every month"],
    answer: [
      {
        type: "text",
        text: "Monthly giving is a separate page where you review an amount you would give every month. It does not start a subscription, and it is not a one-time gift to a campaign. ",
      },
      { type: "link", text: "Review a monthly amount", href: routes.monthly },
      { type: "text", text: "." },
    ],
  },
  {
    id: "monthly-versus-once",
    category: "monthly-giving",
    question: "How is a monthly gift different from a one-time gift?",
    keywords: ["frequency", "difference", "once"],
    answer: [
      {
        type: "text",
        text: "A one-time gift is reviewed on a single campaign. A monthly gift is reviewed on its own page and is not tied to one campaign. Neither page takes a payment.",
      },
    ],
  },
  {
    id: "change-or-stop",
    category: "monthly-giving",
    question: "Can I change or stop a monthly contribution?",
    keywords: ["cancel", "pause", "billing"],
    answer: [
      {
        type: "text",
        text: "There is no monthly contribution to change or stop, because this site does not start one. A cancellation policy will be published before launch. ",
      },
      { type: "link", text: "Read the cancellation page", href: routes.cancellation },
      { type: "text", text: "." },
    ],
  },
  {
    id: "when-monthly",
    category: "monthly-giving",
    question: "When would a monthly contribution be taken?",
    keywords: ["date", "debit", "schedule"],
    answer: [
      {
        type: "text",
        text: "That is not defined. No payment or subscription runs from this site, so no date is charged.",
      },
    ],
  },
  {
    id: "payment-taken",
    category: "payments",
    question: "Does this site take a payment?",
    keywords: ["pay", "checkout", "card", "bank"],
    answer: [
      {
        type: "text",
        text: "No. After you review a one-time or monthly gift, the payment step says that no payment was started. It does not charge a card, a bank account, or a UPI app.",
      },
    ],
  },
  {
    id: "payment-methods",
    category: "payments",
    question: "Which payment methods can I use?",
    keywords: ["method", "provider", "upi"],
    answer: [
      {
        type: "text",
        text: "None yet. A payment provider has not been connected, so no method is offered.",
      },
    ],
  },
  {
    id: "after-payment",
    category: "payments",
    question: "What happens after I continue to payment?",
    keywords: ["success", "confirmation", "after"],
    answer: [
      {
        type: "text",
        text: "The page stops and tells you that no payment was started. There is no gift confirmation, receipt, or email.",
      },
    ],
  },
];
