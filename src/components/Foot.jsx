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
      <div className="border-t-2 border-t-fuchsia-900 w-full bg-fuchsia-900 text-[#fdfdfd] flex flex-col md:flex-row justify-center m-auto items-center align-middle lg:justify-evenly">
        <div className="h-48 w-full md:w-fit bg-fuchsia-50">
          <img src="/logo_clean.png" alt="logo" className="h-48 m-auto" />
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap items-center mt-6 mx-auto">
          {contact.map((stat) => (
            <div className="p-2 lg:text-xl w-64 h-16 transition-all duration-200 m-1 border-2 border-fuchsia-900">
              <div className="text-lg font-semibold">{stat.name}</div>
              <a href={stat.href}>
                <div className="text-sm">{stat.path}</div>
              </a>
            </div>
          ))}
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
