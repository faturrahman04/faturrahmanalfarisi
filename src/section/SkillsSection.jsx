import CarouselTools, { CarouselCard } from "../components/CarouselTools";

const SkillsSection = () => {

  
  return (
    <section id="skiils" className="bg-gray-900">
      <div className="px-3 lg:px-20 2xl:px-24 pt-6 pb-12">
        <h1 className="text-xl text-white sm:text-2xl font-poppins font-medium mb-12">My <span className="border-b-2 border-b-orange-400 italic text-orange-400">Skills</span> and Favorite Tools</h1>

        <CarouselTools>
          <CarouselCard toolsLogo="js-logo.png" toolsName="JavaScript" />
          <CarouselCard toolsLogo="tailwind-logo.svg" toolsName="Tailwind" />
          <CarouselCard toolsLogo="react-logo.svg" toolsName="React" />
          <CarouselCard toolsLogo="figma-logo.svg" toolsName="Figma" />
          <CarouselCard toolsLogo="php-logo.svg" toolsName="PHP" />
          <CarouselCard toolsLogo="bootstrap-logo.svg" toolsName="Bootstrap" />
          <CarouselCard toolsLogo="codeigniter-logo.svg" toolsName="CodeIgniter" />
          
        </CarouselTools>   
        

      </div>
    </section>
  )
}

export default SkillsSection;