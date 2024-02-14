import { GiCoffeeCup } from "react-icons/gi";
import { FaCoffee } from "react-icons/fa";

const Header = () => {
  const navLinks = [
    { path: "#home", text: "Home" },
    { path: "#servicios", text: "Servicios" },
    { path: "#nosotros", text: "Nosotros" },
  ];

  return (
    <header className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
      <div className="container  py-2">
        <div className="flex items-center justify-between ">
          {/* logo */}
          <div data-aos="fade-down" data-aos-once="true">
            <h1 className="flex items-center gap-2 italic text-2xl lg:text-3xl ">
              {" "}
              <span className="">
                <GiCoffeeCup size={40} />
              </span>
              Café Café
            </h1>
          </div>
          {/* nav links */}
          <div
          data-aos="fade-down" data-aos-once="true" data-aos-delay="300"
           className="">
            <ul className=" flex items-center gap-8">
              {navLinks.map((link) => (
                <li  className="hidden sm:flex items-center gap-8" key={link.path} >
                  <a className="text-white/70 py-4 px-4 hover:text-white duration-300" href={link.path}>{link.text} </a>
                </li>
              ))}
              <li className="flex items-center">
                <button className="py-2 px-4 rounded-full italic bg-primary/70 hover:scale-105 duration-300 justify-center text-sm  flex items-center gap-1">
                    Ordenar <FaCoffee size={21} className="mt-1" />
                 </button>
                    
                </li>
            </ul>
        
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
