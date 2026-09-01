import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { experiences } from "./lib/experience-data";
import { SiteHeader } from "./components/site-header";
import { ParallaxBlob } from "./components/parallax";
import heroPortrait from "@/asset/image-1788168464511.webp";
import logoFutureGroup from "@/asset/logo_1.png";
import logoBigBazaar from "@/asset/logo_2.png";
import logoBrandFactory from "@/asset/logo_3.png";
import logoCentral from "@/asset/logo_4.png";
import logoEasydayClub from "@/asset/logo_5.png";
import logoMagicbricks from "@/asset/logo_6.png";
import logoTimesGroup from "@/asset/logo_7.png";
import logoGlobalLogic from "@/asset/logo_8.png";
import logoPraxisRetail from "@/asset/logo_9.png";
import logoHomeTown from "@/asset/logo_10.png";
import logoBinarySemantics from "@/asset/logo_11.png";
import logoAadhaarRetailing from "@/asset/logo_13.png";
import logoRubysKitchen from "@/asset/logo_14.png";
import logoJioMart from "@/asset/logo_15.png";
import logoRelianceRetail from "@/asset/logo_16.png";
import logoAllPlusSizeStore from "@/asset/logo_17.png";
import logoCoverStory from "@/asset/logo_18.png";
import logoClarks from "@/asset/logo_19.png";
import logoTimesBusinessSolutions from "@/asset/logo_20.png";
import logoSpan from "@/asset/brand_1.png";
import logoSamsonaServices from "@/asset/brand_3.png";
import logoBroadway from "@/asset/brand_4.png";
import logoSiddhivinayakHomes from "@/asset/brand_2.png";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./lib/seo-config";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 3l9 5-9 5-9-5 9-5z" strokeLinejoin="round" />
      <path d="M3 13l9 5 9-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="9" cy="8" r="3" />
      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
      <path d="M16 8.5a3 3 0 010 5.9M22 20c0-2.7-2-5-5-5.8" strokeLinecap="round" />
    </svg>
  );
}

function IconTrendingUp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M3 17l6-6 4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCheckCircle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconGrid() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" strokeLinejoin="round" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3.5a1.96 1.96 0 100 3.92 1.96 1.96 0 000-3.92zM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.56-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20z" />
    </svg>
  );
}

const impactMetrics = [
  { value: "20+", label: "Years in Product Leadership", icon: IconClock },
  { value: "400K+", label: "Product Catalog SKUs Managed", icon: IconLayers },
  { value: "300K+", label: "Daily Orders Managed", icon: IconChart },
  { value: "2M+", label: "Customers Supported", icon: IconUsers },
  { value: "Rs100Cr+", label: "Monthly GMV Managed", icon: IconTrendingUp },
  { value: "95%", label: "On-Time Delivery Achieved", icon: IconCheckCircle },
];

const coreStrengths = [
  {
    title: "Product & Platform Leadership",
    icon: IconLayers,
    color: "#f2691c",
    items: ["0→1 Product Development", "Product Strategy & Vision", "Product Roadmaps", "MVP / Beta Launches", "Product-Market Validation"],
  },
  {
    title: "Business & Stakeholder Leadership",
    icon: IconUsers,
    color: "#38bdf8",
    items: ["Senior Management / CXO Engagement", "Commercial, Sales & Marketing", "Operations & Supply Chain", "Cross-functional Leadership"],
  },
  {
    title: "Enterprise Platforms",
    icon: IconGrid,
    color: "#8b5cf6",
    items: ["Workflow & Process Automation", "Supply Chain & Operations Platforms", "ERP / WMS / OMS Integration", "Payments & Financial Workflows"],
  },
  {
    title: "Architecture & Technology",
    icon: IconCode,
    color: "#14b8a6",
    items: ["API-first Architecture", "SaaS & Multi-tenant Platforms", "Microservices", "Golang & PostgreSQL"],
  },
  {
    title: "Delivery",
    icon: IconCheckCircle,
    color: "#f5a623",
    items: ["Requirements & Acceptance Criteria", "Agile / Scrum / SAFe", "Backlog & Release Management", "Change Management"],
  },
  {
    title: "AI & SaaS",
    icon: IconSparkle,
    color: "#ec4899",
    items: ["AI-enabled SaaS Products", "AI-assisted Workflows & Decisions", "Conversational Commerce", "AI-driven Operational Intelligence"],
  },
];

