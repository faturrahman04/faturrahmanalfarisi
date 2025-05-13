import { useState } from "react";

const Navbar = () => {
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);

  function handleHamburgerClicked() {
    setIsHamburgerClicked(!isHamburgerClicked);
  }

  const listNav = "relative text-white not-lg:hover:bg-orange-400 not-lg:hover:after:bg-orange-400 hover:bg-slate-900 bg-clip-text hover:not-visited:text-transparent after:duration-300 after:absolute after:content-[''] after:h-0.5 after:left-0 after:-bottom-0.5 after:w-full hover:after:bg-slate-900 after:scale-0 hover:after:scale-100"

  return (
    <>
    <nav className={`fixed z-60 w-full flex items-center h-20 2xl:h-24 px-4 lg:px-20 2xl:px-24 font-poppins bg-orange-400 lg:bg-transparent`}>
      <div className="not-lg:shadow-none lg:rounded-4xl px-5 lg:px-12 flex items-center justify-between w-full h-2/3 bg-orange-400 shadow-lg shadow-orange-600">
        <div>
          <h1 className="font-pacifico text-xl 2xl:text-2xl tracking-wide text-slate-100">Faturrahman</h1>
        </div>
        <ul className="hidden lg:flex justify-between w-[40%] text-white 2xl:text-xl font-winkyRough">
          <li className={`${listNav}`}><a href="#services">Services</a></li>
          <li className={`${listNav}`}><a href="#about">About</a></li>
          <li className={`${listNav}`}><a href="#skills">Skills</a></li>
          <li className={`${listNav}`}><a href="#contact">Contact</a></li>
        </ul>
        <div onClick={handleHamburgerClicked} className={`p-2 cursor-pointer rounded-md lg:hidden ${isHamburgerClicked ? 'bg-orange-500' : ''}`}>
          <img src="./hamburgermenu.svg" alt="" />
        </div>
      </div>
    </nav>

      <div className={`fixed top-20 z-50 bg-slate-800/90 pt-8 h-64 duration-300 backdrop-blur-xs font-poppins w-full lg:hidden ${isHamburgerClicked ? "translate-y-0" : "-translate-y-96"}`}>
        <div className="h-full">
          <ul className="flex flex-col items-center justify-between h-[85%] text-slate-900">
            <li className={`${listNav}`}><a href="#services">Services</a></li>
            <li className={`${listNav}`}><a href="#about">About</a></li>
            <li className={`${listNav}`}><a href="#skills">Skills</a></li>
            <li className={`${listNav}`}><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar;