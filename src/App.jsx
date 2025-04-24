import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SkillsSection from "./section/SkillsSection"
import HeroSection from "./section/HeroSection"
import LatestProjectSection from "./section/LatestProjectSection"
import ServicesSection from "./section/ServicesSection"

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LatestProjectSection />
      <SkillsSection />
      <Footer />
    </div>
  )
}

export default App
