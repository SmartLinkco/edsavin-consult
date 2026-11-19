import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ProductGrid } from "@/components/ProductCard";
import { meatPage, ordering, photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Meat",
  "Goat meat, beef and sheep meat (mutton) from EDSAVIN CONSULT AND TRADING, including a note on the expansion. Enquire to order. No checkout.",
  "/meat",
);

export default function MeatPage() {
  return (
    <>
      <PageHero
        title="Meat"
        lede="Goat meat, beef and sheep meat (mutton). Orders are requests: the farm confirms what it can supply. There is no checkout."
        photo={photos.goatMeat}
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid products={productsIn("meat")} />
          <div className="split" style={{ marginTop: "2rem" }}>
            <article className="order-card">
              <h2>An expanding line</h2>
              <p>
                <PhLabel /> {meatPage.expansion}
              </p>
            </article>
            <article className="order-card">
              <h2>How an order works</h2>
              <ol className="order-list">
                {ordering.steps.map((step, index) => (
                  <li key={step}>
                    <strong>0{index + 1}</strong>
                    {step}
                  </li>
                ))}
              </ol>
              <p>
                <PhLabel /> {ordering.payment}
              </p>
              <p>
                <PhLabel /> {ordering.delivery}
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
