import * as Icon from 'react-feather'

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 overflow-hidden text-white max-sm:text-sm">
      <div
         className="px-3 lg:px-20 2xl:px-24 pt-6 pb-12 flex flex-col gap-6 lg:flex-row lg:gap-3 justify-center">
        
        <div className="flex flex-col items-center mt-8 text-center lg:text-left gap-1 lg:gap-3 lg:w-[70%] font-alanSans">
          <h1
            aria-label='greetings'
            className="border-2 border-red-400 w-32 2xl:w-36 text-center py-1 2xl:py-3 sm:text-lg 2xl:text-xl shadow-md shadow-red-600">Hello There!
          </h1>

          
          <h1 
            aria-label='full name'
            className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold mt-2 font-alanSans text-red-400">I'm Faturrahman Alf
          </h1>

          <h1
            aria-label='role'
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold 2xl:text-7xl text-center font-alanSans text-red-400 max-sm:leading-10 leading-16">Frontend Developer & Web Developer.
          </h1>

          <p 
            aria-label='description'
            className="my-4 text-white 2xl:text-xl">I'm a student majoring in Informatics who love to development a website especially Frontend, because i like to design website or application and i love what i do.
          </p>

          <div aria-label='skills' className="flex relative h-8 w-90 overflow-hidden">
            <div className="flex h-8 gap-10 animate-slider-tools px-14">
              <img src="./html-logo.svg" alt="" />
              <img src="./tailwind-logo.svg" alt="" />
              <img src="./nodejs-logo.svg" alt="" />
              <img src="./laravel-logo.svg" alt="" />
              <img src="./js-logo.svg" alt="" />
              <img src="./react-logo.svg" alt="" />
              <img src="./vite.svg" alt="" />
              <img src="./php-logo.svg" alt="" />
              <img src="./codeigniter-logo.svg" alt="" />
              <img src="./mysql-logo.svg" alt="" />
              <img src="./express-logo.svg" alt="" />
              <img src="./css-logo.svg" alt="" />
              <img src="./zustand.svg" alt="" />
            </div>
          </div>

          <a aria-label='github' role='button' className="flex items-center gap-4 border-neutral-100 border px-4 py-2 lg:px-5 2xl:px-6 lg:py-2 2xl:py-3 mt-4 rounded-sm 2xl:text-lg hover:bg-red-400 duration-75" href="https://github.com/faturrahman04" target='_blank'>
            <Icon.GitHub />
            <p>GitHub</p>
          </a>

        </div>

      </div>
      
    </section>
  )
}

export default HeroSection;