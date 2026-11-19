import type { Metadata } from "next";
import { GalleryBoard } from "@/components/GalleryBoard";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ClosingBand } from "@/components/Trust";
import { galleryPage, photos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(galleryPage.metaTitle, galleryPage.metaDescription, "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHero title={galleryPage.title} lede={galleryPage.lede} photo={photos.galleryFields} />
      <section className="section">
        <div className="wrap">
          <p>
            <PhLabel /> {galleryPage.photoGap}
          </p>
          <GalleryBoard />
        </div>
      </section>
      <ClosingBand kicker="Gallery" heading={galleryPage.ctaHeading} body={galleryPage.ctaBody} />
    </>
  );
}
