import "./Gallery.css";
import ribsImage from "../../assets/special/specialFood.png";

const Gallery = () => {
  return (
    <section className="deal">
      <div className="deal__img-wrap">
        <img className="deal__img" src={ribsImage} alt="Grilled ribs platter" />
        <div className="deal__nav">
          <button className="deal__nav-btn" aria-label="Next slide">
            →
          </button>
          <button className="deal__nav-btn" aria-label="Previous slide">
            ←
          </button>
        </div>
      </div>

      <div className="deal__content">
        <span className="deal__eyebrow">Deal Of The Day</span>
        <h2 className="deal__heading">
          Today&rsquo;s The
          <br />
          Hamburger&rsquo; Day
        </h2>

        <p className="deal__price">
          Special Price <span className="deal__price-num">$55</span>
        </p>

        <p className="deal__text">
          Savor the perfect symphony of flavors It&rsquo;s the perfect dining
          experience where Experience quick and efficient with our signature
          hamburger, a culinary
        </p>
<a href="#" className="deal__link">
  <svg
    width="24.01"
    height="16.64"
    viewBox="0 0 26 18"
    fill="none"
    className="deal__link-icon"
  >
    <path
      d="M11 3H22V12H7V7.5H11V3Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
    <circle cx="9.5" cy="14.3" r="1.9" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="18.5" cy="14.3" r="1.9" stroke="currentColor" strokeWidth="1.3" />
    <line x1="0" y1="4" x2="7" y2="4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="0" y1="6.6" x2="5.3" y2="6.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <line x1="0" y1="9.2" x2="3.6" y2="9.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
  <span className="deal__link-text">Order Now</span>
</a>
      </div>
    </section>
  );
};

export default Gallery;