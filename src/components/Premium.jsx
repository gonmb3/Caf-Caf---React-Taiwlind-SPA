import banner from "../assets/coffe2.png";
import bgImg from "../assets/banner.jpg";
import { GrSecure } from "react-icons/gr";
import { CiCoffeeCup } from "react-icons/ci";
import { BiSolidCoffeeBean } from "react-icons/bi";

const Premium = () => {
  const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <section style={bgImage} id="nosotros">
      <div className="container min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* image */}
          <div  data-aos="zoom-in"  className="">
            <img
              src={banner}
              alt="banner"
              className="max-w-[430px] w-full mx-auto spin drop-shadow-xl"
            />
          </div>

          {/* text */}
          <div className=" flex flex-col justify-center gap-6 sm:pt-0">
            <h3
             data-aos="fade-up" 
             className="text-3xl sm:text-4xl font-bold italic">
              Café Premium Blen
            </h3>
            <p
             data-aos="fade-up" 
             className="text-sm text-gray-500 tracking-wider">
              Lorem ipsum dolor, sit amet consectetur adipisicing elificiis
              magnam quam incidunt nobis animi quod culpa nam! ruia architecto
              suscipit?
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4 italic">
                <div  data-aos="fade-up"    className="flex items-center gap-3">
                  <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Café Premium</span>
                </div>
                <div  data-aos="fade-up"  data-aos-offset="0"  className="flex items-center gap-3">
                  <CiCoffeeCup className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Café Caliente</span>
                </div>
                <div  data-aos="fade-up"   className="flex items-center gap-3">
                  <BiSolidCoffeeBean className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100" />
                  <span>Café Frio</span>
                </div>
              </div>

              <div data-aos="slide-left"  className="border-l-4 border-primary/70 pl-6  space-y-3">
                <h3 className="text-2xl italic font-bold">Amantes del Té</h3>
                <p className="text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Adipisci officii magni cum expedita , iure reprehenderit,
                  mollitia quae quidem eveniet a asperiores cumque? Sint, ab
                  nemo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Premium;
