import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import FrontendSection from "./section/FrontendSection"
import HeroSection from "./section/HeroSection"
import LatestProjectSection from "./section/LatestProjectSection"
import ServicesSection from "./section/ServicesSection"

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LatestProjectSection />
      <FrontendSection />
      <Footer />
    </>
  )
}

export default App
