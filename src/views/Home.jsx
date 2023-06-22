import { Link } from "react-router-dom";
import sources from "../utils/gallery.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
export default function Home() {
  document.title = "Home | Fiesta";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="mt-36 flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="flex flex-row min-w-[60vw] justify-evenly items-center">
          <img
            src="/logo_clean.png"
            className="h-96 hidden md:block"
            alt="logo"
          />
          <div className="about m-4 max-w-[90vw] md:max-w-[440px] p-6 text-[13px] text-fuchsia-900 font-light text-justify">
            Your one-stop destination for all event management needs. At Fiesta,
            we understand that every event is unique and special. Whether it's a
            corporate conference, a grand wedding, a milestone celebration, or a
            social gathering, we have the knowledge, resources, and creativity
            to make it an unforgettable experiences within your budget. Don't
            just take our word for it - see what our satisfied clients have to
            say in our testimonials section and explore our gallery to see our
            last works. Thank you for visiting Fiesta. We look forward to
            celebrate the event with you and turning your dreams into reality.
          </div>
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={1400}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          swipeable
        >
          {sources.map((source, index) => (
            <div className="" id={index}>
              <img
                className="h-[50vh] relative overflow-hidden max-w-[80vw] lg:max-w-xl bg-cover object-cover object-center"
                src={source}
                alt={index}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relative group bg-fuchsia-900 text-white transform transition-all duration-300 w-64 h-24 text-center flex flex-row justify-center m-auto my-10 font-extrabold text-3xl">
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
      </div>
    </div>
  );
}
