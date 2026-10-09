// CONTENT MANAGEMENT: edit this file; no layout changes are needed.
// Categories: news, operations, costing, scaling, hygiene.
// Articles: keep IDs/slugs unique and permanent. Dates are YYYY-MM-DD or null
// for undated historical content. New dated articles sort newest first;
// undated articles retain their array order. Only status: "published" is shown;
// future-dated articles and drafts stay hidden until their publication date.
// body is an array of plain-text paragraphs. source is null or { name, url }.
// Add six November records using the same fields as an existing article, with
// actual publication dates, your approved copy, and existing/new image paths.
// Set status: "draft" while preparing them, then "published" when approved.

window.ARTICLES = [
  {
    "id": "insight-001",
    "slug": "more-sales-less-profit-the-mcdonald-s-india-warning",
    "title": "More Sales, Less Profit: The McDonald’s India Warning",
    "category": "news",
    "publicationDate": null,
    "summary": "Westlife Foodworld's FY25 restaurant revenue rose 4%, yet annual profit fell. More sales did not automatically create more bottom-line value.",
    "why": "Westlife Foodworld's FY25 restaurant revenue rose 4%, yet annual profit fell. More sales did not automatically create more bottom-line value.",
    "insight": "Track outlet contribution after food, labour, rent, discounts, delivery and marketing—not sales growth alone.",
    "body": [],
    "image": "./images/mcdonalds-india-margin-warning.jpg",
    "imageAlt": "News: More Sales, Less Profit: The McDonald’s India Warning",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-002",
    "slug": "how-kfc-and-pizza-hut-improved-profit-while-costs-increased",
    "title": "How KFC and Pizza Hut Improved Profit While Costs Increased",
    "category": "news",
    "publicationDate": null,
    "summary": "Yum China's 2025 results show restaurant profit and margins improving through sales growth and operating efficiencies, even with higher delivery costs.",
    "why": "Yum China's 2025 results show restaurant profit and margins improving through sales growth and operating efficiencies, even with higher delivery costs.",
    "insight": "Cost pressure needs a system response: simplify work, improve throughput and protect the menu mix instead of making random cuts.",
    "body": [],
    "image": "./images/kfc-pizza-hut-cost-control.jpg",
    "imageAlt": "News: How KFC and Pizza Hut Improved Profit While Costs Increased",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-003",
    "slug": "protect-profitable-customers-not-only-high-sales-customers",
    "title": "Protect Profitable Customers, Not Only High-Sales Customers",
    "category": "operations",
    "publicationDate": null,
    "summary": "A large bill can still carry heavy discounts, costly customisation, long table time or expensive delivery fees that reduce its real contribution.",
    "why": "A large bill can still carry heavy discounts, costly customisation, long table time or expensive delivery fees that reduce its real contribution.",
    "insight": "Review contribution by customer channel and order type. Revenue is useful, but repeatable net profit deserves protection.",
    "body": [],
    "image": "./images/online-aggregator-commission.jpg",
    "imageAlt": "Operations: Protect Profitable Customers, Not Only High-Sales Customers",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-004",
    "slug": "supplier-rate-comparison-must-become-a-daily-system",
    "title": "Supplier Rate Comparison Must Become a Daily System",
    "category": "operations",
    "publicationDate": null,
    "summary": "Rates, pack sizes, quality and availability can change quickly. An occasional comparison allows small purchasing leaks to continue unnoticed.",
    "why": "Rates, pack sizes, quality and availability can change quickly. An occasional comparison allows small purchasing leaks to continue unnoticed.",
    "insight": "Maintain a daily rate sheet for priority items and compare like-for-like quality, yield, credit terms and delivery reliability.",
    "body": [],
    "image": "./images/delivery-demand-forecasting.jpg",
    "imageAlt": "Operations: Supplier Rate Comparison Must Become a Daily System",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-005",
    "slug": "the-0-73-margin-warning",
    "title": "The 0.73% Margin Warning",
    "category": "costing",
    "publicationDate": null,
    "summary": "On sales of ₹31,505, a gross profit of only ₹231 is approximately 0.73%. One small unplanned cost can erase the entire return.",
    "why": "On sales of ₹31,505, a gross profit of only ₹231 is approximately 0.73%. One small unplanned cost can erase the entire return.",
    "insight": "Do not approve a sale on turnover alone. Check recipe cost, packaging, discount, tax and fulfilment cost before confirming the price.",
    "body": [],
    "image": "./images/portion-control-profit.jpg",
    "imageAlt": "Costing: The 0.73% Margin Warning",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-006",
    "slug": "landing-cost-is-more-than-the-supplier-s-invoice-rate",
    "title": "Landing Cost Is More Than the Supplier’s Invoice Rate",
    "category": "costing",
    "publicationDate": null,
    "summary": "Freight, handling, tax treatment, breakage, trimming loss, storage and credit terms can make the lowest quoted rate the costlier purchase.",
    "why": "Freight, handling, tax treatment, breakage, trimming loss, storage and credit terms can make the lowest quoted rate the costlier purchase.",
    "insight": "Compare suppliers on usable landed cost per unit, not invoice price. Buying decisions should reflect what finally reaches the plate.",
    "body": [],
    "image": "./images/central-kitchen-standardization.jpg",
    "imageAlt": "Costing: Landing Cost Is More Than the Supplier’s Invoice Rate",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-007",
    "slug": "a-restaurant-website-should-be-an-operational-tool",
    "title": "A Restaurant Website Should Be an Operational Tool",
    "category": "scaling",
    "publicationDate": null,
    "summary": "A useful website can keep menus, hours, locations, reservations and direct-order paths accurate while reducing repeated guest questions.",
    "why": "A useful website can keep menus, hours, locations, reservations and direct-order paths accurate while reducing repeated guest questions.",
    "insight": "Treat the website as a live service counter: assign ownership, update information quickly and measure enquiries, bookings and direct orders.",
    "body": [],
    "image": "./images/boba-bhai-qsr-expansion.jpg",
    "imageAlt": "Scaling: A Restaurant Website Should Be an Operational Tool",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-008",
    "slug": "standardisation-must-come-before-expansion",
    "title": "Standardisation Must Come Before Expansion",
    "category": "scaling",
    "publicationDate": null,
    "summary": "A second outlet multiplies unclear recipes, inconsistent training and purchasing gaps. Growth exposes weak systems rather than fixing them.",
    "why": "A second outlet multiplies unclear recipes, inconsistent training and purchasing gaps. Growth exposes weak systems rather than fixing them.",
    "insight": "Document recipes, yields, service steps, checks and training first. Expand only when another team can repeat the same result.",
    "body": [],
    "image": "./images/olive-garden-india-expansion.jpg",
    "imageAlt": "Scaling: Standardisation Must Come Before Expansion",
    "source": null,
    "status": "published"
  },
  {
    "id": "insight-009",
    "slug": "a-cleaning-checklist-is-not-a-complete-hygiene-system",
    "title": "A Cleaning Checklist Is Not a Complete Hygiene System",
    "category": "hygiene",
    "publicationDate": null,
    "summary": "A ticked sheet cannot confirm correct chemicals, dilution, contact time, food temperatures, handwashing or action on repeated failures.",
    "why": "A ticked sheet cannot confirm correct chemicals, dilution, contact time, food temperatures, handwashing or action on repeated failures.",
    "insight": "Combine checklists with standards, training, records, verification and corrective action. Hygiene control needs evidence, not only signatures.",
    "body": [],
    "image": "./images/hygiene-audit-sop.jpg",
    "imageAlt": "Hygiene: A Cleaning Checklist Is Not a Complete Hygiene System",
    "source": null,
    "status": "published"
  }
];

