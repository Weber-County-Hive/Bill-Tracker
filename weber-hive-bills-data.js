// The Weber County Hive — Legislative Docket
// To add a new bill: copy an object below, fill in the fields, and
// save it. weber-hive-bill-docket.html reads this file and builds
// the docket automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the case-file page you upload to GitHub.
//
// status: "law" | "vetoed" | "failed" | "pending"  (controls stamp color/text)
const BILLS = [
  {
    caseNumber: "CASE 2026-249",
    bill: "H.B. 249",
    title: "Federal Funds Modifications",
    summary: "Utah taxpayers are funding a public dashboard meant to show the state's dependence on federal money — but the bill sets no launch deadline and no real performance measures.",
    tags: ["Federalism", "Budget & Appropriations", "Weber-area votes: 8–0"],
    status: "law",
    voteLine: "House 69–1–5 · Senate 26–1–2 · Signed Mar 17, 2026",
    link: "weber-hive-hb249.html"
  },
  {
    caseNumber: "CASE 2026-546",
    bill: "H.B. 546",
    title: "Public Lands Duty of Care Amendments",
    summary: "Useful hazard mapping is combined with an aggressive, legally disputed claim of state jurisdiction over ~96% of Utah's federally controlled land.",
    tags: ["Public Lands", "Federalism", "Weber-area votes: 7–0–1"],
    status: "law",
    voteLine: "House 51–15–9 · Senate 17–7–5 · Signed Mar 25, 2026",
    link: "weber-hive-hb546.html"
  },
  {
    caseNumber: "CASE 2026-410/348",
    bill: "H.B. 410 + H.B. 348",
    title: "Great Salt Lake Water Leasing and Dedicated Water",
    summary: "A new $2.75M/year farmer water-leasing program with real monitoring and reporting requirements — success still depends on rules not yet written.",
    tags: ["Great Salt Lake", "Water Rights", "Weber-area votes: 7–0–2"],
    status: "law",
    voteLine: "H.B. 410: House 71–1–3 · Senate 25–0–4 — H.B. 348: House 70–0–5 · Senate 26–0–3 — Signed Mar 23, 2026",
    link: "weber-hive-hb410-348.html"
  },
  {
    caseNumber: "CASE 2026-078",
    bill: "S.B. 78",
    title: "Property Tax Relief Amendments",
    summary: "Started out expanding renter and homeowner relief; by its fourth substitute it repealed both — and that final version never got a committee hearing before failing in the House.",
    tags: ["Property Tax", "Process Concern", "4 Substitutes"],
    status: "failed",
    voteLine: "Passed Senate · Failed House 28–41–6",
    link: "weber-hive-sb78.html"
  },
  {
    caseNumber: "CASE 2026-044",
    bill: "S.B. 44",
    title: "Statewide Resource Management Plan Amendments",
    summary: "A two-page bill unanimously adopted an entire 198-page public-land policy plan by reference — including a state-park push for Mill Creek Canyon that the bill text never mentions.",
    tags: ["Public Lands", "Transparency Concern", "Weber-area votes: 6–0–2 absent"],
    status: "law",
    voteLine: "Senate 26–0–3 · House 67–0–8 · Signed Mar 26, 2026",
    link: "weber-hive-sb44.html"
  },
  {
    caseNumber: "CASE 2026-258/510",
    bill: "S.B. 258 (2024) + H.B. 510",
    title: "One Vote, Four Checks — Preliminary Municipality Reform",
    summary: "A 2024 law lets a handful of landowners create a new town with no county say-so. A 2026 reform bill to fix that failed by one vote — four of the no votes went to senators who'd taken checks from a homebuilder using the law right now.",
    tags: ["Local Government", "Campaign Finance", "Wasatch/Summit Counties"],
    status: "failed",
    voteLine: "H.B. 510: House 68–0 · Senate 14–12–3 (failed)",
    link: "sb258-preliminary-municipalities.html"
  },
  {
    caseNumber: "CASE 2025-037 / 2026-065",
    bill: "S.B. 37 (2025) + S.B. 65 (2026)",
    title: "The Bill That Won't Die — Minimum Basic Tax Rate Amendments",
    summary: "Two sessions running, the same senator tried to route every school district's basic property tax through a new state-controlled fund first. Vetoed in 2025. In 2026 it passed the Senate again, then died in the House without ever getting a real hearing.",
    tags: ["School Finance", "Property Tax", "Process Concern", "Repeat Attempt"],
    status: "failed",
    voteLine: "2025: Passed House 41–27 · Senate 20–8 · VETOED — 2026: Passed Senate 18–11–0 · Enacting clause struck in House",
    link: "weber-hive-sb65-case-file.html"
  },
  {
    caseNumber: "CASE 2025-HB37",
    bill: "H.B. 37 (2025)",
    title: "The Threshold Nobody Noticed — Utah Housing Amendments",
    summary: "A 2025 housing bill quietly lowered the minimum population to incorporate a new Utah town from 100 to 75 people — rewriting the same statute the 2024 preliminary-municipality fast-track law depends on.",
    tags: ["Local Government", "Land Use", "Preliminary Municipality"],
    status: "law",
    voteLine: "House 58–9–8 · Senate 22–6–1 · House concurred 39–30–6 · Signed Mar 26, 2025 · Effective May 7, 2025",
    link: "weber-hive-hb37.html"
  }
];
