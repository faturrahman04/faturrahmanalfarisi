import * as Icon from 'react-feather'

const Footer = () => {
  return (
    <footer className="py-2 bg-neutral-700/20 text-white font-alanSans">
      <div className="px-3 lg:px-32 2xl:px-44 py-8">

        <div className="mb-10 flex max-sm:justify-center">
          <h1 className="font-alanSans text-2xl font-medium tracking-wide">Faturrahman</h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-20 sm:w-fit">

          <div>
            <p className="text-white/40 max-sm:text-center mb-2">Portfolio</p>
            <ul className="flex sm:flex-col max-sm:justify-center gap-4 tracking-wide">
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#services">Projects</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-white/40 max-sm:text-center mb-2">Get in touch</p>
            <ul className="flex max-sm:justify-center gap-4 tracking-wide">
              <li>
                <a href="https://www.facebook.com/faturrahman.alfarisi.37/">
                  <Icon.Facebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/faturrahmanalf/">
                  <Icon.Linkedin />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/faturrahman.alf/">
                  <Icon.Instagram />
                </a>
              </li>
            </ul>
          </div>
        
        </div>

      </div>

      <div className='flex justify-center items-center py-3'>
        <p className='text-white/40 text-sm'>Copyright © 2025 Faturrahman Al Farisi</p>
      </div>
    </footer>
  )
}

export default Footer;