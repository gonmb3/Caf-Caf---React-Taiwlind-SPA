import React from "react";
import Slider from "react-slick";
import bgImg from "../assets/banner.jpg";

const Testimonials = () => {
    const bgImage = {
        backgroundImage: `url(${bgImg})`,
        backgroundColor: "#270c03",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      };

    const testimonialData = [
        {
            name:"Juan ",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis tempora eligendi quam doloribus!",
            img:"https://picsum.photos/101/101"
        },
        {
            name:"Roberto ",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis tempora eligendi quam doloribus!",
            img:"https://picsum.photos/102/102"
        },
        {
            name:"Silvana ",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis tempora eligendi quam doloribus!",
            img:"https://picsum.photos/104/104"
        },
        {
            name:"Felipe",
            text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda blanditiis tempora eligendi quam doloribus!",
            img:"https://picsum.photos/101/101"
        },
    ]

    const settings = {
        dots:true,
        arrows:false,
        infinite:true,
        speed: 500,
        slidesToScorll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnFocus:true,
        pauseOnHover:true,
        responsive: [
            {
                breakpoint:10000,
                settings:{
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:true
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    initialSlide:2
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
   
                },
            },
            
        ]
    }

  return (
    <section  className="py-20 "  style={bgImage}>
      <div className="container">
        {/* title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl  font-bold font-cursive text-gray-800 italic ">
           Testimonios
          </h1>
        </div>

        {/* testimonial cards */}
        <div className="z-30">
        <Slider {...settings}>
        {
            testimonialData.map((data,i) => (
                <div     data-aos-delay="200" data-aos="fade-up" key={i} className="my-6">  
                    <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-gray-100 relative">
                        {/*img */}
                        <div className="mb-4">
                            <img src={data.img} alt="img" className="rounded-full w-20 h-20 "  />
                        </div>
                        {/* content */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="space-y-3">
                                <p className="text-xs text-gray-500">{data.text} </p>
                                <h3 className="text-xl font-bold text-black/70 italic">{data.name} </h3>
                            </div>
                        </div>
                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 ">,,</p>
                    </div>
                </div>
            ))
        }
            </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
