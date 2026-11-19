import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { ClosingBand } from "@/components/Trust";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { contact, contactPage } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(contactPage.metaTitle, contactPage.metaDescription, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero title={contactPage.title} lede={contactPage.lede} />
      <section className="section">
        <div className="wrap contact-grid">
          <article className="contact-card" id="phone">
            <h2>{contactPage.phoneHeading}</h2>
            <p>{contactPage.phoneBody}</p>
            <p>
              <PhLabel /> {contact.phoneDisplay}
            </p>
            {contact.phoneTel ? (
              <p>
                <a href={`tel:${contact.phoneTel}`}>{contact.phoneTel}</a>
              </p>
            ) : null}
          </article>
          <article className="contact-card" id="whatsapp">
            <h2>{contactPage.whatsappHeading}</h2>
            <p>
              <PhLabel /> {contact.whatsappDisplay}
            </p>
            <p>{contactPage.whatsappBody}</p>
            <WhatsAppLink />
          </article>
          <article className="contact-card" id="email">
            <h2>{contactPage.emailHeading}</h2>
            <p>
              <PhLabel /> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>{contactPage.emailBody}</p>
          </article>
          <article className="contact-card" id="address">
            <h2>{contactPage.addressHeading}</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line === "Ghana" ? line : <><PhLabel /> {line}</>}</p>
            ))}
          </article>
          <article className="contact-card" id="social">
            <h2>{contactPage.socialHeading}</h2>
            <p>
              <PhLabel /> {contactPage.socialBody}
            </p>
            <ul className="socials">
              {contact.socials.map((item) => (
                <li key={item.name}>
                  <a href={item.href} rel="nofollow noopener noreferrer" target="_blank">
                    {item.name}
                    <span className="sr-only"> ({contactPage.socialNewTab})</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className="contact-card" id="map">
            <h2>{contactPage.mapHeading}</h2>
            <div className="map-placeholder">
              <p>
                <PhLabel /> {contact.mapNote}
              </p>
            </div>
          </article>
        </div>
      </section>
      <ClosingBand kicker="Contact" heading={contactPage.ctaHeading} body={contactPage.ctaBody} />
    </>
  );
}
