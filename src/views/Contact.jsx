import { useState } from "react";
import { baseUrl } from "../utils/api";
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
function ContactForm() {
  const [state, setState] = useState(null);
  const [data, setData] = useState({
    email: "",
    phone: "",
    message: "",
    eventDate: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    setState(result.succeeded);
  };
  if (state === true) {
    return (
      <p className="max-w-4xl w-72 md:w-84 text-center mt-20 lg:w-96 my-3 p-4 border-4 border-fuchsia-900 m-auto">
        Thanks for your response!
      </p>
    );
  }
  if (state === false) {
    return (
      <p className="max-w-4xl w-72 md:w-84 text-center mt-20 lg:w-96 my-3 p-4 border-4 border-fuchsia-900 m-auto">
        Something went wrong. Please try again later.
      </p>
    );
  }
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        className="max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-opacity-10 border-[1px] border-fuchsia-900 m-auto"
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        className="max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-opacity-10 border-[1px] border-fuchsia-900 m-auto"
        id="phone"
        type="phone"
        name="phone"
        placeholder="Phone"
        required
        onChange={(e) => setData({ ...data, phone: e.target.value })}
      />
      {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
      <select
        className={`max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-[#fdfdfd] border-[1px] border-fuchsia-900 m-auto`}
        id="eventDate"
        name="eventDate"
        placeholder="Event Date"
        required
        onChange={(e) => setData({ ...data, eventDate: e.target.value })}
      >
        <option className="bg-[#fdfdfd]" value="N/A">
          Event Timeline
        </option>
        <option className="bg-[#fdfdfd]" value="<2 Months">
          Within next 2 Months
        </option>
        <option className="bg-[#fdfdfd]" value="<6 Months">
          Within next 6 Months
        </option>
        <option className="bg-[#fdfdfd]" value="1+ Year">
          Next 1 Year
        </option>
        <option className="bg-[#fdfdfd]" value="N/A">
          Not yet decided
        </option>
      </select>
      <textarea
        className="max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-opacity-10 border-[1px] border-fuchsia-900 m-auto"
        id="message"
        name="message"
        placeholder="Message"
        onChange={(e) => setData({ ...data, message: e.target.value })}
      />
      {/* <ValidationError prefix="Message" field="message" errors={state.errors} /> */}
      <button
        className="my-3 py-2 px-4 transition-all duration-300 text-[#fdfdfd] bg-fuchsia-900 m-auto"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
export default function Contact() {
  document.title = "Contact Us | Fiesta";
  return (
    <div className="min-h-screen w-full text-purple-900 flex flex-col justify-start">
      <div
        className="text-xl lg:text-3xl font-light w-11/12 mx-auto text-left mt-32"
        style={{ fontFamily: `'Handlee', cursive` }}
      >
        Reach Out To Us
      </div>
      <ContactForm />
      <div className="flex flex-col lg:flex-row flex-wrap items-center mt-6 mx-auto">
        {contact.map((stat) => (
          <div className="p-2 bg-[#fdfdfd] lg:text-xl w-64 h-16 transition-all duration-200 m-1 lg:m-5 border-2 border-fuchsia-900">
            <div className="text-lg text-fuchsia-900 font-semibold">
              {stat.name}
            </div>
            <a href={stat.href}>
              <div className="text-sm">{stat.path}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
