import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/constants";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Banisheetla Innovations" },
      { name: "description", content: "How Banisheetla Innovations collects, uses, and protects your personal information across our website and Jan Mitra platform." },
      { property: "og:title", content: "Privacy Policy — Banisheetla Innovations" },
      { property: "og:description", content: "Our privacy practices for the Banisheetla website and Jan Mitra platform." },
      { property: "og:url", content: absUrl("/privacy") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/privacy") }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="Effective Date: [Add Date]" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a starter draft. Have a qualified lawyer review it for
            compliance with India's Digital Personal Data Protection Act (DPDP) 2023 before publishing.
          </p>

          <p>
            {COMPANY.name} ("we", "us", "our") operates the website banisheetla.com and the
            Jan Mitra platform (the "Service"). This Privacy Policy explains what information we
            collect, how we use it, and your rights regarding that information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly, such as your name, email address, phone
            number, and company name, when you fill out a contact form, request a quote, apply for
            a job, or sign up for our newsletter. We also collect limited technical information
            automatically, such as browser type and general usage data, to help us improve the
            Service.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to inquiries, provide the Service,
            communicate with you about your account or requests, and improve our website and
            product. We do not sell your personal information to third parties.
          </p>

          <h2>Data Sharing</h2>
          <p>
            We may share information with service providers who help us operate our business,
            such as hosting or email providers, only to the extent necessary for them to perform
            their services.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required by law.
          </p>

          <h2>Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information by
            contacting us at{" "}
            <a href={COMPANY.emailHref} className="text-primary underline">{COMPANY.email}</a>.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href={COMPANY.emailHref} className="text-primary underline">{COMPANY.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
