// ============================================================
//  BACKEND — Sharda Competitive Exam Academy
//  Vercel Serverless Function
//  Route: /api/subjects
//
//  HOW TO UPDATE:
//  Replace each "formUrl" value with your actual Google Form link.
//  Example: "https://forms.gle/yourActualLink"
// ============================================================

const subjects = [
  {
    id: "polity",
    label: "Polity",
    tag: "Civics & Governance",
    icon: "🏛️",
    accentColor: "#1a3a6b",
    iconBg: "#e8edf6",
    formUrl: "https://forms.gle/YOUR_POLITY_FORM_LINK",
  },
  {
    id: "current-affairs",
    label: "Current Affairs",
    tag: "News & Events",
    icon: "📰",
    accentColor: "#e8711a",
    iconBg: "#fdf0e6",
    formUrl: "https://forms.gle/YOUR_CURRENT_AFFAIRS_FORM_LINK",
  },
  {
    id: "science",
    label: "Science",
    tag: "General Science",
    icon: "🔬",
    accentColor: "#1a7a4a",
    iconBg: "#e6f4ed",
    formUrl: "https://forms.gle/YOUR_SCIENCE_FORM_LINK",
  },
  {
    id: "history",
    label: "History",
    tag: "Ancient to Modern",
    icon: "📜",
    accentColor: "#7a3a1a",
    iconBg: "#f5ece6",
    formUrl: "https://forms.gle/YOUR_HISTORY_FORM_LINK",
  },
  {
    id: "math-reasoning",
    label: "Math & Reasoning",
    tag: "Aptitude & Logic",
    icon: "🔢",
    accentColor: "#3a1a7a",
    iconBg: "#ede6f5",
    formUrl: "https://forms.gle/YOUR_MATH_REASONING_FORM_LINK",
  },
  {
    id: "economics",
    label: "Economics",
    tag: "Macro & Micro",
    icon: "📈",
    accentColor: "#1a6a7a",
    iconBg: "#e6f2f5",
    formUrl: "https://forms.gle/YOUR_ECONOMICS_FORM_LINK",
  },
  {
    id: "marathi",
    label: "Marathi",
    tag: "भाषा",
    icon: "🔤",
    accentColor: "#c0392b",
    iconBg: "#faeaea",
    formUrl: "https://forms.gle/YOUR_MARATHI_FORM_LINK",
  },
  {
    id: "english",
    label: "English",
    tag: "Language & Grammar",
    icon: "📝",
    accentColor: "#2471a3",
    iconBg: "#eaf3f9",
    formUrl: "https://forms.gle/YOUR_ENGLISH_FORM_LINK",
  },
];

export default function handler(req, res) {
  // CORS — allows the frontend to call this API from any origin
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
