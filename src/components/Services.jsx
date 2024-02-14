import img2 from "../assets/coffe1.png"

const Services = () => {
  const servicesData = [
    {
      img: img2,
      name: "Expresso",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay:"100"
    },
    {
      img: img2,
      name: "Americano",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay:"200"
    },
    {
      img: img2,
      name: "Capuccino",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      aosDelay:"300"
    },
  ];

  return (
    <section id="servicios" className="py-10">
    <div className="container">
      {/* title */}
      <div 
       data-aos="fade-up" 
      className="text-center mb-20">
        <h1 className="text-4xl font-bold font-cursive text-gray-800 italic ">
          El mejor Café para ti!
        </h1>
      </div>
      {/*  services card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center  ">
        {servicesData.map((data, index) => (
          <div
          data-aos={"fade-up"}
          data-aos-delay={data.aosDelay}
           key={index}
            className="rounded-2xl cursor-pointer bg-white hover:bg-primary mt-20 hover:text-white shadow-xl duration-300 max-w-[300px] group realtive">
            {/* img */}
            <div className="h-[122px]">
              <img src={data.img} alt={data.name} className="max-w-[200px] mx-auto transform -translate-y-1/2 group-hover:scale-110 group-hover:rotate-6 duration-300" />
            </div>

             {/* texto */}
             <div className="text-center pb-4">
              <h3 className="text-xl font-bold italic">{data.name} </h3>
              < p className="text-gray-500 group-hover:text-white">{data.description} </p>
             </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Services;
