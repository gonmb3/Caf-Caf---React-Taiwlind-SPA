import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GiCoffeeCup } from "react-icons/gi";
import footerBg from "../assets/bgFooter.jpg";
import { FaTwitter } from "react-icons/fa";


const Footer = () => {
  const bgFooter = {
    backgroundImage: `url(${footerBg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  const footerLinks = [
    { path: "#home", text: "Home" },
    { path: "#servicios", text: "Servicios" },
    { path: "#nosotros", text: "Nosotros" },
  ];

  return (
    <footer style={bgFooter}>
      <div className="container text-white">
        <div className="bg-black/40 min-h-[400px]">
          <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/*company details */}
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-2 italic text-2xl lg:text-3xl ">
                {" "}
                <span className="">
                  <GiCoffeeCup size={40} />
                </span>
                Café Café
              </h1>
              <p className="pt-4 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, sapiente.</p>
            </div>

            {/* footer links */}
            <div className="grid col-span-2 sm:grid-cols-3 md:pl-10">
                {/* first col */}
                <div className="py-8 px-8">
                    <h3 className="text-xl font-semibold sm:text-left mb-3 italic"> Links</h3>
                    <ul className="space-y-3">
                    {
                        footerLinks.map((link, i) => (
                            <li key={i}>
                               <a className="inline-block hover:scale-105 duration-200" href={link.path}>{link.text} </a>
                            </li>
                        ))
                    }
                    </ul>
                </div>

                   {/* second col */}
                   <div className="py-8 px-8">
                    <h3 className="text-xl font-semibold sm:text-left mb-3 italic">Links</h3>
                    <ul className="space-y-3">
                    {
                        footerLinks.map((link, i) => (
                            <li key={i}>
                               <a className="inline-block hover:scale-105 duration-200" href={link.path}>{link.text} </a>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                {/* address */}
                <div className="py-8 px-4 col-span-2 sm:col-auto ">
                    <h1 className="text-xl font-semibold sm:text-left mb-3 italic">Contacto</h1>
                    <div className="">
                        <p>Calle Uno esq. Calle Cuatro</p>
                        <p>+598 099 555 666</p>
                        {/*social links */}
                        <div className="flex gap-4 items-center">
                            <a href="#"><FaFacebook className="inline-block hover:scale-105 duration-200 text-3xl mt-2 " /> </a>
                            <a href="#"><FaTwitter className="inline-block hover:scale-105 duration-200 text-3xl mt-2 " /> </a>
                            <a href="#"><FaInstagram className="inline-block hover:scale-105 duration-200 text-3xl mt-2 " /> </a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
