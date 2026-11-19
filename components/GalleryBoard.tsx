import { Photo } from "@/components/Photo";
import { PhLabel } from "@/components/Placeholder";
import { gallery, galleryCategories } from "@/content/site";

export function GalleryBoard() {
  const filters = ["All", ...galleryCategories];
  return (
    <div className="gal-board">
      <div className="gal-tabs">
        {filters.map((filter, index) => (
          <label key={filter} className="gal-tab">
            <input type="radio" name="gallery" value={filter} defaultChecked={index === 0} />
            {filter}
          </label>
        ))}
      </div>
      <ul className="gal-grid">
        {gallery.map((item) => (
          <li key={`${item.category}-${item.photo.src}`} data-cat={item.category}>
            <figure>
              <Photo src={item.photo.src} alt={item.photo.alt} wide={item.photo.wide} sizes="(min-width: 900px) 33vw, (min-width: 600px) 50vw, 100vw" />
              <figcaption>
                <span className="product-kicker">{item.category}</span>
                <PhLabel /> {item.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
