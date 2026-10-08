export const contributionStepIds = ["amount", "details", "review", "payment"] as const;

export type ContributionStepId = (typeof contributionStepIds)[number];

export type ContributionCampaign = {
  slug: string;
  title: string;
  summary: string;
  causeLabel: string;
  imageSrc: string;
  imageAlt: string;
  goalInr: number;
  raisedInr: number;
  sample: boolean;
};

export type ContributionFormData = {
  amount: string;
  fullName: string;
  email: string;
  phone: string;
  anonymous: boolean;
  receiptRequested: boolean;
  message: string;
  consent: boolean;
};

export type ContributionFormErrors = {
  amount?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
};

export const emptyContributionForm: ContributionFormData = {
  amount: "",
  fullName: "",
  email: "",
  phone: "",
  anonymous: false,
  receiptRequested: false,
  message: "",
  consent: false,
};
