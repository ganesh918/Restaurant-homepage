import "./Newsletter.css";
import blog01 from "../../assets/blog/blog01.png";
import blog02 from "../../assets/blog/blog02.png";
import blog03 from "../../assets/blog/blog03.png";

const BLOG_POSTS = [
  {
    img: blog01,
    category: "Fast Food",
    date: "29 Feb 2024",
    title: "Culinary Chronicles Exploring Gastronomic Wonders At Foodking Restaurant",
  },
  {
    img: blog02,
    category: "Health Care",
    date: "29 Feb 2024",
    title: "Taste Sensations: Navigating The Epicurean Landscape Of Restaurant Name",
  },
  {
    img: blog03,
    category: "Restaurants",
    date: "29 Feb 2024",
    title: "Epicurean Insights Blogging Odyssey Through Restaurant Name Culinary Universe",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__container">
        <span className="blog__eyebrow">News &amp; Blog</span>
        <h2 className="blog__heading">Explore News &amp; Blog</h2>

        <div className="blog__grid">
          {BLOG_POSTS.map((post) => (
            <article className="blog__card" key={post.title}>
              <img className="blog__img" src={post.img} alt={post.title} />
              <div className="blog__meta">
                <span className="blog__category">{post.category}</span>
                <span className="blog__date">{post.date}</span>
              </div>
              <h3 className="blog__title">{post.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;