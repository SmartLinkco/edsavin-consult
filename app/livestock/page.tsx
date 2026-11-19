import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductGrid } from "@/components/ProductCard";
import { photos, productsIn } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Livestock",
  "Guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise reared by EDSAVIN CONSULT AND TRADING. Open a card and send an enquiry.",
  "/livestock",
);

export default function LivestockPage() {
  return (
    <>
      <PageHero
        title="Livestock"
        lede="Guinea fowl, duck, rabbit, sheep, cattle, goat and tortoise. Tap a card for what is still to be confirmed, then enquire or send a WhatsApp message with that animal already named."
        photo={photos.heroLivestock}
      />
      <section className="section">
        <div className="wrap">
          <ProductGrid products={productsIn("livestock")} />
        </div>
      </section>
    </>
  );
}
