const stats = [
  "Established in 2019",
  "Served at 100+ Locations",
  "Over 100000+ Happy Clients",
];
export default function About() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-2xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        About Fiesta Events
      </div>
      <div className="flex flex-row items-center mt-20 mx-auto">
        <div>
          <img src="https://cdn4.iconfinder.com/data/icons/education-77/512/atom_outline_molecule_physics-512.png" alt="logo" className="invert h-24 w-24 aspect-auto lg:h-72 lg:w-72"/>
        </div>
        <div>
          {stats.map((stat) => (
            <div className="border-white border-l-4 p-4 text-xl lg:text-3xl w-9/12 mx-auto text-left">
              {stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
