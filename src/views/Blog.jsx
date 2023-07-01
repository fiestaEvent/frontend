import { useEffect, useState } from "react";
import data from "../utils/blogs.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
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
          <div className="flex flex-col shadow-md text-[#fdfdfd] shadow-rose-900 bg-rose-400 items-center p-2">
            <div className="h-56 w-56 rounded-sm m-3 text-sm">
              <div className="font-black text-3xl flex-wrap">{blog.title}</div>
            </div>
            <Link
              to={{
                pathname: `/blog/${blog.data}`,
                state: {
                  blog: blog,
                },
              }}
              className="p-2 hover:font-bold w-[90%] rounded-sm"
            >
              READ MORE
              <i class="p-1 bx bx-right-arrow-circle"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
