import { useState } from "react";
import "./Navbar.css";
import homeLogo from "../../assets/navbar/homeLogo.png";
import homeGreenIcon from "../../assets/navbar/homeGreenIcon.png";

const NAV_LINKS = [
  { label: "Home", href: "#", dropdown: true },
  { label: "About Us", href: "#", dropdown: false },
  { label: "Shop", href: "#", dropdown: true },
  { label: "Blog", href: "#", dropdown: true },
  { label: "Pages", href: "#", dropdown: true },
  { label: "Contact", href: "#", dropdown: false },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <img src={homeLogo} alt="TasteNest" />
        </a>

        {/* Nav links */}
        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__item">
                <a href={link.href} className="navbar__link">
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className="navbar__caret"
                      width="10" height="6" viewBox="0 0 10 6" fill="none"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right side: cart + CTA + hamburger */}
        <div className="navbar__actions">
          <a href="#" className="navbar__cart">
          <img
  src={homeGreenIcon}
  alt="cart"
  style={{ "--cart-icon-url": `url(${homeGreenIcon})` }}
/>
            <span className="navbar__cart-count">0</span>
          </a>

          <a href="#" className="navbar__cta">
            Contact Us
          </a>

          <button
            className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg width="28" height="18" viewBox="0 0 28 18" fill="none">
  <line x1="16" y1="1" x2="28" y2="1" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
  <line x1="0" y1="9" x2="28" y2="9" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
  <line x1="0" y1="17" x2="12" y2="17" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
</svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;