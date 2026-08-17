import "./Footer.css";
import logo from "../../assets/footer/logo.png";
import decoLeft from "../../assets/footer/footerDecorationLeft.png";
import decoRight from "../../assets/footer/footerDecorationRight.png";
import gallery01 from "../../assets/gallery/gallery01.png";
import gallery02 from "../../assets/gallery/gallery02.png";
import gallery03 from "../../assets/gallery/gallery03.png";
import gallery04 from "../../assets/gallery/gallery04.png";
import gallery05 from "../../assets/gallery/gallery05.png";

const GALLERY_STRIP = [gallery01, gallery02, gallery03, gallery04, gallery05];

const ABOUT_LINKS = ["Fredoka One", "Special Dish", "Reservation", "Contact"];
const MENU_LINKS = ["Steaks", "Burgers", "Coctails", "Bar B Q", "Desserts"];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__gallery-strip">
        {GALLERY_STRIP.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i + 1}`} />
        ))}
      </div>

      <div className="footer__main">
        <img className="footer__deco footer__deco--left" src={decoLeft} alt="" />
        <img className="footer__deco footer__deco--right" src={decoRight} alt="" />

        <div className="footer__container">
          <div className="footer__brand">
            <img className="footer__logo" src={logo} alt="TasteNest" />
            <p className="footer__hours">
              Tuesday &ndash; Saturday: 12:00pm &ndash; 23:00pm
            </p>
            <p className="footer__closed">Closed on Sunday</p>
            <p className="footer__rating">5 star rated on TripAdvisor</p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">About</h4>
            <ul>
              {ABOUT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#">
                    <span className="footer__chevron">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Menu</h4>
            <ul>
              {MENU_LINKS.map((link) => (
                <li key={link}>
                  <a href="#">
                    <span className="footer__chevron">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col footer__newsletter">
            <h4 className="footer__col-title">Newsletter</h4>
            <p className="footer__newsletter-text">
              Get recent news and updates.
            </p>
            <input
              type="email"
              placeholder="Email Address"
              className="footer__newsletter-input"
            />
            <div className="footer__subscribe-wrap">
  <span className="footer__subscribe-border"></span>
  <button className="footer__newsletter-btn">Subscribe</button>
</div>
          </div>
        </div>

        <div className="footer__bottom-line"></div>

        <div className="footer__bottom">
          <span>
  <em className="footer__copyright-brand">© 2025 TasteNest</em> | All shawonetc3 Themes
</span>
          <div className="footer__social">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;