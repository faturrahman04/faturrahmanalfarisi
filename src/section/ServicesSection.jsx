import { ServicesCard } from "../components/ServicesCard";

const ServicesSection = () => {
  return (
    <section id="services">
      <div className="px-3 lg:px-20 2xl:px-24 pt-6 pb-4 font-poppins">
        <h2 className="text-xl italic border-b-orange-400 border-b-2 w-fit">Services</h2>

        <div className="my-4 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ServicesCard servicesTitle="Frontend Developer" servicesImage="laptop.svg"/>
          <ServicesCard servicesTitle="Website Design" />
          <ServicesCard servicesTitle="Mobile App Design" />
        </div>

      </div>
    </section>
  )
}

export default ServicesSection;