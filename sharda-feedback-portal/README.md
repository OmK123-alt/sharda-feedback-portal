# Sharda Competitive Exam Academy — Student Feedback Portal

A live web portal where students select their subject and get redirected to the subject's Google Form feedback link.

---

## Project Structure

```
sharda-feedback-portal/
├── public/
│   ├── index.html      ← Frontend page
│   ├── style.css       ← All styles
│   └── script.js       ← Fetches /api/subjects & renders cards
├── api/
│   └── subjects.js     ← Backend (Vercel serverless function)
├── vercel.json         ← Vercel routing config
├── package.json
└── README.md
```

---

## Step 1 — Add Your Google Form Links

Open `api/subjects.js` and replace each `formUrl` placeholder with your actual Google Form link.

```js
{
  id: "polity",
  label: "Polity",
  formUrl: "https://forms.gle/yourActualLink",  // ← paste here
  ...
}
```

---

## Step 2 — Deploy to Vercel

### Option A — Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy (run from project root)
vercel

# 4. Deploy to production
vercel --prod
```

### Option B — GitHub + Vercel Dashboard (Easiest)

1. Push this folder to a GitHub repository
2. Go to https://vercel.com → New Project
3. Import your GitHub repo
4. Click **Deploy** — done!

Vercel will give you a live URL like:
`https://sharda-feedback-portal.vercel.app`

---

## Step 3 — Share with Students

Send the Vercel URL via WhatsApp, notice board, or QR code.

---

## Local Development

```bash
npm install
npm run dev
```

Portal runs at `http://localhost:3000`
API available at `http://localhost:3000/api/subjects`

---

## Updating Form Links Later

Just edit `api/subjects.js`, commit, and push — Vercel auto-redeploys in ~30 seconds.
