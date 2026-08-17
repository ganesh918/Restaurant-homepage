import "./Products.css";
import product01 from "../../assets/products/product01.png";
import product02 from "../../assets/products/product02.png";
import product03 from "../../assets/products/product03.png";
import product04 from "../../assets/products/product04.png";
import product05 from "../../assets/products/product05.png";
import product06 from "../../assets/products/product06.png";
import product07 from "../../assets/products/product07.png";
import product08 from "../../assets/products/product08.png";
import leftMiddleDecor from "../../assets/products/left-middle-decorative.png";
import rightTopDecor from "../../assets/products/right-top-corner-decorative.png";
import rightBottomDecor from "../../assets/products/right-bottom-corner-decorative.png";

const PRODUCTS = [
  { img: product01, name: "Delicious Burger", price: "60.00$", oldPrice: null },
  { img: product02, name: "Grilled Chicken", price: "39.00$", oldPrice: "42.00$" },
  { img: product03, name: "Ruti With Chicken", price: "26.00$", oldPrice: "29.00$" },
  { img: product04, name: "Fast Food Combo", price: "28.00$", oldPrice: "34.00$" },
  { img: product05, name: "Chicago Deep Pizza", price: "22.00$", oldPrice: "28.00$" },
  { img: product06, name: "Chinese Pasta", price: "34.00$", oldPrice: "40.00$" },
  { img: product07, name: "Whopper Burger King", price: "26.00$", oldPrice: "30.00$" },
  { img: product08, name: "Ruti With Beef Slice", price: "28.52$", oldPrice: "30.52$" },
];

const Products = () => {
  return (
    <section className="products">
      <img className="products__decor products__decor--left-middle" src={leftMiddleDecor} alt="" />
      <img className="products__decor products__decor--right-top" src={rightTopDecor} alt="" />
      <img className="products__decor products__decor--right-bottom" src={rightBottomDecor} alt="" />

      <div className="products__container">
        <span className="products__eyebrow">Best Selling Dishes</span>
        <h2 className="products__heading">Explore Our Products</h2>

        <div className="products__grid">
          {PRODUCTS.map((p) => (
            <div className="products__card" key={p.name}>
              <h4 className="products__name">{p.name}</h4>
              <p className="products__price">
  {p.oldPrice && (
    <>
      <span className="products__price-label">price</span>
      <span className="products__price-old">{p.oldPrice}</span>
    </>
  )}
  <span className="products__price-new">{p.price}</span>
</p>
              
              <img className="products__img" src={p.img} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;