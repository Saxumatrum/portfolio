// Everything the page says lives here, so updating the portfolio is an edit
// to this file only. Keep it in line with the CV: nothing here should be a
// claim that can't be defended in an interview.

export const profile = {
  name: "Adjetei Martey",
  role: "AI Engineer",
  location: "London",
  email: "hello@adjetei.com",
  github: "https://github.com/saxumatrum",
  cv: "/adjetei-martey-cv.pdf",
  headline: "I build AI products that people actually use.",
  intro:
    "Software engineer with an MSc in Artificial Intelligence (Distinction). Since 2019 I've shipped production software, from recommendation models on live customer data to LLM apps with retrieval, tool-calling agents and structured extraction.",
  // Shown as a badge on the home page and on /services (clients). Recruiters get /hire instead.
  availability: "Taking on freelance projects · UK and remote",
  hiring: "Open to AI / ML engineering roles · remote",
};

// Home hero: lead with the niche the landing pages serve.
export const pitch = {
  title: "AI that answers your enquiries and",
  accent: "books your customers in.",
  text: "For restaurants, salons and clinics: a host on your website or WhatsApp that answers questions day and night, books straight into your diary and hands the tricky ones to you. Built by an AI engineer with an MSc in AI and seven years shipping production software.",
  niches: [
    { name: "Restaurants", href: "/restaurant-booking-assistant" },
    { name: "Salons and clinics", href: "/salon-clinic-booking-assistant" },
    { name: "Invoice data entry", href: "/automate-invoice-data-entry" },
  ],
};

// Short data note on /services and the landing pages. Only promises that hold for every build.
export const privacy = [
  {
    title: "It runs on your accounts",
    text: "The app, its database and the AI provider account are set up in your name, so your customers' data stays with you, and you keep everything if we stop working together.",
  },
  {
    title: "Built for UK GDPR",
    text: "It collects only what the job needs, keeps it for a set time, and you can export or delete it whenever you want.",
  },
  {
    title: "Not used to train AI",
    text: "I build on business AI services (such as Anthropic's and OpenAI's APIs) that don't train their models on your data by default.",
  },
  {
    title: "UK or EU hosting",
    text: "Where a provider offers a UK or EU region, your data is stored there.",
  },
];

// Freelance offer on /services. `proof` names a project on the Work page that
// shows the service working; keep every line backed by something real.
export const services = [
  {
    title: "Bookings and enquiries on autopilot",
    pitch:
      "A host on your website or WhatsApp that answers menu, price and opening-hours questions, books tables or appointments into your diary, and passes anything unusual to you with a one-line summary.",
    proof: { name: "FrontDesk", href: "/play/frontdesk" },
    more: [
      { name: "For restaurants", href: "/restaurant-booking-assistant" },
      { name: "For salons and clinics", href: "/salon-clinic-booking-assistant" },
    ],
  },
  {
    title: "Chat with your documents",
    pitch:
      "An assistant that answers questions from your own policies, manuals or contracts, and shows the exact passage each answer came from, so your team can check it.",
    proof: { name: "docuchat", href: "/play/docuchat" },
  },
  {
    title: "Automate data entry",
    pitch:
      "Turn invoices, receipts, CVs or forms into clean, checked data you can drop into a spreadsheet or your own system, instead of typing it in by hand.",
    proof: { name: "Extractly", href: "/play/extractly" },
    more: [{ name: "Invoices and receipts", href: "/automate-invoice-data-entry" }],
  },
  {
    title: "AI support triage",
    pitch:
      "Sort incoming support tickets by urgency, find the right help article and draft a reply for a person to approve, with every step visible.",
    proof: { name: "TriagePilot", href: "/play/triagepilot" },
  },
  {
    title: "Build your AI product",
    pitch:
      "Take an idea to a live app with accounts, a database, notifications and AI at the core, then hand it over in a state you can keep running.",
    proof: { name: "Unstuck", href: "/work#unstuck" },
  },
];

export const steps = [
  { step: "Call", text: "A free call about what you need. I'll tell you honestly if AI is the right fit." },
  { step: "Scope", text: "A short written plan: what gets built, how long it takes, what it costs." },
  { step: "Build", text: "Working versions you can try as I go, not one big reveal at the end." },
  { step: "Hand over", text: "Your code, your accounts, and clear notes on how to run it." },
];

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

