import Link from "next/link";
import { Actions } from "@/components/Actions";
import { FarmToTable } from "@/components/FarmToTable";
import { Photo } from "@/components/Photo";
import { ClosingBand, Faq, OrderSteps, WhyBuy } from "@/components/Trust";
import { ProductExplorer } from "@/components/ProductExplorer";
import { HeroPause } from "@/components/HeroPause";
import { COMPANY, home, journey, lines, photos } from "@/content/site";

const slides = [photos.heroFields, photos.heroLivestock, photos.heroProcessing];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div className="hero-slide" key={slide.src}>
              <Photo src={slide.src} alt={slide.alt} wide priority={index === 0} sizes="100vw" />
            </div>
          ))}
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-card">
          <p className="kicker">{COMPANY}</p>
          <h1 id="home-heading">{home.headline}</h1>
          <p>{home.lead}</p>
          <Actions enquireClass="btn btn-red" whatsAppClass="btn btn-light" />
          <HeroPause />
        </div>
      </section>

      <section className="section" aria-labelledby="buyers-heading">
        <div className="wrap">
          <p className="kicker">{home.buyersKicker}</p>
          <h2 id="buyers-heading">{home.buyersHeading}</h2>
          <p className="section-lead">{home.buyersBody}</p>
          <ul className="buyer-row">
            {home.buyers.map((buyer) => (
              <li key={buyer}>{buyer}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="lines-heading">
        <div className="wrap intro-grid">
          <div>
            <p className="kicker">{home.linesKicker}</p>
            <h2 id="lines-heading">{home.linesHeading}</h2>
            <p>{home.linesBody}</p>
            <p>
              <Link className="inline-cta" href="/about">{home.aboutLink}</Link>
            </p>
          </div>
          <ul className="lines">
            {lines.map((line, index) => (
              <li key={line.id}>
                <Link className="line-card" href={line.href}>
                  <Photo src={line.photo.src} alt="" sizes="(min-width: 900px) 30vw, 100vw" />
                  <span className="line-card-copy">
                    <span className="line-no">0{index + 1}</span>
                    <h3>{line.title}</h3>
                    <p>{line.text}</p>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyBuy kicker={home.whyKicker} heading={home.whyHeading} />
      <ProductExplorer />
      <OrderSteps kicker={home.orderKicker} heading={home.orderHeading} />

      <section className="section" id="journey" aria-labelledby="journey-heading">
        <div className="wrap">
          <p className="kicker">{home.journeyKicker}</p>
          <h2 id="journey-heading">{home.journeyHeading}</h2>
          <p className="section-lead">{home.journeyLead}</p>
          <FarmToTable steps={journey} />
        </div>
      </section>

      <Faq kicker={home.faqKicker} heading={home.faqHeading} />

      <ClosingBand kicker={home.ctaKicker} heading={home.ctaHeading} body={home.ctaBody} />
    </>
  );
}
