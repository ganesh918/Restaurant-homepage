import "./Popular.css";
import popular01 from "../../assets/popular/popular01.png";
import popular02 from "../../assets/popular/popular02.png";
import popular03 from "../../assets/popular/popular03.png";
import popular04 from "../../assets/popular/popular04.png";

const POPULAR_ITEMS = [
  { img: popular01, name: "Delicious Classic Italian Pizza", bgText: "Pizza" },
  { img: popular02, name: "Tasty Vegetable Hamburger", bgText: "Burger" },
  { img: popular03, name: "Roasted Chicken Drumsticks Italian Pizza", bgText: "chicken" },
  { img: popular04, name: "Roll Shaped Cigar Samosa", bgText: "Samosa" },
];

const Popular = () => {
  return (
    <section className="popular">
      <div className="popular__container">
        {POPULAR_ITEMS.map((item) => (
          <div className="popular__item" key={item.name}>
            <div className="popular__img-wrap">
              <span className="popular__bg-text" aria-hidden="true">
                {item.bgText}
              </span>
              <img className="popular__img" src={item.img} alt={item.name} />
            </div>
            <div className="popular__info">
              <h4 className="popular__name">{item.name}</h4>
              <a href="#" className="popular__link">
                <span className="popular__link-text">Order Now</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path
                    d="M8.5 1L13 5M13 5L8.5 9M13 5H1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;