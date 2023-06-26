import { useEffect, useState } from "react";
import data from "../utils/blogs.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HashLink } from "react-router-hash-link";
export default function Blog() {
  useEffect(() => {
    document.title = "Blogs | Fiesta";
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
        Blogs
      </div>
      <div className="justify-evenly flex-wrap w-11/12 my-20 mx-auto hidden md:flex">
        {data.map((blog, index) => (
          <div className="flex flex-col items-center">
            <div className="h-72 w-56 rounded-sm shadow-md m-3 mb-0 text-fuchsia-900 text-sm">
              <Carousel
                autoPlay
                infiniteLoop
                interval={2000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                className="w-full h-40 rounded-t-sm"
                swipeable
              >
                {blog.images.map((source, index) => (
                  <div className="max-w-xl    " id={index}>
                    <img
                      className="relative overflow-hidden rounded-t-lg w-full h-40 bg-cover object-cover object-center"
                      src={source}
                      alt={index}
                    />
                  </div>
                ))}
              </Carousel>
              <div className="p-2 h-32 text-xs flex flex-col justify-evenly items-center">
                <div className="">{blog.title}</div>
                <div className="text-[10px] text-indigo-400">{blog.date}</div>
                <div className="line-clamp-3 text-green-900">{blog.data}</div>
              </div>
            </div>
            <HashLink className="p-1 text-[#fdfdfd] hover:font-bold bg-fuchsia-500 w-[90%] rounded-b-lg">
              READ MORE
              <i class="p-1 bx bx-right-arrow-circle"></i>
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
}
