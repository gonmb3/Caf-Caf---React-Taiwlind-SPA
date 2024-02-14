import heroImg from "../assets/coffe1.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center  py-5">
          {/* text section */}
          <div className="flex flex-col gap-5">
            <h3 
              data-aos="fade-up" data-aos-once="true" 
             className="text-5xl sm:text-6xl font-bold italic text-gray-100">
              Servimos el mejor{" "} <br/>
              <span
                data-aos="fade-out" data-aos-delay="300"
              className="text-primary italic text-[80px] ">Café</span> de la ciudad!
            </h3>
            <div 
              data-aos="fade-up" data-aos-delay="400"
            className="">
              <button className="bg-gradient-to-r from-primary to-secondary border-2 border-primary rounded-full px-4 py-2 text-white hover:scale-105">
                Café y Codigo
              </button>
            </div>
          </div>
          <div 
           data-aos="zoom-in" 
          className=" min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative">
            {/* image  section*/}
            <img
              src={heroImg}
              alt="cafe-img"
              className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
            />

            <div 
            data-aos="fade-left" 
            className="bg-gradient-to-r from-primary to-secondary  absolute top-10 left-10 p-3 rounded-xl italic">
              <h2>Hey Coder!</h2>
            </div>

            <div
             data-aos="fade-right"  
            className="bg-gradient-to-r from-primary to-secondary  absolute bottom-10 right-10 p-3 rounded-xl italic">
              <h2>El Mejor Café!</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
