import { useEffect, useState } from "react";
// import data from "../utils/blogs.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/api";
import ApiModal from "../components/Modals/apiModal";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Blogs | Fiesta";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    async function getData() {
      setLoading(true);
      const res = await fetch(`${baseUrl}/blogs/getAll`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      console.log(result.blogs);
      setBlogs(result.blogs);
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      {loading && <ApiModal/>}
      <div
        className="text-xl lg:text-3xl text-purple-900 font-light w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        Blogs
      </div>
      <div className="flex justify-evenly flex-wrap w-11/12 my-20 mx-auto md:flex">
        {blogs.map((blog, index) => (
          <div
            key={blog._id}
            className="flex flex-col w-56 rounded-lg shadow-sm text-[#fdfdfd] shadow-rose-900 items-center p-2"
          >
            <div className="h-56 m-3 text-sm justify-evenly flex flex-col">
              <img src={blog.Image} alt="Blog" className="object-cover h-28 w-full" />
              <div className="font-black text-sm flex-wrap text-rose-700">{blog.title}</div>
              <div className="text-xs text-rose-500 line-clamp-3">{blog.preview}</div>
            </div>
            <Link
              to={{
                pathname: `/blog/${blog._id}`,
              }}
              className="p-2 text-rose-500 text-xs hover:font-bold w-[90%] rounded-sm"
            >
              READ BLOG
              <i class="p-1 bx bx-right-arrow-circle"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
