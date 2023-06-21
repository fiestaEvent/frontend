import { Link } from "react-router-dom";
import stats from "../utils/events.json";
export default function About() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div
        className="text-3xl lg:text-5xl text-purple-900 font-light w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        What We Do
      </div>
      <div className="flex flex-row items-center mt-5 mx-auto">
        <div>
          {stats.map((stat) => (
            <div className="flex flex-col-reverse lg:flex-row justify-center my-5 w-full">
              <div className="flex-wrap flex lg:w-1/2 justify-center">
                {stat.sub.map((item) => (
                  <div className="relative group h-12 lg:h-16 w-5/6 max-w-sm lg:w-44 p-2 transition-all duration-300 bg-fuchsia-900 text-white font-semibold border-4 border-opacity-100 border-white m-2 lg:m-4 whitespace-normal">
                    {item.tag}
                  </div>
                ))}
              </div>
              <div className="border-fuchsia-900 border-l-4 p-4 text-xl lg:text-3xl lg:w-1/4 text-left bg-opacity-10 bg-fuchsia-800">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-60 bg-fuchsia-900 flex flex-col justify-center mt-28">
        <Link
          to="/services"
          className="font-light bg-white border-2 text-fuchsia-900 border-white m-auto w-fit text-3xl p-5 transition-all duration-700 hover:bg-transparent hover:text-white"
        >
          OUR SERVICES
        </Link>
      </div>
    </div>
  );
}