// `demo` is a live version under /play (see next.config.ts) and gets a full
// card on /work; projects without one are listed under "Research & ML".
// `image` is a 16:10 screenshot of the demo in use. `forBusiness` is the
// plain-English line for clients, shown above the technical summary.
export const projects: {
  name: string;
  kind: string;
  forBusiness?: string;
  summary: string;
  stack: string[];
  repo: string;
  demo?: string;
  image?: { src: string; alt: string };
}[] = [
  {
    name: "FrontDesk",
    kind: "Booking agent",
    forBusiness: "Answers your guests' questions and takes bookings day and night, and hands the tricky ones to you.",
    summary:
      "An AI host for a demo restaurant. It looks up the menu and allergens, checks free tables, books only after the guest confirms, and hands big groups, private hire and complaints to staff. The owner's view shows bookings, hand-offs and every tool call.",
    stack: ["AI SDK", "Tool calling", "Next.js"],
    repo: "https://github.com/saxumatrum/frontdesk",
    demo: "/play/frontdesk",
    image: {
      src: "/work/frontdesk.webp",
      alt: "FrontDesk: a guest books a table for six with a nut allergy noted, and the booking appears in the owner's view",
    },
  },
  {
    name: "TriagePilot",
    kind: "Tool-calling agent",
    forBusiness: "Sorts your support inbox and drafts replies for your team to approve.",
    summary:
      "An agent that triages support tickets step by step: it classifies the ticket, searches a knowledge base, then drafts a reply. Every tool call and result is shown as an inspectable trace.",
    stack: ["AI SDK", "Next.js", "TypeScript"],
    repo: "https://github.com/saxumatrum/triagepilot",
    demo: "/play/triagepilot",
    image: {
      src: "/work/triagepilot.webp",
      alt: "TriagePilot: the agent trace, with the classify tool rating an API outage as urgent",
    },
  },
  {
    name: "docuchat",
    kind: "RAG",
    forBusiness: "Lets your staff get answers from your own documents in seconds, with sources.",
    summary:
      "Upload PDFs, Word docs or notes and ask questions. Answers come only from your documents, with citations to the exact chunk they came from. Hand-rolled chunking, embeddings and cosine retrieval, no vector database.",
    stack: ["AI SDK", "Embeddings", "Next.js"],
    repo: "https://github.com/saxumatrum/docuchat",
    demo: "/play/docuchat",
    image: {
      src: "/work/docuchat.webp",
      alt: "docuchat: an answer about annual leave from a sample handbook, with cited source chunks",
    },
  },
  {
    name: "Extractly",
    kind: "Structured extraction",
    forBusiness: "Turns piles of invoices and forms into spreadsheet-ready data, no retyping.",
    summary:
      "Turns invoices, receipts and CVs (images or PDFs) into clean, schema-validated JSON using a vision model, with inline editing and CSV or JSON export.",
    stack: ["Vision LLM", "Zod", "Next.js"],
    repo: "https://github.com/saxumatrum/extractly",
    demo: "/play/extractly",
    image: {
      src: "/work/extractly.webp",
      alt: "Extractly: fields and line items extracted from a sample invoice, ready to edit and export",
    },
  },
  {
    name: "Chest X-ray classifier",
    kind: "Computer vision",
    summary:
      "DenseNet121 (the CheXNet architecture) fine-tuned on NIH ChestX-ray14 to spot 14 findings at once, trained with BCE loss and evaluated with per-label AUROC.",
    stack: ["PyTorch", "DenseNet", "Multilabel"],
    repo: "https://github.com/saxumatrum/chest-xray-multilabel",
  },
  {
    name: "Facial emotion recognition",
    kind: "Computer vision",
    summary:
      "Reads seven emotions from face images in FER2013. A VGG19 fine-tuned with class-weighted loss reached 68.6% accuracy, against 52.7% for a custom CNN built from scratch.",
    stack: ["PyTorch", "fastai", "Transfer learning"],
    repo: "https://github.com/saxumatrum/fer2013",
  },
];

export const experience = [
  {
    role: "CTO",
    org: "Rumate",
    period: "Apr 2026 – now",
    points: [
      "Own data, scoring and ML at a startup that rates Toronto rental buildings",
      "Built the Toronto Open Data pipeline that keeps 3,000+ buildings and their inspection history up to date",
      "Built the People's Score: five public sources per building, with Claude and Qwen classifying reviews to discount solicited praise. Its first run scored 100 buildings across a city ward",
    ],
  },
  {
    role: "Senior Software Engineer",
    org: "Nguvu Global",
    period: "2022 – 2026",
    points: [
      "Led the design and deployment of recommendation models that target a base of around 10,000 customers from their transaction data",
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
