const TechStack = ({children}) => {
  return (
    <>  
      {children}
    </>
  )
}

export const TechStackMovieApp = () => {
  const imageSize = 'w-10 md:w-12 lg:w-18';
  return (
    <>
      <img className={`${imageSize}`} src="./react-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./tailwind-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./vite.svg" alt="" />
      <img className={`${imageSize}`} src="./zustand.svg" alt="" />
      <img className={`${imageSize}`} src="./react-router.svg" alt="" />
      <img className={`${imageSize}`} src="./axios.svg" alt="" />
    </>
  )
}

export const TechStackCoffeShopCaffeIn = () => {
  const imageSize = 'w-10 md:w-12 lg:w-18';
  return (
    <>
      <img className={`${imageSize}`} src="./html-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./css-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./js-logo.png" alt="" />
    </>
  )
}

export const TechStackCalculatorApp = () => {
  const imageSize = 'w-10 md:w-12 lg:w-18';
  return (
    <>
      <img className={`${imageSize}`} src="./html-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./css-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./js-logo.png" alt="" />
    </>
  )
}

export const TechStackToDoListApp = () => {
  const imageSize = 'w-10 md:w-12 lg:w-18';
  return (
    <>
      <img className={`${imageSize}`} src="./html-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./css-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./js-logo.png" alt="" />
    </>
  )
}

export const TechStackMansapadparLib = () => {
  const imageSize = 'w-10 md:w-12 lg:w-18';
  return (
    <>
      <img className={`${imageSize}`} src="./php-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./css-logo.svg" alt="" />
      <img className={`${imageSize}`} src="./js-logo.png" alt="" />
      <img className={`${imageSize}`} src="./codeigniter-logo.svg" alt="" />
    </>
  )
}

export default TechStack