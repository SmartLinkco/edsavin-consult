import type { Metadata } from "next";
import { GalleryBoard } from "@/components/GalleryBoard";
import { PageHero } from "@/components/PageHero";
import { PhRegion } from "@/components/Placeholder";
import { photos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Gallery",
  "Placeholder photographs of livestock, fields, cassava processing and farm work for EDSAVIN CONSULT AND TRADING.",
  "/gallery",
);

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        lede="Animals, fields, processing and farm work. Filter the groups. Every picture on this page is a stand-in until the farm's own photos arrive."
        photo={photos.galleryFields}
      />
      <section className="section">
        <div className="wrap">
          <PhRegion>
            <p>
              These photographs were generated for this draft so the pages would not be empty. They are not pictures from the farm, and the person feeding goats is not a named member of the team. Replace the files in public/images and update the captions in content/site.ts.
            </p>
          </PhRegion>
          <GalleryBoard />
        </div>
      </section>
    </>
  );
}
