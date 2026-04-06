// ============================================================
//  Sharda Competitive Exam Academy — Feedback Portal Backend
//  Vercel Serverless Function  →  /api/subjects
//
//  INSTRUCTIONS:
//  Replace each "formUrl" value with your actual Google Form link.
//  Example: "https://forms.gle/yourActualFormLink"
// ============================================================

const subjects = [
  {
    id: "polity",
    label: "Polity",
    tag: "Civics & Governance",
    icon: "🏛️",
    color: "#1a3a6b",
    bg: "#e8edf6",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc252jQnRH57r4-pYM-3UH6hAPVZr3IZSlgZftZnGkSgz-XpA/viewform?usp=publish-editor",
  },
  {
    id: "current-affairs",
    label: "Current Affairs",
    tag: "News & Events",
    icon: "📰",
    color: "#e8711a",
    bg: "#fdf0e6",
    formUrl: "https://forms.gle/YOUR_CURRENT_AFFAIRS_FORM_LINK",
  },
  {
    id: "science",
    label: "Science",
    tag: "General Science",
    icon: "🔬",
    color: "#1a7a4a",
    bg: "#e6f4ed",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe1WfvkazPLKRl2qrfrwvNc1qFMtbChdlpTVNTsvQKdl-P2Nw/viewform?usp=dialog",
  },
  {
    id: "history",
    label: "History",
    tag: "Ancient to Modern",
    icon: "📜",
    color: "#7a3a1a",
    bg: "#f5ece6",
    formUrl: "https://forms.gle/YOUR_HISTORY_FORM_LINK",
  },
  {
    id: "math-reasoning",
    label: "Math & Reasoning",
    tag: "Aptitude & Logic",
    icon: "🔢",
    color: "#3a1a7a",
    bg: "#ede6f5",
    formUrl: "https://forms.gle/YOUR_MATH_REASONING_FORM_LINK",
  },
  {
    id: "economics",
    label: "Economics",
    tag: "Macro & Micro",
    icon: "📈",
    color: "#1a6a7a",
    bg: "#e6f2f5",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe5kwsh-gWFv48iNITHufSJ10OiC0Cg6fTLOuFsQNmXdoNxJw/viewform?usp=publish-editor",
  },
  {
    id: "marathi",
    label: "Marathi",
    tag: "भाषा",
    icon: "🔤",
    color: "#c0392b",
    bg: "#faeaea",
    formUrl: "https://forms.gle/YOUR_MARATHI_FORM_LINK",
  },
  {
    id: "english",
    label: "English",
    tag: "Language & Grammar",
    icon: "📝",
    color: "#2471a3",
    bg: "#eaf3f9",
    formUrl: "https://forms.gle/YOUR_ENGLISH_FORM_LINK",
  },
];

export default function handler(req, res) {
  // Allow CORS for local dev and any Vercel preview URLs
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json({
    academy: "Sharda Competitive Exam Academy",
    city: "Pune",
    subjects,
  });
}
