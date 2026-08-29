import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CompanyLogoCard } from "./components/company-logo-card";
import { SiteHeader } from "./components/site-header";
import { SiteFooter } from "./components/site-footer";
import { experiences } from "./lib/experience-data";
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
import logoSiddhivinayakHomes from "@/asset/brand/final-brand-assets/brand_2.png";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./lib/seo-config";

export const metadata: Metadata = {
  title:
    "Rahul Prakash | Product & Platform Leader, 0→1 Product Building",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
};

export default function RahulPrakashWebsite() {
  const impactMetrics = [
    { value: '20+', label: 'Years in Product Leadership' },
    { value: '400K+', label: 'Product Catalog SKUs Managed' },
    { value: '300K+', label: 'Daily Orders Managed' },
    { value: '2M+', label: 'Customers Supported' },
    { value: 'Rs100Cr+', label: 'Monthly GMV Managed' },
    { value: '95%', label: 'On-Time Delivery Achieved' },
  ];

  const coreStrengths = [
    {
      title: 'Product & Platform Leadership',
      items: ['0→1 Product Development', 'Product Strategy & Vision', 'Product Roadmaps', 'MVP / Beta Launches', 'Customer Discovery', 'Product-Market Validation', 'Platform Strategy', 'Business Process Transformation', 'Product Lifecycle Management'],
    },
    {
      title: 'Business & Stakeholder Leadership',
      items: ['Senior Management / CXO Engagement', 'Commercial', 'Sales', 'Marketing', 'Operations', 'Supply Chain', 'Logistics', 'Finance', 'Product / Engineering / Architecture', 'Vendors & Technology Partners', 'Cross-functional Leadership'],
    },
    {
      title: 'Enterprise Platforms',
      items: ['Workflow & Process Automation', 'Supply Chain & Operations Platforms', 'Procurement & Supplier Platforms', 'Commerce & Transaction Platforms', 'CRM / Lead Management', 'ERP / WMS / OMS Integration', 'Payments & Financial Workflows', 'Document & Data Workflows'],
    },
    {
      title: 'Architecture & Technology',
      items: ['API-first Architecture', 'SaaS & Multi-tenant Platforms', 'Cloud Architecture & Data Flow', 'Distributed Systems', 'Microservices', 'REST APIs', 'Golang', 'PostgreSQL', 'AI / OpenAI APIs', 'Enterprise System Integration'],
    },
    {
      title: 'Delivery',
      items: ['Requirements Analysis', 'User Stories', 'Business Rules', 'Acceptance Criteria', 'Agile / Scrum / SAFe', 'Backlog Refinement', 'UAT', 'Release Management', 'Change Management'],
    },
    {
      title: 'AI & SaaS',
      items: ['AI-enabled SaaS Products', 'AI-assisted Workflows & Decision Systems', 'Conversational Commerce', 'AI-driven Procurement & Operational Intelligence'],
    },
  ];

  const credentials = [
    { title: 'Honorary Doctorate, Product Development & Product Management', detail: 'London School of Business & Science, 2026' },
    { title: 'MBA', detail: 'School of Business Management (SBM), NMIMS, 2018-2020' },
    { title: 'Bachelor of Commerce (Hons)', detail: 'Delhi University, 1995-1999' },
    { title: 'Professional Scrum Product Owner II', detail: 'PSPO II' },
    { title: 'Certified AI Empowered SAFe Product Owner/Product Manager', detail: 'AI, Agile and product leadership certification' },
  ];

  const ventures = [
    {
      name: 'Quotsy',
      url: 'https://www.quotsy.in',
      category: 'AI Quotation & Invoicing Platform',
      description: 'AI-enabled platform digitizing the complete quote-to-invoice workflow — from 0→1 build to Beta with onboarded customers.',
    },
    {
      name: 'Quicksy',
      category: 'Conversational Commerce',
      description: 'Enables businesses to execute customer transactions and interactions through conversational channels.',
    },
    {
      name: 'Stocksy',
      category: 'Inventory Intelligence',
      description: 'Inventory visibility and stock intelligence platform for modern retail.',
    },
    {
      name: 'Kutumbsy',
      category: 'Community Platform',
      description: 'Digital platform for structured community and business workflows.',
    },
    {
      name: 'Localisy',
      category: 'Hyperlocal Business Platform',
      description: 'Enables digital workflows and local commerce for hyperlocal businesses and neighborhoods.',
    },
    {
      name: 'QuoteIQ',
      category: 'AI Quote Intelligence',
      description: 'AI-powered quotation intelligence platform with smart workflows.',
    },
  ];

  const companies = [
    { name: 'Future Group', logo: logoFutureGroup },
    { name: 'Big Bazaar', logo: logoBigBazaar },
    { name: 'Brand Factory', logo: logoBrandFactory },
    { name: 'Central', logo: logoCentral },
    { name: 'Easyday Club', logo: logoEasydayClub },
    { name: 'HomeTown', logo: logoHomeTown },
    { name: 'Foodhall', logo: logoSpan },
    { name: 'Nilgiris', logo: logoSamsonaServices },
    { name: 'Aadhaar Retailing', logo: logoAadhaarRetailing },
    { name: 'Future Pay', logo: logoSiddhivinayakHomes },
    { name: 'Magicbricks', logo: logoMagicbricks },
    { name: 'Times Group', logo: logoTimesGroup },
    { name: 'Times Business Solutions', logo: logoTimesBusinessSolutions },
    { name: 'GlobalLogic', logo: logoGlobalLogic },
    { name: 'Binary Semantics', logo: logoBinarySemantics },
    { name: 'Reliance Retail', logo: logoRelianceRetail },
    { name: 'JioMart', logo: logoJioMart },
    { name: 'Praxis Retail', logo: logoPraxisRetail },
    { name: 'Broadway', logo: logoBroadway },
    { name: 'ALL - The Plus Size Store', logo: logoAllPlusSizeStore },
    { name: 'CoverStory', logo: logoCoverStory },
    { name: 'Clarks', logo: logoClarks },
    { name: "Ruby's Kitchen", logo: logoRubysKitchen },
  ];

  const articles = [
    {
      title: 'AI in Commerce & The Next Retail Revolution',
      category: 'AI in Commerce',
      summary: 'How AI is reshaping customer journeys, operations, personalization, and commerce ecosystems.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7461796343402098689/',
    },
    {
      title: 'The Future of Product Transformation',
      category: 'Digital Transformation',
      summary: 'Thoughts on platform modernization, scalable execution models, and transformation strategy.',
      link: 'https://www.linkedin.com/feed/update/urn:li:activity:7458972823521374208/',
    },
    {
      title: 'Building Smarter Product Ecosystems',
      category: 'Product Leadership',
      summary: 'Perspectives on product thinking, scalable execution, and digital ecosystem building.',
      link: 'https://www.linkedin.com/posts/prakashrahul_activity-7457823833459425280-ypBy/',
    },
    {
      title: 'Technology, MSMEs & Startup Growth',
      category: 'Startup Ecosystem',
      summary: 'How technology can empower MSMEs, startups, and local business ecosystems.',
      link: 'https://www.linkedin.com/posts/prakashrahul_sales-startupindia-msme-activity-7452014115725959169-SoET/',
    },
    {
      title: 'Are We Explaining Security Or Hiding Complexity?',
      category: 'Product Thinking',
      summary: 'A practical perspective on security communication, usability, and customer trust.',
      link: 'https://www.linkedin.com/posts/prakashrahul_are-we-explaining-security-or-hiding-activity-7442313666303205376-QLPx/',
    },
    {
      title: 'Quick Commerce & Retail Transformation',
      category: 'Retail Innovation',
      summary: 'Exploring operational and behavioral shifts driving quick commerce transformation.',
      link: 'https://www.linkedin.com/posts/prakashrahul_quickcommerce-retailtransformation-kiranaeconomy-activity-7437522379771269120-GJw_/',
    },
    {
      title: 'Is Quick Commerce Really Killing The Kirana Economy?',
      category: 'Commerce Strategy',
      summary: 'A balanced perspective on kirana ecosystems, disruption, and neighborhood retail.',
      link: 'https://www.linkedin.com/posts/prakashrahul_is-quick-commerce-really-killing-the-kirana-activity-7437151784378339328-xQmL/',
    },
  ];

  const photographyGroups = [
    {
      title: 'People & Portraits',
      description: 'Human stories, emotions, and expressions across candid moments.',
      photos: [
        { title: 'Portrait by Evening Light', image: '/photos/people.JPG' },
        { title: 'Village Women in Conversation', image: '/photos/people_1.JPG' },
        { title: 'Twilight Silhouette by the Ridge', image: '/photos/people_2.JPG' },
        { title: 'Holi Color Splash Portrait', image: '/photos/culture.JPG' },
        { title: 'Festival Water Burst', image: '/photos/culture_1.JPG' },
        { title: 'Young Swimmer at Play', image: '/photos/grihparvesh%20(758).JPG' },
        { title: 'Family Celebration in Spray', image: '/photos/DSC_0766.JPG' },
      ],
    },
    {
      title: 'Culture & Traditions',
      description: 'Festivals, rituals, and everyday cultural textures.',
      photos: [
        { title: 'Ceremonial Kalash Detail', image: '/photos/DSC_6510.JPG' },
        { title: 'Potter Wheel in Motion', image: '/photos/DSC_2138.JPG' },
        { title: 'Little Tibet Street Facade', image: '/photos/DSC_1420.JPG' },
        { title: 'Colorful Stairway Geometry', image: '/photos/DSC_1419.JPG' },
      ],
    },
    {
      title: 'Wildlife & Nature',
      description: 'Encounters with wild life, birds, and natural behavior.',
      photos: [
        { title: 'Seagull Banking in Flight', image: '/photos/DSC_0237.JPG' },
        { title: 'Langur on Fallen Timber', image: '/photos/wildlife.JPG' },
        { title: 'Tiger Crossing the Forest Track', image: '/photos/DSC_0407.JPG' },
        { title: 'Tiger in Tall Grass', image: '/photos/DSC_0329.JPG' },
        { title: 'Elephant Tusk Close-Up', image: '/photos/RPP_2714.JPG' },
        { title: 'Elephant Bath in the River', image: '/photos/RPP_2800.JPG' },
      ],
    },
    {
      title: 'Monuments & Architecture',
      description: 'Built heritage, geometry, and structural forms.',
      photos: [
        { title: 'Gateway and Taj Landmark Frame', image: '/photos/monuments.JPG' },
        { title: 'Upward Light Pole Perspective', image: '/photos/DSC_0238.JPG' },
        { title: 'Sun Through Monsoon Clouds', image: '/photos/DSC_0516.JPG' },
        { title: 'Floating Bubble in Focus', image: '/photos/DSC_6944.JPG' },
      ],
    },
    {
      title: 'Waterscapes & Journeys',
      description: 'Boats, shorelines, and light across travel landscapes.',
      photos: [
        { title: 'Cargo Vessel at Sunset Harbor', image: '/photos/DSC_0171.JPG' },
        { title: 'Sailboats on a Silver Sea', image: '/photos/DSC_0265.JPG' },
        { title: 'Fishing Boats at Golden Hour', image: '/photos/RPP_3308.JPG' },
        { title: 'Houseboats on the Backwaters', image: '/photos/RPP_3590.JPG' },
        { title: 'Coracle Resting by the Shore', image: '/photos/RPP_1974.JPG' },
        { title: 'Twilight Pose by the Water', image: '/photos/DSC_1211.JPG' },
      ],
    },
  ];

  const entitySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/photos/people.JPG`,
        jobTitle: "Product & Platform Leader",
        description: SITE_DESCRIPTION,
        sameAs: ["https://www.linkedin.com/in/prakashrahul/"],
        alumniOf: experiences.map((entry) => ({
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
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(entitySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <section id="about" className="mx-auto grid w-full max-w-6xl gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="min-w-0">
          <div className="mb-8 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            0&rarr;1 Product &amp; Platform Building
          </div>

          <h2 className="mb-8 max-w-2xl break-words font-display text-4xl font-medium leading-[1.05] text-foreground sm:text-6xl">
            Product leadership, from zero to scale.
          </h2>

          <p className="mb-10 max-w-xl break-words text-base leading-relaxed text-muted sm:text-lg">
            Rahul Prakash builds and scales technology platforms from 0&rarr;1 &mdash; turning
            complex business problems into products, defining the platform strategy and
            architecture behind them, and driving execution across product, engineering, and
            operations. His platforms span SaaS, retail, commerce, supply chain, logistics,
            payments, and marketplace businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:rrahulprakash@gmail.com" className="rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-accent">
              Contact Rahul
            </a>

            <a
              href="https://www.linkedin.com/in/prakashrahul/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="min-w-0 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pl-12 lg:pt-1">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-8">
            {impactMetrics.map((metric) => (
              <div key={metric.label} className="min-w-0 border-b border-border pb-6">
                <dt className="order-2 mt-2 break-words text-sm leading-snug text-muted">{metric.label}</dt>
                <dd className="order-1 font-display text-3xl font-medium text-accent sm:text-4xl">{metric.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="brand-collage" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          Trusted By Leading Brands
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden border-t border-l border-border sm:grid-cols-3 lg:grid-cols-4">
          {companies.map((company) => (
            <CompanyLogoCard
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Leadership Journey
            </div>
            <h3 className="font-display text-3xl font-medium sm:text-4xl">Professional Experience</h3>
          </div>

          <Link
            href="/experience"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:text-accent"
          >
            View All Experience <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="space-y-14">
          {experiences.map((entry) => (
            <Link
              key={entry.slug}
              href={`/experience/${entry.slug}`}
              className="group grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {entry.period}
              </div>

              <div>
                <h4 className="font-display text-2xl font-medium text-foreground transition-colors group-hover:text-accent">{entry.company}</h4>
                <div className="mt-1 text-sm font-semibold text-accent">{entry.role}</div>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted">{entry.summary}</p>
                <div className="mt-5 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors group-hover:text-accent">
                  Read the full story <span aria-hidden="true">&rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Product &amp; Technology Capabilities
          </div>
          <h3 className="mb-6 font-display text-3xl font-medium sm:text-4xl">
            0&rarr;1 building, enterprise platforms &amp; AI depth
          </h3>
          <p className="leading-relaxed text-muted">
            Rahul works directly with senior leadership &mdash; across Commercial, Sales, Marketing,
            Operations, Supply Chain, Finance, and Technology &mdash; to turn business objectives into
            platforms that ship and stick, carrying products the full distance from problem
            discovery and business case through MVP, beta, adoption, and scale. That work has
            shaped platforms spanning AI-enabled SaaS, quotation and invoicing, conversational
            commerce, supply-chain orchestration, procurement, omnichannel commerce, POS, ERP/WMS
            integration, payments, CRM, analytics, and workflow automation.
          </p>
        </div>

        <div className="mb-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {coreStrengths.map((group) => (
            <div key={group.title} className="border-t border-border pt-6">
              <h4 className="mb-4 font-display text-lg font-medium text-foreground">{group.title}</h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="ventures" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Founder &amp; Innovation
          </div>
          <h3 className="font-display text-3xl font-medium sm:text-4xl">Products &amp; Ventures</h3>
        </div>

        <div className="grid gap-px overflow-hidden border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture) => (
            <div key={venture.name} className="border-r border-b border-border bg-background p-8 transition-colors hover:bg-surface">
              <div className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {venture.category}
              </div>

              <h4 className="mb-3 font-display text-xl font-medium">
                {venture.url ? (
                  <a
                    href={venture.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {venture.name}
                  </a>
                ) : (
                  venture.name
                )}
              </h4>
              <p className="text-sm leading-relaxed text-muted">{venture.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="writing" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Thought Leadership
          </div>
          <h3 className="font-display text-3xl font-medium sm:text-4xl">Writing &amp; Product Perspectives</h3>
        </div>

        <div className="grid gap-px overflow-hidden border-t border-l border-border sm:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group border-r border-b border-border bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {article.category}
              </div>

              <h4 className="mb-3 font-display text-xl font-medium text-foreground">
                {article.title}
              </h4>

              <p className="mb-6 text-sm leading-relaxed text-muted">{article.summary}</p>

              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors group-hover:text-accent">
                Read on LinkedIn <span aria-hidden="true">&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="photography" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Beyond Product &amp; Technology
          </div>

          <h3 className="mb-6 font-display text-3xl font-medium sm:text-4xl">Photography &amp; Visual Storytelling</h3>

          <p className="leading-relaxed text-muted">
            Rahul is also passionate about photography, capturing stories through travel,
            urban landscapes, culture, architecture, and human experiences.
          </p>
        </div>

        <div className="space-y-16">
          {photographyGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-6 flex flex-col gap-2 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
                <h4 className="font-display text-xl font-medium">{group.title}</h4>
                <p className="text-sm text-muted">{group.description}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {group.photos.map((photo) => (
                  <figure key={photo.image}>
                    <div className="relative aspect-[4/5] overflow-hidden bg-surface">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-muted">{photo.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="credentials" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Education &amp; Certifications
          </div>
          <h3 className="font-display text-3xl font-medium sm:text-4xl">
            Formal learning, agile practice &amp; AI readiness
          </h3>
        </div>

        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {credentials.map((credential) => (
            <div key={credential.title} className="border-t border-border pt-6">
              <h4 className="mb-2 font-display text-lg font-medium text-foreground">{credential.title}</h4>
              <p className="text-sm leading-relaxed text-muted">{credential.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
