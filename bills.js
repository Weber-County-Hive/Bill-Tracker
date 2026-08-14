// The Weber County Hive — Legislative Docket
// To add a new bill: copy an object below, fill in the fields, and
// save it. index.html reads this file and builds the docket
// automatically — you never need to touch index.html by hand.
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
    link: "hb249.html"
  }
];
