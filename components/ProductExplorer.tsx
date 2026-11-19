import Link from "next/link";
import { Actions } from "@/components/Actions";
import { Photo } from "@/components/Photo";
import { home, lines, productsIn } from "@/content/site";

export function ProductExplorer() {
  return (
    <section className="band" id="products" aria-labelledby="explorer-heading">
      <div className="wrap">
        <p className="kicker">{home.explorerKicker}</p>
        <h2 id="explorer-heading">{home.explorerHeading}</h2>
        <p className="section-lead">{home.explorerLead}</p>
        <div className="ex-board">
          <div className="ex-tabs">
            {lines.map((line, index) => (
              <label key={line.id} className="ex-tab">
                <input type="radio" name="explorer" value={line.id} defaultChecked={index === 0} />
                {line.title}
              </label>
            ))}
          </div>
          <div className="ex-panels">
            {lines.map((line) => (
              <div key={line.id} className="ex-panel" data-line={line.id}>
                <ul className="mini-grid">
                  {productsIn(line.id).map((product) => (
                    <li key={product.id}>
                      <article className="mini-card">
                        <Photo src={product.photo.src} alt={product.photo.alt} sizes="(min-width: 900px) 25vw, 80vw" />
                        <h3>{product.name}</h3>
                        <p>{product.summary}</p>
                        <Actions productId={product.id} productName={product.name} />
                      </article>
                    </li>
                  ))}
                </ul>
                <p className="ex-more">
                  <Link href={line.href}>{line.more}</Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
