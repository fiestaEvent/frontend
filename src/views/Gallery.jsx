import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
      <Helmet prioritizeSeoTags>
        <title>Gallery | Fiesta</title>
        <meta
          name="description"
          content="Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly."
        />
        <meta itemprop="name" content="Gallery | Fiesta" />
        <meta
          itemprop="description"
          content="Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly."
        />
        <meta itemprop="image" content="https://i.imgur.com/ejceFwQ.png" />
        <meta property="og:url" content="https://www.fiestaevent.co.in" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gallery | Fiesta" />
        <meta
          property="og:description"
          content="Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly."
        />
        <meta property="og:image" content="https://i.imgur.com/ejceFwQ.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Fiesta" />
        <meta
          name="twitter:description"
          content="Have a look at the moments we helped create in our clients' lives, spreading happiness effortlessly."
        />
        <meta name="twitter:image" content="https://i.imgur.com/ejceFwQ.png" />
      </Helmet>
      <div
        className="text-2xl lg:text-5xl text-purple-900 font-bold w-11/12 mx-auto text-left mt-32"
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
          <div className="max-w-xl" id={index}>
            <img
              className="h-[50vh] relative overflow-hidden max-w-[80vw] lg:max-w-lg bg-cover object-cover object-center"
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
