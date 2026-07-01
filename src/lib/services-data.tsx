import type { LucideIcon } from "lucide-react";
import {
  Construction, Wrench, Home, Building2, Factory,
  Code2, Cpu, Workflow, Sparkles,
} from "lucide-react";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  category: "IT Services" | "Construction Services";
  icon: LucideIcon;
  title: string;
  /** Short one-liner used on the services overview cards */
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  whatsIncluded: string[];
  whoItsFor: string;
  process: { step: string; detail: string }[];
  faqs: ServiceFaq[];
}

export const services: ServiceDetail[] = [
  // ---------- IT Services ----------
  {
    slug: "servicenow-consulting",
    category: "IT Services",
    icon: Workflow,
    title: "ServiceNow Consulting",
    tagline: "Implementation, configuration, and workflow automation on the ServiceNow platform.",
    metaTitle: "ServiceNow Consulting Services | Banisheetla Innovations",
    metaDescription: "ServiceNow implementation, ITSM/ITOM configuration, CMDB setup, custom app development, and integration services from Banisheetla Innovations.",
    overview: "We help organizations plan, implement, and get real value out of ServiceNow — from a first-time ITSM rollout to extending an existing instance with custom workflows, integrations, and automation.",
    whatsIncluded: [
      "ITSM setup: Incident, Problem, Change, and Request Management",
      "ITOM and CMDB configuration for accurate, automated infrastructure mapping",
      "Custom application development on the Now Platform / App Engine",
      "Workflow automation to remove manual, repetitive approval and ticketing steps",
      "Integration with existing tools (HR systems, monitoring, ticketing, identity providers)",
      "Ongoing admin, support, and platform health checks",
    ],
    whoItsFor: "Mid-size and enterprise teams running (or planning to run) ServiceNow as their core ITSM/operations platform.",
    process: [
      { step: "Discovery & audit", detail: "We review your current processes (or existing instance) and map out where ServiceNow can remove friction." },
      { step: "Solution design", detail: "A configuration and workflow plan tailored to your team's actual ticket volume and approval chains." },
      { step: "Build & configure", detail: "Implementation of modules, custom apps, and integrations in a staging environment first." },
      { step: "Rollout & support", detail: "Phased go-live with user training, followed by ongoing support as your usage grows." },
    ],
    faqs: [
      { q: "Do you work with an existing ServiceNow instance, or only new setups?", a: "Both. We regularly extend and clean up existing instances as well as run net-new implementations." },
      { q: "Can ServiceNow integrate with our other business tools?", a: "Yes — integration with monitoring, HR, identity, and ticketing tools is one of the most common engagements we run." },
    ],
  },
  {
    slug: "ai-solutions",
    category: "IT Services",
    icon: Sparkles,
    title: "AI Solutions",
    tagline: "Practical AI — automation, assistants, and analytics built into your existing systems.",
    metaTitle: "AI Solutions & AI Integration Services | Banisheetla Innovations",
    metaDescription: "Custom AI solutions including intelligent automation, AI chatbots, predictive analytics, and AI integration into existing software and workflows.",
    overview: "We build AI into the systems you already run, not as a science project on the side. That means automation that removes manual work, assistants that actually answer real questions, and analytics that help you decide, not just report.",
    whatsIncluded: [
      "AI-powered chatbots and virtual assistants for customer or internal support",
      "Intelligent process automation (document processing, data extraction, routing)",
      "Predictive analytics and forecasting models built on your own data",
      "AI integration into existing software, ERPs, or internal tools",
      "Generative AI features (content, summarization, search) added to your product",
      "Data preparation and ongoing model monitoring (MLOps)",
    ],
    whoItsFor: "Businesses with a specific, real workflow problem (too many manual tickets, slow document processing, no forecasting) rather than a vague desire to \"add AI.\"",
    process: [
      { step: "Problem framing", detail: "We start with the actual bottleneck — not the technology — and confirm AI is genuinely the right tool for it." },
      { step: "Data assessment", detail: "Checking what data you have, what's missing, and what's realistically achievable with it." },
      { step: "Build & test", detail: "A working version tested against real cases before it touches production." },
      { step: "Deploy & monitor", detail: "Rollout with monitoring in place, since AI systems need watching, not a one-time launch." },
    ],
    faqs: [
      { q: "Do we need our own data science team for this?", a: "No — we handle the data preparation, model selection, and integration work end-to-end." },
      { q: "Can AI features be added to our existing app instead of building something new?", a: "Yes, that's the most common request — we integrate AI capabilities into what you already have rather than replacing it." },
    ],
  },
  {
    slug: "software-development",
    category: "IT Services",
    icon: Code2,
    title: "Software Development",
    tagline: "Custom internal tools and platforms built around how your team actually works.",
    metaTitle: "Custom Software Development Services | Banisheetla Innovations",
    metaDescription: "Custom software development for internal tools, business platforms, and process automation, built to fit your actual workflow rather than a generic template.",
    overview: "When off-the-shelf software almost fits but not quite, we build the custom tool instead — internal dashboards, workflow platforms, and systems designed around your actual process, not a generic template.",
    whatsIncluded: [
      "Custom internal tools and dashboards",
      "Business process automation",
      "Legacy system modernization",
      "API development and third-party integrations",
      "Database design and data migration",
      "Long-term maintenance and feature support",
    ],
    whoItsFor: "Teams whose current process lives in spreadsheets, email chains, or software that almost works but fights them daily.",
    process: [
      { step: "Process mapping", detail: "Understanding exactly how your team works today, including the workarounds." },
      { step: "Architecture", detail: "Designing a system that fits your real workflow and scales with your team." },
      { step: "Build", detail: "Iterative development with working versions you can test early, not just at the end." },
      { step: "Support", detail: "Ongoing maintenance as your processes evolve." },
    ],
    faqs: [
      { q: "We already have some software in place — can you build on top of it?", a: "Yes, integrating with or extending existing systems is common, not every project starts from zero." },
      { q: "How do you handle changing requirements mid-project?", a: "We work iteratively with regular check-ins, so changes get absorbed along the way rather than derailing the whole build." },
    ],
  },
  {
    slug: "it-consulting",
    category: "IT Services",
    icon: Cpu,
    title: "IT Consulting",
    tagline: "Architecture, strategy, and technology audits to plan before you build.",
    metaTitle: "IT Consulting Services | Banisheetla Innovations",
    metaDescription: "IT consulting covering technology architecture, infrastructure audits, and digital strategy — helping you plan before committing budget to a build.",
    overview: "Before committing budget to a build, it helps to know whether you're solving the right problem with the right architecture. Our consulting engagements give you that clarity first.",
    whatsIncluded: [
      "Technology architecture planning",
      "Infrastructure and security audits",
      "Vendor and tool evaluation",
      "Digital transformation roadmaps",
      "Cost and performance optimization reviews",
      "Technical due diligence for new initiatives",
    ],
    whoItsFor: "Leadership teams making a significant technology decision who want an independent technical opinion first.",
    process: [
      { step: "Assessment", detail: "Reviewing your current systems, team, and goals." },
      { step: "Findings", detail: "A clear, prioritized report — not a 100-page document nobody reads." },
      { step: "Roadmap", detail: "A practical plan with sequencing and rough cost/time estimates." },
      { step: "Implementation support", detail: "Optional hands-on support if you want us to help execute the plan." },
    ],
    faqs: [
      { q: "Is this only useful if we're about to build something new?", a: "No — audits and architecture reviews are equally useful for existing systems that feel slow or fragile." },
      { q: "Will you push us toward your own development services?", a: "Our recommendations are based on what actually solves your problem; if that means a smaller fix instead of a big build, we'll say so." },
    ],
  },

  // ---------- Construction Services ----------
  {
    slug: "road-construction",
    category: "Construction Services",
    icon: Construction,
    title: "Road Construction",
    tagline: "Highways, rural roads, and resurfacing projects, including government tenders.",
    metaTitle: "Road Construction Services | Banisheetla Innovations",
    metaDescription: "Road construction services including highways, rural road development, and resurfacing projects for government and private contracts.",
    overview: "Road construction and resurfacing work executed to spec and on schedule — from rural connectivity roads to larger highway segments, including government tender projects.",
    whatsIncluded: [
      "New road construction (rural and highway segments)",
      "Resurfacing and repair of existing roads",
      "Drainage and shoulder work as part of road projects",
      "Government tender (PWD/PMGSY-class) project execution",
      "Materials sourcing and quality testing",
      "Project documentation for compliance and audits",
    ],
    whoItsFor: "Government bodies and private developers needing road infrastructure built or restored to spec.",
    process: [
      { step: "Survey & planning", detail: "Site survey, soil testing, and project planning before any work begins." },
      { step: "Materials & approvals", detail: "Sourcing approved materials and securing necessary clearances." },
      { step: "Construction", detail: "Phased construction with quality checks at each stage." },
      { step: "Handover", detail: "Final inspection, documentation, and handover." },
    ],
    faqs: [
      { q: "Do you handle government tender projects?", a: "Yes, we execute government and PWD-class road projects with full project documentation." },
      { q: "Can you take on resurfacing-only projects, not just new construction?", a: "Yes, repair and resurfacing of existing roads is a regular part of our work." },
    ],
  },
  {
    slug: "residential-construction",
    category: "Construction Services",
    icon: Home,
    title: "Residential Construction",
    tagline: "Homes, villas, and apartment blocks, built to spec and on schedule.",
    metaTitle: "Residential Construction Services | Banisheetla Innovations",
    metaDescription: "Residential construction services covering individual homes, villas, and apartment blocks, from planning through handover.",
    overview: "Residential builds handled end-to-end — from individual homes and villas to multi-unit apartment blocks — with clear timelines and transparent costing.",
    whatsIncluded: [
      "Individual home and villa construction",
      "Apartment block / multi-unit development",
      "Structural design coordination",
      "Material selection and procurement",
      "Site supervision through to handover",
      "Compliance with local building codes",
    ],
    whoItsFor: "Individuals and developers building new residential property, from single homes to multi-unit projects.",
    process: [
      { step: "Planning", detail: "Design coordination, budgeting, and approvals before breaking ground." },
      { step: "Foundation & structure", detail: "Core construction phase with regular quality checks." },
      { step: "Finishing", detail: "Interior and exterior finishing work." },
      { step: "Handover", detail: "Final walkthrough and documentation." },
    ],
    faqs: [
      { q: "Can you handle approvals and permits too?", a: "We coordinate the construction process around required local approvals and compliance." },
      { q: "Do you build single homes as well as larger apartment projects?", a: "Yes, we take on both individual homes and multi-unit apartment developments." },
    ],
  },
  {
    slug: "commercial-construction",
    category: "Construction Services",
    icon: Building2,
    title: "Commercial Construction",
    tagline: "Offices, retail spaces, and mixed-use buildings.",
    metaTitle: "Commercial Construction Services | Banisheetla Innovations",
    metaDescription: "Commercial construction services for offices, retail spaces, and mixed-use buildings, managed from planning through fit-out.",
    overview: "Commercial builds where downtime and delays cost real money — offices, retail spaces, and mixed-use developments managed with business timelines in mind.",
    whatsIncluded: [
      "Office building construction",
      "Retail space construction and fit-out",
      "Mixed-use development",
      "Structural and MEP coordination",
      "Timeline management around business deadlines",
      "Post-construction facility handover support",
    ],
    whoItsFor: "Businesses and developers building commercial space where opening dates and budgets are firm constraints.",
    process: [
      { step: "Planning", detail: "Scope, budget, and timeline locked in before construction starts." },
      { step: "Construction", detail: "Phased build with regular progress reporting." },
      { step: "Fit-out", detail: "Interior fit-out aligned to your business's operational needs." },
      { step: "Handover", detail: "Final inspection and facility handover." },
    ],
    faqs: [
      { q: "Can you work around our business's opening date constraints?", a: "Yes — timeline management around firm business deadlines is core to how we plan commercial projects." },
      { q: "Do you handle interior fit-out as well as the core building?", a: "Yes, fit-out is included as part of our commercial construction service." },
    ],
  },
  {
    slug: "industrial-projects",
    category: "Construction Services",
    icon: Factory,
    title: "Industrial Projects",
    tagline: "Factories, warehouses, and access works built for operational demands.",
    metaTitle: "Industrial Construction Services | Banisheetla Innovations",
    metaDescription: "Industrial construction services covering factories, warehouses, and access infrastructure, built to operational and safety requirements.",
    overview: "Industrial builds where load capacity, access, and safety requirements drive every decision — factories, warehouses, and the access works that support them.",
    whatsIncluded: [
      "Factory and warehouse construction",
      "Heavy-load flooring and structural work",
      "Access road and yard construction",
      "Utility and drainage infrastructure",
      "Safety-compliant design coordination",
      "Project documentation for regulatory compliance",
    ],
    whoItsFor: "Manufacturers and logistics operators needing industrial facilities built to operational and safety specifications.",
    process: [
      { step: "Requirements gathering", detail: "Understanding load, access, and operational requirements upfront." },
      { step: "Planning & approvals", detail: "Design coordination and necessary regulatory approvals." },
      { step: "Construction", detail: "Phased build with safety and quality checks throughout." },
      { step: "Handover", detail: "Final inspection, certification, and handover documentation." },
    ],
    faqs: [
      { q: "Can you handle heavy-load flooring requirements for machinery?", a: "Yes, structural work is scoped around your actual equipment and load requirements." },
      { q: "Do you also build the access roads and yard infrastructure?", a: "Yes, access and yard works are typically scoped as part of the same project." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
