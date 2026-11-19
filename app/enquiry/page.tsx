import type { Metadata } from "next";
import Link from "next/link";
import { EnquiryForm } from "@/components/EnquiryForm";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { enquiryPage, findProduct, formCopy } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(enquiryPage.metaTitle, enquiryPage.metaDescription, "/enquiry");

export default async function EnquiryPage({
  searchParams,
}: {
  searchParams: Promise<{ product?: string; sent?: string; error?: string }>;
}) {
  const params = await searchParams;
  const product = params.product ? findProduct(params.product) : undefined;
  const sent = params.sent === "1";
  const error = params.error ? formCopy.errors[params.error as keyof typeof formCopy.errors] : undefined;

  return (
    <>
      <PageHero title={enquiryPage.title} lede={enquiryPage.lede}>
        <div className="actions">
          <WhatsAppLink product={product?.name} className="btn btn-ink" />
        </div>
      </PageHero>
      <section className="section">
        <div className="wrap split">
          <div>
            {sent ? (
              <p className="form-status" role="status">
                {enquiryPage.sent}
              </p>
            ) : null}
            {error ? (
              <p className="form-status is-error" role="alert">
                {error}
              </p>
            ) : null}
            <EnquiryForm initialProduct={product?.id ?? "general"} />
            <p>
              <Link href="/privacy">{enquiryPage.privacyLink}</Link>
            </p>
          </div>
          <aside className="order-card">
            <h2>{enquiryPage.asideHeading}</h2>
            <p>{enquiryPage.aside}</p>
            <WhatsAppLink product={product?.name} />
          </aside>
        </div>
      </section>
    </>
  );
}
