import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import { baseUrl } from "../utils/api";
import EmailCollectModal from "../components/Modals/emailCollectModal";
import ApiModal from "../components/Modals/apiModal";
import { Helmet } from "react-helmet";
export default function BlogView(props) {
  const [show, setShow] = useState(false);
  const [doneSubmit, setDoneSubmit] = useState(false); //eslint-disable-line
  const [blog, setBlog] = useState(null);
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const { b } = useParams();
  // setInterval(() => {
  //   if (doneSubmit === false) setShow(true);
  // }, 1000 * 60 * 3);

  useEffect(() => {
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
  }, [b]);
  return (
    <div className="min-h-screen w-full flex flex-col justify-start py-20">
      <Helmet prioritizeSeoTags>
        <title>{blog?.title}</title>
        <meta id={blog?._id} name="description" content={blog?.preview} />

        <meta id={blog?._id} itemprop="name" content="Fiesta | Events" />
        <meta id={blog?._id} itemprop="description" content={blog?.preview} />
        <meta id={blog?._id} itemprop="image" content={blog?.Image} />

        <meta id={blog?._id} property="og:url" content={`https://www.fiestaevent.co.in/blog/${blog?._id}`} />
        <meta id={blog?._id} property="og:type" content="Blog Article" />
        <meta id={blog?._id} property="og:site_name" content="Fiesta" />
        <meta id={blog?._id} property="og:title" content={blog?.title} />
        <meta id={blog?._id} property="og:description" content={blog?.preview} />
        <meta id={blog?._id} property="og:image" content={blog?.Image} />
        <meta id={blog?._id} property="og:locale" content="en_GB" />
        <meta id={blog?._id} rel="canonical" href={`https://www.fiestaevent.co.in/blog/${blog?._id}`} />
        <meta id={blog?._id} name="twitter:card" content="summary_large_image" />
        <meta id={blog?._id} name="twitter:title" content={blog?.title} />
        <meta id={blog?._id} name="twitter:description" content={blog?.preview} />
        <meta id={blog?._id} name="twitter:image" content={blog?.Image} />
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