// WEEKLY SPOTLIGHTS: append records here, retaining historical entries.
// Schedule YYYY-MM-DD startDate (Monday) and endDate (the following Sunday).
// Dates use Asia/Kolkata. Drafts never display. If a week has no entry, the
// most recently started published feature remains active. This undated legacy
// feature is the fallback until the first scheduled published entry starts.
// Example four consecutive November 2026 weeks (no content scheduled yet):
// 2026-11-02 to 2026-11-08; 2026-11-09 to 2026-11-15;
// 2026-11-16 to 2026-11-22; 2026-11-23 to 2026-11-29.
// Use unique IDs, title, location, category, dates, image, imageAlt, description
// (plain-text paragraph array), takeaway, source: null or { name, url }, and
// status: "draft" / "published". displayDate is optional for historical labels.
window.WEEKLY_SPOTLIGHT = [
  {
    "id": "shinta-mani-mustang",
    "title": "Shinta Mani Mustang: Luxury Built Around Place",
    "location": "Jomsom, Mustang, Nepal",
    "category": "Luxury Hospitality",
    "startDate": null,
    "endDate": null,
    "displayDate": "July 2026",
    "image": "./images/shinta-mani-mustang-place.jpg",
    "imageAlt": "Shinta Mani Mustang: Luxury Built Around Place",
    "description": [
      "Located above Jomsom in Nepal’s remote Mustang region, Shinta Mani Mustang is a 29-suite Himalayan retreat designed by renowned architect Bill Bensley. Surrounded by dramatic mountains and the ancient culture of the former Kingdom of Mustang, the property offers guests an exceptional sense of privacy, discovery and connection to its destination.",
      "Its design draws inspiration from traditional Tibetan architecture while combining understated luxury with highly personalised service. Instead of depending only on expensive decoration, the hotel uses its natural surroundings, architecture, cultural identity and thoughtful hospitality to create a complete guest experience.",
      "Carefully curated all-inclusive experiences introduce guests to local villages, ancient monasteries, remote landscapes, regional cuisine and Mustang’s distinctive cultural heritage. These experiences allow visitors to understand and connect with the destination rather than simply stay in a luxury room.",
      "The hotel’s strength comes from the consistency of its complete hospitality concept. Its location, design, local culture, personalised service and meaningful guest experiences all communicate one connected story.",
      "Shinta Mani Mustang was ranked No. 1 by Robb Report in its 50 Greatest Luxury Hotels on Earth 2026."
    ],
    "takeaway": "Luxury becomes distinctive when architecture, local culture, landscape and service tell one consistent story. Place should shape the guest journey, not remain a decorative theme.",
    "source": null,
    "status": "published"
  }
];
window.WA_PHONE = "919867378209";
window.WA_MESSAGE = "Hi, I saw your Hotel & QSR Operations Insights page. I want help with kitchen SOP / costing / workflow. Let's connect.";
