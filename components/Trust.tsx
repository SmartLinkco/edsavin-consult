import { Actions } from "@/components/Actions";
import { PhLabel } from "@/components/Placeholder";
import { faq, ordering, whyBuy } from "@/content/site";

export function WhyBuy({ kicker, heading }: { kicker: string; heading: string }) {
  return (
    <section className="section" aria-labelledby="why-heading">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h2 id="why-heading">{heading}</h2>
        <div className="why-grid">
          {whyBuy.map((item) => (
            <article key={item.title} className="value-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrderSteps({
  kicker,
  heading,
  intro,
}: {
  kicker?: string;
  heading?: string;
  intro?: string;
}) {
  return (
    <section className="band" aria-labelledby="order-heading">
      <div className="wrap">
        <p className="kicker">{kicker ?? ordering.kicker}</p>
        <h2 id="order-heading">{heading ?? ordering.heading}</h2>
        {intro ? <p className="section-lead">{intro}</p> : <p className="section-lead">{ordering.intro}</p>}
        <ol className="order-list">
          {ordering.steps.map((step, index) => (
            <li key={step.title}>
              <strong>0{index + 1} {step.title}</strong>
              {step.text}
            </li>
          ))}
        </ol>
        <p>
          <PhLabel /> {ordering.paymentLabel}: {ordering.payment}
        </p>
        <p>
          <PhLabel /> {ordering.deliveryLabel}: {ordering.delivery}
        </p>
      </div>
    </section>
  );
}

export function Faq({ kicker, heading }: { kicker: string; heading: string }) {
  return (
    <section className="section" aria-labelledby="faq-heading">
      <div className="wrap faq">
        <p className="kicker">{kicker}</p>
        <h2 id="faq-heading">{heading}</h2>
        {faq.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ClosingBand({
  kicker,
  heading,
  body,
  enquireClass = "btn btn-light",
  whatsAppClass = "btn btn-red",
}: {
  kicker: string;
  heading: string;
  body: string;
  enquireClass?: string;
  whatsAppClass?: string;
}) {
  return (
    <section className="band-ink" aria-labelledby="close-heading">
      <div className="wrap">
        <p className="kicker">{kicker}</p>
        <h2 id="close-heading">{heading}</h2>
        <p>{body}</p>
        <Actions enquireClass={enquireClass} whatsAppClass={whatsAppClass} />
      </div>
    </section>
  );
}
