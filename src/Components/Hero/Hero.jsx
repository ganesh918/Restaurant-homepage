import "./Hero.css";
import heroDecorationLeft from "../../assets/hero/heroDecorationLeft.png";
import heroDecorationRight from "../../assets/hero/heroDecorationRight.png";
import heroDecorationBottom from "../../assets/hero/heroDecorationBottom.png";
import heroPizza from "../../assets/hero/pizza.png"; // update path/filename to match your import

const Hero = () => {
  return (
    <section className="hero">
      <img className="hero__decor hero__decor--left" src={heroDecorationLeft} alt="" />
      <img className="hero__decor hero__decor--bottom-left" src={heroDecorationBottom} alt="" />
      <img className="hero__pizza-img" src={heroPizza} alt="Delicious pizza" />

      <div className="hero__container">
        <h1 className="hero__title">
          Awesome
          <img
            className="hero__pepper"
            src={heroDecorationRight}
            alt=""
          />
          <br />
          Delicious
          <br />
          Pizza
        </h1>

        <p className="hero__subtitle">Star Your Order Just Only $25.00</p>

        <a href="#" className="hero__btn">
          Order Now
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
            <path
              d="M9.5 1L15 6M15 6L9.5 11M15 6H1"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <div className="hero__slider-indicator">
          <span className="hero__slide-num">2</span>
          <span className="hero__slide-line"></span>
          <span className="hero__slide-total">/ 3</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;