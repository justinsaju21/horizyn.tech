export interface FAQ {
  question: string;
  answer:   string;
}

export const faqs: FAQ[] = [
  {
    question: "What is custom software development?",
    answer:
      "Building software entirely from scratch around your specific needs and workflow, rather than adapting an existing generic product. You get something that fits your business exactly — not a subscription tool you work around.",
  },
  {
    question: "How is your AI integration different from other companies?",
    answer:
      "Most companies add AI as a layer on top of existing software — a chatbot or a plugin. Horizon Tech builds AI directly into the core codebase with access to your actual data and workflows, enabling deeper automation, predictive analytics, and performance insights that generic AI tools can't achieve.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most custom projects take three to six months, depending on complexity and scope. We provide a detailed timeline during the planning phase — before any work begins.",
  },
  {
    question: "Who owns the code after the project is delivered?",
    answer:
      "You do. Clients receive full source code and documentation on delivery. Zero vendor lock-in. You can maintain or extend it independently, or work with any developer.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes. Horizon Tech signs NDAs to protect client confidentiality as standard practice.",
  },
  {
    question: "What if we need to change requirements mid-way?",
    answer:
      "Scope changes are accommodated. Timeline and cost are adjusted accordingly and agreed with you before proceeding. No surprises.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Horizon Tech works with clients globally and adapts communication and scheduling accordingly.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Horizon Tech partners with trusted vendors for ongoing maintenance and security and connects clients with them directly.",
  },
];

export const homeFaqs = faqs.slice(0, 4);
