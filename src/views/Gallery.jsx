import FsLightbox from "fslightbox-react";
import { useState } from "react";
const sources = [
  "https://picsum.photos/200/300",
  "https://picsum.photos/1000/600",
  "https://picsum.photos/400/300",
  "https://picsum.photos/500/300",
  "https://picsum.photos/1000/2300",
  "https://picsum.photos/400/400",
  "https://picsum.photos/200/700",
  "https://picsum.photos/100/600",
  "https://picsum.photos/400/500",
  "https://picsum.photos/550/340",
  "https://picsum.photos/1000/600",
  "https://picsum.photos/400/300",
];
export default function Gallery() {
  const [toggler, setToggler] = useState({
    toggler: false,
    slide: 1,
  });
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-2xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        Glimpes from our past events
      </div>
      <div className="flex justify-center flex-wrap w-11/12 my-20 mx-auto">
        {sources.map((source, index) => (
          <div className="h-52 w-72 md:h-72 md:w-96 m-2">
            <img
              className="h-full w-full object-cover"
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
