// ============================================================
//  FRONTEND — script.js
//  Sharda Competitive Exam Academy | Feedback Portal
//
//  Calls the BACKEND at /api/subjects
//  and dynamically renders subject cards.
// ============================================================

const grid = document.getElementById("grid");

// ── 1. Skeleton placeholders while the API loads ─────────────
function renderSkeletons(count = 8) {
  grid.innerHTML = Array.from({ length: count })
    .map(() => `
      <div class="skeleton-card">
        <div class="skeleton skeleton-accent"></div>
        <div class="skeleton skeleton-icon"></div>
        <div class="skeleton skeleton-label"></div>
        <div class="skeleton skeleton-tag"></div>
      </div>
    `)
    .join("");
}

// ── 2. Render cards from backend response ────────────────────
function renderSubjects(subjects) {
  grid.innerHTML = subjects
    .map((s) => `
      <a
        class="subject-card"
        href="${s.formUrl}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open feedback form for ${s.label}"
      >
        <div class="card-accent" style="background: ${s.accentColor};"></div>
        <div class="card-icon"   style="background: ${s.iconBg};">${s.icon}</div>
        <div class="card-label">${s.label}</div>
        <div class="card-tag">${s.tag}</div>
        <span class="card-arrow" aria-hidden="true">↗</span>
      </a>
    `)
    .join("");
}

// ── 3. Error state ───────────────────────────────────────────
function renderError(message) {
  grid.innerHTML = `
    <div class="error-box">
      <strong>⚠️ Could not load subjects</strong>
      <p>${message}</p>
      <button onclick="loadSubjects()">Try again</button>
    </div>
  `;
}

// ── 4. Fetch from BACKEND → /api/subjects ───────────────────
async function loadSubjects() {
  renderSkeletons();
  try {
    const res = await fetch("/api/subjects");
    if (!res.ok) throw new Error(`Server responded with status ${res.status}`);
    const data = await res.json();
    renderSubjects(data.subjects);
  } catch (err) {
    console.error("[Frontend] Failed to fetch subjects:", err);
    renderError("Please refresh the page or contact the academy admin.");
  }
}

// ── Boot ─────────────────────────────────────────────────────
loadSubjects();
