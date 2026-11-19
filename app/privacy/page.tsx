import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PhLabel } from "@/components/Placeholder";
import { COMPANY, privacy } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta(
  "Privacy",
  "How EDSAVIN CONSULT AND TRADING uses details sent through the enquiry form, and how WhatsApp messages are handled.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy"
        lede={`How ${COMPANY} uses the details you send through the enquiry form on this website. This is a short plain-language notice for the draft site. Please have it reviewed before launch.`}
      />
      <section className="section">
        <div className="wrap prose">
          <h2>What you send</h2>
          <p>
            If you use the enquiry form, the site receives your name, email, any phone number and organisation you add, the product you choose, any note about quantity, and your message.
          </p>
          <h2>Why it is used</h2>
          <p>
            Those details are used to reply to your enquiry or order request, and to keep a record of that conversation. They are not sold, and they are not put on a public list.
          </p>
          <h2>Where the message goes</h2>
          <p>
            The form emails the inbox the business has set in its site settings. Until that inbox is connected, the form will say so instead of pretending the message was delivered.
          </p>
          <h2>WhatsApp</h2>
          <p>
            If you use a WhatsApp button, your message opens in WhatsApp with the product name already written. This website does not receive a copy. WhatsApp handles that chat under its own terms.
          </p>
          <h2>How long it is kept</h2>
          <p>
            <PhLabel /> {privacy.retention}
          </p>
          <h2>Analytics</h2>
          <p>
            <PhLabel /> {privacy.analytics}
          </p>
          <h2>Cookies</h2>
          <p>
            The pages themselves do not set advertising cookies. If Analytics is switched on later, Google may set cookies to count visits.
          </p>
          <h2>Asking about your details</h2>
          <p>
            To ask what was received, or to ask for it to be deleted, use the <Link href="/contact">contact page</Link>. The phone, email and address there are still placeholders.
          </p>
          <h2>Still to add</h2>
          <p>
            <PhLabel /> {privacy.legal}
          </p>
          <p>Notice drafted November 2026 for this website.</p>
        </div>
      </section>
    </>
  );
}
