import bgImg from "../assets/banner2.png";

const Banner = () => {
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
    <div style={bgImage} className="  py-32 ">
        <h1 
         data-aos="fade-up"
        className="text-6xl font-bold italic text-center text-gray-200">Te estamos esperando!</h1>
    </div>
  )
}

export default Banner