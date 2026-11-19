import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ProductGrid } from "@/components/ProductCard";
import { photos, processingPage, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Processing (Gari & Starch)",
  "How cassava becomes gari and starch at EDSAVIN CONSULT AND TRADING, with pack sizes to confirm and a way to enquire.",
  "/processing",
);

export default function ProcessingPage() {
  return (
    <>
      <PageHero
        title="Processing (Gari & Starch)"
        lede={processingPage.intro}
        photo={photos.heroProcessing}
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid products={productsIn("processing")} />
          <div className="split" style={{ marginTop: "2rem" }}>
            <article>
              <h2>Gari, in outline</h2>
              <ol className="order-list">
                {processingPage.gariSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
            <article>
              <h2>Starch, in outline</h2>
              <ol className="order-list">
                {processingPage.starchSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </article>
          </div>
          <p style={{ marginTop: "1rem" }}>
            <PhLabel /> {processingPage.methodNote}
          </p>
          <p>
            <Link href="/#journey">Follow cassava from the field to the buyer</Link>
          </p>
        </div>
      </section>
    </>
  );
}
