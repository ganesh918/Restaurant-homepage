import "./App.css";
import "./styles/Hovers.css";
import { AuthProvider } from "./context/AuthContext";
import AuthGate from "./Components/Auth/AuthGate";
import Reveal from "./Components/Reveal/Reveal";
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
          <Reveal direction="up"><Welcome /></Reveal>
          <Reveal direction="up"><Products /></Reveal>
          <Reveal direction="left"><Gallery /></Reveal>
          <Reveal direction="up"><Popular /></Reveal>
          <Reveal direction="fade"><Special /></Reveal>
          <Reveal direction="up"><Blog /></Reveal>
          <Reveal direction="up"><Instagram /></Reveal>
          <Reveal direction="up"><Subscribe /></Reveal>
          <Reveal direction="fade"><Footer /></Reveal>
        </div>
      </AuthGate>
    </AuthProvider>
  );
}

export default App;