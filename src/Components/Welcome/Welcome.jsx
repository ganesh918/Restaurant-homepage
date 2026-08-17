import "./Welcome.css";
import chefImage from "../../assets/welcome/chefImage.png";
import chefAvatar from "../../assets/welcome/chefAvatar.png";
import welcomeDecoration from "../../assets/welcome/welcomeDecoration.png";

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__container">
        <div className="welcome__image-wrap">
          <img
            className="welcome__decoration"
            src={welcomeDecoration}
            alt=""
          />
          <img
            className="welcome__chef-img"
            src={chefImage}
            alt="Chef preparing a dish"
          />
        </div>

        <div className="welcome__content">
          <span className="welcome__eyebrow">Learn Something Foodking</span>

          <p className="welcome__text">
            Welcome To Our Culinary Haven, Where Each Dish Is A Symphony Of
            Flavors Meticulously Crafted Tantalize Your Taste Buds. Nestled In
            The Heart Of [City], Our Restaurant Is An Inviting Space That
            Combines.
          </p>

          <div className="welcome__author">
            <img
              className="welcome__author-avatar"
              src={chefAvatar}
              alt="Michael V. Christensen"
            />
           <p className="welcome__author-info">
  <span className="welcome__author-name">
    Michael V. Christensen /
  </span>{" "}
  <span className="welcome__author-title">CEO &amp; Founder</span>
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;