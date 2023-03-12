import { Link } from "react-router-dom";
import generator from "../utils/generator";
export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-lg lg:text-3xl font-light w-11/12 lg:w-5/6 mx-auto text-left mt-44">
        Fiesta Events
      </div>
      <div className="text-3xl leading-relaxed lg:text-6xl font-extrabold w-11/12 lg:w-[42rem] mx-auto text-center mt-3">
        ​HERE TO CREATE MOMENTS THAT LAST A LIFETIME
      </div>
      <Link 
        data-value="EXPLORE"
        onMouseOver={(e)=>generator(e.target)}
      className="hover:bg-yellow-200 p-4 bg-white bg-opacity-20 text-white hover:text-amber-900 font-extrabold mx-auto my-4 transition-all duration-300" to="/about">
        EXPLORE
      </Link>
    </div>
  );
}
