export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  notice: string;
  sections: LegalSection[];
};
