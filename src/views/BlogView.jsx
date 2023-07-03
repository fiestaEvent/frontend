import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { baseUrl } from "../utils/api";
import EmailCollectModal from "../components/Modals/emailCollectModal";
import ApiModal from "../components/Modals/apiModal";
export default function BlogView(props) {
  const [show, setShow] = useState(false);
  const [doneSubmit, setDoneSubmit] = useState(false);
  const [blog, setBlog] = useState(null);
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const { b } = useParams();
  // setInterval(() => {
  //   if (doneSubmit === false) setShow(true);
  // }, 1000 * 60 * 3);

  useEffect(() => {
    document.title = "Blog | Fiesta";
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    async function getData() {
      setLoading(true);
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
      setLoading(false);
      setShow(true);
    }
    getData();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-20">
      {loading && <ApiModal />}
      <div className="w-full h-60 overflow-hidden">
        <img className="w-full object-cover" src={blog?.Image} alt="Header" />
      </div>
      {show === true && (
        <EmailCollectModal
          setShow={setShow}
          setDoneSubmit={setDoneSubmit}
          show={show}
        />
      )}
      <article
        className="m-4 unreset"
        dangerouslySetInnerHTML={{ __html: state }}
      ></article>
      {show === true && (
        <EmailCollectModal
          setShow={setShow}
          setDoneSubmit={setDoneSubmit}
          show={show}
        />
      )}
    </div>
  );
}
