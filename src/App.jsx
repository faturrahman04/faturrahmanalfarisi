import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SkillsSection from "./section/SkillsSection"
import HeroSection from "./section/HeroSection"
import ServicesSection from "./section/ServicesSection"
import ContactSection from "./section/ContactSection"

function App() {
  return (
    <div 
      className="overflow-hidden"
      >
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
