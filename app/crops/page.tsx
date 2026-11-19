import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Crops",
  "Cassava, maize and beans from EDSAVIN CONSULT AND TRADING. Seasons and pack sizes are shown as placeholders until the farm confirms them.",
  "/crops",
);

export default function CropsPage() {
  return (
    <>
      <PageHero
        title="Crops"
        lede="Cassava, maize and beans. Seasons and pack sizes are marked as placeholders until the farm confirms them. Cassava is also processed into gari and starch."
        photo={photos.heroFields}
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid products={productsIn("crops")} />
        </div>
      </section>
    </>
  );
}
