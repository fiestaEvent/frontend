import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Foot";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";

function App() {
  return (
    <div className="App bg-[url('https://i.imgur.com/SSXniLD.png')] bg-cover">
      <HashRouter>
        <Navbar />
        <Routes>
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
