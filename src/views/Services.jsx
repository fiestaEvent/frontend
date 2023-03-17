import { Link } from "react-router-dom";
const stats = [
  {
    tag: "Concept Planning",
    img: "https://st.depositphotos.com/2885805/5036/v/600/depositphotos_50360617-stock-illustration-business-peoples.jpg",
  },
  {
    tag: "Venue Selection",
    img: "https://cdn.oliverbonacininetwork.com/uploads/sites/42/2017/08/oliver-bonacini-hospitality-venue-carlu-1024x1000.jpg",
  },
  {
    tag: "Logistic Support",
    img: "https://www.mmh.com/images/top20warehouse1218.jpg",
  },
  {
    tag: "Guest Accommodation",
    img: "http://dimg04.c-ctrip.com/images/0220i12000a0b1tx306A1.jpg",
  },
  {
    tag: "Decoration",
    img: "https://covercupboard.co.uk/wp-content/uploads/2022/05/wedding-centrepieces-hire-table-sq-venue-dressing-devon.jpeg",
  },
  {
    tag: "Food & Beverage Management",
    img: "https://hospitality-on.com/sites/default/files/2022-05/pexels-fauxels-3184195_1.jpg",
  },
  {
    tag: "Entertainment",
    img: "https://www.alwaysthevip.com/wp-content/uploads/Paradise-Club-at-Edition-Hotel-Times-Square-NYC-Crowded-Dance-floor-Main-Stage-Table-Reservations-at-Always-The-VIP-768x753.jpg",
  },
  {
    tag: "Photography/ Videography",
    img: "https://rkfmaproductions.com/wp-content/uploads/2020/04/square_thumb@2x.jpg",
  },
  {
    tag: "Onsite Support Stuff",
    img: "https://covenantcomputing.net/wp-content/uploads/2021/10/amy-hirschi-K0c8ko3e6AA-unsplash-1-scaled-1-300x300-1-300x300.jpeg",
  },
];
export default function Services() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-3xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        What we provide
      </div>
      <div className="flex flex-row flex-wrap bg-black bg-opacity-50 mx-auto md:mx-10 md:px-40 items-center justify-center mt-20 ">
        {stats.map((stat) => (
          <div className="relative text-lg -top-12 w-60 h-60 text-yellow-200 transition-all duration-200 bg-opacity-20 mx-5">
            <img src={stat.img} alt="" className="w-60 h-44" />
            <div className="text-center leading-tight mt-1">{stat.tag}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-80 md:h-96 bg-yellow-200 flex flex-col justify-evenly mt-10 md:mt-20">
        <div className="text-4xl md:text-6xl font-bold max-w-xl text-center align-middle mx-auto text-black">
          PLANNING YOUR NEXT EVENT?
        </div>
        <div className="w-full flex justify-center items-center text-xs font-bold">
          <Link
            to="/contact"
            className="text-yellow-200 mr-2 bg-black border-2 border-black w-fit p-3 transition-all duration-700 hover:bg-transparent hover:text-black"
          >
            Let's Talk
          </Link>
          <Link
            to="/testimonials"
            className="text-black border-2 border-black w-fit p-3 transition-all duration-700 hover:bg-black hover:text-yellow-200"
          >
            Hear from our Clients
          </Link>
        </div>
      </div>
    </div>
  );
}
