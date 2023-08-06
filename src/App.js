import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return <div className="App">
    <h1>App component works!</h1>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
  </div>;
}

export default App;
