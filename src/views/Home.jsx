import { Link } from "react-router-dom";
export default function Home() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <img
        src="/logo_clean.png"
        className="mt-28 mx-auto h-72 w-6h-72"
        alt="logo"
      />
      <div className="text-3xl leading-relaxed lg:text-6xl font-extrabold w-11/12 lg:w-[42rem] mx-auto text-center">
        ​HERE TO CREATE MOMENTS THAT LAST A LIFETIME
      </div>
      <div className="m-auto">
        <Link
          className="hover:bg-yellow-200 p-4 m-1 bg-white bg-opacity-20 text-white hover:text-amber-900 font-extrabold my-4 transition-all duration-300"
          to="/about"
        >
          What We Do
        </Link>
        <Link
          className="hover:bg-yellow-200 p-4 m-1 bg-white bg-opacity-20 text-white hover:text-amber-900 font-extrabold my-4 transition-all duration-300"
          to="/services"
        >
          Our Services
        </Link>
      </div>
    </div>
  );
}
