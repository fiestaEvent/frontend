import sources from "../utils/gallery.json";
import pts from "../utils/trust-points.json";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Contact from "../sections/Contact";
import About from "../sections/About";
import Services from "../sections/Services";
import Steps from "../sections/Steps";
import Testimonials from "../sections/Testimonials";
import { Helmet } from "react-helmet";
export default function Home() {
  document.title = "Home | Fiesta";
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <Helmet>
        <meta
          id="home-meta"
          name="description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta
          id="home-meta"
          itemprop="name"
          content="Fiesta - Event Management"
        />
        <meta
          id="home-meta"
          itemprop="description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta
          id="home-meta"
          itemprop="image"
          content="https://i.imgur.com/ejceFwQ.png"
        />
        <meta
          id="home-meta"
          property="og:url"
          content="https://www.fiestaevent.co.in"
        />
        <meta id="home-meta" property="og:type" content="website" />
        <meta
          id="home-meta"
          property="og:title"
          content="Fiesta - Event Management"
        />
        <meta
          id="home-meta"
          property="og:description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta
          id="home-meta"
          property="og:image"
          content="https://i.imgur.com/ejceFwQ.png"
        />

        <meta
          id="home-meta"
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          id="home-meta"
          name="twitter:title"
          content="Fiesta - Event Management"
        />
        <meta
          id="home-meta"
          name="twitter:description"
          content="We offer professional event management services for all types of occasions, including weddings, corporate events, and parties. Trust Fiesta to handle all aspects of your event planning, from venue selection to decor and entertainment. Make your event a success with us.From intimate gatherings to large-scale events, Fiesta creates experiences that leave a lasting impression. Contact us today to start planning your event."
        />
        <meta
          id="home-meta"
          name="twitter:image"
          content="https://i.imgur.com/ejceFwQ.png"
        />
        <meta
          id="home-meta"
          name="keywords"
          content="event management, event management company, event management company in bengaluru"
        />
        <meta
          id="home-meta"
          name="canonical"
          href="https://www.fiestaevent.co.in/home"
        />
      </Helmet>
      <div className="section mt-36">
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
          <img
            src="/logo_clean.png"
            className="mt-20 lg:mt-0 h-64 md:h-96"
            alt="logo"
            title="logo"
            loading="eager"
          />
          <Carousel
            autoPlay
            infiniteLoop
            interval={1400}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows={true}
            swipeable={false}
            className="max-w-xl"
          >
            {sources.map((source, index) => (
              <div className="max-w-xl" id={index} key={index}>
                <img
                  className="h-[50vh] relative overflow-hidden max-w-[80vw] lg:max-w-lg bg-cover object-cover object-center"
                  src={source}
                  alt={index}
                  title={`Gallery Image ${index + 1}`}
                  loading="eager"
                />
              </div>
            ))}
          </Carousel>
        </div>
        {/* <div className="relative group bg-fuchsia-900 text-[#fdfdfd] transform transition-all duration-300 w-64 h-24 text-center flex flex-row justify-center m-auto my-10 font-extrabold text-xl">
        <div className="absolute group-hover:top-0 group-hover:left-0 w-64 h-24 -top-1 -left-1 transform transition-all duration-300 border-purple-500 border-2"></div>
        <Link to="/contact" className=" z-50 my-auto">
          Get A Quote
        </Link>
      </div>
      <div className="m-auto mt-10 mb-10">
        <Link
          className="p-6 m-1 text-fuchsia-900 border-2 border-y-fuchsia-900 font-extrabold text-2xl my-4 transition-all duration-300"
          to="/services"
        >
          Our Services
        </Link>
      </div> */}
        <div className="flex flex-row mt-16 mb-12  justify-center text-center md:justify-evenly min-w-[50vw] max-w-[70vw] m-auto text-fuchsia-900">
          Your one-stop destination for all event management needs. At Fiesta,we
          understand that every event is unique and special. Whether it's a
          corporate conference, a grand wedding, a milestone celebration, or a
          social gathering, we have the knowledge, resources, and creativity to
          make it an unforgettable experiences within your budget. Don't just
          take our word for it - see what our satisfied clients have to say in
          our testimonials section and explore our gallery to see our last
          works. Thank you for visiting Fiesta. We look forward to celebrate the
          event with you and turning your dreams into reality.
        </div>
        <div className="flex flex-row mb-10 mt-5 justify-center md:justify-evenly min-w-[50vw] max-w-[70vw] m-auto text-fuchsia-900 font-black">
          {pts.map((pt, index) => (
            <div className="w-fit text-lg items-center" key={index}>
              {/* <i className="bx bxs-bullseye"></i> */}
              {pt}.&nbsp;
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center -mb-12">
          <span className="font-black -mt-4 text-2xl md:text-4xl text-yellow-400">
            Plan your next event with{" "}
          </span>
          <span
            data-aos="zoom-in"
            className="font-[poppins] text-3xl text-fuchsia-900 md:text-6xl mt-2 font-black"
          >
            Fiesta
          </span>
        </div>
      </div>
      <div id="contact" className="section pt-20 -mb-52 md:-mb-20">
        <Contact />
      </div>
      <div id="about" className="section pt-20 -mb-12 md:-mb-20">
        <About />
      </div>
      <div id="services" className="section pt-20 -mb-12">
        <Services />
      </div>
      <div id="steps" className="section pt-20 -mb-12">
        <Steps />
      </div>
      <div id="testimonials" className="section pt-20 mb-20">
        <Testimonials />
      </div>
    </div>
  );
}
