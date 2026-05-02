// ============================================================
//  Sharda Competitive Exam Academy — Feedback Portal
//  script.js  —  Fetches subjects from /api/subjects and renders cards
// ============================================================

const grid = document.getElementById("grid");

// ── Skeleton placeholders while loading ──
function renderSkeletons(count = 9) {
  grid.innerHTML = Array.from({ length: count })
    .map(
      () => `
    <div class="skeleton-card">
      <div class="skeleton skeleton-accent"></div>
      <div class="skeleton skeleton-icon"></div>
      <div class="skeleton skeleton-label"></div>
      <div class="skeleton skeleton-tag"></div>
    </div>`
    )
    .join("");
}

// ── Render subject cards from API data ──
function renderSubjects(subjects) {
  grid.innerHTML = subjects
    .map(
      (s) => `
    <a class="subject-card" href="${s.formUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open feedback form for ${s.label}">
      <div class="card-accent" style="background: ${s.color};"></div>
      <div class="card-icon" style="background: ${s.bg};">${s.icon}</div>
      <div class="card-label">${s.label}</div>
      <div class="card-tag">${s.tag}</div>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>`
    )
    .join("");
}

// ── Error state ──
function renderError(message) {
  grid.innerHTML = `
    <div class="error-box" style="grid-column: 1 / -1;">
      <strong>⚠️ Could not load subjects</strong>
      <p>${message}</p>
      <button onclick="loadSubjects()" style="margin-top:1rem; padding: 0.5rem 1.25rem; border-radius: 8px; border: 1px solid #ddd; background: #fff; cursor: pointer; font-size: 14px;">
        Try again
      </button>
    </div>`;
}

// ── Fetch from backend ──
async function loadSubjects() {
  renderSkeletons();
  try {
    const res = await fetch("/api/subjects");
    if (!res.ok) throw new Error(`Server error: ${res.status}`);
    const data = await res.json();
    renderSubjects(data.subjects);
  } catch (err) {
    console.error("Failed to load subjects:", err);
    renderError("Please refresh the page or contact the academy admin.");
  }
}

// ── Boot ──
loadSubjects();
