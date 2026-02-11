export interface FaqEntry {
  question: string;
  answer: string;
}

export const FAQS: FaqEntry[] = [
  {
    question: "What types of financing does Boreal offer?",
    answer: "We provide working capital, equipment financing, and startup funding across Canada."
  },
  {
    question: "How long does approval take?",
    answer: "Approvals can occur within 24–72 hours depending on documentation."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We provide funding options tailored for early-stage and startup businesses."
  }
];
