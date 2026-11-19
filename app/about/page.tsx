import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ClosingBand } from "@/components/Trust";
import { about, photos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(about.metaTitle, about.metaDescription, "/about");

export default function AboutPage() {
  return (
    <>
      <PageHero title={about.title} lede={about.lede} photo={photos.galleryFields} />
      <section className="section">
        <div className="wrap prose">
          <p className="kicker">{about.storyKicker}</p>
          <h2>{about.storyHeading}</h2>
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p>
            <PhLabel /> {about.storyGap}
          </p>

          <h2>{about.promiseHeading}</h2>
          <p>{about.promise}</p>

          <h2>{about.valuesHeading}</h2>
          <div className="value-grid">
            {about.values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>

          <h2>{about.teamHeading}</h2>
          <p>{about.teamLead}</p>
          <div className="team-grid">
            {about.team.map((person) => (
              <article key={person.role} className="team-card">
                <div className="portrait-missing">
                  <PhLabel />
                  <span>{about.photoGap}</span>
                </div>
                <h3>{person.nameIsPlaceholder ? <><PhLabel /> {person.name}</> : person.name}</h3>
                <p>{person.roleIsPlaceholder ? <><PhLabel /> {person.role}</> : person.role}</p>
                <p>
                  <PhLabel /> {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ClosingBand kicker={about.storyKicker} heading={about.ctaHeading} body={about.ctaBody} />
    </>
  );
}