const credentials = [
  { title: "Honorary Doctorate, Product Development & Product Management", detail: "London School of Business & Science, 2026" },
  { title: "MBA", detail: "School of Business Management (SBM), NMIMS, 2018-2020" },
  { title: "Bachelor of Commerce (Hons)", detail: "Delhi University, 1995-1999" },
  { title: "Professional Scrum Product Owner II", detail: "PSPO II" },
  { title: "Certified AI Empowered SAFe Product Owner/Product Manager", detail: "AI, Agile and product leadership certification" },
];

const ventures = [
  {
    name: "Quotsy",
    url: "https://www.quotsy.in",
    category: "AI Quotation & Invoicing Platform",
    description: "AI-enabled platform digitizing the complete quote-to-invoice workflow — from 0→1 build to Beta with onboarded customers.",
  },
  {
    name: "Quicksy",
    category: "Conversational Commerce",
    description: "Enables businesses to execute customer transactions and interactions through conversational channels.",
  },
  {
    name: "Stocksy",
    category: "Inventory Intelligence",
    description: "Inventory visibility and stock intelligence platform for modern retail.",
  },
  {
    name: "Kutumbsy",
    category: "Community Platform",
    description: "Digital platform for structured community and business workflows.",
  },
  {
    name: "Localisy",
    category: "Hyperlocal Business Platform",
    description: "Enables digital workflows and local commerce for hyperlocal businesses and neighborhoods.",
  },
  {
    name: "QuoteIQ",
    category: "AI Quote Intelligence",
    description: "AI-powered quotation intelligence platform with smart workflows.",
  },
];

const companies = [
  { name: "Future Group", logo: logoFutureGroup },
  { name: "Big Bazaar", logo: logoBigBazaar },
  { name: "Brand Factory", logo: logoBrandFactory },
  { name: "Central", logo: logoCentral },
  { name: "Easyday Club", logo: logoEasydayClub },
  { name: "HomeTown", logo: logoHomeTown },
  { name: "Foodhall", logo: logoSpan },
  { name: "Nilgiris", logo: logoSamsonaServices },
  { name: "Aadhaar Retailing", logo: logoAadhaarRetailing },
  { name: "Future Pay", logo: logoSiddhivinayakHomes },
  { name: "Magicbricks", logo: logoMagicbricks },
  { name: "Times Group", logo: logoTimesGroup },
  { name: "Times Business Solutions", logo: logoTimesBusinessSolutions },
  { name: "GlobalLogic", logo: logoGlobalLogic },
  { name: "Binary Semantics", logo: logoBinarySemantics },
  { name: "Reliance Retail", logo: logoRelianceRetail },
  { name: "JioMart", logo: logoJioMart },
  { name: "Praxis Retail", logo: logoPraxisRetail },
  { name: "Broadway", logo: logoBroadway },
  { name: "ALL - The Plus Size Store", logo: logoAllPlusSizeStore },
  { name: "CoverStory", logo: logoCoverStory },
  { name: "Clarks", logo: logoClarks },
  { name: "Ruby's Kitchen", logo: logoRubysKitchen },
];

const articles = [
  {
    title: "AI in Commerce & The Next Retail Revolution",
    category: "AI in Commerce",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7461796343402098689/",
  },
  {
    title: "The Future of Product Transformation",
    category: "Digital Transformation",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7458972823521374208/",
  },
  {
    title: "Building Smarter Product Ecosystems",
    category: "Product Leadership",
    link: "https://www.linkedin.com/posts/prakashrahul_activity-7457823833459425280-ypBy/",
  },
  {
    title: "Technology, MSMEs & Startup Growth",
    category: "Startup Ecosystem",
    link: "https://www.linkedin.com/posts/prakashrahul_sales-startupindia-msme-activity-7452014115725959169-SoET/",
  },
  {
    title: "Are We Explaining Security Or Hiding Complexity?",
    category: "Product Thinking",
    link: "https://www.linkedin.com/posts/prakashrahul_are-we-explaining-security-or-hiding-activity-7442313666303205376-QLPx/",
  },
  {
    title: "Quick Commerce & Retail Transformation",
    category: "Retail Innovation",
    link: "https://www.linkedin.com/posts/prakashrahul_quickcommerce-retailtransformation-kiranaeconomy-activity-7437522379771269120-GJw_/",
  },
  {
    title: "Is Quick Commerce Really Killing The Kirana Economy?",
    category: "Commerce Strategy",
    link: "https://www.linkedin.com/posts/prakashrahul_is-quick-commerce-really-killing-the-kirana-activity-7437151784378339328-xQmL/",
  },
];

