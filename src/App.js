import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Button from 'react-bootstrap/Button';

function App() {
  return <div className="App">
    <h1>App component works!</h1>
    <Navbar />
    <Hero />
    <Projects />
    <Contact />
    <Footer />
    <Button variant="primary">Primary</Button>
  </div>;
}

export default App;
