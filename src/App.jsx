import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Welcome from "./Components/Welcome/Welcome";
import Products from "./Components/Products/Products";
import Gallery from "./Components/Gallery/Gallery";
import Popular from "./Components/Popular/Popular";
import Special from "./Components/Special/Special";
import Blog from "./Components/Newsletter/Newsletter";
import Instagram from "./Components/Instagram/Instagram";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Welcome />
      <Products />
      <Gallery />
      <Popular />
      <Special />
      <Blog />
      <Instagram />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;