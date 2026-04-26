import "./Gallery.css";

interface GalleryItem {
  id: number;
  title: string;
  year: string;
  medium: string;
  imageUrl: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Terracotta Form I",
    year: "2024",
    medium: "Terracotta, wood fired",
    imageUrl: "https://images.unsplash.com/photo-1565193566449-d9d11cdd5694?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Garden Vessel",
    year: "2023",
    medium: "Stoneware, glazed",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Figure Study III",
    year: "2024",
    medium: "Earthenware, unglazed",
    imageUrl: "https://images.unsplash.com/photo-1589927986089-35812378533a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Clay Series II",
    year: "2023",
    medium: "Porcelain",
    imageUrl: "https://images.unsplash.com/photo-1493894473891-0f6e2ec2ee9a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Sculptural Bowl",
    year: "2022",
    medium: "Stoneware",
    imageUrl: "https://images.unsplash.com/photo-1607466374561-e4fa92cc4e9d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Earth Form IV",
    year: "2024",
    medium: "Terracotta",
    imageUrl: "https://images.unsplash.com/photo-1508253007823-cc2a39c0b3dc?auto=format&fit=crop&w=600&q=80",
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
                <img
                  className="gallery__image"
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                />
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
