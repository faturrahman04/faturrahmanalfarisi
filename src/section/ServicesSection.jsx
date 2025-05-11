import { ServicesCard } from "../components/ServicesCard";

const ServicesSection = () => {
  return (
    <section id="services" className="bg-gray-900">
      <div className="px-3 lg:px-20 2xl:px-24 pt-6 pb-4 font-poppins">
        <h2 className="text-white text-xl sm:text-2xl italic font-medium border-b-orange-400 border-b-2 w-fit">Services</h2>
        <h5 className="text-white/75 mt-4">This is my projects that i have made, you can interact the card and click the <span className="text-orange-400">"click here to see my projects"</span> button to see more projects</h5>

        <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServicesCard 
          servicesTitle="Frontend Projects" 
          servicesDesc="I have 1+ year exprience in frontend web development, i had finished many projects which is personal project, frontend web development is one of my favorite role in website development"
          servicesImage="laptop.svg" 
          totalProject="6 Projects"
          navigation="/frontendwebsite" 
          />

          <ServicesCard 
          servicesTitle="Backend Projects" 
          servicesDesc="I'm beginner at this role, but i love to code at backend side or server-side, i wanna know how to integrated frontend-backend appliaction"
          servicesImage="laptop.svg" 
          totalProject="1 Project"
          navigation="/backendprojects" 
          />

          
          {/* <ServicesCard servicesTitle="Mobile App Design" />
          <ServicesCard servicesTitle="Website Projects" />  */}
        </div>

      </div>
    </section>
  )
}

export default ServicesSection;