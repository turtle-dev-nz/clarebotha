import { useState, useEffect } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useActiveSection } from "../../hooks/useActiveSection";
import { scrollToSection } from "../../utils/scrollTo";
import "./Navbar.css";

interface NavLink {
  label: string;
  id: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "About", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const SECTION_IDS = NAV_LINKS.map((l) => l.id);

export function Navbar() {
  const scrollY = useScrollPosition();
  const activeSection = useActiveSection(SECTION_IDS);
  const isScrolled = scrollY > 80;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <header className={`navbar${isScrolled ? " navbar--scrolled" : ""}${menuOpen ? " navbar--menu-open" : ""}`} role="banner">
      <div className="navbar__inner container">
        <button className="navbar__logo" onClick={() => scrollToSection("hero")} aria-label="Back to top">
          Clare Botha
        </button>

        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`navbar__nav${menuOpen ? " navbar__nav--open" : ""}`}
        >
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <button
                  className={`navbar__link${activeSection === id ? " navbar__link--active" : ""}`}
                  onClick={() => handleNavClick(id)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar__hamburger${menuOpen ? " navbar__hamburger--open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
