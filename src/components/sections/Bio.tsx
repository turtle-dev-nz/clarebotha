import { scrollToSection } from "../../utils/scrollTo";
import "./Bio.css";

export function Bio() {
  return (
    <section id="about" className="bio">
      <div className="container bio__inner">
        <div className="bio__image-wrap">
          <div className="bio__image-placeholder" role="img" aria-label="Clare Botha in her studio" />
        </div>

        <div className="bio__text">
          <span className="section-eyebrow">About</span>
          <h2 className="section-heading">The Artist Behind the Clay</h2>
          <p>
            Clare Botha is a South African potter and sculptor based in the Cape Winelands. With over fifteen years of
            experience working with clay, she creates sculptural works that explore the relationship between the human
            form and the natural world.
          </p>
          <p>
            Her pieces range from intimate tabletop sculptures to large-scale garden installations, each shaped entirely
            by hand and fired in her wood-burning kiln.
          </p>
          <p>
            Trained at the Michaelis School of Fine Art, Clare draws inspiration from the fynbos landscapes of the
            Western Cape and the ancient pottery traditions of West Africa. Her work has been exhibited in galleries
            across South Africa and internationally.
          </p>
          <button className="bio__link" onClick={() => scrollToSection("contact")}>
            Commission a piece &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
