import type { LegalDocument } from "@/types/legal";

const reviewNotice =
  "This page is a draft for legal review. It is not an approved policy, and it does not create rights or obligations.";

export const privacyDocument: LegalDocument = {
  title: "Privacy",
  summary:
    "This note describes what the site does with information today. It will be replaced when an approved privacy policy is ready.",
  notice: reviewNotice,
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "Dharmasethu is a public website for reading about seva and reviewing a gift. There is no account, no admin area, and no server that stores what you type.",
      ],
    },
    {
      id: "information-you-type",
      title: "Information you type",
      paragraphs: [
        "On an open campaign, or on the monthly giving page, the form can ask for a name, an email address, a phone number, an optional message, and an amount. You can also mark a name as not for a public list, and you can mark that you would like a receipt.",
        "Those answers stay in the browser for that visit. They are not sent to a server. Refreshing the page or leaving it clears them. The site does not keep a copy.",
      ],
    },
    {
      id: "what-is-not-collected",
      title: "What is not collected",
      paragraphs: ["The site does not currently run any of the following:"],
      items: [
        "An account or a login",
        "A contact form that submits a message",
        "Analytics or advertising tools",
        "A payment form for a card, a bank account, or a UPI app",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "This site does not set its own analytics or marketing cookies, and it does not show a cookie banner, because no tracker is connected.",
        "Your browser may still store what it needs to load the page. That is separate from a tracking program run by this site.",
      ],
    },
    {
      id: "other-services",
      title: "Other services",
      paragraphs: [
        "No payment provider, email service, or analytics service is connected. A mailto link opens whatever mail program you already use. It does not send the message through this website.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "Because the contribution form is not sent anywhere, this site does not hold a contribution record to protect. No security certification is claimed.",
      ],
    },
    {
      id: "retention",
      title: "How long information is kept",
      paragraphs: [
        "Nothing from the contribution form is stored on a server, so no retention period is in effect. A future policy will have to say what happens if storage is added later.",
      ],
    },
    {
      id: "your-choices",
      title: "Your choices",
      paragraphs: [
        "You can leave a form unfinished. You can refresh the page to clear what you typed. There is no account page for downloading or deleting a profile, because no profile is created.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "The site does not ask for a date of birth and does not open accounts. It is not offered as a service for children. A formal children's policy has not been written.",
      ],
    },
    {
      id: "changes",
      title: "Changes",
      paragraphs: [
        "This draft will be replaced before it is treated as policy. The page does not show a review date, because none has been approved.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "Write to hello@dharmasethu.org, the address printed in the footer.",
      ],
    },
  ],
};

export const termsDocument: LegalDocument = {
  title: "Terms",
  summary:
    "This note describes how the site behaves today. It will be replaced when approved terms are ready. It is not a contract.",
  notice: reviewNotice,
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      paragraphs: [
        "These pages let a visitor read about seva and review a one-time or monthly gift. They do not complete a payment.",
      ],
    },
    {
      id: "using-the-site",
      title: "Using the site",
      paragraphs: [
        "Campaign pages describe seva and show the goal and the amount recorded for that seva.",
      ],
    },
    {
      id: "campaigns",
      title: "Campaigns",
      paragraphs: [
        "A campaign page describes one seva. Only a campaign marked active opens the contribution form. A campaign that is completed, or that has not opened, says it is not currently accepting contributions.",
      ],
    },
    {
      id: "one-time-gifts",
      title: "One-time gifts",
      paragraphs: [
        "An active campaign lets you review an amount of at least ₹500, in whole rupees, and the details listed on the form. A consent box is shown and starts unchecked.",
        "Continuing past the review does not start a payment. The page says that no payment was started.",
      ],
    },
    {
      id: "monthly-giving",
      title: "Monthly giving",
      paragraphs: [
        "The monthly page is a separate review. It is not tied to one campaign, and it does not start a subscription. No billing date is set, and there is no account where a monthly gift can be changed or stopped, because none is created.",
      ],
    },
    {
      id: "payments",
      title: "Payments",
      paragraphs: [
        "No payment provider is connected. The site does not charge a card, a bank account, or a UPI app. It does not add a fee, send a receipt, or confirm that a gift was received.",
        "A checkbox for a receipt only records that wish in the browser. Nothing is emailed.",
      ],
    },
    {
      id: "refunds-and-tax",
      title: "Refunds, cancellation, and tax",
      paragraphs: [
        "No refund period, cancellation window, or tax treatment is defined. Do not treat a reviewed amount as tax-deductible. The cancellation page is a draft, not an approved rule.",
      ],
    },
    {
      id: "name-and-pages",
      title: "Name and pages",
      paragraphs: [
        "The name Dharmasethu is used on this website. A trademark registration, a copyright assignment, and a legal entity name are not published here.",
      ],
    },
    {
      id: "changes",
      title: "Changes",
      paragraphs: [
        "This draft will be replaced before it is treated as terms. The page does not show a review date, because none has been approved.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "Write to hello@dharmasethu.org, the address printed in the footer.",
      ],
    },
  ],
};

export const cancellationDocument: LegalDocument = {
  title: "Cancellation",
  summary:
    "There is no monthly gift to cancel, because this site does not start a subscription. An approved cancellation policy has not been written.",
  notice: reviewNotice,
  sections: [
    {
      id: "current-state",
      title: "What can be cancelled today",
      paragraphs: [
        "The monthly giving page lets you review an amount. It does not bill a card, a bank account, or a UPI app, and it does not create a subscription.",
        "There is no dashboard, billing date, or cancellation button, because there is no recurring payment to stop.",
      ],
    },
    {
      id: "one-time-review",
      title: "A one-time review",
      paragraphs: [
        "Leaving a campaign contribution page, or refreshing it, clears the amount and details you typed. Nothing has been charged, so there is no payment to reverse.",
      ],
    },
    {
      id: "later",
      title: "When a policy exists",
      paragraphs: [
        "If a real recurring payment is added later, the rules for stopping it will have to be written and approved. This page does not guess those rules.",
      ],
    },
  ],
};
