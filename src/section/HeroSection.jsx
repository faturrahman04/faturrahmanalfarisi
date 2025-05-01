import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 overflow-hidden bg-slate-900 text-white">
      <div
         className="px-3 lg:px-20 2xl:px-24 pt-6 flex flex-col gap-6 lg:flex-row lg:gap-3 ">
        
        <div className="grid place-items-center lg:place-items-start mt-8 font-poppins text-center lg:text-left gap-1 lg:gap-3 lg:w-[70%]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{duration: 2}}
            className="border-2 border-orange-400 w-32 2xl:w-36 text-center py-1 2xl:py-3 sm:text-lg 2xl:text-xl shadow-md shadow-orange-600">Hello There!
          </motion.h1>

          
          <motion.h1 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, delay: 0.4}}
            className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl font-semibold mt-2">I'm <span className="text-orange-400 font-normal italic border-b-2 border-orange-400">Faturrahman Alf,</span>
          </motion.h1>

          <motion.h1 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, delay: 0.6}}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold 2xl:text-7xl ">Frontend Developer
          </motion.h1>

          <motion.h1 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, delay: 0.8}}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold 2xl:text-7xl ">& Web Designer.
          </motion.h1>

          <motion.p 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2, delay: 1}}
            className="my-4 text-slate-50/75 2xl:text-xl">I'm a student majoring in Informatics who love to development a website especially Frontend, because i like to design website or application and i love what i do.
          </motion.p>

          <Link
            to="/link" className="animate-bounce bg-orange-400 px-0.5 2xl:px-1 py-0.5 2xl:py-1 rounded-4xl flex gap-2 2xl:gap-3">
            <div className="bg-white text-emerald-800 py-2 2xl:py-2.5 px-5 2xl:px-4.5 rounded-4xl h-full 2xl:text-xl">Social Link</div>
            <div className="bg-white w-10 2xl:w-12 grid place-items-center rounded-[50%]">
              <img className="h-6 2xl:h-7 w-6 2xl:w-7 ml-1" src="./play.svg" alt="" />
            </div>
          </Link>
        </div>

        {/* <div className="mx-auto relative grid place-items-center w-[100%] sm:w-[70%] md:w-[60%]">
          <img className="z-20 h-[21rem] lg:h-[24rem] xl:h-[25rem] 2xl:h-[30rem] lg:mt-10" src="./faturrahman.png" alt="" />
          <img className="absolute h-full w-full z-10 top-8" src="./bgfoto.svg" alt="" />
          <h3 className="z-20 absolute right-0 xl:right-4 2xl:right-10 bottom-12 2xl:bottom-20 rounded-3xl bg-slate-50 text-slate-900 2xl:text-xl px-5 2xl:px-6 py-1.5 2xl:py-2.5">Frontend Developer</h3>
        </div> */}

      </div>

      <div className="relative mt-18 ">

        <div className="z-20 h-12 md:h-14 2xl:h-18 bg-orange-400 flex flex-nowrap items-center gap-10 md:gap-20 overflow-hidden font-medium text-orange-950 md:text-xl 2xl:text-2xl">
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">App Design</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">Web Design</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">Frontend Developer</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">TailwindCSS</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">ReactJS</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">App Design</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
          <h1 className="text-nowrap">Web Design</h1>
          <img className="w-4 md:w-5 2xl:w-6" src="./sparkles.svg" alt="" />
        </div>

        {/* <div className="absolute z-10 bottom-0 -left-2 -rotate-2 h-12 md:h-14 2xl:h-18 w-[110%] bg-emerald-800">
        </div> */}

      </div>
      
    </section>
  )
}

export default HeroSection;