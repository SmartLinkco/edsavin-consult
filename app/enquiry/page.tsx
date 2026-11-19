import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { findProduct } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Enquiry / Order",
  "Send an enquiry or order request to EDSAVIN CONSULT AND TRADING, or open WhatsApp with the product already named. No payment.",
  "/enquiry",
);

const errorCopy: Record<string, string> = {
  invalid: "Please check the form and send it again.",
  fast: "Please wait a moment and send the form again.",
  rate: "Too many messages were sent from this connection. Wait a few minutes, or use WhatsApp.",
  config: "The enquiry inbox is not connected yet. Use WhatsApp, or ask for the enquiry email to be set.",
  send: "The message could not be sent just now. Please try again, or use WhatsApp.",
};

export default async function EnquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  const product = params.product ? findProduct(params.product) : undefined;
  const sent = params.sent === "1";
  const error = params.error ? errorCopy[params.error] : undefined;

  return (
    <>
      <PageHero
        title="Enquiry / Order"
        lede="Tell the farm what you need. The form is checked for spam before it is emailed. You can also open WhatsApp with the product already named. Nothing is paid for on this page."
      >
        <div className="actions">
          <WhatsAppLink product={product?.name} className="btn btn-ink" />
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap">
          {sent ? (
            <p className="form-status" role="status">
              Thank you. Your enquiry has been sent. The farm will reply using the details you gave.
            </p>
          ) : null}
          {error ? (
            <p className="form-status is-error" role="alert">
              {error}
            </p>
          ) : null}
          <EnquiryForm initialProduct={product?.id ?? "general"} />
          <p>
            Read how these details are used on the <Link href="/privacy">privacy notice</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
