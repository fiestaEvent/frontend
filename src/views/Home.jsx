import sources from "../utils/gallery.json";
import pts from "../utils/trust-points.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Services from "../sections/Services";
import Steps from "../sections/Steps";
import Testimonials from "../sections/Testimonials";
export default function Home() {
  document.title = "Home | Fiesta";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="section mt-36">
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
          <img src="/logo_clean.png" className="h-64 md:h-96" alt="logo" />
          <Carousel
            autoPlay
            infiniteLoop
            interval={1400}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            swipeable={false}
            className="max-w-xl"
          >
            {sources.map((source, index) => (
              <div className="max-w-xl" id={index}>
                <img
                  className="h-[50vh] relative overflow-hidden max-w-[80vw] lg:max-w-lg bg-cover object-cover object-center"
                  src={source}
                  alt={index}
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <div className="relative group bg-fuchsia-900 text-[#fdfdfd] transform transition-all duration-300 w-64 h-24 text-center flex flex-row justify-center m-auto my-10 font-extrabold text-xl">
        <div className="absolute group-hover:top-0 group-hover:left-0 w-64 h-24 -top-1 -left-1 transform transition-all duration-300 border-purple-500 border-2"></div>
        <Link to="/contact" className=" z-50 my-auto">
          Get A Quote
        </Link>
      </div>
      <div className="m-auto mt-10 mb-10">
        <Link
          className="p-6 m-1 text-fuchsia-900 border-2 border-y-fuchsia-900 font-extrabold text-2xl my-4 transition-all duration-300"
          to="/services"
        >
          Our Services
        </Link>
      </div> */}
        <div className="flex flex-row my-20 justify-center md:justify-evenly min-w-[50vw] max-w-[70vw] m-auto text-fuchsia-900 font-black">
          {pts.map((pt, index) => (
            <div className="w-fit text-lg items-center">
              {/* <i class="bx bxs-bullseye"></i> */}
              {pt}.&nbsp;
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center -mb-20">
          <span className="font-black text-2xl md:text-4xl text-yellow-400">
            Plan your next event with{" "}
          </span>
          <span className="font-[poppins] text-3xl text-fuchsia-900 md:text-6xl font-black">
            Fiesta
          </span>
        </div>
      </div>
      <div id="contact" className="section pt-20 -mb-52 md:-mb-20">
        <Contact />
      </div>
      <div id="about" className="section pt-20 -mb-12 md:-mb-20">
        <About />
      </div>
      <div id="services" className="section pt-20 -mb-12">
        <Services />
      </div>
      <div id="steps" className="section pt-20 -mb-12">
        <Steps />
      </div>
      <div id="testimonials" className="section pt-20 mb-20">
        <Testimonials />
      </div>
    </div>
  );
}
