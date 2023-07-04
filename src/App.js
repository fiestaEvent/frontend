import "./App.css";
import Helmet from "react-helmet";
import { HashRouter, Routes, Route } from "react-router-dom";
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
function App() {
  return (
    <div className="App bg-[url('https://i.imgur.com/qXVQ2nF.pn')] bg-fuchsia-50 bg-fixed bg-cover bgjar_meteors">
      <Helmet>
        <title>Fiesta | Events</title>
        <meta
          name="description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />

        <meta itemprop="name" content="Fiesta - Event Management" />
        <meta
          itemprop="description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta itemprop="image" content="https://i.imgur.com/7VjZu9w.jpg" />

        <meta property="og:url" content="https://www.fiestaevent.co.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Fiesta - Event Management" />
        <meta
          property="og:description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta property="og:image" content="https://i.imgur.com/7VjZu9w.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fiesta - Event Management" />
        <meta
          name="twitter:description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta name="twitter:image" content="https://i.imgur.com/7VjZu9w.jpg" />
      </Helmet>
      <HashRouter>
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
      </HashRouter>
    </div>
  );
}

export default App;
