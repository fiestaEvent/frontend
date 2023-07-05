import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Foot";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import Testimonial from "./views/Testimonial";
import Gallery from "./views/Gallery";
import Preloader from "./views/Preloader";
import Blog from "./views/Blog";
import BlogView from "./views/BlogView";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({
    duration: 1000,
    once: true,
  });
  return (
      <div className="App bg-[url('https://i.imgur.com/qXVQ2nF.pn')] bg-fuchsia-50 bg-fixed bg-cover">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/blog/:b" element={<BlogView />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Preloader />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
