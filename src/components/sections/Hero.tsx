import { scrollToSection } from "../../utils/scrollTo";
import "./Hero.css";

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }} aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Sculptor &amp; Potter</p>
        <h1 className="hero__name">Clare Botha</h1>
        <p className="hero__tagline">Shaping earth into art — one sculpture at a time.</p>
        <button className="hero__cta" onClick={() => scrollToSection("about")}>
          Discover Her Work
        </button>
      </div>

      <button className="hero__scroll" onClick={() => scrollToSection("about")} aria-label="Scroll to About section">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  );
}
