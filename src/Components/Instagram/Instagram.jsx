import "./Instagram.css";
import insta01 from "../../assets/instagram/instagram01.png";
import insta02 from "../../assets/instagram/instagram02.png";
import insta03 from "../../assets/instagram/instagram03.png";
import insta04 from "../../assets/instagram/instagram04.png";
import insta05 from "../../assets/instagram/instagram05.png";

const INSTAGRAM_IMAGES = [insta01, insta02, insta03, insta04, insta05];

const Instagram = () => {
  return (
    <section className="instagram">
      <div className="instagram__header">
        <a href="#" className="instagram__icon" aria-label="Instagram">
  <i className="fa-brands fa-instagram"></i>
</a>

        <h2 className="instagram__heading">Follow @shawonetc3</h2>
        <p className="instagram__subheading">
          Join our community to inspire your desires
        </p>
      </div>

      <div className="instagram__grid">
        {INSTAGRAM_IMAGES.map((img, i) => (
          <div className="instagram__item" key={i}>
            <img src={img} alt={`Instagram post ${i + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;