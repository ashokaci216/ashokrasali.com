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
  },
  {
    "id": "insight-010",
    "slug": "dominos-india-what-4-1-percent-same-store-growth-really-means",
    "title": "Domino’s India: What 4.1% Same-Store Growth Really Means",
    "category": "news",
    "publicationDate": "2026-10-09",
    "summary": "Domino’s India reported 4.1% like-for-like sales growth during the September quarter, while its parent company continued expanding its store network. What can restaurant operators learn from these numbers?",
    "why": "Opening new outlets can increase total revenue, but the performance of existing outlets reveals another important side of business growth.",
    "insight": "Track same-store sales, average order value, customer transactions and profitability separately from new-store expansion.",
    "body": [
      "The story behind the numbers",
      "Jubilant FoodWorks, the operator of Domino’s Pizza in India, reported provisional consolidated revenue of approximately ₹2,608.7 crore for the quarter ended 30 September 2026, an increase of 11.9% year on year.",
      "During the same quarter, Domino’s India recorded 4.1% like-for-like sales growth and added 88 stores, taking its India network to 2,601 outlets. Across its group businesses, Jubilant added 108 net stores.",
      "These numbers reveal two different sources of growth: expansion through additional locations and improved sales performance at comparable existing outlets.",
      "Like-for-like sales growth is important because total sales can increase simply by opening more restaurants. An operator needs to understand whether established outlets are also performing better.",
      "What smaller restaurant businesses can learn",
      "A business operating three restaurants should avoid measuring performance only by combined monthly revenue.",
      "Imagine that total sales rise from ₹30 lakh to ₹40 lakh after opening another branch. That increase looks positive, but it does not reveal whether the original outlets improved, remained stable or declined.",
      "The management report should therefore distinguish sales generated by new outlets, comparable sales at existing outlets, average order value, number of customer orders, food cost and operating profit, and dine-in, takeaway and delivery contribution.",
      "These measures answer different questions. Sales growth shows whether revenue is increasing. Order volume indicates demand. Average order value helps explain customer spending. Profitability indicates how much financial benefit the business is actually retaining.",
      "Growth does not automatically mean profitability",
      "Restaurant operators must also consider rentals, staffing, food cost, delivery expenses, marketing, discounts and investment in new stores.",
      "A rapidly expanding chain may need to invest significantly before new locations reach stable sales and profit levels.",
      "Jubilant’s October business update was provisional and did not provide a complete assessment of quarterly profitability. It would therefore be incorrect to conclude that revenue growth alone proves margin improvement.",
      "Practical takeaway",
      "Every restaurant operator should prepare two separate monthly reports: a growth report covering sales, order count, average order value and outlet-wise performance; and a profitability report covering food cost, staffing, occupancy costs, delivery charges, discounts and operating contribution.",
      "Opening more outlets can help a brand grow. Making every existing outlet stronger helps make that growth more sustainable."
    ],
    "image": "./images/october-pizza-kitchen.jpg",
    "imageAlt": "Representative photograph of a chef beside pizza ovens in a restaurant kitchen; not a Domino’s outlet.",
    "source": {
      "name": "Reuters, 7 October 2026 — report by Payel Das, republished by MarketScreener",
      "url": "https://www.marketscreener.com/news/india-s-jubilant-foodworks-posts-higher-quarterly-revenue-as-domino-s-sales-pick-up-ce785dded88ff02d"
    },
    "imageCredit": {
      "name": "Yusuf Çelik / Pexels",
      "url": "https://www.pexels.com/photo/chef-in-restaurant-kitchen-with-pizza-ovens-32293375/"
    },
    "status": "published"
  },
  {
    "id": "insight-011",
    "slug": "indias-frozen-food-industry-why-qsr-suppliers-are-expanding",
    "title": "India’s Frozen Food Industry: Why QSR Suppliers Are Expanding",
    "category": "news",
    "publicationDate": "2026-10-09",
    "summary": "HyFun Foods is preparing for significant business expansion as India’s demand for frozen food grows across QSR chains, retail and quick commerce.",
    "why": "Frozen food suppliers are becoming an increasingly important part of restaurant operations, affecting consistency, labour efficiency and inventory planning.",
    "insight": "Evaluate frozen-food suppliers using landed cost, product yield, cooking performance, availability and quality consistency—not invoice price alone.",
    "body": [
      "Frozen food moves closer to the centre of restaurant operations",
      "India’s organised frozen-food sector is drawing investment as restaurants, retail stores and quick-commerce platforms expand.",
      "In October 2026, Reuters reported that HyFun Foods, which supplies major quick-service restaurant brands, was planning an initial public offering of up to ₹2,000 crore by late 2028.",
      "The proposed fundraising is intended to support capacity expansion and greater participation in India’s domestic market. The plans remain forward-looking; the IPO has not yet taken place.",
      "This development is relevant to restaurant operators because frozen products are no longer limited to convenience snacks. They are used extensively in commercial kitchens for speed, consistency, menu planning and reducing preparation work.",
      "Why restaurants purchase frozen products",
      "Consider products such as French fries, potato snacks, vegetables, cheese-based preparations and ready-to-cook appetisers.",
      "Preparing every product from raw ingredients can require additional staff time, equipment, storage, preparation space and quality supervision.",
      "A suitable frozen product can simplify repetitive work, particularly during peak service hours.",
      "However, a frozen product is not automatically a better or cheaper solution. Its value depends on product quality, cooking yield, storage requirements and the actual cost per usable serving.",
      "Compare cost per usable portion",
      "Suppose Supplier A offers a product at ₹200 per kilogram while Supplier B charges ₹215 per kilogram.",
      "If Supplier A provides 16 acceptable portions and Supplier B provides 19 acceptable portions, the approximate product cost per portion becomes:",
      "Supplier A: ₹12.50. Supplier B: ₹11.32.",
      "In this illustrative example, the more expensive product by kilogram is cheaper per usable portion.",
      "The comparison should also account for oil absorption, breakage, wastage, handling, packaging and consistent serving size where relevant.",
      "Cold-chain reliability remains essential",
      "Frozen products require appropriate transportation, receiving and storage controls.",
      "A low purchase price is not valuable if the goods arrive in poor condition, experience temperature abuse or produce inconsistent results after cooking.",
      "Restaurant purchasing teams should examine product specifications and pack sizes, receiving temperature and packaging condition, shelf life and batch identification, cooking instructions and actual yield, supplier fill rate and delivery reliability, and complaint handling and replacement terms.",
      "Practical takeaway",
      "As India’s frozen-food sector grows, restaurant operators may gain access to a broader range of products and suppliers.",
      "The best purchasing decision is not necessarily the lowest quoted rate. It is the supplier and product combination that delivers reliable quality, a competitive cost per serving and consistent kitchen performance."
    ],
    "image": "./images/october-french-fries.jpg",
    "imageAlt": "Representative photograph of cooked French fries; not a HyFun product or facility.",
    "source": {
      "name": "Reuters, 6 October 2026 — republished by Business Recorder",
      "url": "https://www.brecorder.com/news/40442859/mcdonalds-supplier-hyfun-plans-208-million-india-ipo"
    },
    "imageCredit": {
      "name": "Engin Akyurt / Pexels",
      "url": "https://www.pexels.com/photo/macro-shot-of-french-fries-8272619/"
    },
    "status": "published"
  },
  {
    "id": "insight-012",
    "slug": "the-15-minute-daily-restaurant-control-system",
    "title": "The 15-Minute Daily Restaurant Control System",
    "category": "operations",
    "publicationDate": "2026-10-09",
    "summary": "A restaurant does not need to wait until month-end to discover operating problems. A short daily review can identify exceptions early.",
    "why": "Small problems in sales, wastage, purchasing and customer service can accumulate when management checks them too late.",
    "insight": "Create a simple daily dashboard showing sales, order count, food wastage, stock exceptions, complaints and pending payments.",
    "body": [
      "Why a daily review is valuable",
      "Many restaurant managers spend the entire day handling staff, customers, suppliers and service problems.",
      "Important numbers may only receive attention at the end of the week or month. By then, incorrect portions, repeated stock differences, delayed collections or rising waste may have already affected the business.",
      "A simple 15-minute control meeting can create a regular management habit.",
      "The purpose is not to review every transaction. It is to identify unusual results and decide who will act on them.",
      "A suggested 15-minute routine",
      "Minutes 1–3: Sales. Review yesterday’s total sales, order count, average order value and sales by channel. Compare performance with the previous comparable day and the operating target.",
      "Minutes 4–6: Food cost and wastage. Review excessive preparation, expired products, returned food, complimentary items and unexpected usage. Look for repeated issues rather than treating every entry as a major incident.",
      "Minutes 7–9: Inventory and purchasing. Check important stock shortages, delayed supplier deliveries, price changes and unusual stock variances. Focus especially on high-value and fast-moving products.",
      "Minutes 10–12: Customer experience. Review complaints, cancellations, delayed service, incorrect orders and online ratings requiring a response.",
      "Minutes 13–15: Payments and action. Review urgent supplier payments, outstanding customer collections and unresolved tasks. Assign responsibility and a deadline for each important issue.",
      "Keep the dashboard small",
      "An effective control sheet does not require sophisticated software.",
      "A spreadsheet with yesterday’s results, the previous comparable day, targets and a short notes column may be sufficient.",
      "For example: sales below target—investigate order count and average order value; high wastage—check preparation planning; repeated item shortages—review purchasing and reorder levels; delivery complaints—inspect packing, dispatch and handover; payment delays—confirm collection responsibility.",
      "Every flagged item should lead to an action, not merely another report.",
      "Daily and monthly management are different",
      "Daily reviews help detect exceptions. Monthly reports reveal larger trends, profitability, recurring issues and performance against budgets.",
      "Both are necessary. A 15-minute meeting cannot replace stock audits, financial reconciliation, recipe costing or operational training.",
      "Practical takeaway",
      "Start with six daily indicators and one action log. Make the meeting consistent, short and focused on decisions.",
      "A restaurant becomes easier to manage when problems are identified early and responsibilities are clearly assigned."
    ],
    "image": "./images/october-daily-control.jpg",
    "imageAlt": "Representative photograph of two people reviewing documents and a tablet in a restaurant.",
    "source": {
      "name": "Ashok Rasali — original operational guidance",
      "url": null
    },
    "imageCredit": {
      "name": "Gustavo Fring / Pexels",
      "url": "https://www.pexels.com/photo/businessmen-looking-on-tablet-and-documents-in-restaurant-6284909/"
    },
    "status": "published"
  },
  {
    "id": "insight-013",
    "slug": "the-hidden-cost-of-just-10-extra-grams",
    "title": "The Hidden Cost of Just 10 Extra Grams",
    "category": "costing",
    "publicationDate": "2026-10-09",
    "summary": "A small extra serving may seem harmless, but repeated across hundreds of orders it can increase monthly food cost.",
    "why": "Portion inconsistency creates a cost difference that is difficult to notice in individual orders but can become significant at volume.",
    "insight": "Standardise recipe quantities, train kitchen teams and compare actual ingredient usage against expected consumption.",
    "body": [
      "Small portions can create large differences",
      "A kitchen may have a standard recipe requiring 100 grams of a particular ingredient. During service, staff may repeatedly serve 110 grams because they are estimating by eye or using an inconsistent scoop.",
      "The additional 10 grams might appear insignificant. However, the financial effect depends on the number of portions sold and the ingredient’s actual cost.",
      "A simple costing example",
      "Assume standard ingredient quantity: 100 grams; actual quantity served: 110 grams; ingredient cost: ₹300 per kilogram; monthly portions sold: 1,500.",
      "The additional quantity is 10 grams × 1,500 portions = 15,000 grams, or 15 kilograms.",
      "Additional monthly food cost: 15 kilograms × ₹300 = ₹4,500.",
      "Over 12 months, repeating the same variation could mean approximately ₹54,000 in additional ingredient cost.",
      "This is an illustrative calculation, not a measured loss from any particular restaurant. The amount would vary with sales, ingredient prices and actual kitchen performance.",
      "Portions should be measured in usable quantities",
      "Raw weight and cooked weight are not always the same. A food-cost specification may need to account for peeling, trimming, cooking loss, moisture changes or other preparation yields.",
      "For example, a recipe requiring 150 grams of cooked protein may need a higher raw quantity depending on the ingredient and cooking method. A useful recipe standard therefore identifies which quantity is being measured.",
      "How to build portion control",
      "Begin with the best-selling and highest-cost menu items.",
      "Prepare a clear recipe specification containing ingredient names and quantities, raw or cooked measurement basis, expected preparation yield, standard plating weight, serving utensils and presentation reference, and approved substitutions and tolerances.",
      "Introduce calibrated weighing scales during recipe setup, training and periodic verification. Where suitable, use measured scoops, ladles or pre-portioned ingredients during service.",
      "The objective is operational consistency, not slowing down every order.",
      "Compare theoretical and actual usage",
      "If sales records indicate that 1,500 portions should consume 150 kilograms of an ingredient, but actual recorded consumption is 165 kilograms, management should investigate the 15-kilogram difference.",
      "Possible explanations include over-portioning, wastage, preparation yield, stock-count errors, staff meals or incomplete records. Do not automatically label the entire difference as theft or wastage.",
      "Practical takeaway",
      "Control the extra 10 grams before it becomes a recurring monthly expense. Recipe standards, training, accurate inventory and periodic checks protect both consistency and food cost.",
      "Customers should receive the same promised portion each time they order."
    ],
    "image": "./images/october-portion-weighing.jpg",
    "imageAlt": "Representative photograph of a hand weighing a bowl of ingredients on a kitchen scale.",
    "source": {
      "name": "Ashok Rasali — original illustrative calculations",
      "url": null
    },
    "imageCredit": {
      "name": "Ksenia Chernaya / Pexels",
      "url": "https://www.pexels.com/photo/a-person-weighing-the-ingredients-on-the-bowl-7299855/"
    },
    "status": "published"
  },
  {
    "id": "insight-014",
    "slug": "why-independent-restaurants-should-own-their-ordering-channel",
    "title": "Why Independent Restaurants Should Own Their Ordering Channel",
    "category": "scaling",
    "publicationDate": "2026-10-09",
    "summary": "A direct ordering website can help a restaurant build customer relationships and control its menu, promotions and repeat-order experience.",
    "why": "Relying entirely on third-party platforms can limit control over customer communication and make the business dependent on external commercial terms.",
    "insight": "Start with a reliable mobile menu, clear prices, delivery rules, WhatsApp ordering and a simple order-management workflow.",
    "body": [
      "A restaurant website can do more than display a menu",
      "Many independent restaurants have a website containing photographs, an address and a telephone number.",
      "That is useful, but a website can also become part of the daily ordering operation. Customers can browse categories, select dishes, view a cart and send an order directly to the restaurant.",
      "For a small business, the first version does not necessarily need an expensive application or complex software infrastructure.",
      "Start with a practical ordering journey",
      "A simple direct-order system can follow this process: customer opens the mobile website; selects food items and quantities; cart calculates item totals and applicable charges; customer enters contact details and chooses pickup or delivery; restaurant receives the order request through WhatsApp; staff confirm availability, order details, payment and dispatch.",
      "The key requirement is reliability. A beautiful interface is not enough if customers cannot understand the checkout process or the restaurant cannot manage incoming orders.",
      "Understand the limitations",
      "A WhatsApp checkout is not the same as a fully automated order-management platform.",
      "A prepared message does not prove that the customer sent it. A sent message does not automatically mean the restaurant accepted the order.",
      "Customers should receive clear instructions, and the restaurant should have a confirmation process. Payment verification, stock availability, delivery coverage and order acceptance need clearly defined rules.",
      "Direct ordering and aggregators can coexist",
      "Large delivery platforms provide customer discovery, marketing and delivery infrastructure. A direct website provides another way to serve customers who already know the restaurant and want to reorder.",
      "The purpose is not to assume that direct delivery is always cheaper.",
      "Compare the full economics of each channel, including platform commissions and promotional expenses, restaurant-funded discounts, payment processing charges, rider cost and delivery distance, packaging, customer-support time, and marketing and repeat-order acquisition.",
      "Direct orders also create responsibilities for privacy, customer support, refunds and delivery coordination.",
      "Build in stages",
      "Stage 1: Mobile-friendly menu with WhatsApp ordering.",
      "Stage 2: Order recording, customer details and a simple dashboard.",
      "Stage 3: Delivery-zone controls, repeat-order features and better reporting.",
      "Stage 4: Integrated payments, kitchen workflows and automated order-status tracking where justified.",
      "Each stage should solve a real operational problem.",
      "Practical takeaway",
      "A direct ordering channel gives independent restaurants an additional customer touchpoint and greater flexibility. Start small, test real orders, measure service quality and expand only when the workflow is dependable.",
      "A restaurant website should support operations, not create extra confusion for customers or staff."
    ],
    "image": "./images/october-direct-ordering.jpg",
    "imageAlt": "Representative photograph of a person using a smartphone to order food online.",
    "source": {
      "name": "Ashok Rasali — original operational guidance",
      "url": null
    },
    "imageCredit": {
      "name": "Mizuno K / Pexels",
      "url": "https://www.pexels.com/photo/man-ordering-food-on-smartphone-13432282/"
    },
    "status": "published"
  },
  {
    "id": "insight-015",
    "slug": "cold-chain-control-food-safety-starts-before-cooking",
    "title": "Cold-Chain Control: Food Safety Starts Before Cooking",
    "category": "hygiene",
    "publicationDate": "2026-10-09",
    "summary": "Receiving, storing and handling chilled or frozen ingredients correctly is essential to food safety and reliable kitchen performance.",
    "why": "Temperature abuse during transport, unloading or storage can create food-safety risks even before preparation begins.",
    "insight": "Define receiving-temperature limits, check packaging and expiry dates, maintain storage records and train staff on corrective action.",
    "body": [
      "Food safety begins at receiving",
      "A clean kitchen cannot compensate for unsafe ingredients arriving from a supplier.",
      "Chilled and frozen products need suitable handling throughout transportation, receiving, storage and preparation. Temperature checks are especially important for higher-risk foods.",
      "FSSAI’s food-storage and transportation guidance identifies receiving checks for high-risk chilled foods at or below 5°C and frozen foods at or below −18°C, with rejection of deliveries outside the applicable limits.",
      "Product-specific instructions and relevant legal requirements must also be followed.",
      "What should be checked during delivery?",
      "Receiving staff should verify supplier and product identity, packaging condition and seals, manufacturing and expiry information, required storage temperatures, actual receiving temperature, signs of damage or possible thawing, quantity and batch identification.",
      "A receiving record should identify the item, supplier, measured temperature, date, time and person responsible. Where temperature checks are required, use a suitable calibrated thermometer and an appropriate measurement method.",
      "Storage discipline matters",
      "Chilled and frozen items must be moved into suitable storage promptly. Avoid leaving products at room temperature while staff complete paperwork or attend to other deliveries.",
      "Monitor equipment temperatures, maintain appropriate loading levels and ensure that doors close properly.",
      "Products should be stored to reduce cross-contamination, with raw and ready-to-eat foods adequately separated.",
      "Use stock rotation and follow the labelled storage instructions.",
      "Safe thawing requires planning",
      "Frozen food should be thawed according to a validated method and the manufacturer’s instructions. Controlled refrigeration is often appropriate, but procedures depend on the specific food and intended preparation method.",
      "Do not assume that leaving frozen meat or seafood on a kitchen counter is an acceptable routine.",
      "Plan production so safe thawing does not become a last-minute service problem.",
      "What if the temperature is wrong?",
      "Staff should not quietly accept a delivery simply because it is urgently required. The procedure should define when to hold, reject or escalate questionable goods.",
      "A supervisor should assess the situation against the applicable food-safety requirements, product instructions and the business’s food-safety plan.",
      "Document the corrective action and supplier communication.",
      "Practical takeaway",
      "Cold-chain management depends on clear procedures, suitable equipment, accurate measurement and staff accountability.",
      "Check ingredients before accepting them, maintain safe storage conditions and act promptly when something is wrong.",
      "Food safety is a continuous system—from supplier dispatch to the customer’s plate."
    ],
    "image": "./images/october-temperature-check.jpg",
    "imageAlt": "Representative photograph of milk temperature measurement with a digital thermometer; not a cold-storage receiving inspection.",
    "source": {
      "name": "FSSAI — Safe Storage, Distribution & Transportation handbook, receiving guidance",
      "url": "https://fostac.fssai.gov.in/doc/Food%20Safety%20training%20manual%20storage%2C%20transportation%20v2%20-%20June%2014%2C%202017%20with%20checklist.pdf"
    },
    "imageCredit": {
      "name": "Gu Ko / Pexels",
      "url": "https://www.pexels.com/photo/measuring-milk-temperature-with-a-digital-thermometer-32673814/"
    },
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
  },
  {
    "id": "luxury-nature-october-2026",
    "title": "Luxury Hospitality in Nature",
    "location": "",
    "category": "Hospitality & Landscape",
    "startDate": "2026-10-05",
    "endDate": "2026-10-11",
    "image": "./images/spotlight-luxury-nature.jpg",
    "imageAlt": "Palm trees, planted paths and water features in a tropical resort garden; representative editorial photograph.",
    "description": [
      "Luxury in a natural setting begins with room to slow down. A shaded path, a quiet seat beside water and a view framed by planting can make a stay feel generous without filling every corner with decoration. The landscape becomes part of the welcome, giving guests choices about where to pause, explore or spend time together.",
      "Comfort still depends on details that a photograph cannot show: safe walking surfaces, shade at the right hours, well-maintained outdoor furniture and attentive service. Thoughtful hospitality connects these practical needs with the pleasure of being outdoors.",
      "Why it stands out: Gardens and water features create a sequence of small experiences rather than a single impressive view. Their value comes from how comfortably guests can use them.",
      "Image note: This is a representative photograph illustrating the editorial theme, not a feature about a named hotel or resort."
    ],
    "takeaway": "Hospitality insight: Plan outdoor spaces as service areas. Assign responsibility for cleaning, lighting, seating and weather checks, and make access comfortable so the landscape contributes to the stay every day.",
    "source": {
      "name": "Photograph: Kseniya Kobi / Pexels",
      "url": "https://www.pexels.com/photo/garden-resort-with-palm-trees-near-swimming-pool-8159777/"
    },
    "imageCredit": {
      "name": "Kseniya Kobi / Pexels",
      "url": "https://www.pexels.com/photo/garden-resort-with-palm-trees-near-swimming-pool-8159777/"
    },
    "imageStatus": "licensed-representative-photo",
    "status": "published"
  },
  {
    "id": "smart-design-october-2026",
    "title": "Smart Hospitality Design",
    "location": "",
    "category": "Design & Operations",
    "startDate": "2026-10-12",
    "endDate": "2026-10-18",
    "image": "./images/spotlight-smart-design.jpg",
    "imageAlt": "Bright contemporary lobby with a clear central walkway, white seating and indoor plants; representative editorial photograph.",
    "description": [
      "A well-designed hospitality space makes the next step feel obvious. Guests should be able to recognise the entrance, find assistance and move towards their room or table without negotiating furniture or searching for directions. Clear routes and comfortable waiting spaces can make even a compact property feel calm and welcoming.",
      "Smart design also considers the people running the space. Durable finishes, reachable cleaning surfaces, useful storage and sensible placement of equipment reduce avoidable work. A beautiful lobby earns its place when it supports both the guest journey and the daily service routine.",
      "Why it stands out: A clear circulation route and a restrained furniture arrangement let light, space and usability do much of the work. The lesson is practical clarity, rather than adding more facilities.",
      "Image note: This is a representative photograph illustrating the editorial theme, not a feature about a named hotel or resort."
    ],
    "takeaway": "Hospitality insight: Walk through the space as a first-time guest and then as a staff member carrying supplies. Resolve points of confusion, obstruction and repeated backtracking before investing in extra decorative features.",
    "source": {
      "name": "Photograph: Max Vakhtbovych / Pexels",
      "url": "https://www.pexels.com/photo/modern-spacious-lobby-of-luxury-hotel-6758532/"
    },
    "imageCredit": {
      "name": "Max Vakhtbovych / Pexels",
      "url": "https://www.pexels.com/photo/modern-spacious-lobby-of-luxury-hotel-6758532/"
    },
    "imageStatus": "licensed-representative-photo",
    "status": "published"
  },
  {
    "id": "heritage-hospitality-october-2026",
    "title": "Heritage-Inspired Hospitality",
    "location": "",
    "category": "Culture & Guest Experience",
    "startDate": "2026-10-19",
    "endDate": "2026-10-25",
    "image": "./images/spotlight-heritage.jpg",
    "imageAlt": "Traditional Moroccan courtyard with carved arches, patterned tiles and seating, viewed from above; representative editorial photograph.",
    "description": [
      "Heritage can give a hospitality space a vocabulary of its own. Courtyard proportions, carved surfaces, patterned tiles and handmade furnishings invite guests to notice the work of local makers. Used thoughtfully, these details create a sense of continuity between the building, its surroundings and the experience of staying there.",
      "The strongest interpretation goes beyond decoration. Operators can explain how materials are made, work with craftspeople on repairs and introduce regional flavours through food and service. Modern comfort and accessibility should be considered alongside the care of older forms and delicate finishes.",
      "Why it stands out: Repeated arches and tile patterns make the courtyard feel connected at every level. Craft becomes part of the whole space, rather than an isolated display.",
      "Image note: This representative Moroccan courtyard photograph illustrates the editorial theme; the text does not review or describe the operations of the pictured property."
    ],
    "takeaway": "Hospitality insight: Give heritage details an upkeep plan and an accurate story. Record materials, repair contacts and suitable cleaning methods, and help staff explain the craft without inventing history or making unsupported claims.",
    "source": {
      "name": "Photograph: Moussa Idrissi / Pexels",
      "url": "https://www.pexels.com/photo/interior-of-the-riad-palais-sebban-marrakesh-morocco-15531325/"
    },
    "imageCredit": {
      "name": "Moussa Idrissi / Pexels",
      "url": "https://www.pexels.com/photo/interior-of-the-riad-palais-sebban-marrakesh-morocco-15531325/"
    },
    "imageStatus": "licensed-representative-photo",
    "status": "published"
  },
  {
    "id": "design-around-nature-october-2026",
    "title": "Designing Hospitality Around Nature",
    "location": "",
    "category": "Nature & Service Planning",
    "startDate": "2026-10-26",
    "endDate": "2026-11-01",
    "image": "./images/spotlight-nature-design.jpg",
    "imageAlt": "Small cabins in a green clearing framed by tall evergreen trees; representative editorial photograph.",
    "description": [
      "A woodland setting changes how hospitality needs to work. Buildings, paths and places to gather can be arranged to make the surrounding landscape easy to enjoy while giving guests a comfortable base. Views and quiet corners matter, but so do drainage, dependable access and a clear route back after dark.",
      "Designing around nature means planning for changing conditions. Rain, temperature, insects and seasonal maintenance affect what guests can do and how staff deliver service. The appeal of a secluded stay is stronger when those practical needs are anticipated and communicated clearly.",
      "Why it stands out: Small buildings within a green clearing suggest a different pace from a dense urban property. The trees frame the setting and make the relationship between shelter and open space easy to see.",
      "Image note: This is a representative photograph of cabins in a natural setting. It does not identify them as a named hotel or resort, or claim that they operate as guest accommodation."
    ],
    "takeaway": "Hospitality insight: Match the service promise to the setting. Prepare weather alternatives, maintain paths and drainage, plan deliveries and emergency access, and give guests useful guidance before they arrive.",
    "source": {
      "name": "Photograph: Farhaan Mushtaq Parimoo / Pexels",
      "url": "https://www.pexels.com/photo/a-small-cabin-in-the-middle-of-a-forest-26924352/"
    },
    "imageCredit": {
      "name": "Farhaan Mushtaq Parimoo / Pexels",
      "url": "https://www.pexels.com/photo/a-small-cabin-in-the-middle-of-a-forest-26924352/"
    },
    "imageStatus": "licensed-representative-photo",
    "status": "published"
  }
];
window.WA_PHONE = "919867378209";
window.WA_MESSAGE = "Hi, I saw your Hotel & QSR Operations Insights page. I want help with kitchen SOP / costing / workflow. Let's connect.";
