import { Link } from "react-router-dom";
export default function Home() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <img
        src="/logo_clean.png"
        className="mt-28 mx-auto h-72 w-6h-72"
        alt="logo"
      />
      <div className="text-3xl leading-relaxed lg:text-6xl font-extrabold w-11/12 lg:w-[42rem] mx-auto text-center">
        ​HERE TO CREATE MOMENTS THAT LAST A LIFETIME
      </div>
      <div className="relative group bg-yellow-200 text-amber-800 transform transition-all duration-300 w-64 h-24 text-center flex flex-row justify-center m-auto my-10 font-extrabold text-3xl">
        <div className="absolute group-hover:top-0 group-hover:left-0 w-64 h-24 -top-1 -left-1 transform transition-all duration-300 border-yellow-500 border-2"></div>
        <Link to="/contact" className="my-auto">
          Get A Quote
        </Link>
      </div>
      <div className="m-auto mt-10 mb-10">
        {/* <Link
          className="hover:bg-yellow-200 p-4 m-1 bg-white bg-opacity-20 text-white hover:text-amber-900 font-extrabold my-4 transition-all duration-300"
          to="/about"
        >
          What We Do
        </Link> */}
        <Link
          className="hover:bg-yellow-200 p-6 m-1 bg-white bg-opacity-20 text-white hover:text-amber-900 font-extrabold my-4 transition-all duration-300"
          to="/services"
        >
          Our Services
        </Link>
      </div>
      <div className="about my-10 mx-auto min-w-[300px] max-w-[70vw] rounded-md shadow-md bg-black bg-opacity-50 p-6 text-lg font-medium text-justify">
        Welcome to Fiesta, your one-stop destination for all event management
        needs. At Fiesta, we understand that every event is unique and special.
        Whether it's a corporate conference, a grand wedding, a milestone
        celebration, or a social gathering, we have the knowledge, resources,
        and creativity to make it an unforgettable experiences within your
        budget. Don't just take our word for it – see what our satisfied clients
        have to say in our testimonials section and explore our gallery to see
        our last works. Thank you for visiting Fiesta. We look forward to
        celebrate the event with you and turning your dreams into reality.
      </div>
    </div>
  );
}
