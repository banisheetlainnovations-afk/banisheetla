import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { COMPANY } from "@/lib/constants";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Banisheetla Innovations" },
      { name: "description", content: "Terms governing use of the Banisheetla Innovations website and Jan Mitra platform." },
      { property: "og:title", content: "Terms of Service — Banisheetla Innovations" },
      { property: "og:description", content: "The terms that govern use of our website and Jan Mitra platform." },
      { property: "og:url", content: absUrl("/terms") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/terms") }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" description="Effective Date: [Add Date]" />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose prose-slate max-w-none">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> This is a starter draft. Have a qualified lawyer review it
            before publishing.
          </p>

          <p>
            These Terms of Service ("Terms") govern your use of the website banisheetla.com and
            the Jan Mitra platform (the "Service"), operated by {COMPANY.name} ("Company", "we",
            "us"). By using the Service, you agree to these Terms.
          </p>

          <h2>Use of the Service</h2>
          <p>
            You may use the Service only for lawful purposes and in accordance with these Terms.
            You agree not to misuse the Service, attempt unauthorized access, or interfere with
            its normal operation.
          </p>

          <h2>Accounts</h2>
          <p>
            If the Service requires an account, you are responsible for maintaining the
            confidentiality of your login credentials and for all activity under your account.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, and technology associated with the Service are owned by{" "}
            {COMPANY.name} or its licensors and may not be copied or reused without permission.
          </p>

          <h2>Fees and Payment</h2>
          <p>[Describe pricing and payment terms once your pricing page is finalized.]</p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, {COMPANY.name} is not liable for indirect,
            incidental, or consequential damages arising from use of the Service.
          </p>

          <h2>Termination</h2>
          <p>We may suspend or terminate access to the Service for violation of these Terms.</p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of India, and any disputes will be subject to
            the jurisdiction of the courts located in Chhattisgarh.
          </p>

          <h2>Contact Us</h2>
          <p>
            For questions about these Terms, contact us at{" "}
            <a href={COMPANY.emailHref} className="text-primary underline">{COMPANY.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
