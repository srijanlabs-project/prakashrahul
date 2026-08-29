export type ExperienceTheme = {
  title: string;
  bullets: string[];
};

export type ExperienceEra = {
  label: string;
  text: string;
};

export type ExperienceMetric = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  slug: string;
  company: string;
  role: string;
  period: string;
  summary: string;
  narrative: ExperienceEra[];
  metrics: ExperienceMetric[];
  themes: ExperienceTheme[];
  tools?: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    slug: "srijan-labs",
    company: "Srijan Labs",
    role: "Founder & Product Leader",
    period: "Jul 2025 - Present",
    summary:
      "Building a portfolio of AI-enabled SaaS platforms from 0→1, focused on digitizing business workflows, transactions, and operational decision-making for SMBs and hyperlocal businesses.",
    narrative: [
      {
        label: "2025 - Present",
        text: "Founded Srijan Labs to build a portfolio of AI-enabled SaaS platforms from 0→1 — Quotsy, Quicksy, Kutumbsy, and Localisy — digitizing business workflows, transactions, and operational decision-making for SMBs and hyperlocal businesses. Took Quotsy furthest: from concept through architecture, an API-first multi-tenant build on Golang, PostgreSQL, and cloud infrastructure, to a Beta release with 2 onboarded customers shaping the roadmap. Across the portfolio, owns product vision, discovery, architecture, and delivery end to end, while defining the reusable platform capabilities — identity, multi-tenancy, workflows, notifications, transaction management — that let each product move faster.",
      },
    ],
    metrics: [
      { value: "4", label: "0→1 SaaS Products Built" },
      { value: "2", label: "Quotsy Beta Customers Onboarded" },
      { value: "0→1", label: "Concept-to-Beta Ownership" },
    ],
    themes: [
      {
        title: "Quotsy — Flagship Product",
        bullets: [
          "Defined the product vision, business model, architecture, and roadmap for Quotsy, an AI-enabled quotation and invoicing platform digitizing the complete quote-to-invoice workflow.",
          "Took Quotsy from 0→1 to Beta release, moving through problem discovery, requirements, product design, engineering, testing, deployment, and customer onboarding.",
          "Onboarded 2 beta customers, using real customer workflows and feedback to validate the product and prioritize the next iterations.",
          "Designed an API-first, multi-tenant SaaS platform with scalable backend architecture, workflow-driven business processes, and structured transaction data.",
          "Building the platform with Golang, PostgreSQL, REST APIs, cloud infrastructure, and AI capabilities, including the foundation for quotation intelligence.",
        ],
      },
      {
        title: "Portfolio & Platform Capabilities",
        bullets: [
          "Quicksy — a conversational commerce platform enabling businesses to execute customer transactions and interactions through conversational channels.",
          "Kutumbsy — a digital platform for structured community and business workflows.",
          "Localisy — a hyperlocal business platform enabling digital workflows and local commerce.",
          "Defined reusable platform capabilities shared across the portfolio: identity, multi-tenancy, APIs, workflows, notifications, transaction management, and analytics.",
        ],
      },
      {
        title: "Founder Operating Model",
        bullets: [
          "Works directly with customers and business stakeholders to understand commercial processes, identify operational pain points, and translate them into product capabilities.",
          "Evaluates business processes for automation opportunities using AI and software-driven workflows, owning vision, discovery, requirements, architecture, roadmap, and delivery end to end.",
        ],
      },
    ],
    tools: ["Golang", "PostgreSQL", "REST APIs", "Cloud Infrastructure", "OpenAI APIs", "Multi-tenant SaaS Architecture"],
  },
  {
    slug: "praxis-retail-broadway",
    company: "Praxis Retail (Hometown) & Think9 Digital (Broadway)",
    role: "Chief Product Officer",
    period: "Oct 2023 - Jul 2025",
    summary:
      "Led product, platform engineering, and digital transformation across retail commerce and large-format store operations.",
    narrative: [
      {
        label: "2023 - 2025",
        text: "Took on ecommerce and store-technology modernization for two retail groups at once — Hometown (Praxis Retail) and Broadway (Think9 Digital) — standing up the 0→1 technology stack for four large-format Broadway stores (30,000+ sq. ft. each) across POS, ERP, WMS, and backend systems. Built a real-time CMS orchestrating 300+ in-store screens, moved the commerce stack from monolithic to cloud-based (Shopify, OMS, Inventory, CRM, SAP), and layered in CCTV-plus-operational analytics for management reporting. The platform work paid off in 70% lower infrastructure and development cost, 50% faster release velocity, 40% lower downtime, and 95% adoption across the change-management rollout.",
      },
    ],
    metrics: [
      { value: "4", label: "Flagship Stores Launched 0→1" },
      { value: "300+", label: "In-Store Screens Orchestrated" },
      { value: "70%", label: "Infrastructure Cost Reduction" },
      { value: "95%", label: "Enterprise Change Adoption" },
    ],
    themes: [
      {
        title: "0→1 Store & Platform Build",
        bullets: [
          "Led the 0→1 technology setup for four large-format Broadway stores, each exceeding 30,000 sq. ft., covering POS, ERP, WMS, backend systems, integrations, and store technology infrastructure.",
          "Acted as the product–architecture–engineering bridge, defining system boundaries, integration requirements, data flows, workflows, and acceptance criteria.",
          "Built a real-time digital content and CMS orchestration platform managing 300+ in-store screens, including device configuration, content lifecycle, and remote monitoring.",
        ],
      },
      {
        title: "Platform Modernization",
        bullets: [
          "Led modernization from monolithic systems toward a cloud-based architecture, integrating Shopify, OMS, Inventory, CRM, and SAP.",
          "Defined cloud data flows and integration architecture across enterprise systems, ensuring consistency of business and operational data.",
          "Designed an event/ticketing platform covering pricing logic, check-ins, workflows, and business rules.",
        ],
      },
      {
        title: "Analytics & Operating Discipline",
        bullets: [
          "Built analytics capabilities combining CCTV and store-level operational data to support management reporting and operational decision-making.",
          "Delivered a 70% reduction in infrastructure and development cost, 50% faster release velocity, and 40% lower downtime through platform governance and architectural improvements.",
          "Led enterprise-wide change management resulting in 95% adoption, driving backlog refinement, design reviews, UAT, and release readiness.",
        ],
      },
      {
        title: "Stakeholder & Business Alignment",
        bullets: [
          "Worked closely with Commercial, Sales, Marketing, Operations, Supply Chain, and Technology leadership to translate business requirements into platform capabilities and operating processes.",
          "Owned cross-functional product and platform requirements across POS, ERP, WMS, inventory, and backend systems.",
        ],
      },
    ],
    tools: [
      "Shopify",
      "SAP",
      "Salesforce",
      "POS / ERP / WMS",
      "CCTV Analytics",
      "CMS Orchestration",
      "Firebase",
      "GTM",
      "CleverTap",
      "Jira",
      "Confluence",
      "Notion",
    ],
  },
  {
    slug: "jiomart-reliance-retail",
    company: "Reliance Retail | JioMart Smart Bazaar",
    role: "AVP - Product",
    period: "Mar 2022 - Oct 2023",
    summary:
      "Led product strategy and technology transformation for large-scale supply-chain, store orchestration, and transactional systems across 1,000+ stores.",
    narrative: [
      {
        label: "2022 - 2023",
        text: "Took omnichannel commerce and supply chain live across 1,000+ stores for JioMart's Smart Bazaar, scaling it past ₹100Cr in monthly GMV. Built the traceability and orchestration layer underneath — crate-level lifecycle tracking, a real-time engine processing store and operational data feeds — then pushed further into AI: a procurement and allocation platform handling 500+ MT/day of supply, and an AI-driven sorting and grading system to cut wastage. Partnered directly with Supply Chain, Procurement, Commercial, and Operations leadership to turn fragmented processes into standardized, technology-enabled workflows.",
      },
    ],
    metrics: [
      { value: "Rs100Cr+", label: "Monthly GMV, Smart Bazaar" },
      { value: "500+ MT/day", label: "Supply Volume, AI Procurement" },
      { value: "1,000+", label: "Stores Orchestrated" },
      { value: "300K+", label: "Daily Orders" },
    ],
    themes: [
      {
        title: "Platform & Launch",
        bullets: [
          "Built and launched Smart Bazaar on JioMart, scaling the platform to ₹100Cr+ monthly GMV.",
          "Designed a crate-level traceability platform providing end-to-end lifecycle visibility and asset-level tracking.",
          "Built a real-time orchestration engine processing store and operational data feeds to optimize supply, routing, and delivery timelines.",
        ],
      },
      {
        title: "AI-Driven Supply Chain",
        bullets: [
          "Conceptualized an AI-driven procurement and allocation platform handling 500+ MT/day of supply, connecting procurement decisions with operational execution.",
          "Initiated an AI-driven sorting and grading system to improve quality and reduce wastage.",
          "Led automation across ordering, planning, payments, and supplier onboarding workflows.",
        ],
      },
      {
        title: "Stakeholder & Systems Leadership",
        bullets: [
          "Partnered with senior management across Supply Chain, Procurement, Commercial, Operations, Store Operations, Technology, and Analytics to define business priorities and platform strategy.",
          "Owned product requirements and system design across business, product, engineering, architecture, and analytics teams.",
          "Converted fragmented operational processes into standardized, technology-enabled workflows.",
        ],
      },
      {
        title: "Data & Experimentation",
        bullets: [
          "Set up an end-to-end data-driven funnel analysis framework integrating Google Analytics, data lakes, and third-party tools.",
          "Established product lifecycle tracking using Segment, Firebase, Appsflyer, and App Center.",
        ],
      },
    ],
    tools: [
      "GoLang",
      "SQL",
      "GraphQL",
      "Kafka",
      "Google Analytics",
      "Mixpanel",
      "Segment",
      "Firebase",
      "Appsflyer",
      "App Center",
      "FullStory",
      "CleverTap",
    ],
  },
  {
    slug: "future-retail",
    company: "Future Retail Ltd. | Big Bazaar, FBB, Brand Factory & Fashion",
    role: "Head of Product - Digital Commerce",
    period: "Mar 2015 - Feb 2022",
    summary:
      "Led product strategy, platform development, and large-scale transaction systems across India's largest retail ecosystem.",
    narrative: [
      {
        label: "2015 - 2022",
        text: "Owned digital commerce across Big Bazaar, FBB, Brand Factory, and Fashion for nearly seven years — the longest, largest-scale chapter of the career. Built a multi-brand commerce platform spanning 400K+ SKUs and integrating OMS, Inventory, CRM, SAP, and a Data Lake, scaling it to 2M+ users, 300K+ daily orders, and ₹6Cr+ in daily GMV with 95% on-time delivery. Layered in omnichannel capabilities (BOPIS, BORIS, Buy Offline Return Online, Endless Aisle, slot-based delivery) and payments — integrating gateways across POS, ecommerce, and OMS, and scaling Future Pay, a digital wallet handling balances, payments, refunds, and reconciliation end to end. On the B2B side, built a 50+ campaign promotion engine and a platform supporting 5,000+ retailers through the Annapurna Scheme, alongside mobility and catalog systems that cut delivery TAT in half.",
      },
    ],
    metrics: [
      { value: "400K+", label: "SKUs Managed" },
      { value: "2M+", label: "Users Supported" },
      { value: "5,000+", label: "Retailers On B2B Platform" },
      { value: "95%", label: "On-Time Delivery" },
    ],
    themes: [
      {
        title: "Commerce & Omnichannel Platform",
        bullets: [
          "Built a multi-brand commerce platform supporting 400K+ SKUs, integrating OMS, Inventory, CRM, SAP, Data Lake, and analytics platforms.",
          "Scaled the platform to 2M+ users, 300K+ daily orders, and ₹6Cr+ daily GMV.",
          "Built omnichannel capabilities including BOPIS, BORIS, Buy Offline Return Online, Endless Aisle, and slot-based delivery, requiring deep integration with store systems and POS.",
          "Achieved 95% on-time delivery through logistics and store-picker optimization systems.",
        ],
      },
      {
        title: "Payments & Future Pay",
        bullets: [
          "Integrated payment systems across POS, ecommerce, and OMS, working with payment gateways, banks, and external partners on processing, settlement, and reconciliation.",
          "Managed and scaled Future Pay, a digital wallet integrated across POS and ecommerce, covering wallet creation, balances, payments, refunds, and transaction history.",
          "Designed end-to-end transaction workflows covering authorization, capture, refunds, and reconciliation, including business rules and exceptions.",
        ],
      },
      {
        title: "Growth & B2B",
        bullets: [
          "Built a 50+ campaign promotion engine and a B2B platform supporting 5,000+ retailers through the Annapurna Scheme.",
          "Developed mobility and catalog management systems under the Annapurna program, improving delivery TAT by 50% and adding ₹3–5 Cr in new revenue.",
        ],
      },
      {
        title: "Stakeholder & Team Leadership",
        bullets: [
          "Worked with senior stakeholders across Commercial, Sales, Marketing, Operations, Supply Chain, Finance, and Technology to define digital commerce strategy and translate business requirements into scalable platforms.",
          "Led cross-functional product and engineering teams through complex platform integrations, releases, and operational change.",
        ],
      },
    ],
    tools: ["SAP", "CRM", "POS", "ERP", "Payment Gateways", "Digital Wallet (Future Pay)", "Data Lake", "Computer Vision", "Chatbots"],
  },
  {
    slug: "magicbricks",
    company: "Magicbricks.com",
    role: "Senior Product Lead",
    period: "Mar 2006 - Feb 2015",
    summary:
      "Built and scaled products for India's leading real-estate marketplace, spanning property discovery, lead management, agent onboarding, buyer engagement, and content platforms.",
    narrative: [
      {
        label: "2005 - 2010: Foundations",
        text: "Launched Magicbricks.com and early mobile apps on Java J2ME and BREW, owning the end-to-end product lifecycle within a monolithic architecture. Led cross-functional Product and UI teams through the Waterfall model, Excel-based planning, and manual user research via surveys and focus groups. Moved static pages to dynamic, interactive experiences with early JavaScript (jQuery, AJAX). Through the 2008–09 recession, introduced automation into testing, deployment, and monitoring — early DevOps-style practice — to cut costs and hold delivery pace under tight constraints.",
      },
      {
        label: "2010 - 2015: Tech Reboot",
        text: "Shifted to a mobile-first design strategy and brought the technology team in-house, shipping native Android and iOS apps on RESTful APIs and JSON that lifted retention 25% in retail and real estate. Built a dynamic microsite platform that cut creation time by 60%, errors by 90%, and update cycles by 80%, and delivered 10,000+ 3D floor plans across 7,000 projects for a platform serving 1M+ users. Led a 45+ member cross-functional team across product, design, engineering, and QA to relaunch the Projects section, streamlined agent onboarding by 30%, and lifted lead-to-deal conversion by 15%. Modernized the platform through microservices to 99.99% uptime, launched a Virtual Exhibitions platform with 100% uptime for large-scale buyer-seller interactions, and shifted reporting to DAU/MAU/LTV via Google Analytics.",
      },
    ],
    metrics: [
      { value: "1M+", label: "Users Served" },
      { value: "10,000+", label: "3D Floor Plans (7,000 Projects)" },
      { value: "99.99%", label: "Platform Uptime" },
      { value: "15%", label: "Lead-to-Deal Conversion Lift" },
    ],
    themes: [
      {
        title: "Product & Platform Leadership",
        bullets: [
          "Led product development across property discovery, agent onboarding, lead management, and buyer engagement for a platform serving 1M+ users.",
          "Delivered 10,000+ 3D floor plans across 7,000 projects to improve property discovery and visualization.",
          "Built a Virtual Exhibitions platform supporting large-scale buyer-seller interactions with 100% uptime.",
        ],
      },
      {
        title: "Platform Modernization & Scale",
        bullets: [
          "Developed a dynamic microsite platform, reducing creation time by 60%, errors by 90%, and update cycles by 80%.",
          "Led platform modernization through microservices, achieving 99.99% uptime and supporting continued growth in traffic and agent subscriptions.",
          "Built API/JSON integrations with third-party systems to automate content updates and improve data freshness.",
        ],
      },
      {
        title: "Growth & Conversion",
        bullets: [
          "Streamlined agent and seller onboarding workflows, reducing onboarding time by 30%.",
          "Improved lead-to-deal conversion by 15% through user research, analytics, and product optimization.",
          "Led a 45+ member cross-functional team across product, design, engineering, and QA to relaunch the Projects section.",
        ],
      },
      {
        title: "Partner & Content Ecosystem",
        bullets: [
          "Built an integrated real estate partner portal enabling 100% digitization and driving 12K+ buyer inquiries per month.",
          "Developed and deployed widget-based partner features that expanded content reach, engagement, and visibility.",
          "Optimized alerting and notification engines using Spring Batch and Apache Velocity, increasing user interactions by 30%.",
        ],
      },
    ],
    tools: [
      "Java J2ME",
      "BREW",
      "jQuery",
      "AJAX",
      "Android",
      "iOS",
      "REST/JSON",
      "Microservices",
      "Jira",
      "Google Analytics",
      "Spring Batch",
      "Apache Velocity",
    ],
  },
];

export const earlierCareer = [
  { role: "Sr. Product Designer", company: "Induslogic Inc (now GlobalLogic)", period: "Mar 2005 - Mar 2006" },
  { role: "Product Designer", company: "Binary Semantics Limited", period: "Aug 2003 - Mar 2005" },
  { role: "Web Designer", company: "Zephyr System (P) Limited", period: "Jan 2002 - Aug 2003" },
  { role: "Founder", company: "Aarpey Technology", period: "Jan 2000 - Sep 2001" },
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((entry) => entry.slug === slug);
}
