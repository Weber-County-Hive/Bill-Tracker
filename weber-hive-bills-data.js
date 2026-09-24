// The Weber County Hive — Legislative Docket
// To add a new bill: copy an object below, fill in the fields, and
// save it. weber-hive-bill-docket.html reads this file and builds
// the docket automatically — you never need to touch that file by hand.
// IMPORTANT: the "link" value below must exactly match the real
// filename of the case-file page you upload to GitHub.
//
// status:      "law" | "vetoed" | "failed" | "pending"  (controls stamp color/text)
// year:        the session year this case is filed under. For multi-bill
//              cases spanning two sessions, use the year the case actually
//              resolved (signed/failed), not the year it was introduced.
// lastUpdated: the date this case entry (or its linked case-file page) was
//              last verified/edited — shown on the card and searchable.
//              Format as shown below ("Mon D, YYYY"). NOTE: cases filed
//              before Sep 11, 2026 do not yet have this field backfilled —
//              add it the next time each of those is touched.
// pinned:      true keeps a case permanently at the very top of the docket,
//              above all year groups, regardless of how many new cases get
//              added later. Use sparingly — meant for a single flagship
//              case, not a general "featured" list. Omit (or false) for
//              every normal case.
// grade:       the Overall letter grade (A–F) from that case's own linked
//              page — must match exactly what the case-file page itself
//              states, never invented here. Only add this field once you've
//              confirmed the grade inside the actual linked page; leave it
//              off entirely rather than guess. Shown as a badge on the card.
const BILLS = [
{
    caseNumber: "CASE 2026-HJR7",
    grade: "B",
    bill: "H.J.R. 7",
    year: "2026",
    title: "Never Got Its Vote",
    summary: "A constitutional amendment to let homeowners exempt up to 60% of their home's value from property tax needed a two-thirds vote in each chamber just to reach the ballot. No record shows it ever getting a committee vote at all before it was killed at 11:59 p.m.",
    tags: ["Property Tax", "Constitutional Amendment", "Died in Session", "Killed at Midnight"],
    status: "failed",
    voteLine: "No recorded committee vote found · Enacting clause struck 11:59 PM Mar 6, 2026",
    link: "weber-hive-hjr7.html",
    lastUpdated: "Sep 11, 2026"
  },
{
    caseNumber: "CASE 2026-012",
    grade: "F",
    bill: "S.B. 12",
    year: "2026",
    title: "Sixteen Extensions, Four Exceptions",
    summary: "Introduced as a single-issue bill extending one committee's sunset date, a substitute quietly grew it into an omnibus extending roughly sixteen more programs by years — while leaving Utah's Air Conservation Act, Safe Drinking Water Act, Water Quality Act, and Solid and Hazardous Waste Act to expire on schedule, in the same section, untouched.",
    tags: ["Sunset Law", "Environmental Statutes", "Process Concern", "Scope Expansion"],
    status: "law",
    voteLine: "Senate Committee 4–0–5 · Senate 25–0–4 · House Committee 10–0–1 · Signed, effective May 6, 2026",
    link: "weber-hive-sb12.html",
    lastUpdated: "Sep 11, 2026"
  },
{
    caseNumber: "CASE 2026-017",
    grade: "F",
    bill: "H.B. 17",
    year: "2026",
    title: "The Loophole That Replaced the Loophole",
    summary: "A rule requiring public infrastructure district board meetings inside their own district looked like a real fix once the old \"annual retreat\" exception was removed — but what replaced it lets a board meet anywhere in the much larger city or county that created it, with no limit on how often, and nothing that requires anyone to say when they've used it.",
    tags: ["PID", "Public Infrastructure Districts", "Open Meetings", "Process Concern", "Enforcement Gap", "Bait-and-Switch"],
    status: "law",
    voteLine: "House 70–0–5 · Senate 26–0–3 · Signed May 6, 2026",
    link: "weber-hive-hb17.html",
    lastUpdated: "Sep 17, 2026"
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
    caseNumber: "CASE 2026-060-BSW",
    grade: "D",
    bill: "H.B. 60 (2026)",
    year: "2026",
    title: "Bait-and-Switch: Narrowing Who Can Object to a Water Application",
    summary: "Narrowed the \"public welfare\" standard a state engineer can use to deny a water application from a broad standard (recreation, stream environment, general welfare) to only quantity/quality/availability — cutting the exact ground the Utah Rivers Council had used to protest. The sitting Great Salt Lake Commissioner, Brian Steed, testified in favor.",
    tags: ["Water Rights", "Great Salt Lake", "Bait-and-Switch"],
    status: "law",
    voteLine: "House Cmte 7–2–5 · House 54–17–4 · Senate Cmte 5–1–1 · Senate 2nd 15–7–7 · Senate 3rd 18–7–4",
    link: "weber-hive-hb60.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-457",
    grade: "D",
    bill: "H.B. 457",
    year: "2026",
    title: "County Islands and the County Auditor — County Governance Modifications",
    summary: "Small unincorporated islands in second-class counties, including Weber, join the surrounding city on July 1, 2027 with no resident vote, unless the county commission exempts them. A Senate substitute also struck a county-auditor review condition on handing accounting to a county manager.",
    tags: ["Local Power", "Annexation", "Weber County"],
    status: "law",
    voteLine: "House 62–2 · Senate 25–1 · House concurrence 61–6 · Signed Mar 26, 2026",
    link: "weber-hive-hb457.html",
    lastUpdated: "Sep 24, 2026"
  },
{
    caseNumber: "CASE 2026-330",
    grade: "D",
    bill: "H.B. 330",
    year: "2026",
    title: "A Defense for Permitted Conduct — Liability Limitations Amendments",
    summary: "A new defense in civil lawsuits for conduct a permit, license or law authorized. The House passed it with an exception for negligent, reckless or deceptive conduct; the Senate removed that exception.",
    tags: ["Courts & Liability", "Bait-and-Switch", "Permits"],
    status: "law",
    voteLine: "House 65–0 · Senate 17–7 · House concurrence 50–15 · Signed Mar 18, 2026",
    link: "weber-hive-hb330.html",
    lastUpdated: "Sep 24, 2026"
  },
{
    caseNumber: "CASE 2026-227",
    grade: "C",
    bill: "S.B. 227",
    year: "2026",
    title: "From Damages Caps to an Employer Rule — Punitive Damages Amendments",
    summary: "Introduced as a cap on punitive damages in vehicle injury cases; signed with no caps, limiting when employers can be made to pay punitive damages for employees&rsquo; conduct instead.",
    tags: ["Courts & Liability", "5 Versions", "Insurance"],
    status: "law",
    voteLine: "Senate 26–0 · House 56–12 · Senate concurrence 28–1 · Signed Mar 18, 2026",
    link: "weber-hive-sb227.html",
    lastUpdated: "Sep 24, 2026"
  },
{
    caseNumber: "CASE 2026-075",
    grade: "A",
    bill: "H.B. 75",
    year: "2026",
    title: "The Same Sponsors, Written the Other Way — American Indian and Alaska Native Education",
    summary: "The same sponsors as H.B. 61 require the State Board of Education to adopt a tribal education plan by Jan. 1, 2027, after meaningful consultation with tribal leaders, with a data-sharing process and yearly grant reporting.",
    tags: ["Tribal Accountability", "Education", "Native American Legislative Liaison Committee"],
    status: "law",
    voteLine: "House Cmte 10–1–4 · House 72–0–3 · Senate Cmte 6–0–1 · Senate 22–0–7 · Signed Feb 27, 2026",
    link: "weber-hive-hb75.html",
    lastUpdated: "Sep 24, 2026"
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
    caseNumber: "CASE 2023-107",
    grade: "D",
    bill: "S.B. 107",
    year: "2023",
    title: "The Fund That Got Swapped for a Highway Account",
    summary: "The Senate-passed version gave extraction-impacted counties and cities a real path to apply for oil and gas revenue. The House swapped it out for a statewide highway fund before final passage — removing local governments' only access point to that money entirely.",
    tags: ["Severance Tax", "Uintah Basin", "Local Power", "Process Concern"],
    status: "law",
    voteLine: "Senate 21–6–2 · House 54–14–7 · Senate concurred 19–7–3 · Signed Mar 20, 2023",
    link: "weber-hive-sb107.html",
    lastUpdated: "Sep 16, 2026"
  },
{
    caseNumber: "CASE 2026-125-BSW",
    grade: "C",
    bill: "H.B. 157 + H.B. 125 (2026)",
    year: "2026",
    title: "Bait-and-Switch: Six Hours, Two Bills, $5 Million",
    summary: "A new DNR water-litigation-funding authority and its $5M appropriation were stripped from H.B. 157 the same day the Senate killed that bill outright — then reinserted word-for-word into an unrelated aquatic-invasive-species bill, H.B. 125, hours later. The $5M appropriation was dropped from H.B. 125 too, six hours after that. The authority is now law with no funding source specified anywhere.",
    tags: ["Water Rights", "DNR", "Appropriations", "Bait-and-Switch"],
    status: "law",
    voteLine: "H.B. 157 (S03): House 57–1–17 · Senate 22–0–7, before being killed the same day",
    link: "weber-hive-hb125.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2020-163",
    grade: "A",
    bill: "H.B. 163",
    year: "2020",
    title: "The One That Actually Worked",
    summary: "A volunteer archaeological and paleontological site-monitoring program passed near-unanimously at every stage, with archaeologists, citizens, and even the mining industry on record in support — a rare case in this docket where the process held up start to finish.",
    tags: ["Cultural Sites", "Public Lands", "Volunteer Program"],
    status: "law",
    voteLine: "House 72–0–3 · Senate 27–0–2 · Signed Mar 28, 2020",
    link: "weber-hive-hb163.html",
    lastUpdated: "Sep 11, 2026"
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
    caseNumber: "CASE 2026-197",
    grade: "D",
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
    caseNumber: "CASE 2025-207",
    grade: "F",
    bill: "S.B. 207",
    year: "2025",
    title: "The State Took the Fee Before the County Could Charge It",
    summary: "Duchesne County spent over a year building its own road-impact fee on oil and gas drilling. The sponsoring senator's own wife told the county's hearing his bill would make it unnecessary — and the enacted law bars counties from charging such a fee permanently, while the gas tax rate meant to replace it was cut 75% in the same committee vote that dropped the ban's own expiration date.",
    tags: ["Severance Tax", "Uintah Basin", "Local Power", "Duchesne County"],
    status: "law",
    voteLine: "Senate 22–3–4 · House 69–0–6 · Senate concurred 25–0–4 · Signed Mar 25, 2025",
    link: "weber-hive-sb207.html",
    lastUpdated: "Sep 16, 2026"
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
    caseNumber: "CASE 2026-236-BSW",
    grade: "D",
    bill: "H.B. 236 (2026)",
    year: "2026",
    title: "Bait-and-Switch: The Tax Comparison That Got Quietly Dropped",
    summary: "Early versions of \"Truth in Taxation Amendments\" required taxing entities to build two budgets — one without a proposed tax increase, one with — proving the increase was actually needed. Between the first and second substitutes, that forced comparison was replaced with a one-way disclosure that never shows what the entity could do without the increase.",
    tags: ["Property Tax", "Truth in Taxation", "Bait-and-Switch"],
    status: "law",
    voteLine: "Floor vote counts not yet confirmed",
    link: "weber-hive-hb236.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-242",
    grade: "D",
    bill: "S.B. 242",
    year: "2026",
    title: "The Bill Behind the Tax — Transportation Amendments",
    summary: "A wide-ranging transit bill became the enabling statute for Weber County's new 0.2% sales tax, handed UDOT permanent control over Salt Lake City street projects over sustained organized opposition, and quietly stripped a tow-truck consumer-privacy protection via an amendment whose own summary never disclosed the removal.",
    tags: ["Transportation", "Privacy", "Weber County Sales Tax", "Local Control"],
    status: "law",
    voteLine: "House 55–14–6 · Senate concurred 18–9–2 · Signed Mar 25, 2026",
    link: "weber-hive-sb242.html"
  },
{
    caseNumber: "CASE 2026-249",
    grade: "B-",
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
    caseNumber: "CASE 2026-254",
    grade: "D",
    bill: "S.B. 254",
    year: "2026",
    title: "Renamed, Recut, and Redirected in Nine Hours",
    summary: "A critical-minerals bill passed both chambers' floors under one name and one set of numbers — then, in a roughly nine-hour window the same day, was retitled, had its tax-credit caps cut, and had its funding stream redirected to a broader account, without ever going back through a floor vote on what actually changed.",
    tags: ["Critical Minerals", "Tax Increment", "Mining Industry", "Process Concern", "Bait-and-Switch"],
    status: "law",
    voteLine: "Senate Committee 4–1–2 · Senate 28–1–0 · House Committee 9–0–5 · House 60–12–3",
    link: "weber-hive-sb254.html",
    lastUpdated: "Sep 17, 2026"
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
    caseNumber: "CASE 2026-273-BSW",
    grade: "D",
    bill: "H.B. 273 (2026)",
    year: "2026",
    title: "Bait-and-Switch: Loosening the Classroom Tech Standard From the Inside",
    summary: "The standard for what counts as approved classroom instructional technology was weakened via a floor amendment from the bill's own Senate sponsor — from software \"designed specifically for instructional use\" to merely \"demonstrated to have significant educational value,\" opening the door to general-purpose AI tools the bill was otherwise meant to guardrail.",
    tags: ["Education", "AI Policy", "Bait-and-Switch"],
    status: "law",
    voteLine: "House Cmte 10-0-5 · House 68-1-6 · Senate Cmte 3-2-2 · Senate 17-9-3 · House concurred 62-6-7 · Signed Mar 18, 2026",
    link: "weber-hive-hb273.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-286",
    grade: "F",
    bill: "H.B. 286",
    year: "2026",
    title: "The Bill the White House Helped Kill — AI Transparency Act",
    summary: "A bipartisan AI transparency and child-safety bill passed committee 8-0-2 with zero no votes — then a one-line White House letter arrived, and it died without a single recorded vote against it. The Legislature's own Federalism Commission said nothing.",
    tags: ["Federalism", "AI Policy", "Process Concern", "Child Safety"],
    status: "failed",
    voteLine: "Committee 8–0–2 favorable · Circled Feb 5 · Enacting clause struck 11:59 PM Mar 6, 2026",
    link: "weber-hive-hb286.html",
    pinned: true
  },
{
    caseNumber: "CASE 2025-333",
    grade: "D",
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
    caseNumber: "CASE 2026-349",
    grade: "B",
    bill: "H.B. 349",
    year: "2026",
    title: "The Loan Program That Got Downgraded to a Suggestion",
    summary: "As introduced, this bill would have let the state loan real money to build or expand dam and reservoir capacity, with repayment terms and independent review. A substitute stripped all of that to a nonbinding recommendation — and even that watered-down version still died at 11:59 p.m. without ever reaching a Senate floor vote.",
    tags: ["Water Infrastructure", "Process Concern", "Died in Session", "Killed at Midnight"],
    status: "failed",
    voteLine: "House Committee 11–0–3 · House 63–1–11 · Senate Committee 4–0–3 · Enacting clause struck 11:59 PM Mar 6, 2026",
    link: "weber-hive-hb349.html",
    lastUpdated: "Sep 11, 2026"
  },
{
    caseNumber: "CASE 2026-378",
    grade: "D",
    bill: "H.B. 378",
    year: "2026",
    title: "The Dust Rule With No Rules Left",
    summary: "The introduced bill required every dust-producing facility to operate under an approved control plan and imposed a mandatory compliance fee with real enforcement. What became law kept only a public-signage requirement and an optional fee the state isn't required to ever charge.",
    tags: ["Air Quality", "Aggregate Industry", "Process Concern", "Enforcement Gap"],
    status: "law",
    voteLine: "House Committee 7–1–4 · House 71–2–2 · Senate 26–0–3 · Signed Mar 25, 2026",
    link: "weber-hive-hb378.html",
    lastUpdated: "Sep 11, 2026"
  },
{
    caseNumber: "CASE 2024-373-BSW",
    grade: "D",
    bill: "H.B. 392 (2017) + H.B. 373 (2024)",
    year: "2024",
    title: "Bait-and-Switch: Repealing the Board He Helped Create",
    summary: "H.B. 392 (2017) created a balanced science/industry/NGO Air Quality Policy Advisory Board; Sen. Scott Sandall was one of 38 co-sponsors. Seven years later he personally carried H.B. 373, repealing that same board and shifting pollution-control rulemaking to the industry-aligned Board of Oil, Gas and Mining.",
    tags: ["Air Quality", "Environmental Statutes", "Bait-and-Switch"],
    status: "law",
    voteLine: "H.B. 392: House 72-0-3 · Senate 21-5-3 · Signed Mar 20, 2017 — H.B. 373: House 65-2-8 · Senate 20-6-3 · Signed Mar 13, 2024",
    link: "weber-hive-hb373.html",
    lastUpdated: "Sep 17, 2026"
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
    caseNumber: "CASE 2026-475-BSW",
    grade: "D",
    bill: "H.B. 475 (2026)",
    year: "2026",
    title: "Bait-and-Switch: The Oversight Work Group That Vanished Two Minutes Before Passage",
    summary: "Created an economic-development work group with named oversight seats, then had those seats quietly stripped in a floor substitute adopted just before final passage.",
    tags: ["Economic Development", "Oversight", "Bait-and-Switch", "Process Concern"],
    status: "law",
    voteLine: "See case-file page for full vote chain",
    link: "weber-hive-hb475.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2023-491-BSW",
    grade: "F",
    bill: "H.B. 491 (2023)",
    year: "2023",
    title: "Bait-and-Switch: The Great Salt Lake Bill That Helped Its Own Sponsor",
    summary: "Created the Great Salt Lake Commissioner position and a new GRAMA exemption for the Commissioner's water-related records — added in the Senate substitute Sen. Scott Sandall personally moved, alongside a $40M-to-$10M cut to the bill's own appropriation. The exemption took effect 56 days before sponsor Rep. Mike Schultz's own company filed the water-right applications it would go on to shield.",
    tags: ["Great Salt Lake", "Water Rights", "GRAMA Exemption", "Bait-and-Switch"],
    status: "law",
    voteLine: "House Cmte 12–0–2 · Senate Cmte 5–0–3 · Signed Mar 14, 2023",
    link: "weber-hive-hb491.html",
    lastUpdated: "Sep 17, 2026"
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
    caseNumber: "CASE 2026-509",
    grade: "F",
    bill: "H.B. 509",
    year: "2026",
    title: "From Protection to Just a Study",
    summary: "Introduced as \"Wetlands Protection Modifications,\" this bill was narrowed to a study only — scope cut from statewide to the state's largest counties, its acreage baseline and species-impact provisions struck, and a required study on a real wetland-mitigation funding mechanism removed entirely before passage.",
    tags: ["Wetlands", "Environmental Statutes", "Process Concern", "Scope Narrowed"],
    status: "law",
    voteLine: "Signed, effective May 6, 2026",
    link: "weber-hive-hb509.html",
    lastUpdated: "Sep 11, 2026"
  },
{
    caseNumber: "CASE 2026-546",
    grade: "C-",
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
    caseNumber: "CASE 2024-258",
    grade: "D",
    bill: "S.B. 258",
    year: "2024",
    title: "Municipal Incorporation Amendments",
    summary: "Lets as few as one landowner turn their own land into a brand-new town, no county approval required. By 2026, demand for it from Wasatch and Summit counties alone had already doubled the statewide annual cap.",
    tags: ["Municipal Incorporation", "County Authority", "Land Use"],
    status: "law",
    voteLine: "Senate 29–0–0 · House 71–1–3 · Signed Mar 21, 2024",
    link: "weber-hive-sb258.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-510",
    grade: "D",
    bill: "H.B. 510",
    year: "2026",
    title: "Municipal Incorporation Modifications",
    summary: "A bill to give counties real oversight of S.B. 258's fast-track incorporation process was weakened in committee, passed the House 68–0, then failed in the Senate by exactly one vote.",
    tags: ["Municipal Incorporation", "County Authority", "Campaign Finance"],
    status: "failed",
    voteLine: "House 68–0 · Senate 14–12 (failed), Mar 6, 2026",
    link: "weber-hive-hb510.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-492-BSW",
    grade: "C-",
    bill: "H.B. 492",
    year: "2026",
    title: "The Loan That Lost Its Label",
    summary: "An $18 million loan introduced as prison-construction money and a promised merger of two housing boards into one both quietly changed in the same unexplained committee substitute — the loan lost its label, and the merger became a second board instead.",
    tags: ["Housing Finance", "State Boards", "Bait-and-Switch"],
    status: "law",
    voteLine: "House 66–5–4 · Senate 27–0–2 (final substitute) · Signed Mar 25, 2026",
    link: "weber-hive-hb492.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2020-185-BSW",
    grade: "F",
    bill: "S.B. 2001 (2019 2nd Spec.) + H.B. 185 (2020)",
    year: "2020",
    title: "Bait-and-Switch: Repealed Before the Referendum Could Happen",
    summary: "Raised the grocery sales tax from 1.75% to 4.85% without a two-thirds majority, leaving it open to referendum. Once 152,000 signatures came in against a 115,869 threshold, the legislature repealed its own bill via H.B. 185 before signature verification even finished — mooting the vote rather than losing it.",
    tags: ["Tax Policy", "Referendum", "Bait-and-Switch", "Process Concern"],
    status: "law",
    voteLine: "Full floor vote counts not yet confirmed for either bill",
    link: "weber-hive-sb2001-hb185.html",
    lastUpdated: "Sep 17, 2026"
  },
{
    caseNumber: "CASE 2026-225",
    grade: "D",
    bill: "S.B. 225",
    year: "2026",
    title: "The Gallon Cap Nobody Debated",
    summary: "A fixed, statewide 200,000-gallon-per-day water-use limit on tax-incentivized Inland Port development — the only real guardrail in the bill — was dropped for local water-provider discretion and expanded from one city to the whole state, across two substitutes with no recorded committee debate on the change. The bill's only supporter on record leads the data-center project the new standard directly applies to.",
    tags: ["Water Rights", "Inland Port Authority", "MIDA/UIPA Family", "Tax Increment", "Process Concern", "Great Salt Lake"],
    status: "law",
    voteLine: "Senate Cmte 3–0–3 → 5–0–1 · Senate 20–5–4 · House Cmte 9–0–1 → 8–1–1 · House 67–2–6 → reconsidered, 57–10–8 · Senate concurred 19–8–2 · Signed Mar 18, 2026",
    link: "weber-hive-sb225.html",
    lastUpdated: "Sep 19, 2026"
  }
];
