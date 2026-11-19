import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { privacy } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(privacy.metaTitle, privacy.metaDescription, "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageHero title={privacy.title} lede={privacy.lede} />
      <section className="section">
        <div className="wrap prose">
          {privacy.sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
          <h2>{privacy.retentionHeading}</h2>
          <p>
            <PhLabel /> {privacy.retention}
          </p>
          <h2>{privacy.analyticsHeading}</h2>
          <p>
            <PhLabel /> {privacy.analytics}
          </p>
          <h2>{privacy.cookiesHeading}</h2>
          <p>{privacy.cookies}</p>
          <h2>{privacy.rightsHeading}</h2>
          <p>
            {privacy.rightsBefore} <Link href="/contact">{privacy.rightsLink}</Link>. {privacy.rightsAfter}
          </p>
          <h2>{privacy.legalHeading}</h2>
          <p>
            <PhLabel /> {privacy.legal}
          </p>
          <p>{privacy.dated}</p>
        </div>
      </section>
    </>
  );
}
