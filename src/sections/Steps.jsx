import data from "../utils/steps.json";
export default function Steps() {
  return (
    <div className="">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4">
        How we <span className="text-yellow-400">Work</span>
      </div>
      <div className="text-xs text-center font-medium">
        4 Easy Steps to a hassle-free perfection
      </div>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center my-20">
        {data.map((step, i) => (
          <div className="flex flex-row items-center sm:even:mt-14">
            <div className="flex flex-row w-64 sm:w-fit m-3 sm:mx-10 sm:flex-col justify-evenly ">
              <i
                style={{ backgroundColor: `${step.color}` }}
                className={`${step.icon} rounded-lg p-3 w-fit text-[#fdfdfd] text-4xl font-extralight `}
              ></i>
              <div
                className="text-xs w-20 my-2"
                style={{ color: `${step.color}` }}
              >
                {step.desc}
              </div>
            </div>
            {i !== data.length - 1 && (
              <div className="hidden sm:block text-rose-900 font-bold relative">
                -<i class='bx bxs-chevrons-right m-auto top-1 absolute' ></i>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
