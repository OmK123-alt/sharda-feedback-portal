# Sharda Competitive Exam Academy — Student Feedback Portal

## Folder Structure

```
sharda-feedback-portal/
│
├── frontend/               ← Everything the student sees in the browser
│   ├── index.html          ← Main page (subject selection UI)
│   ├── style.css           ← All styles
│   └── script.js           ← Calls backend API, renders subject cards
│
├── backend/                ← Server-side logic (Vercel Serverless)
│   └── subjects.js         ← API endpoint: GET /api/subjects
│                              Returns all subjects + Google Form links
│
├── vercel.json             ← Routes /api/* → backend, rest → frontend
├── package.json
└── README.md
```

---

## Step 1 — Add Your Google Form Links

Open **`backend/subjects.js`** and replace each `formUrl` with your real Google Form link:

```js
{
  id: "polity",
  label: "Polity",
  formUrl: "https://forms.gle/yourRealLink",  // ← paste here
}
```

---

## Step 2 — Deploy to Vercel

### Option A — GitHub + Vercel Dashboard (Easiest, no terminal needed)

1. Create a free account at [github.com](https://github.com) and [vercel.com](https://vercel.com)
2. Upload this entire folder to a new GitHub repository
3. On Vercel → **New Project** → Import your GitHub repo
4. Click **Deploy**

Your live URL will be:
`https://sharda-feedback-portal.vercel.app`

---

### Option B — Vercel CLI (Terminal)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy (run from project root)
vercel

# Deploy to production
vercel --prod
```

---

## Updating Form Links

Edit `backend/subjects.js` → push to GitHub → Vercel auto-redeploys in ~30 seconds.

---

## How Frontend & Backend Connect

```
Student opens page
       │
       ▼
  frontend/index.html   (served as static HTML)
       │
       ▼
  frontend/script.js    fetches → GET /api/subjects
                                         │
                                         ▼
                              backend/subjects.js
                              returns JSON with form links
                                         │
                                         ▼
                        script.js renders subject cards
                        Each card links to its Google Form
```
