import ToolsCard from "../components/ToolsCard";


const SkillsSection = () => {

  
  return (
    <section id="skills" className="">
      <div className="px-3 lg:px-32 2xl:px-44 py-8 font-alanSans">
        <h1 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl text-white font-medium mb-12">My <span className="border-b-2 border-b-red-400 italic text-red-400">Skills</span> and Favorite Tools</h1>

        <div data-aos='fade-up' className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-6 gap-4">

          <ToolsCard toolImage={`./html-logo.svg`}>HTML</ToolsCard>
          <ToolsCard toolImage={`./css-logo.svg`}>CSS</ToolsCard>
          <ToolsCard toolImage={`./js-logo.svg`}>Javascript</ToolsCard>
          <ToolsCard toolImage={`./php-logo.svg`}>PHP</ToolsCard>
          <ToolsCard toolImage={`./react-logo.svg`}>React</ToolsCard>
          <ToolsCard toolImage={`./laravel-logo.svg`}>Laravel</ToolsCard>
          <ToolsCard toolImage={`./nodejs-logo.svg`}>NodeJS</ToolsCard>
          <ToolsCard toolImage={`./tailwind-logo.svg`}>TailwindCSS</ToolsCard>
          <ToolsCard toolImage={`./codeigniter-logo.svg`}>Codeigniter</ToolsCard>
          <ToolsCard toolImage={`./vite.svg`}>Vite</ToolsCard>
          <ToolsCard toolImage={`./mysql-logo.svg`}>MySQL</ToolsCard>
          <ToolsCard toolImage={`./express-logo.svg`}>ExpressJS</ToolsCard>
          <ToolsCard toolImage={`./zustand.svg`}>Zustand</ToolsCard>

        </div>
        
      </div>
    </section>
  )
}

export default SkillsSection;