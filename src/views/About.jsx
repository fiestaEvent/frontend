import { Link } from "react-router-dom";
const stats = [
  {
    title: "Corporate Event",
    sub: [
      { tag: "Brand/ Product Launch", img: "" },
      { tag: "Anniversary", img: "" },
      { tag: "Award function", img: "" },
      { tag: "Seminars", img: "" },
      { tag: "Team Building", img: "" },
      { tag: "Milestones", img: "" },
      { tag: "Launch Party", img: "" },
      { tag: "Office Outings", img: "" },
    ],
  },
  {
    title: "Social Events",
    sub: [
      { tag: "Weddings/ Receptions", img: "" },
      { tag: "Engagements", img: "" },
      { tag: "Bachelorette", img: "" },
      { tag: "Baby shower", img: "" },
      { tag: "Birthday parties", img: "" },
      { tag: "Family Get-together", img: "" },
    ],
  },
];
export default function About() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-3xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        What We Do
      </div>
      <div className="flex flex-row items-center mt-5 mx-auto">
        <div>
          {stats.map((stat) => (
            <div className="flex flex-col-reverse lg:flex-row justify-center my-5 w-full">
              <div className="flex-wrap flex lg:w-1/2 justify-center">
                {stat.sub.map((item) => (
                  <div className="relative group h-12 lg:h-16 w-5/6 max-w-sm lg:w-44 p-2 hover:bg-opacity-20 transition-all duration-300 bg-white bg-opacity-0 text-white font-semibold border-4 border-opacity-70 border-white m-2 lg:m-4 whitespace-normal">
                    {item.tag}
                  </div>
                ))}
              </div>
              <div className="border-white border-l-4 p-4 text-xl lg:text-3xl lg:w-1/4 text-left bg-opacity-10 bg-white">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-60 bg-yellow-200 flex flex-col justify-center mt-10">
        <Link to="/services" className="font-light bg-black border-2 border-black m-auto w-fit text-3xl p-5 transition-all duration-700 hover:bg-transparent hover:text-black">
        OUR SERVICES
        </Link>
      </div>
    </div>
  );
}
