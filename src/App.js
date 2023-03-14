import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Foot";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Testimonial from "./views/Testimonial";

function App() {
  return (
    <div className="App bg-[url('https://i.imgur.com/OZdK0mn.png')] bg-cover">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
