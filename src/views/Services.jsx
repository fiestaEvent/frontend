const stats = [
  {
    tag: "WEDDINGS",
  },
  {
    tag: "BIRTHDAYS",
  },
  {
    tag: "CORPORATE EVENTS",
  },
  {
    tag: "PARTIES",
  },
];
export default function Services() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-2xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        What we provide
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center mt-20 mx-auto">
        {stats.map((stat) => (
          <div className="p-16 lg:text-xl w-64 h-28 transition-all duration-200 font-extrabold bg-gray-400 bg-opacity-10 hover:bg-opacity-20 m-5 pt-2 pl-2">
            {stat.tag}
          </div>
        ))}
      </div>
    </div>
  );
}
