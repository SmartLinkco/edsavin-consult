import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ProductGrid } from "@/components/ProductCard";
import { ClosingBand, OrderSteps } from "@/components/Trust";
import { meatPage, photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(meatPage.metaTitle, meatPage.metaDescription, "/meat");

export default function MeatPage() {
  return (
    <>
      <PageHero title={meatPage.title} lede={meatPage.lede} photo={photos.goatMeat} />
      <section className="section">
        <div className="wrap">
          <div className="why-grid">
            {meatPage.concerns.map((item) => (
              <article key={item.title} className="value-card">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <ProductGrid products={productsIn("meat")} />
          </div>
          <article className="order-card" style={{ marginTop: "1.5rem" }}>
            <h2>{meatPage.expansionHeading}</h2>
            <p>{meatPage.expansion}</p>
            <p>
              <PhLabel /> {meatPage.expansionGap}
            </p>
          </article>
        </div>
      </section>
      <OrderSteps />
      <ClosingBand kicker="Meat" heading={meatPage.ctaHeading} body={meatPage.ctaBody} />
    </>
  );
}
