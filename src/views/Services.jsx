import { Link } from "react-router-dom";
import stats from "../utils/services.json";
export default function Services() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-3xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        What we provide
      </div>
      <div className="flex flex-row flex-wrap bg-black bg-opacity-50 mx-auto md:mx-10 md:px-40 items-center justify-center mt-20 ">
        {stats.map((stat) => (
          <div className="relative text-lg -top-12 w-60 h-60 text-yellow-200 transition-all duration-200 bg-opacity-20 mx-5">
            <img src={stat.img} alt="" className="w-60 h-44 rounded-md" />
            <div className="text-center leading-tight mt-1">{stat.tag}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-80 md:h-96 bg-yellow-200 flex flex-col justify-evenly mt-10 md:mt-20">
        <div className="text-4xl md:text-6xl font-bold max-w-xl text-center align-middle mx-auto text-black">
          PLANNING YOUR NEXT EVENT?
        </div>
        <div className="w-full flex justify-center items-center text-xs font-bold">
          <Link
            to="/contact"
            className="text-yellow-200 mr-2 bg-black border-2 border-black w-fit p-3 transition-all duration-700 hover:bg-transparent hover:text-black"
          >
            Let's Talk
          </Link>
          <Link
            to="/testimonials"
            className="text-black border-2 border-black w-fit p-3 transition-all duration-700 hover:bg-black hover:text-yellow-200"
          >
            Hear from our Clients
          </Link>
        </div>
      </div>
    </div>
  );
}