const photographyGroups = [
  {
    title: "People & Portraits",
    description: "Human stories, emotions, and expressions across candid moments.",
    photos: [
      { title: "Portrait by Evening Light", image: "/photos/portrait-by-evening-light.jpg" },
      { title: "Village Women in Conversation", image: "/photos/village-women-in-conversation.jpg" },
      { title: "Twilight Silhouette by the Ridge", image: "/photos/twilight-silhouette-by-the-ridge.jpg" },
      { title: "Holi Color Splash Portrait", image: "/photos/holi-color-splash-portrait.jpg" },
      { title: "Festival Water Burst", image: "/photos/festival-water-burst.jpg" },
      { title: "Young Swimmer at Play", image: "/photos/young-swimmer-at-play.jpg" },
      { title: "Family Celebration in Spray", image: "/photos/family-celebration-in-spray.jpg" },
    ],
  },
  {
    title: "Culture & Traditions",
    description: "Festivals, rituals, and everyday cultural textures.",
    photos: [
      { title: "Ceremonial Kalash Detail", image: "/photos/ceremonial-kalash-detail.jpg" },
      { title: "Potter Wheel in Motion", image: "/photos/potter-wheel-in-motion.jpg" },
      { title: "Little Tibet Street Facade", image: "/photos/little-tibet-street-facade.jpg" },
      { title: "Colorful Stairway Geometry", image: "/photos/colorful-stairway-geometry.jpg" },
    ],
  },
  {
    title: "Wildlife & Nature",
    description: "Encounters with wild life, birds, and natural behavior.",
    photos: [
      { title: "Seagull Banking in Flight", image: "/photos/seagull-banking-in-flight.jpg" },
      { title: "Langur on Fallen Timber", image: "/photos/langur-on-fallen-timber.jpg" },
      { title: "Tiger Crossing the Forest Track", image: "/photos/tiger-crossing-the-forest-track.jpg" },
      { title: "Tiger in Tall Grass", image: "/photos/tiger-in-tall-grass.jpg" },
      { title: "Elephant Tusk Close-Up", image: "/photos/elephant-tusk-close-up.jpg" },
      { title: "Elephant Bath in the River", image: "/photos/elephant-bath-in-the-river.jpg" },
    ],
  },
  {
    title: "Monuments & Architecture",
    description: "Built heritage, geometry, and structural forms.",
    photos: [
      { title: "Gateway and Taj Landmark Frame", image: "/photos/gateway-and-taj-landmark-frame.jpg" },
      { title: "Upward Light Pole Perspective", image: "/photos/upward-light-pole-perspective.jpg" },
      { title: "Sun Through Monsoon Clouds", image: "/photos/sun-through-monsoon-clouds.jpg" },
      { title: "Floating Bubble in Focus", image: "/photos/floating-bubble-in-focus.jpg" },
    ],
  },
  {
    title: "Waterscapes & Journeys",
    description: "Boats, shorelines, and light across travel landscapes.",
    photos: [
      { title: "Cargo Vessel at Sunset Harbor", image: "/photos/cargo-vessel-at-sunset-harbor.jpg" },
      { title: "Sailboats on a Silver Sea", image: "/photos/sailboats-on-a-silver-sea.jpg" },
      { title: "Fishing Boats at Golden Hour", image: "/photos/fishing-boats-at-golden-hour.jpg" },
      { title: "Houseboats on the Backwaters", image: "/photos/houseboats-on-the-backwaters.jpg" },
      { title: "Coracle Resting by the Shore", image: "/photos/coracle-resting-by-the-shore.jpg" },
      { title: "Twilight Pose by the Water", image: "/photos/twilight-pose-by-the-water.jpg" },
    ],
  },
];

