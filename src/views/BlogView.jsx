import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import "../";
import { baseUrl } from "../utils/api";
export default function BlogView(props) {
  const [blog, setBlog] = useState(null);
  const [state, setState] = useState(null);
  const {b} = useParams();
  useEffect(() => {
    document.title = "Blog | Fiesta";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    async function getData() {
      const res = await fetch(`${baseUrl}/blogs/${b}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setBlog(result.blog);
      const html = await marked.parse(result.blog.body);
      setState(html);
    }
    getData();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-20">
      <div className="w-full h-60 overflow-hidden"><img className="w-full object-cover" src={blog?.Image} alt="Header"/></div>
      <article
        className="m-4 unreset"
        dangerouslySetInnerHTML={{ __html: state }}
      ></article>
    </div>
  );
}
