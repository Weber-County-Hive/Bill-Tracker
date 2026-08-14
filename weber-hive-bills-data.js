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
  }
];
