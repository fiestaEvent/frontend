export default function Footer() {
  const contact = [
    {
      name: "Mail",
      path: "sristi@fiestaevent.co.in",
      href: "mailto:sristi@fiestaevent.co.in",
    },
    {
      name: "Phone",
      path: "+91 917 690 7062",
      href: "tel:+919176907062",
    },
    // {
    //   name: "Address",
    //   path: "",
    // },
  ];
  return (
    <>
      <div className="flex-wrap border-t-2 pb-4 md:pb-0 border-t-fuchsia-900 w-full bg-fuchsia-900 text-[#fdfdfd] flex flex-col md:flex-row justify-center m-auto items-center align-middle lg:justify-evenly">
        <div className="h-48 w-full hidden md:block md:w-fit bg-fuchsia-50">
          <img src="/logo_clean.png" alt="logo" className="h-48 m-auto" />
        </div>
        <div className="flex flex-row items-center justify-between mx-auto w-full md:w-fit flex-wrap">
        <img src="/logo_clean.png" alt="logo" className="h-28 sm:h-32 md:hidden  bg-fuchsia-50 rounded-full p-3 m-3" />
          <div className="flex flex-col lg:flex-row flex-wrap items-center mt-6 md:mx-auto">
            {contact.map((stat) => (
              <div className="p-2 lg:text-xl w-40 h-16 transition-all duration-200 m-1">
                <div className=" text-sm md:text-lg font-semibold">{stat.name}</div>
                <a href={stat.href}>
                  <div className="text-xs md:text-sm">{stat.path}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          id="links"
          className="flex flex-row justify-evenly min-w-fit w-2/6 align-middle"
        >
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/fiesta.events.2023?mibextid=ZbWKwL"
          >
            <div className="">
              <i className="bx p-2 text-blue-500 bg-[#fdfdfd] rounded-full bxl-facebook"></i>
            </div>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://instagram.com/fiestaevents.co.in?igshid=ZDdkNTZiNTM="
          >
            <div className="">
              <i className="bx p-2 text-fuchsia-900 bg-[#fdfdfd] rounded-full bxl-instagram"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
