import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { ClosingBand, OrderSteps } from "@/components/Trust";
import { cropsPage, photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(cropsPage.metaTitle, cropsPage.metaDescription, "/crops");

export default function CropsPage() {
  return (
    <>
      <PageHero title={cropsPage.title} lede={cropsPage.lede} photo={photos.heroFields} />
      <section className="section">
        <div className="wrap">
          <p>{cropsPage.note}</p>
          <ProductGrid products={productsIn("crops")} />
        </div>
      </section>
      <OrderSteps />
      <ClosingBand kicker="Crops" heading={cropsPage.ctaHeading} body={cropsPage.ctaBody} />
    </>
  );
}
