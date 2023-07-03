// modal with form to collect email address styled with tailwind

import { useState } from "react";
import { baseUrl } from "../../utils/api";

// used in: frontend/src/components/Modals/emailCollectModal.jsx
export default function EmailCollectModal(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setError("Please enter your email address");
      return;
    }
    setLoading(true);
    const res = await fetch(`${baseUrl}/newsletter/addMail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const result = await res.json();
    if (result.error) {
      setError(result.error);
    } else {
      setError("");
      setEmail("");
      setResponse("Thanks for subscribing!");
    //   props.setShow(false);
      props.setDoneSubmit(true);
    }
    setLoading(false);
  }
  return (
    <div className="fixed bg-black bg-opacity-80 flex justify-center h-screen w-screen">
      <div className="bg-fuchsia-50 rounded-sm p-3 min-h-fit max-h-[75vh] m-auto w-[90vw] max-w-xl">
        {/* close button header image email filed checkbox and sbumit */}
        <div className="flex justify-end">
          <button
            onClick={() => props.setShow(false)}
            className="absolute z-50 text-2xl font-bold text-fuchsia-900"
          >
            X
          </button>
        </div>
        <div className="relative flex flex-col justify-center h-full items-center">
          <img
            src="https://i.imgur.com/W4AnJYe.png"
            alt="header"
            className=" object-cover h-40 w-40 md:h-60 md:w-60"
          />
          <h1 className="text-xl font-bold text-fuchsia-900">
            Subscribe to our newsletter
          </h1>
          <p className="text-fuchsia-900 text-xs">
            Get your wedding planner template & checklist
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly items-center w-full"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="border-2 border-fuchsia-900 rounded-md p-2 m-2 w-11/12 text-xs font-bold"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex">
              <input type="checkbox" className="m-2" />
              <p className="text-fuchsia-900 text-xs">
                I agree to receive communications from Fiesta
              </p>
            </div>
            {response === null && (
              <button
                type="submit"
                className="bg-fuchsia-900 text-white rounded-md p-2 m-2 w-11/12 text-xs font-bold"
              >
                {loading
                  ? "Loading..."
                  : "I Want My Wedding Planner Template & Checklist"}
              </button>
            )}
            {response !== null && (
              <p className="text-fuchsia-900 text-lg font-bold">{response}</p>
            )}

            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
