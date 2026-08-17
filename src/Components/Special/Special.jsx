import { useState } from "react";
import "./Special.css";
import starIcon from "../../assets/special/star.png";

const TESTIMONIALS = [
  {
    tag: "Quality Food",
    rating: 5,
    text: "Nestled Within A Fresh, Toasted Bun, Each Bite Unveils A Perfect Harmony Of Textures, Complemented By Layers Of Crisp Lettuce, Ripe Tomatoes, And The Crunch Pickles Our Secret Sauce Proprietary Blend Savory",
    name: "Richard D. Baker",
    title: "CEO & Founder",
  },
];

const Special = () => {
  const [active] = useState(0);
  const t = TESTIMONIALS[active];

  return (
    <section className="special">
      <h2 className="special__heading">
        Clients Testimonials{" "}
        <span className="special__star">
          <img src={starIcon} alt="" className="special__star-img" />
        </span>{" "}
        Food Reviews
      </h2>

      <div className="special__container">
        <div className="special__meta-row">
          <span className="special__tag">{t.tag}</span>
          <div className="special__stars" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC222">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.771l-7.416 3.642 1.48-8.279L0 9.306l8.332-1.151z" />
              </svg>
            ))}
          </div>
        </div>

        <p className="special__text">{t.text}</p>

        <p className="special__author">
          <span className="special__author-name">{t.name}</span>
          <span className="special__author-title"> / {t.title}</span>
        </p>

        <div className="special__dots">
          <span className="special__dot"></span>
          <span className="special__dot special__dot--active"></span>
          <span className="special__dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Special;