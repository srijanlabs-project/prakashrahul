import Image from "next/image";
import { CompanyLogoCard } from "./components/company-logo-card";
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

export default function RahulPrakashWebsite() {
  const experience = [
    {
      company: 'Magicbricks',
      role: 'Senior Product Lead',
      description:
        'Led large-scale digital transformation initiatives and scalable real estate platform innovation.',
    },
    {
      company: 'JioMart',
      role: 'Head of Product Management & Analytics',
      description:
        'Built high-scale commerce ecosystems handling millions of users and enterprise-grade operations.',
    },
    {
      company: 'Future Group',
      role: 'Head of Product - Digital Commerce',
      description:
        'Executed omnichannel transformation and blended commerce strategies across 200+ stores.',
    },
    {
      company: 'Praxis & Broadway',
      role: 'Chief Product Officer',
      description:
        'Built enterprise-grade digital commerce and operational intelligence platforms.',
    },
  ];

  const skills = [
    'Product Strategy',
    'AI Product Development',
    'Omnichannel Commerce',
    'Digital Transformation',
    'Platform Thinking',
    'Scalable Architecture',
    'Analytics & Insights',
    'Leadership & Execution',
    'Retail Technology',
    'High Traffic Systems',
    'Growth Strategy',
    'Agile Product Delivery',
  ];

  const impactMetrics = [
    { value: '300K+', label: 'Daily Orders Managed' },
    { value: '\u20b96Cr+', label: 'Daily Revenue Processed' },
    { value: '2M+', label: 'Daily Active Users' },
    { value: '200+', label: 'Retail Stores Digitized' },
    { value: '60%', label: 'SKU Setup Optimization' },
    { value: '30%', label: 'Revenue Growth Achieved' },
  ];

  const ventures = [
    {
      name: 'Quotsy',
      category: 'Quotation Workflow Platform',
      description: 'Business quotation automation ecosystem focused on operational efficiency.',
    },
    {
      name: 'Quicksy',
      category: 'Hyperlocal Commerce',
      description: 'Fast-moving service and delivery ecosystem focused on local commerce.',
    },
    {
      name: 'Stocksy',
      category: 'Inventory Intelligence',
      description: 'Inventory visibility and stock intelligence platform for modern retail.',
    },
    {
      name: 'Kutumbsy',
      category: 'Community Platform',
      description: 'Community-first digital ecosystem designed for engagement and relationships.',
    },
    {
      name: 'Localisy',
      category: 'Local Discovery Ecosystem',
      description: 'Hyperlocal discovery platform empowering neighborhoods and merchants.',
    },
    {
      name: 'QuoteIQ',
      category: 'AI Quote Intelligence',
      description: 'AI-powered quotation intelligence platform with smart workflows.',
    },
  ];

  const thoughtLeadership = [
    {
      title: 'AI in Commerce',
      description: 'Exploring how AI can transform retail ecosystems and customer journeys.',
    },
    {
      title: 'Omnichannel Retail',
      description: 'Building seamless commerce experiences across digital and physical channels.',
    },
    {
      title: 'Product Transformation',
      description: 'Driving business modernization through scalable platforms and product systems.',
    },
    {
      title: 'Product Frameworks',
      description: 'Frameworks around prioritization, discovery, platform thinking, and execution.',
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
    { name: 'Ruby\'s Kitchen', logo: logoRubysKitchen },
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

  const photographyShots = [
    {
      title: 'Street & Culture',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Urban Frames',
      image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Travel Stories',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Light & Perspective',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500 blur-[140px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0 max-w-4xl">
            <h1 className="text-2xl font-black">Rahul Prakash</h1>
            <p className="mt-2 max-w-[22rem] break-words text-xs leading-relaxed text-slate-400 sm:max-w-full md:text-sm">
              Product & Platform Leader | Product Consultant | Digital Commerce Strategy | AI/ML, Data & Growth Innovation
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 text-xs text-slate-300 sm:text-sm">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#ventures" className="hover:text-white">Ventures</a>
            <a href="#photography" className="hover:text-white">Photography</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="mx-auto grid w-full max-w-7xl gap-16 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0 max-w-[22rem] sm:max-w-none">
          <div className="mb-8 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
            Building Enterprise Platforms That Scale
          </div>

          <h2 className="mb-8 max-w-full break-words text-4xl font-black leading-[0.95] sm:text-6xl md:text-7xl">
            <span className="block">Product</span>
            <span className="block">Leadership</span>
            <span className="block">With</span>
            <span className="block text-cyan-400">Business Impact</span>
          </h2>

          <p className="mb-10 max-w-2xl break-words text-base leading-relaxed text-slate-300 sm:text-xl">
            Rahul Prakash is a product and digital transformation leader with expertise across retail,
            commerce, AI products, and high-scale digital ecosystems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:rahul@srijanlabs.in" className="rounded-2xl bg-cyan-400 px-7 py-4 font-bold text-slate-900">
              Contact Rahul
            </a>

            <a
              href="https://www.linkedin.com/in/prakashrahul/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-7 py-4 font-bold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="min-w-0 max-w-[22rem] rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:max-w-none sm:rounded-[36px] sm:p-10">
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {impactMetrics.slice(0, 4).map((metric) => (
              <div key={metric.label} className="min-w-0 rounded-3xl bg-slate-900/70 p-5 sm:p-6">
                <h3 className="text-3xl font-black text-cyan-400 sm:text-4xl">{metric.value}</h3>
                <p className="mt-2 break-words text-sm text-slate-300 sm:text-base">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brand-collage" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <div className="mb-12 text-left sm:text-center">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Brand Ecosystem
          </div>
          <h3 className="mb-5 max-w-[22rem] text-3xl font-black sm:max-w-none sm:text-4xl md:text-5xl">Trusted By Leading Brands</h3>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {companies.map((company) => (
            <CompanyLogoCard
              key={company.name}
              name={company.name}
              logo={company.logo}
            />
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Leadership Journey
          </div>
          <h3 className="text-3xl font-black sm:text-4xl md:text-5xl">Professional Experience</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((item) => (
            <div key={item.company} className="rounded-[32px] border border-white/10 bg-slate-900 p-6 sm:p-10">
              <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                <h4 className="text-2xl font-bold">{item.company}</h4>
                <span className="text-sm text-cyan-300">{item.role}</span>
              </div>
              <p className="leading-relaxed text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="ventures" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Founder & Innovation
          </div>
          <h3 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">Products & Ventures</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {ventures.map((venture) => (
            <div key={venture.name} className="rounded-[32px] border border-white/10 bg-slate-900 p-6 sm:p-10">
              <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-300">
                {venture.category}
              </div>

              <h4 className="mb-5 text-2xl font-black sm:text-3xl">{venture.name}</h4>
              <p className="leading-relaxed text-slate-300">{venture.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="thought-leadership" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Thought Leadership
          </div>
          <h3 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">Articles & Strategic Thinking</h3>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {thoughtLeadership.map((item) => (
            <div key={item.title} className="rounded-[32px] border border-white/10 bg-slate-900 p-6 sm:p-10">
              <h4 className="mb-5 text-2xl font-black sm:text-3xl">{item.title}</h4>
              <p className="text-lg leading-relaxed text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="articles" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="rounded-[36px] border border-white/10 bg-slate-900 p-6 sm:p-10 lg:p-14">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Featured Articles
          </div>
          <h3 className="mb-10 text-3xl font-black sm:text-4xl md:text-5xl">Insights & Product Perspectives</h3>

          <div className="grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[28px] border border-white/10 bg-white/5 p-8"
              >
                <div className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs uppercase tracking-widest text-cyan-300">
                  {article.category}
                </div>

                <h4 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-300">
                  {article.title}
                </h4>

                <p className="mb-6 leading-relaxed text-slate-400">{article.summary}</p>

                <div className="text-sm font-semibold text-cyan-300">
                  Read on LinkedIn <span aria-hidden="true">&rarr;</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="photography" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="mb-12">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Beyond Product & Technology
          </div>

          <h3 className="mb-5 text-3xl font-black sm:text-4xl md:text-5xl">Photography & Visual Storytelling</h3>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-400">
            Rahul is also passionate about photography, capturing stories through travel,
            urban landscapes, culture, architecture, and human experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {photographyShots.map((photo) => (
            <div key={photo.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-2xl font-black text-white">{photo.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-blue-500/10 p-6 sm:p-10 lg:p-14">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Core Expertise
          </div>

          <h3 className="mb-10 text-3xl font-black sm:text-4xl md:text-5xl">Capabilities & Expertise</h3>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <div key={skill} className="rounded-2xl border border-white/10 bg-white/10 px-6 py-4 text-slate-100">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-4 py-28 sm:px-6">
        <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-blue-500/10 p-6 text-center sm:rounded-[40px] sm:p-10 md:p-16">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Connect
          </div>

          <h3 className="mb-6 text-4xl font-black sm:text-5xl md:text-6xl">Let&apos;s Build Something Meaningful</h3>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Open to conversations around product leadership, AI product strategy, digital transformation,
            and scalable commerce ecosystems.
          </p>

          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <a href="mailto:rahul@srijanlabs.in" className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-900">
              rahul@srijanlabs.in
            </a>

            <a
              href="https://www.linkedin.com/in/prakashrahul/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 font-bold"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
