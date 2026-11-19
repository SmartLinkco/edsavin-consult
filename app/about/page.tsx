import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel, PhRegion } from "@/components/Placeholder";
import { about, photos } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "About & Team",
  "The story, mission, values and team of EDSAVIN CONSULT AND TRADING. Story and team details are waiting for the farm.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About & Team"
        lede="The people and the purpose behind the livestock, the meat, the crops, and the gari and starch."
        photo={photos.galleryFields}
      />
      <section className="section">
        <div className="wrap prose">
          <h2>The story</h2>
          <PhRegion>
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PhRegion>

          <h2>Mission</h2>
          <p>
            <PhLabel /> {about.mission}
          </p>

          <h2>Values</h2>
          <PhRegion>
            <p>These four cards are suggestions. Replace them with the words the business actually uses.</p>
          </PhRegion>
          <div className="value-grid">
            {about.values.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>
                  <PhLabel /> {value.text}
                </p>
              </article>
            ))}
          </div>

          <h2>Team</h2>
          <p>Photographs of named people have not been supplied. The frames below stay empty until they arrive.</p>
          <div className="team-grid">
            {about.team.map((person, index) => (
              <article key={person.name || `member-${index}`} className="team-card">
                <div className="portrait-missing">
                  <PhLabel />
                  <span>Photo to come</span>
                </div>
                <h3>{person.name || <><PhLabel /> Name</>}</h3>
                <p>{person.role || <><PhLabel /> Role</>}</p>
                <p>
                  <PhLabel /> {person.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
