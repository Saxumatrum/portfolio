// Everything the page says lives here, so updating the portfolio is an edit
// to this file only. Keep it in line with the CV: nothing here should be a
// claim that can't be defended in an interview.

export const profile = {
  name: "Adjetei Martey",
  role: "AI Engineer",
  location: "London",
  email: "adjeteimartey@gmail.com",
  github: "https://github.com/saxumatrum",
  cv: "/adjetei-martey-cv.pdf",
  headline: "I build AI products that people actually use.",
  intro:
    "Software engineer with an MSc in Artificial Intelligence (Distinction). Since 2019 I've shipped production software, from recommendation models on live customer data to LLM apps with retrieval, tool-calling agents and structured extraction.",
};

export const featured = {
  name: "Unstuck",
  tagline: "An AI to-do app for people who freeze at a long list.",
  url: "https://letsunstuck.com",
  status: "Live · invite-only beta",
  summary:
    "You throw your whole messy list at it. It groups the tasks into batches you can do in one go, picks where to start, breaks scary tasks into small steps, and writes the exact words for phone calls and emails, with nothing left for you to fill in.",
  built: [
    "LLM pipeline that sorts, batches and breaks down tasks, with call and email scripts that tell admin calls apart from personal ones",
    "Accounts and cross-device sync on Supabase, with row-level security and a code-based closed beta",
    "Reminders that arrive as real push notifications, sent by scheduled jobs",
    "Focus mode, voice input, accessibility settings and five languages",
  ],
  stack: ["Next.js", "TypeScript", "AI SDK", "Claude", "Supabase", "Web Push", "Vercel"],
  images: [
    { src: "/work/unstuck-input.png", alt: "Unstuck: adding a messy list of tasks, with one marked as tough" },
    { src: "/work/unstuck-results.png", alt: "Unstuck: tasks sorted into batches, with the first one highlighted as Now" },
  ],
};

// `demo` is a live version under /play (see next.config.ts); cards without
// one link to the code only.
export const projects: {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
}[] = [
  {
    name: "TriagePilot",
    kind: "Tool-calling agent",
    summary:
      "An agent that triages support tickets step by step: it classifies the ticket, searches a knowledge base, then drafts a reply. Every tool call and result is shown as an inspectable trace.",
    stack: ["AI SDK", "Next.js", "TypeScript"],
    repo: "https://github.com/saxumatrum/triagepilot",
  },
  {
    name: "docuchat",
    kind: "RAG",
    summary:
      "Upload PDFs, Word docs or notes and ask questions. Answers come only from your documents, with citations to the exact chunk they came from. Hand-rolled chunking, embeddings and cosine retrieval, no vector database.",
    stack: ["AI SDK", "Embeddings", "Next.js"],
    repo: "https://github.com/saxumatrum/docuchat",
    demo: "/play/docuchat",
  },
  {
    name: "Extractly",
    kind: "Structured extraction",
    summary:
      "Turns invoices, receipts and CVs (images or PDFs) into clean, schema-validated JSON using a vision model, with inline editing and CSV or JSON export.",
    stack: ["Vision LLM", "Zod", "Next.js"],
    repo: "https://github.com/saxumatrum/extractly",
    demo: "/play/extractly",
  },
  {
    name: "Chest X-ray classifier",
    kind: "Computer vision",
    summary:
      "DenseNet121 (the CheXNet architecture) fine-tuned on NIH ChestX-ray14 to spot 14 findings at once, trained with BCE loss and evaluated with per-label AUROC.",
    stack: ["PyTorch", "DenseNet", "Multilabel"],
    repo: "https://github.com/saxumatrum/chest-xray-multilabel",
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    org: "Nguvu Global",
    period: "2022 – now",
    points: [
      "Lead the design and deployment of recommendation models that target a base of around 10,000 customers from their transaction data",
      "Built the product's first generative AI feature: a customer support chatbot prototype on Anthropic's API",
      "Cut database query times by about 40% by indexing high-traffic queries",
    ],
  },
  {
    role: "Software Engineer",
    org: "Nguvu Global",
    period: "2019 – 2022",
    points: [
      "Designed and shipped the first recommendation model for customer targeting",
      "Built customer-facing platform features in a six-person engineering team",
    ],
  },
];

export const education = [
  {
    degree: "MSc Artificial Intelligence, Distinction",
    org: "University of Kent",
    year: "2023",
    note: "Thesis: ML models (random forests, XGBoost) to find genetic interactions behind ageing under dietary restriction.",
  },
  {
    degree: "BSc Information Technology",
    org: "University of Ghana",
    year: "2021",
    note: "Project: COVID-19 forecasting with ARIMA and LSTM models.",
  },
];

export const skills = [
  { group: "AI & ML", items: "LLM apps, RAG, tool-calling agents, embeddings, PyTorch, TensorFlow, scikit-learn, Hugging Face" },
  { group: "Languages", items: "Python, TypeScript, SQL, Java, C++" },
  { group: "Platforms", items: "Next.js, Supabase, Postgres, MongoDB, Docker, AWS, GCP, Azure, Vercel" },
];
