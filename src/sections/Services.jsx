import { HashLink } from "react-router-hash-link";
import stats from "../utils/services.json";
export default function Services() {
  return (
    <div className="bg-[#fdfdfd]">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4">
        Services we <span className="text-yellow-400">Provide</span>
      </div>
      <div className="flex flex-row flex-wrap max-w-[1000px] mx-auto items-center justify-center mt-5 md:mt-20 ">
        {stats.map((stat) => (
          <div className="relative w-56 h-56 m-3 p-3 text-rose-900 flex flex-col items-end justify-between transition-all duration-200 bg-yellow-20 rounded-sm">
            <img
              src={stat.img}
              className="w-16 mx-auto p-2 outline-double"
              alt="icon"
            />
            <div className="h-44 m-auto flex flex-col justify-evenly">
              <div className="font-bold text-[10pt] text-center">
                {stat.tag}
              </div>
              <div className="font-light text-sm text-center">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-80 md:h-96 bg-fuchsia-900 text-[#fdfdfd] flex flex-col justify-evenly mt-10 md:mt-20">
        <div className="text-4xl md:text-6xl font-bold max-w-xl text-center align-middle mx-auto">
          PLANNING YOUR NEXT EVENT?
        </div>
        <div className="w-full flex justify-center items-center text-xs font-bold">
          <HashLink smooth={true}
            to="/home#contact"
            className="text-fuchsia-900 mr-2 bg-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-transparent hover:text-[#fdfdfd]"
          >
            Let's Talk
          </HashLink>
          <HashLink smooth={true}
            to="/home#testimonials"
            className="text-[#fdfdfd] border-2 border-[#fdfdfd] w-fit p-3 transition-all duration-700 hover:bg-[#fdfdfd] hover:text-fuchsia-900"
          >
            Hear from our Clients
          </HashLink>
        </div>
      </div>
    </div>
  );
}