const journey = [
  {
    title: "Roots In Jharkhand",
    text: "Grew up in Jharkhand, schooled at Imperial School of Learning and Kendriya Vidyalaya, Dhanbad.",
  },
  {
    title: "A Detour Through Medicine",
    text: "Spent a year after 12th preparing for medical entrance exams, then joined Delhi University for a B.Com (Hons).",
  },
  {
    title: "Chasing ICWA",
    text: "During graduation, prepared for ICWA alongside coursework and cleared Foundation 1 & 2.",
  },
  {
    title: "Banking & Civil Services",
    text: "After missing a commerce entrance, shifted focus to Banking and Service Commission examinations — recruitment was then paused for two years starting 2002 amid sector restructuring.",
  },
  {
    title: "Design Before Product",
    text: "Worked as a Graphic and Web Designer across a few companies before joining Magicbricks.com, where the product career began.",
  },
  {
    title: "Back To The Classroom",
    text: "Returned to formal education in 2018, completing a 108-credit part-time MBA from NMIMS (Class of 2018–2020).",
  },
];

export default function RahulPrakashWebsite() {
  const timeline = experiences;

  const entitySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}${heroPortrait.src}`,
        jobTitle: "Product & Platform Leader",
        description: SITE_DESCRIPTION,
        sameAs: ["https://www.linkedin.com/in/prakashrahul/"],
        worksFor: {
          "@type": "Organization",
          name: experiences[0].company,
        },
        alumniOf: experiences.slice(1).map((entry) => ({
          "@type": "Organization",
          name: entry.company,
        })),
        knowsAbout: [
          "0→1 Product Building",
          "Product & Platform Strategy",
          "Enterprise SaaS",
          "AI-Enabled Workflow Platforms",
          "Supply Chain & Operations Platforms",
          "Ecommerce & Omnichannel Commerce",
          "Platform Architecture",
          "API-first & Multi-tenant SaaS Architecture",
          "ERP / WMS / OMS Integration",
          "Payments & Financial Workflows",
          "Business–Technology Leadership",
          "CXO Stakeholder Management",
          "Retail Technology",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "en-IN",
        about: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SITE_TITLE,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#product-management-service`,
        name: "Product & Platform Consulting",
        provider: { "@id": `${SITE_URL}/#person` },
        areaServed: "Worldwide",
        serviceType: [
          "0→1 Product Building",
          "Product & Platform Strategy Consulting",
          "Enterprise SaaS Consulting",
          "AI Product Strategy",
          "Digital Commerce Consulting",
          "Platform Transformation",
        ],
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Rahul Prakash?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Rahul Prakash is a product and platform leader who builds and scales technology platforms from 0→1 across SaaS, retail, commerce, supply chain, logistics, payments, and marketplace businesses.",
        },
      },
      {
        "@type": "Question",
        name: "What does Rahul Prakash specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He specializes in 0→1 product and platform building, enterprise SaaS, AI-enabled workflow platforms, supply chain and operations platforms, ecommerce and omnichannel commerce, and business–technology leadership.",
        },
      },
      {
        "@type": "Question",
        name: "Does Rahul Prakash offer product and platform consulting?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Rahul works with businesses on 0→1 product building, platform strategy and architecture, roadmap prioritization, and AI-driven workflow automation.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Rahul Prakash for product and platform advisory?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can connect via email at rrahulprakash@gmail.com or through LinkedIn to discuss product and platform leadership, AI strategy, and digital commerce initiatives.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-black font-sans text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <section id="about" className="relative overflow-hidden">
        <ParallaxBlob
          speed={0.15}
          className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "#f2691c" }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              0&rarr;1 Product &amp; Platform Building
            </div>

            <h1 className="mb-6 font-display leading-[1.05]">
              <span className="mb-2 block text-lg font-semibold text-white/60 sm:text-xl">
                Rahul Prakash &mdash; Product &amp; Platform Leader
              </span>
              <span className="block text-4xl font-medium sm:text-6xl">
                Product leadership.
                <br />
                From zero to <span style={{ color: "#f2691c" }}>scale.</span>
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
              Rahul Prakash builds and scales technology platforms from 0&rarr;1 &mdash; turning
              complex business problems into products, defining the platform strategy and
              architecture behind them, and driving execution across product, engineering, and
              operations. His platforms span SaaS, retail, commerce, supply chain, logistics,
              payments, and marketplace businesses.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:rrahulprakash@gmail.com"
                className="rounded-full px-7 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                style={{ background: "#f2691c" }}
              >
                Let&apos;s Build Something &rarr;
              </a>
              <a
                href="https://www.linkedin.com/in/prakashrahul/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3" style={{ color: "#f2691c" }}>
                  <metric.icon />
                </div>
                <div className="font-display text-2xl font-semibold sm:text-3xl">{metric.value}</div>
                <div className="mt-1 text-xs leading-snug text-white/50">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#f7f5f2] py-14 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-[#6b645c]">
            Trusted By
          </div>
          <div className="grid grid-cols-2 gap-px overflow-hidden border-t border-l border-[#e5e0da] bg-[#e5e0da] sm:grid-cols-4 lg:grid-cols-7">
            {companies.map((company) => (
              <div key={company.name} className="flex h-40 items-center justify-center bg-white p-8 sm:h-36 sm:p-7 lg:h-32 lg:p-6">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={260}
                  height={104}
                  className="max-h-24 w-auto object-contain sm:max-h-20 lg:max-h-16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-white/10 bg-[#f7f5f2] py-24 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
                Professional Experience
              </div>
              <h2 className="font-display text-3xl font-medium sm:text-4xl">18 Years, Company by Company</h2>
            </div>
            <Link href="/experience" className="text-xs font-semibold uppercase tracking-[0.15em] text-[#171310] hover:opacity-70">
              View Full Timeline &rarr;
            </Link>
          </div>

          <div className="grid gap-8 overflow-x-auto pb-4 sm:grid-cols-5 sm:gap-4">
            {timeline.map((entry, index) => (
              <Link
                key={entry.slug}
                href={`/experience/${entry.slug}`}
                className="group relative flex flex-col border-t-2 pt-6"
                style={{ borderColor: index === 0 ? "#f2691c" : "#e5e0da" }}
              >
                <span
                  className="absolute -top-[7px] left-0 h-3 w-3 rounded-full"
                  style={{ background: index === 0 ? "#f2691c" : "#171310" }}
                  aria-hidden="true"
                />
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#6b645c]">
                  {entry.period}
                </div>
                <div className="mb-1 font-display text-lg font-medium leading-snug group-hover:opacity-70">
                  {entry.role}
                </div>
                <div className="mb-3 text-sm font-semibold" style={{ color: "#f2691c" }}>
                  {entry.company}
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6b645c]">{entry.summary}</p>
                <div className="mt-auto text-xs font-semibold uppercase tracking-[0.1em] text-[#171310] group-hover:opacity-70">
                  View Details &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="border-t border-white/10 bg-white py-24 text-[#171310]">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              What I Bring To The Table
            </div>
            <h2 className="mb-6 font-display text-3xl font-medium sm:text-4xl">
              Building enterprise platforms &amp; AI-driven products
            </h2>
            <p className="mb-8 leading-relaxed text-[#6b645c]">
              Rahul works directly with senior leadership &mdash; across Commercial, Sales,
              Marketing, Operations, Supply Chain, Finance, and Technology &mdash; to turn business
              objectives into platforms that ship and stick, carrying products the full distance
              from problem discovery through MVP, beta, adoption, and scale.
            </p>
            <a
              href="#ventures"
              className="inline-block rounded-full bg-[#171310] px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              See What I&apos;ve Built &rarr;
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {coreStrengths.map((group) => (
              <div key={group.title} className="rounded-2xl border border-[#e5e0da] p-6">
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-full"
                  style={{ background: `${group.color}1a`, color: group.color }}
                >
                  <group.icon />
                </div>
                <h3 className="mb-3 font-display text-base font-semibold">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-[#6b645c]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ventures" className="border-t border-[#e5e0da] bg-[#f7f5f2] py-24 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              Products &amp; Ventures
            </div>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Founder-built platforms</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ventures.map((venture, index) => (
              <div key={venture.name} className="rounded-2xl border border-[#e5e0da] bg-white p-6">
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl font-display text-lg font-semibold text-white"
                  style={{ background: ["#f2691c", "#38bdf8", "#8b5cf6", "#14b8a6", "#f5a623", "#ec4899"][index % 6] }}
                >
                  {venture.name.charAt(0)}
                </div>
                <h3 className="mb-2 font-display text-xl font-medium">{venture.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-[#6b645c]">{venture.description}</p>
                {venture.url ? (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold uppercase tracking-[0.1em]"
                    style={{ color: "#f2691c" }}
                  >
                    quotsy.in &rarr;
                  </a>
                ) : (
                  <div className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6b645c]">
                    {venture.category}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="border-t border-white/10 bg-black py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
                Writing &amp; Perspectives
              </div>
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">Product Perspectives</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => {
              const [colorA, colorB] = [
                ["#f2691c", "#f5a623"],
                ["#38bdf8", "#8b5cf6"],
                ["#8b5cf6", "#ec4899"],
                ["#14b8a6", "#38bdf8"],
                ["#ec4899", "#f2691c"],
              ][index % 5];

              return (
                <a
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${colorA} 0%, ${colorB} 100%)` }}
                  >
                    <div className="scale-[3] text-white/25">
                      <IconSparkle />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-3 text-xs font-semibold uppercase tracking-[0.1em]" style={{ color: "#f2691c" }}>
                      {article.category}
                    </div>
                    <div className="font-display text-base font-medium leading-snug text-white group-hover:text-white/70">
                      {article.title}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="photography" className="border-t border-white/10 bg-[#f7f5f2] py-24 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              Beyond Product
            </div>
            <h2 className="mb-6 font-display text-3xl font-medium sm:text-4xl">Photography &amp; Visual Storytelling</h2>
            <p className="leading-relaxed text-[#6b645c]">
              Rahul is also passionate about photography, capturing stories through travel,
              urban landscapes, culture, architecture, and human experiences.
            </p>
          </div>

          <div className="space-y-14">
            {photographyGroups.map((group) => (
              <div key={group.title}>
                <div className="mb-6 flex flex-col gap-2 border-t border-[#e5e0da] pt-6 md:flex-row md:items-end md:justify-between">
                  <h3 className="font-display text-xl font-medium">{group.title}</h3>
                  <p className="text-sm text-[#6b645c]">{group.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {group.photos.map((photo) => (
                    <figure key={photo.image}>
                      <div className="relative aspect-square overflow-hidden rounded-xl">
                        <Image
                          src={photo.image}
                          alt={photo.title}
                          fill
                          sizes="(min-width: 640px) 25vw, 50vw"
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                      </div>
                      <figcaption className="mt-2 text-xs text-[#6b645c]">{photo.title}</figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="border-t border-white/10 bg-white py-24 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              Before Product
            </div>
            <h2 className="mb-6 font-display text-3xl font-medium sm:text-4xl">The Journey Here</h2>
            <p className="leading-relaxed text-[#6b645c]">
              Product wasn&apos;t the plan from day one &mdash; it was a few detours in the making.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {journey.map((item) => (
              <div key={item.title} className="border-t-2 pt-6" style={{ borderColor: "#e5e0da" }}>
                <h3 className="mb-2 font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#6b645c]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-[#e5e0da] bg-[#f7f5f2] p-8 text-center sm:p-10">
            <p className="font-display text-lg font-medium leading-relaxed sm:text-xl">
              Outside of work, home is family &mdash; parents, wife Ruby, and daughter Riddhi.
            </p>
          </div>
        </div>
      </section>

      <section id="credentials" className="border-t border-[#e5e0da] bg-[#f7f5f2] py-24 text-[#171310]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-14 max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
              Education &amp; Certifications
            </div>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">
              Formal learning, agile practice &amp; AI readiness
            </h2>
          </div>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {credentials.map((credential) => (
              <div key={credential.title} className="border-t-2 pt-6" style={{ borderColor: "#e5e0da" }}>
                <h3 className="mb-2 font-display text-lg font-medium">{credential.title}</h3>
                <p className="text-sm leading-relaxed text-[#6b645c]">{credential.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-black py-24">
        <ParallaxBlob
          speed={0.12}
          className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: "#f2691c" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
                Connect
              </div>
              <h2 className="mb-6 font-display text-4xl font-medium leading-tight text-white sm:text-5xl">
                Let&apos;s build something meaningful.
              </h2>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                Based in Mumbai, India. Open to conversations around Product &amp; Platform
                Leadership roles, 0&rarr;1 SaaS building, enterprise platform strategy, and
                AI-driven workflow platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:rrahulprakash@gmail.com"
                  className="rounded-full px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  style={{ background: "#f2691c" }}
                >
                  rrahulprakash@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/prakashrahul/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
                >
                  <IconLinkedIn />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="text-sm text-white/50 lg:text-right">
              Mumbai, India
              <br />
              &copy; {new Date().getFullYear()} Rahul Prakash. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
