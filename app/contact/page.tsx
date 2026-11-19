import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { contact } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Contact",
  "Phone, WhatsApp, email, address, map and social links for EDSAVIN CONSULT AND TRADING. Contact details are still placeholders.",
  "/contact",
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact"
        lede="Phone, WhatsApp, email, the farm address and social links. Every one of these is still a placeholder, on purpose, until the real details arrive."
      />
      <section className="section">
        <div className="wrap contact-grid">
          <article className="contact-card" id="phone">
            <h2>Phone</h2>
            <p>
              <PhLabel /> {contact.phoneDisplay}
            </p>
            {contact.phoneTel ? <p><a href={`tel:${contact.phoneTel}`}>{contact.phoneTel}</a></p> : null}
          </article>
          <article className="contact-card" id="whatsapp">
            <h2>WhatsApp</h2>
            <p>
              <PhLabel /> {contact.whatsappDisplay}
            </p>
            <p>The button is wired. It will open a real chat when the number in the content file is replaced.</p>
            <WhatsAppLink />
          </article>
          <article className="contact-card" id="email">
            <h2>Email</h2>
            <p>
              <PhLabel />{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
            <p>This address is only a stand-in. Enquiry messages go to the inbox set in the site settings, not to this address, until both are updated.</p>
          </article>
          <article className="contact-card" id="address">
            <h2>Address</h2>
            {contact.addressLines.map((line) => (
              <p key={line}>{line === "Ghana" ? line : <><PhLabel /> {line}</>}</p>
            ))}
          </article>
          <article className="contact-card" id="social">
            <h2>Social media</h2>
            <p>
              <PhLabel /> These links do not go to real profiles yet.
            </p>
            <ul className="socials">
              {contact.socials.map((item) => (
                <li key={item.name}>
                  <a href={item.href} rel="nofollow noopener noreferrer" target="_blank">
                    {item.name}
                    <span className="sr-only"> (placeholder, opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
          <article className="contact-card" id="map">
            <h2>Map</h2>
            <div className="map-placeholder">
              <p>
                <PhLabel /> {contact.mapNote}
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
