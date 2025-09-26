import { useState } from "react";
import * as Icon from 'react-feather';

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  function handleHamburgerClicked() {
    setIsHamburgerClicked(!isHamburgerClicked);
  }

  const listNav = "relative text-white not-lg:hover:bg-red-400 not-lg:hover:after:bg-red-400 hover:bg-red-400 bg-clip-text hover:not-visited:text-transparent after:duration-300 after:absolute after:content-[''] after:h-0.5 after:left-0 after:-bottom-0.5 after:w-full hover:after:bg-red-400 after:scale-0 hover:after:scale-100"

  return (
    <>
    <nav className={`fixed h-24 z-60 w-full flex items-center 2xl:h-24 px-4 lg:px-40 2xl:px-80 font-poppins lg:bg-transparent text-sm`}>
      <div className="not-lg:shadow-none rounded-xl px-5 lg:px-12 flex items-center justify-between w-full h-1/2 bg-neutral-400/20 backdrop-blur-md border border-neutral-300/80">
        <div>
          <h1 className="text-base 2xl:text-lg tracking-wide text-slate-100">Faturrahman</h1>
        </div>
        <ul className="hidden lg:flex justify-between xl:w-[40%] lg:w-[60%] text-white 2xl:text-xl font-alanSans">
          <li className={`${listNav}`}><a href="#education">Education</a></li>
          <li className={`${listNav}`}><a href="#services">Projects</a></li>
          <li className={`${listNav}`}><a href="#skills">Skills</a></li>
          <li className={`${listNav}`}><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={handleHamburgerClicked} className={`p-2 cursor-pointer rounded-md lg:hidden ${isHamburgerClicked ? 'bg-neutral-400/20' : ''}`}>
          <Icon.Menu className="text-slate-200" />
        </div>
      </div>

    </nav>

      <div className={`fixed top-20 right-10 z-50 bg-neutral-600/60 pt-8 h-64 duration-300 backdrop-blur-md font-poppins w-[40%] lg:hidden origin-top-right ${isHamburgerClicked ? "scale-100" : "scale-0"}`}>
        <div className="h-full">
          <ul className="flex flex-col items-center justify-between h-[85%] text-slate-900">
            <li className={`${listNav}`}><a href="#education">Education</a></li>
            <li className={`${listNav}`}><a href="#services">Projects</a></li>
            <li className={`${listNav}`}><a href="#skills">Skills</a></li>
            <li className={`${listNav}`}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;