import FsLightbox from "fslightbox-react";
import { useEffect, useState } from "react";
import sources from "../utils/gallery.json";
export default function Gallery() {
  const [toggler, setToggler] = useState({
    toggler: false,
    slide: 1,
  });
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-2xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        Glimpes from our past events
      </div>
      <div className="flex justify-center flex-wrap w-11/12 my-20 mx-auto">
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
      <FsLightbox
        toggler={toggler.toggler}
        sources={sources}
        slide={toggler.slide}
      />
    </div>
  );
}
