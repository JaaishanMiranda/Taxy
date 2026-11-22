// All landing-page copy in one place, so the team can edit text without touching layout.
// Anything in [square brackets] is a placeholder to replace before submission.
// The 30-day retention period follows NFR4, where it is still marked as a placeholder ([30]).

export const site = {
  name: "Tax Assistant",
  tagline: "Tax preparation, without the chaos.",
  nav: [
    { href: "#features", label: "Features" },
    { href: "#walkthrough", label: "Walkthrough" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#privacy", label: "Privacy" },
    { href: "#faq", label: "FAQ" },
  ],
};

/** Scrolling strip under the hero: only things the project actually commits to. */
export const coverage = [
  "Invoices",
  "Receipts",
  "Bank statements",
  "WHT certificates",
  "Resident individuals",
  "Year of assessment 2025/26",
  "Every figure linked to its source",
  "You approve the final report",
];

export const steps = [
  {
    title: "Set up your profile",
    text: "Add your taxpayer details and describe your freelance work.",
  },
  {
    title: "Upload your documents",
    text: "Bring invoices, receipts, bank statements and WHT certificates into one place.",
  },
  {
    title: "Review extracted records",
    text: "Check what was read from each document and resolve any validation flags.",
  },
  {
    title: "Understand your obligations",
    text: "Ask questions in plain language and see the guidance that applies to you.",
  },
  {
    title: "Review your estimate",
    text: "See draft calculations, the assumptions behind them and anything still open.",
  },
  {
    title: "Approve your report",
    text: "Approve the reviewed report. If your data changes later, it goes back to draft.",
  },
];

export const privacy = [
  {
    title: "Identifiers stay with us",
    text: "Names, NIC numbers, phone numbers and account numbers are removed before anything is sent to an AI service.",
  },
  {
    title: "Deleted after 30 days",
    text: "Uploaded documents are deleted automatically after 30 days, and you can delete all of your data at any time.",
  },
  {
    title: "Every figure is traceable",
    text: "Each number in your report links back to the documents it came from and the version of the tax rules used.",
  },
  {
    title: "Rules, not guesses",
    text: "Tax calculations come from versioned rules, not from an AI model, so the same inputs always give the same result.",
  },
];

export const team = [
  { name: "Jaaishan" },
  { name: "Sivesh" },
  { name: "Divakar" },
  { name: "Kruththika" },
  { name: "Thirisha" },
];

export const faqs = [
  {
    q: "Who is Tax Assistant for?",
    a: "Freelancers and self-employed people in Sri Lanka who are resident individuals and want to get their records in order before filing. Accountants can also use it to review a client's organised, evidence-linked records.",
  },
  {
    q: "Which tax year does it cover?",
    a: "Year of assessment 2025/26. Companies, partnerships, VAT, SSCL and capital gains are outside its scope.",
  },
  {
    q: "Does it file my tax return?",
    a: "No. It helps you prepare an organised, reviewed report. You (or your accountant) still file the return yourself.",
  },
  {
    q: "Is the tax estimate calculated by AI?",
    a: "No. AI helps read documents and explain concepts, but the calculation itself uses versioned tax rules. The same inputs and rule version always give the same figures, and each one links to its source.",
  },
  {
    q: "What happens to my documents?",
    a: "Personal identifiers are removed before anything reaches an AI service, uploads are deleted after 30 days by default, and you can delete your data at any time.",
  },
  {
    q: "Does this replace an accountant?",
    a: "No. It gives you general guidance and organised records, not professional tax advice. For anything specific to your situation, check with a qualified tax adviser.",
  },
];
