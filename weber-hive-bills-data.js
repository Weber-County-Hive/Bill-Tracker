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
  }
];
