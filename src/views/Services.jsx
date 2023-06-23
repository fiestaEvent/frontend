import { Link } from "react-router-dom";
import stats from "../utils/services.json";
export default function Services() {
  document.title = "Services | Fiesta";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div
        className="text-xl lg:text-3xl text-purple-900 font-light w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        What we provide
      </div>
      <div className="flex flex-row flex-wrap max-w-[1000px] mx-auto items-center justify-center mt-20 ">
        {stats.map((stat) => (
          <div className="relative w-60 bg-slate-50 h-60 m-3 p-3 text-fuchsia-900 flex flex-col items-end justify-between transition-all duration-200 bg-yellow-20 rounded-sm">
            <img
              src={stat.img}
              className="w-16 mx-auto p-1 rounded-full"
              alt="icon"
            />
            <div className="h-44 w-11/12 flex flex-col justify-evenly">
              <div className="font-bold text-[10pt]">{stat.tag}</div>
              <div className="font-light text-base text-center">
                {stat.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-80 md:h-96 bg-fuchsia-900 text-[#fdfdfd] flex flex-col justify-evenly mt-10 md:mt-20">
        <div className="text-4xl md:text-8xl font-bold max-w-xl text-center align-middle mx-auto">
          PLANNING YOUR NEXT EVENT?
        </div>
        <div className="w-full flex justify-center items-center text-xs font-bold">
          <Link
            to="/contact"
            className="text-fuchsia-900 mr-2 bg-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-transparent hover:text-[#fdfdfd]"
          >
            Let's Talk
          </Link>
          <Link
            to="/testimonials"
            className="text-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-[#fdfdfd] hover:text-fuchsia-900"
          >
            Hear from our Clients
          </Link>
        </div>
      </div>
    </div>
  );
}
