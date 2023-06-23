export default function About() {
  return (
    <div className="pb-10">
      <div className="text-rose-700 text-xl md:text-3xl font-bold m-auto w-fit pt-4">
        What We <span className="text-yellow-400">Do</span>
      </div>
      <div className="flex flex-col justify-center mt-10 items-center">
        <div className="flex flex-col md:flex-row w-full justify-evenly items-center">
          <div className="text-xl md:text-xl font-[700] h-fit text-fuchsia-900 flex flex-row md:flex-col">
            <div>Corporate</div>
            <div className="text-rose-600">Events</div>
          </div>
          <div>
            <img src="/f-fiesta.png" alt="logo" className="h-48" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row w-full justify-evenly items-center">
          <div>
            <img src="/f-fiesta.png" alt="logo" className="h-48" />
          </div>
          <div className="text-xl md:text-xl font-[700] h-fit text-fuchsia-900 flex flex-row md:flex-col">
            <div>Social</div>
            <div className="text-rose-600">Events</div>
          </div>
        </div>
      </div>
    </div>
  );
}
