import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { marked } from "marked";
import remarkGfm from "remark-gfm";
import "../";
export default function BlogView() {
  const [state, setState] = useState(null);
  useEffect(() => {
    document.title = "Blog | Fiesta";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const markdown = require(`../utils/blogs/${params.b}`);
    fetch(markdown)
      .then((response) => {
        return response.text();
      })
      .then((text) => {
        setState(marked(text));
      });
      console.log(state);
  }, []);
  const params = useParams();
  console.log(`../utils/blogs/${params.b}`);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-28 unreset">
        <article className="m-4" dangerouslySetInnerHTML={{__html:state}}></article>
    </div>
  );
}
