export default function Footer() {
  return (
    <>
      <div className="h-12 w-full border-t-2 bg-white flex flex-col lg:flex-row justify-center m-auto items-center align-middle lg:justify-evenly">
        <div id="tag" className="hidden lg:block">
          &copy;Fiesta Event Management
        </div>
        <div
          id="links"
          className="flex flex-row justify-evenly min-w-fit w-2/6 align-middle"
        >
          <a rel='noreferrer' target='_blank' href="https://www.facebook.com/fiesta.events.2023?mibextid=ZbWKwL">
            <div className="rounded-full h-10 w-10">
              <i className="bx p-2 text-blue-500 bxl-facebook"></i>
            </div>
          </a>
          <a rel='noreferrer' target='_blank' href="https://instagram.com/fiestaevents.co.in?igshid=ZDdkNTZiNTM=">
            <div className="rounded-full h-10 w-10">
              <i className="bx p-2 text-fuchsia-700 bxl-instagram"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
