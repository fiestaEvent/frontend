import data from "../utils/testimonials.json"
export default function Testimonials() {
  return (
    <div className="">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4 mb-10">
        Love from our <span className="text-yellow-400">Customers</span>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {data.map((item) => (
          <div className="group scale-90 md:scale-100 text-fuchsia-900 bg-[#fdfdfd] relative min-h-[270px] w-64 border border-fuchsia-900 md:m-3 flex flex-col justify-evenly">
            {/* <img
              src={item.image}
              alt="bust"
              className="h-40 w-40 rounded-full absolute -top-20 left-28 border-4 border-[#ffffffaa] p-1"
            /> */}
            <div className="absolute h-full w-full -top-2 -left-2 border border-fuchsia-900"></div>
            <div className="text-sm text-left font-semibold mt-4 ml-10">
              {item.name}
            </div>
            <div className="text-right text-xs font-light mr-10">
              {item.designation}
            </div>
            <div className="text-center text-xs leading-tight p-4 justify-center">
              " {item.description} "
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
