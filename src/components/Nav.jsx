import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const routes = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
export default function Navbar() {
  const [active, setActive] = useState("/");
  const [open, setOpen] = useState(false);
  let path = useLocation().pathname;
  useEffect(() => {
    setActive(path);
  }, [path]);
  return (
    <div
      className="absolute z-50"
      onClick={() => {
        if (open) setOpen(!open);
      }}
    >
      <div className="fixed h-20 shadow-sm bg-white w-full flex flex-row items-center justify-center">
        <Link
          className="text-4xl text-fuchsia-900 pl-5"
          to="/"
          style={{ fontFamily: `'Cedarville Cursive', cursive` }}
        >
          {/* <img src="/f-
          .png" alt="logo" className="h-10 w-10 inline"/> */}
          Fiesta Events
        </Link>
        <div
          id="md+"
          className="ml-auto hidden md:flex flex-row justify-evenly w-3/5 min-w-fit align-middle"
        >
          {routes.map((route, index) => (
            <Link
              key={index}
              to={route.path}
              className={`text-fuchsia-900 transition-all duration-300 ease-in-out
          ${active === route.path ? "text-red-900 font-bold" : "text-fuchsia-900"}
          `}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div
          id="md-"
          className="ml-auto md:hidden p-3 text-fuchsia-900 rounded-full mt-1 mr-1"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
      </div>

      <div
        id="dropdown"
        className={`fixed top-0 pt-12 h-screen w-3/4 max-w-[250px] md:hidden ${
          open ? "translate-x-0" : "-translate-x-72"
        }
         transition-all ease-in-out duration-500 flex flex-col bg-slate-50`}
      >
        {routes.map((route, index) => (
          <Link
            key={index}
            to={route.path}
            className={`text-fuchsia-900 py-4 px-4 transition-all duration-300 ease-in-out
            ${
              active === route.path
                ? "text-red-900 font-bold"
                : "text-fuchsia-900"
            }
            `}
          >
            {route.name}
          </Link>
        ))}
        <h1 className="bottom-16 fixed text-black">&copy;Fiesta Events 2023</h1>
      </div>
    </div>
  );
}
