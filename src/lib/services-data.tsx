import type { LucideIcon } from "lucide-react";
import { Code2, Cpu, Workflow, Sparkles } from "lucide-react";

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  category: "IT Services";
  icon: LucideIcon;
  title: string;
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
      "Technology architecture review and recommendations",
      "Infrastructure and security audits",
      "Digital transformation strategy",
      "Vendor and platform evaluation",
      "Cloud migration planning",
      "Technical due diligence",
    ],
    whoItsFor: "Teams about to commit budget to a build or migration who want an independent technical assessment first.",
    process: [
      { step: "Assessment", detail: "Reviewing your current architecture, infrastructure, and pain points." },
      { step: "Recommendations", detail: "A clear, prioritized set of findings and options." },
      { step: "Roadmap", detail: "A practical plan for what to do next, and in what order." },
      { step: "Ongoing advisory", detail: "Available as an ongoing technical advisor if needed." },
    ],
    faqs: [
      { q: "Do you only consult, or do you also build?", a: "Both — many consulting engagements lead directly into a build with our software development team." },
      { q: "Can you review an architecture another vendor proposed?", a: "Yes, independent technical review of a proposed architecture or vendor plan is a common request." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
