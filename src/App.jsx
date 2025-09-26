import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SkillsSection from "./section/SkillsSection"
import HeroSection from "./section/HeroSection"
import ServicesSection from "./section/ServicesSection"
import ContactSection from "./section/ContactSection"
import EducationSection from "./section/EducationSection"
import ReturnToTop from "./components/ReturnToTop"
import BackgroundBlur from "./components/BackgroundBlur"

function App() {
  return (
    <>
    <BackgroundBlur/>
    <div 
      className="overflow-hidden"
      >
      <Navbar />

      <div className="bg-neutral-900/80 backdrop-blur-3xl">
      <ReturnToTop />

      <HeroSection />
      <EducationSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      </div>
    </div>
    </>
  )
}

export default App
