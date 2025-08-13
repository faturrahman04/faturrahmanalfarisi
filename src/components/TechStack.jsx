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

export default TechStack