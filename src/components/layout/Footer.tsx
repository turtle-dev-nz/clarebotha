import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__name">Clare Botha</p>
          <p className="footer__tagline">Sculptor &amp; Potter &middot; Cape Town, South Africa</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="mailto:hello@clarebotha.com" className="footer__link">
            hello@clarebotha.com
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">
            Instagram
          </a>
        </nav>
      </div>

      <div className="container">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Clare Botha. All rights reserved.</p>
      </div>
    </footer>
  );
}
