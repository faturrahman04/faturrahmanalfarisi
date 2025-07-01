import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SkillsSection from "./section/SkillsSection"
import HeroSection from "./section/HeroSection"
import ServicesSection from "./section/ServicesSection"
import ContactSection from "./section/ContactSection"
import AboutSection from "./section/AboutSection"

function App() {
  return (
    <div 
      className="overflow-hidden"
      >
      <Navbar />
      <HeroSection />
      {/* <AboutSection /> */}
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
