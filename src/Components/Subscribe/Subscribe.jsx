import "./Subscribe.css";
import fryShape from "../../assets/subscribe/fry-shape.png";
import chocolateShape from "../../assets/subscribe/chocolate-shape.png";
import icecreamShape from "../../assets/subscribe/icecream-shape.png";
import whiteGradient from "../../assets/subscribe/white-gradient.png";

const SUBSCRIBE_BG_URL =
  "https://images.unsplash.com/photo-1606149059549-6042addafc5a?fm=jpg&q=80&w=1600&auto=format&fit=crop";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe__container">
        <img
          className="subscribe__bg-image"
          src={SUBSCRIBE_BG_URL}
          alt=""
        />
        <img
          className="subscribe__gradient-overlay"
          src={whiteGradient}
          alt=""
        />

        <img className="subscribe__deco subscribe__deco--fry" src={fryShape} alt="" />
        <img className="subscribe__deco subscribe__deco--chocolate" src={chocolateShape} alt="" />
        <img className="subscribe__deco subscribe__deco--icecream" src={icecreamShape} alt="" />

        <div className="subscribe__left">
          <h2 className="subscribe__heading">
            Subscribe Our Newsletter
            <br />
            To Get More Offers
          </h2>
          <p className="subscribe__text">
            At vero eos et accusamus et iusto odio dignissimos ducimus quie
            blanditiis praesentium voluptatum deleniti atque
          </p>
        </div>

        <div className="subscribe__right">
          <div className="subscribe__input-wrap">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="subscribe__input-icon">
              <path
                d="M3 8l9 6 9-6M3 6h18v12H3V6z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="subscribe__input"
            />
          </div>

          <button className="subscribe__btn">Subscribe Now</button>

          <label className="subscribe__checkbox">
            <input type="checkbox" />
            <span>
              I Agree To The <a href="#">Privacy Policy.</a>
            </span>
          </label>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;