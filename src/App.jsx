import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import AuthGate from "./Components/Auth/AuthGate";
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
    <AuthProvider>
      <AuthGate>
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
      </AuthGate>
    </AuthProvider>
  );
}

export default App;