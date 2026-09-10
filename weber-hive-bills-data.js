// The Weber County Hive — Legislative Docket
// To add a new bill: copy an object below, fill in the fields, and
// save it. weber-hive-bill-docket.html reads this file and builds
// the docket automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the case-file page you upload to GitHub.
//
// status: "law" | "vetoed" | "failed" | "pending"  (controls stamp color/text)
// year:   the session year this case is filed under. For multi-bill
//         cases spanning two sessions, use the year the case actually
//         resolved (signed/failed), not the year it was introduced.
const BILLS = [
  {
    caseNumber: "CASE 2026-249",
    bill: "H.B. 249",
    year: "2026",
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
    year: "2026",
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
    year: "2026",
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
    year: "2026",
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
    year: "2026",
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
    year: "2026",
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
    year: "2026",
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
    year: "2025",
    title: "The Threshold Nobody Noticed — Utah Housing Amendments",
    summary: "A 2025 housing bill quietly lowered the minimum population to incorporate a new Utah town from 100 to 75 people — rewriting the same statute the 2024 preliminary-municipality fast-track law depends on.",
    tags: ["Local Government", "Land Use", "Preliminary Municipality"],
    status: "law",
    voteLine: "House 58–9–8 · Senate 22–6–1 · House concurred 39–30–6 · Signed Mar 26, 2025 · Effective May 7, 2025",
    link: "weber-hive-hb37.html"
  },
  {
    caseNumber: "CASE 2025-333",
    bill: "S.B. 333 (2025)",
    year: "2025",
    title: "A Stadium-Shaped Loophole — Major Sporting Event Venue Financing Amendments",
    summary: "MIDA's own sitting Vice Chair wrote a new law letting any city or county carve out a 40-year tax-capture zone around a sporting venue — the same PID/tax-increment toolkit already documented for MIDA and UIPA, extended to a new category, statewide.",
    tags: ["Land Use", "Tax Increment", "MIDA/UIPA Family", "PID"],
    status: "law",
    voteLine: "5 substitutes · Senate Econ. Dev. Committee 4–0–2 favorable · Passed both chambers",
    link: "weber-hive-sb333.html"
  },
  {
    caseNumber: "CASE 2025-337",
    bill: "S.B. 337 (2025)",
    year: "2025",
    title: "The One Authority to Rule Them All — Land Use and Development Amendments",
    summary: "A governor's top priority would have created a state authority more powerful than MIDA and the Inland Port Authority combined, able to capture 75% of a project area's taxes. It died without a Senate floor vote after cross-partisan opposition — and Cox's own 2026 'mission creep' comments about MIDA prove the critics right.",
    tags: ["Land Use", "State Authorities", "MIDA/UIPA Family", "Died in Session"],
    status: "failed",
    voteLine: "Senate Econ. Dev. Committee 3–2 · Senate Rev. & Tax 3–2–1 favorable · Never reached Senate floor",
    link: "weber-hive-sb337.html"
  },
  {
    caseNumber: "CASE 2026-061",
    bill: "H.B. 61",
    year: "2026",
    title: "Less Detail, No Records — Navajo Trust Fund Amendments",
    summary: "A new GRAMA exemption closes off public records on how the Navajo Trust Fund invests its money — and the Navajo Nation's own annual report gets less detailed too, with no record of tribal consultation before the bill advanced.",
    tags: ["Tribal Accountability", "GRAMA Exemption", "Native American Legislative Liaison Committee"],
    status: "law",
    voteLine: "Committee 9–0–2 · Signed Mar 23, 2026",
    link: "weber-hive-hb61.html"
  },
  {
    caseNumber: "CASE 2025-188 / 2026-332",
    bill: "S.B. 188 (2025) + H.B. 332 (2026)",
    year: "2026",
    title: "The Fix That Was Left to Die — Lease Revenue Bond Amendments",
    summary: "A 2024 law capped how much school debt a district could take on without a vote. A 2025 bill quietly exempted one district — the one that caused the cap. The 2026 fix had no recorded opposition anywhere and died anyway, at 11:59 p.m., without a floor vote.",
    tags: ["School Finance", "Bond Elections", "Process Concern", "Repeat Attempt"],
    status: "failed",
    voteLine: "S.B. 188: passed unanimously at every stage, signed Mar 17, 2025 — H.B. 332: Committee 12–0–0 · Held same meeting · Enacting clause struck 11:59 PM Mar 6, 2026",
    link: "weber-hive-sb188-lease-revenue-bonds.html"
  },
  {
    caseNumber: "CASE 2026-492",
    bill: "H.B. 492 (2026)",
    year: "2026",
    title: "The Loan That Lost Its Label — Transportation, Infrastructure, and Housing Amendments",
    summary: "An $18 million loan was introduced as money for prison construction, and a plan to merge two housing boards into one was in the bill too. By the time it became law three weeks and six substitutes later, the prison label was gone and the two boards had multiplied into two.",
    tags: ["Housing Finance", "State Boards", "Transparency Concern"],
    status: "law",
    voteLine: "House Conference 66–5–4 · Senate Conference 27–0–2 · Signed Mar 25, 2026",
    link: "weber-hive-hb492-housing-partnership.html"
  },
  {
    caseNumber: "CASE 2019-228",
    bill: "S.B. 228",
    year: "2019",
    title: "The Blueprint — Public Infrastructure District Act",
    summary: "Utah's foundational PID law — the tool nearly every financing-district story in this project traces back to. Creates a new form of local government that can issue its own bonds and set its own budget, with minimal ongoing public visibility once it's formed.",
    tags: ["PID", "Public Infrastructure Districts", "Foundational Statute"],
    status: "law",
    voteLine: "Chief Sponsor Sen. Dan McCay · House Sponsor Rep. James Dunnigan · Signed May 14, 2019",
    link: "weber-hive-sb228.html"
  },
  {
    caseNumber: "CASE 2026-242",
    bill: "S.B. 242",
    year: "2026",
    title: "The Bill Behind the Tax — Transportation Amendments",
    summary: "A wide-ranging transit bill quietly became the enabling statute for Weber County's new 0.2% sales tax, while a consumer privacy protection for tow-truck data was deleted between substitutes with no explanation on the record.",
    tags: ["Transportation", "Privacy", "Weber County Sales Tax", "4 Substitutes"],
    status: "law",
    voteLine: "House 55–14–6 · Senate concurred 18–9–2 · Signed Mar 25, 2026",
    link: "weber-hive-sb242.html"
  },
  {
    caseNumber: "CASE 2026-197",
    bill: "S.B. 197",
    year: "2026",
    title: "Whoever Moved It Isn't On the Record — Transportation Funding and Governance Amendments",
    summary: "Rewrote the exact statute that distributes tax-increment growth to every HTRZ, RDA, UFAIR, and Point of the Mountain project statewide — then had its own base year quietly pushed back a full year by an unnamed House floor amendment, by voice vote, nine days before final passage.",
    tags: ["Tax Increment", "UTA Governance", "Anonymous Amendment", "HTRZ/RDA/UFAIR"],
    status: "law",
    voteLine: "House 65–2–8 · Senate concurred 28–1–0 · Signed Mar 26, 2026",
    link: "weber-hive-sb197.html"
  },
  {
    caseNumber: "CASE 2026-286",
    bill: "H.B. 286",
    year: "2026",
    title: "The Bill the White House Helped Kill — AI Transparency Act",
    summary: "A bipartisan AI transparency and child-safety bill passed committee 8-0-2 with zero no votes — then a one-line White House letter arrived, and it died without a single recorded vote against it. The Legislature's own Federalism Commission said nothing.",
    tags: ["Federalism", "AI Policy", "Process Concern", "Child Safety"],
    status: "failed",
    voteLine: "Committee 8–0–2 favorable · Circled Feb 5 · Enacting clause struck 11:59 PM Mar 6, 2026",
    link: "weber-hive-hb286.html"
  }
];
