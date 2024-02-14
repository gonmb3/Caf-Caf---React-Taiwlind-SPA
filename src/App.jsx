import { useEffect } from "react"
import Header from "./components/Header"
import AOS from "aos"
import Home from "./components/Home"
import Services from "./components/Services"
import Premium from "./components/Premium"
import Banner from "./components/Banner"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {

  useEffect(() => {
    AOS.init({
        offset:100,
        duration:700,
        easing:"ease-in",
        delay:100
    })
}, [])


  return (

    <div className="overflow-x-hidden ">
    <Header />
    <Home />
    <Services />
    <Premium />
    <Banner />
    <Testimonials />
    <Footer />
    </div>
  )
}

export default App