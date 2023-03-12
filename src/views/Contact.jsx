import { useForm, ValidationError } from "@formspree/react";
const contact = [
  {
    name: "Mail",
    path: "sc2412@it.jgec.ac.in",
  },
  {
    name: "Phone",
    path: "+91-700-333-0000",
  },
  {
    name: "Address",
    path: "GPV4+5CJ,NH 31,Jalpaiguri",
  },
];
function ContactForm() {
  const [state, handleSubmit] = useForm("xlekllrz");
  if (state.succeeded) {
    return <p className="max-w-4xl w-72 md:w-84 text-center mt-20 lg:w-96 my-3 p-4 bg-white bg-opacity-10 border-4 border-[#ffffff11] m-auto">Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input className="max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-white bg-opacity-10 border-4 border-[#ffffff11] m-auto" id="email" type="email" name="email" placeholder="Email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea className="max-w-4xl  w-72 md:w-84 lg:w-96 my-1 lg:my-3 p-4 bg-white bg-opacity-10 border-4 border-[#ffffff11] m-auto" id="message" name="message" placeholder="Message"/>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button className="my-3 py-2 px-4 bg-white bg-opacity-10 hover:bg-opacity-100 hover:text-black transition-all duration-300 border-4 border-[#ffffff11] m-auto" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
export default function Contact() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-2xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        Reach Out To Us
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-center mt-6 mx-auto">
        {contact.map((stat) => (
          <div className="p-2 lg:text-xl w-64 h-16 transition-all duration-200 bg-gray-400 bg-opacity-10 hover:bg-opacity-20 m-1 lg:m-5 border-2 border-[#ffffff11]">
            <div className="text-lg text-yellow-400 font-semibold">
              {stat.name}
            </div>
            <div className="text-sm">{stat.path}</div>
          </div>
        ))}
      </div>
      <ContactForm />
    </div>
  );
}
