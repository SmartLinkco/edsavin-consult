import Link from "next/link";
import { Actions } from "@/components/Actions";
import { FarmToTable } from "@/components/FarmToTable";
import { Photo } from "@/components/Photo";
import { PhRegion } from "@/components/Placeholder";
import { ProductExplorer } from "@/components/ProductExplorer";
import { COMPANY, home, journey, lines, photos } from "@/content/site";

const slides = [photos.heroFields, photos.heroLivestock, photos.heroProcessing];

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-heading">
        <input className="hero-pause" id="hero-pause" type="checkbox" />
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
          <label className="pause-btn" htmlFor="hero-pause">
            <span className="when-playing">Pause photos</span>
            <span className="when-paused">Play photos</span>
          </label>
        </div>
      </section>

      <section className="section" aria-labelledby="lines-heading">
        <div className="wrap intro-grid">
          <div>
            <p className="kicker">The business</p>
            <h2 id="lines-heading">Four lines of work, one farm.</h2>
            <p>
              {COMPANY} rears livestock, sells meat, grows crops, and processes cassava into gari and starch in Ghana.
            </p>
            <PhRegion>
              <p>{home.intro}</p>
            </PhRegion>
            <p>
              <Link href="/about">About &amp; Team</Link>
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

      <ProductExplorer />

      <section className="section" id="journey" aria-labelledby="journey-heading">
        <div className="wrap">
          <p className="kicker">Farm to table</p>
          <h2 id="journey-heading">Cassava, from the field to gari and starch.</h2>
          <p className="section-lead">
            Scroll the path. Each step stays readable. The picture on a large screen follows the step in view.
          </p>
          <FarmToTable steps={journey} />
        </div>
      </section>

      <section className="band-ink" aria-labelledby="cta-heading">
        <div className="wrap split">
          <div>
            <p className="kicker">Next step</p>
            <h2 id="cta-heading">Ask what is available.</h2>
            <p>Tell the farm which product you want. There is no basket and no payment on this website.</p>
            <Actions enquireClass="btn btn-light" whatsAppClass="btn btn-red" />
          </div>
          <Photo src={photos.gari.src} alt={photos.gari.alt} sizes="(min-width: 900px) 40vw, 100vw" />
        </div>
      </section>
    </>
  );
}
