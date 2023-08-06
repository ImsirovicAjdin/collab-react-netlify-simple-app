import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


function App() {
    return <div className="App">
        <Navigation />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
    </div>;
}

export default App;
