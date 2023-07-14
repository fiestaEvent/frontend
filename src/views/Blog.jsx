import { useEffect, useState } from "react";
// import data from "../utils/blogs.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../utils/api";
import ApiModal from "../components/Modals/apiModal";
import { Helmet } from "react-helmet";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
      <Helmet>
        <title>Blogs | Fiesta</title>
        <meta name="description" content="The Writer's Desk" />
        <meta itemprop="name" content="Gallery | Fiesta" />
        <meta
          itemprop="description"
          content="Read about our events, what we do and some tips on creating your perfect event with Fiesta"
        />
        <meta itemprop="image" content="https://i.imgur.com/ejceFwQ.png" />
        <meta property="og:url" content="https://www.fiestaevent.co.in/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blogs | Fiesta" />
        <meta
          property="og:description"
          content="Read about our events, what we do and some tips on creating your perfect event with Fiesta"
        />
        <meta property="og:image" content="https://i.imgur.com/ejceFwQ.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blogs | Fiesta" />
        <meta
          name="twitter:description"
          content="Read about our events, what we do and some tips on creating your perfect event with Fiesta"
        />
        <meta name="twitter:image" content="https://i.imgur.com/ejceFwQ.png" />
        <meta
          name="keywords"
          content="blog, article, online, diary, forum, blogs by Fiesta, fiesta event management in Bengaluru"
        />
        <meta name="canonical" href="https://www.fiestaevent.co.in/gallery" />
      </Helmet>
      {loading && <ApiModal />}
      <div
        className="text-2xl lg:text-5xl text-purple-900 font-bold w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        Writer's Desk
      </div>
      <div className="flex justify-evenly flex-wrap w-11/12 my-20 mx-auto md:flex">
        {blogs.map((blog, index) => (
          <div
            // data-aos="zoom-in"
            key={blog._id}
            className="flex sm:scale-125 lg:scale-150 flex-col w-56 rounded-lg shadow-sm text-[#fdfdfd] bg-fuchsia-50 shadow-rose-900 items-center p-2"
          >
            <div className="h-56 m-3 mb-0 text-sm justify-evenly flex flex-col">
              <img
                src={blog.Image}
                alt="Blog"
                className="object-cover h-28 w-full"
              />
              <div className="font-black text-sm flex-wrap text-rose-700">
                {blog.title}
              </div>
              <div className="text-xs text-fuchsia-900 line-clamp-3">
                {blog.preview}
              </div>
            </div>
            <span className="text-sm text-rose-900">
              <i className="bx bxs-book-open"></i>
              {blog.reads}
            </span>
            <Link
              to={{
                pathname: `/blog/${blog._id}`,
              }}
              className="p-2 text-rose-500 text-xs hover:font-bold w-[90%] rounded-sm"
            >
              Continue Reading
              <i className="p-1 bx bx-right-arrow-circle"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
