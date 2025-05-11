const CarouselTools = ({
  children : slides
}) => {
  return (
    <div className="mt-4 px-2 py-4 flex overflow-auto gap-5 sm:gap-4 lg:gap-8 sm:flex-wrap sm:justify-center xl:w-[85%] xl:mx-auto">
      {slides}
    </div>
  )
}

export const CarouselCard = ({
  toolsLogo,
  toolsName
}) => {
  return (
    <div className="bg-gray-900 border-white border w-40 2xl:w-50 px-6 sm:px-5 pb-4 pt-8 rounded-4xl grid place-items-center shadow-lg hover:scale-105 hover:shadow-lg hover:shadow-lime-300 duration-150 cursor-pointer">
      <div className="bg-white p-6 sm:p-5 2xl:p-7 w-24 sm:w-20 lg:w-24 2xl:w-36 h-24 lg:h-24 sm:h-20 2xl:h-36 rounded-[50%] mb-8 sm:mb-10 2xl:mb-16">
        <img className="w-16 2xl:w-28 object-cover" src={`./${toolsLogo}`} alt="" />
      </div>
      <h2 className="text-center text-white font-medium text-lg 2xl:text-2xl font-poppins">{toolsName}</h2>
    </div>
  )
}

export default CarouselTools