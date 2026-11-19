import { Actions } from "@/components/Actions";
import { Photo } from "@/components/Photo";
import { PhLabel } from "@/components/Placeholder";
import { cta, lineLabel, productLabels, type Product } from "@/content/site";

export function ProductCard({ product }: { product: Product }) {
  const availabilityLabel = product.line === "crops" ? productLabels.season : productLabels.ready;
  const packLabel = product.line === "livestock" ? productLabels.grouped : productLabels.pack;
  return (
    <article className="product">
      <details>
        <summary>
          <Photo src={product.photo.src} alt={product.photo.alt} />
          <span className="product-copy">
            <span className="product-kicker">{lineLabel[product.line]}</span>
            <h2>{product.name}</h2>
            <span className="product-summary">{product.summary}</span>
            <span className="more">
              <span className="when-closed">{cta.show}</span>
              <span className="when-open">{cta.hide}</span>
            </span>
          </span>
        </summary>
        <div className="product-more">
          <p>{product.details}</p>
          <dl>
            <div>
              <dt>{availabilityLabel}</dt>
              <dd>
                <PhLabel /> {product.availability}
              </dd>
            </div>
            <div>
              <dt>{packLabel}</dt>
              <dd>
                <PhLabel /> {product.pack}
              </dd>
            </div>
          </dl>
          <Actions productId={product.id} productName={product.name} />
        </div>
      </details>
    </article>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
