import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ProductGrid } from "@/components/ProductCard";
import { ClosingBand } from "@/components/Trust";
import { photos, processingPage, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(processingPage.metaTitle, processingPage.metaDescription, "/processing");

export default function ProcessingPage() {
  return (
    <>
      <PageHero title={processingPage.title} lede={processingPage.lede} photo={photos.heroProcessing} />
      <section className="section">
        <div className="wrap">
          <ProductGrid products={productsIn("processing")} />
          <div className="split" style={{ marginTop: "2rem" }}>
            <article>
              <h2>{processingPage.gariHeading}</h2>
              <p>{processingPage.gariLead}</p>
              <ol className="order-list">
                {processingPage.gariSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
            <article>
              <h2>{processingPage.starchHeading}</h2>
              <p>{processingPage.starchLead}</p>
              <ol className="order-list">
                {processingPage.starchSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          </div>
          <p style={{ marginTop: "1rem" }}>
            <PhLabel /> {processingPage.methodGap}
          </p>
          <p>
            <Link href="/#journey">{processingPage.journeyLink}</Link>
          </p>
        </div>
      </section>
      <ClosingBand kicker="Gari and starch" heading={processingPage.ctaHeading} body={processingPage.ctaBody} />
    </>
  );
}
