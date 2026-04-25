import type { CSSProperties } from "react";
import "./Gallery.css";

interface GalleryItem {
  id: number;
  title: string;
  year: string;
  medium: string;
  style: CSSProperties;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Terracotta Form I",
    year: "2024",
    medium: "Terracotta, wood fired",
    style: { background: "linear-gradient(150deg, #c8855a 0%, #8b4513 100%)" },
  },
  {
    id: 2,
    title: "Garden Vessel",
    year: "2023",
    medium: "Stoneware, glazed",
    style: { background: "linear-gradient(150deg, #7a6555 0%, #3d2a0e 100%)" },
  },
  {
    id: 3,
    title: "Figure Study III",
    year: "2024",
    medium: "Earthenware, unglazed",
    style: { background: "linear-gradient(150deg, #b09585 0%, #6a5040 100%)" },
  },
  {
    id: 4,
    title: "Clay Series II",
    year: "2023",
    medium: "Porcelain",
    style: { background: "linear-gradient(150deg, #d4b896 0%, #a07848 100%)" },
  },
  {
    id: 5,
    title: "Sculptural Bowl",
    year: "2022",
    medium: "Stoneware",
    style: { background: "linear-gradient(150deg, #8a7a6a 0%, #4a3b2a 100%)" },
  },
  {
    id: 6,
    title: "Earth Form IV",
    year: "2024",
    medium: "Terracotta",
    style: { background: "linear-gradient(150deg, #b86838 0%, #6a3818 100%)" },
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-eyebrow">Portfolio</span>
          <h2 className="section-heading">Selected Works</h2>
          <p className="gallery__description">
            A selection of Clare&rsquo;s sculptural ceramics &mdash; each piece a conversation between clay, fire, and
            the human hand.
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY_ITEMS.map((item) => (
            <article key={item.id} className="gallery__card">
              <div className="gallery__image-wrap">
                <div className="gallery__image" style={item.style} role="img" aria-label={item.title} />
              </div>
              <div className="gallery__info">
                <h3 className="gallery__title">{item.title}</h3>
                <p className="gallery__meta">
                  {item.medium}&ensp;&middot;&ensp;{item.year}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
