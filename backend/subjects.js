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
    icon: "🏛️",
    accentColor: "#1a3a6b",
    iconBg: "#e8edf6",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc252jQnRH57r4-pYM-3UH6hAPVZr3IZSlgZftZnGkSgz-XpA/viewform?usp=dialog",
  },
  {
    id: "current-affairs",
    label: "Current Affairs",
    icon: "📰",
    accentColor: "#e8711a",
    iconBg: "#fdf0e6",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc4-_ihOzYUNXuyJtG_kwwx3ftVKWSKgkQfAm5KIDiBK_8gjQ/viewform?usp=publish-editor",
  },
  {
    id: "science",
    label: "Science",
    icon: "🔬",
    accentColor: "#1a7a4a",
    iconBg: "#e6f4ed",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe1WfvkazPLKRl2qrfrwvNc1qFMtbChdlpTVNTsvQKdl-P2Nw/viewform?usp=dialog",
  },
  {
    id: "history",
    label: "History",
    icon: "📜",
    accentColor: "#7a3a1a",
    iconBg: "#f5ece6",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdTNC8MpH0nM_wBcduigtOC8S_-3f1wkk47E0Yq12BuXaUbyQ/viewform?usp=dialog",
  },
  {
    id: "geography",
    label: "Geography",
    tag: "India & World",
    icon: "🌍",
    accentColor: "#1e6f5c",
    iconBg: "#e6f5f1",
    formUrl: "https://forms.gle/YOUR_GEOGRAPHY_FORM_LINK",
  },
  {
    id: "math-reasoning",
    label: "Math & Reasoning",
    icon: "🔢",
    accentColor: "#3a1a7a",
    iconBg: "#ede6f5",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLScXpdBsZ_7TBCmC3HKBiZyoe2jB4WzVVeUB8Tg_d0IRloyZZQ/viewform?usp=publish-editor",
  },
  {
    id: "economics",
    label: "Economics",
    icon: "📈",
    accentColor: "#1a6a7a",
    iconBg: "#e6f2f5",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe5kwsh-gWFv48iNITHufSJ10OiC0Cg6fTLOuFsQNmXdoNxJw/viewform?usp=dialog",
  },
  {
    id: "marathi",
    label: "Marathi",
    icon: "🔤",
    accentColor: "#c0392b",
    iconBg: "#faeaea",
    formUrl:"https://docs.google.com/forms/d/e/1FAIpQLSd89eB46LnoLBoRb-pzK8ltZtzg_izHvkgwEPsSQu1tWqELEw/viewform?usp=publish-editor",
  },
  {
    id: "english",
    label: "English",
    icon: "📝",
    accentColor: "#2471a3",
    iconBg: "#eaf3f9",
    formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSeErrHff5to6BWCi3I9MpefPWZcGqiRyHis4WwHx4HO2IOyDQ/viewform?usp=publish-editor",
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
