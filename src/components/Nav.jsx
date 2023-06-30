import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect, useState } from "react";
const routes = [
  {
    name: "Home",
    path: "/home#",
  },
  {
    name: "About",
    path: "/home#about",
  },
  {
    name: "Services",
    path: "/home#services",
  },
  {
    name: "Testimonials",
    path: "/home#testimonials",
  },
  {
    name: "Contact",
    path: "/home#contact",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  // { 
  //   name: "Blogs",
  //   path: "/blog",
  // }
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="absolute z-50"
      onClick={() => {
        if (open) setOpen(!open);
      }}
    >
      <div className="fixed h-20 shadow-sm bg-[#fdfdfd] w-full flex flex-row items-center justify-center">
        <HashLink
          smooth={true}
          className="text-fuchsia-900 pl-5"
          to="/"
          style={{ fontFamily: `'Cedarville Cursive', cursive` }}
        >
          <img src="/logo_clean_head.png" alt="logo" className="h-12 sm:h-16 sm:ml-4 inline"/>
        </HashLink>
        <span className="text-amber-500 font-[handlee] text-sm h-0 font-bold">
          <i class="bx bx-right-arrow text-base"></i>
          Celebrate every moment
        </span>
        <div
          id="md+"
          className="ml-auto hidden md:flex flex-row justify-evenly w-3/5 min-w-fit align-middle"
        >
          {routes.map((route, index) => (
            <HashLink
              smooth={true}
              key={index}
              to={route.path}
              className={`text-fuchsia-900 transition-all duration-300 ease-in-out hover:font-bold hover:test-fuchsia-900`}
            >
              {route.name}
            </HashLink>
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
          <HashLink
            smooth={true}
            key={index}
            to={route.path}
            className={`text-fuchsia-900 py-4 px-4 transition-all duration-300 ease-in-out hover:font-bold hover:test-fuchsia-900`}
          >
            {route.name}
          </HashLink>
        ))}
        <h1 className="bottom-16 fixed text-black">&copy;Fiesta Events 2023</h1>
      </div>
    </div>
  );
}
