import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { baseUrl } from "../utils/api";
import EmailCollectModal from "../components/Modals/emailCollectModal";
import ApiModal from "../components/Modals/apiModal";
import { Helmet } from "react-helmet-async";
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
      const html = await marked.parse(result.blog?.body);
      setState(html);
      setLoading(false);
      setShow(true);
    }
    getData();
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-20">
      <Helmet prioritizeSeoTags>
        <title>Fiesta | Events</title>
        <meta name="description" content={blog?.preview} />

        <meta itemprop="name" content="Fiesta | Events" />
        <meta itemprop="description" content={blog?.preview} />
        <meta itemprop="image" content={blog?.Image} />

        <meta property="og:url" content={`https://www.fiestaevent.co.in/blog/${blog?._id}`} />
        <meta property="og:type" content="Blog Article" />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.preview} />
        <meta property="og:image" content={blog?.Image} />
        <meta property="og:locale" content="en_GB" />
d
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={NavigationPreloadManager?.title} />
        <meta name="twitter:description" content={blog?.preview} />
        <meta name="twitter:image" content={blog?.Image} />
      </Helmet>
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
