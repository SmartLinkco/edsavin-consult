import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { ClosingBand, OrderSteps } from "@/components/Trust";
import { livestockPage, photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(livestockPage.metaTitle, livestockPage.metaDescription, "/livestock");

export default function LivestockPage() {
  return (
    <>
      <PageHero title={livestockPage.title} lede={livestockPage.lede} photo={photos.heroLivestock} />
      <section className="section">
        <div className="wrap">
          <p>{livestockPage.note}</p>
          <ProductGrid products={productsIn("livestock")} />
        </div>
      </section>
      <OrderSteps />
      <ClosingBand kicker="Livestock" heading={livestockPage.ctaHeading} body={livestockPage.ctaBody} />
    </>
  );
}
