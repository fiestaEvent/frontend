import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import sources from "../utils/gallery.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Gallery() {
  const [toggler, setToggler] = useState({
    toggler: false,
    slide: 1,
  });
  useEffect(() => {
    document.title = "Gallery | Fiesta";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div
        className="text-xl lg:text-3xl text-purple-900 font-light w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        Glimpes from our Past Events
      </div>
      <div className="justify-center flex-wrap w-11/12 my-20 mx-auto hidden md:flex">
        {sources.map((source, index) => (
          <div className="h-52 w-72 md:h-72 md:w-96 m-2 relative overflow-hidden rounded-md">
            <img
              className="h-full group w-full object-cover rounded-md hover:scale-125 transition-all duration-300"
              src={source}
              alt={index}
              id={index}
              onClick={() =>
                setToggler({ toggler: !toggler.toggler, slide: index + 1 })
              }
            />
          </div>
        ))}
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        className="md:hidden my-20"
        swipeable
      >
        {sources.map((source, index) => (
          <div className="" id={index}>
            <img
              className="h-[50vh] rounded-lg relative overflow-hidden max-w-[80vw] lg:max-w-xl bg-cover"
              src={source}
              alt={index}
            />
          </div>
        ))}
      </Carousel>
      <FsLightbox
        toggler={toggler.toggler}
        sources={sources}
        slide={toggler.slide}
      />
    </div>
  );
}
