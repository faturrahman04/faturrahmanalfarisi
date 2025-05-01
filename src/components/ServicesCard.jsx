import { Link } from "react-router"

export const ServicesCard = ({servicesTitle, servicesImage, navigation, servicesDesc, totalProject}) => {
  return (
    <div className="bg-slate-900 text-white rounded-md p-4 border border-gray-300/75 cursor-default">
      <div className="bg-slate-200 w-fit rounded-[50%] p-3">
        <img className="w-10 h-10" src={`./${servicesImage}`} alt="" />
      </div>

      <h2 className="font-medium text-lg my-2 text-orange-400 text-shadow-md text-shadow-orange-700">{servicesTitle}</h2>
      <p className="font-light">{servicesDesc}</p>
            
      <p className="mt-2 font-medium text-white/75">{totalProject}</p>

      <Link className="mt-2 inline-block text-orange-400 text-shadow-md text-shadow-orange-700 font-medium border-b-2 border-b-orange-400 hover:scale-90 duration-150 active:scale-90" to={navigation}>Click here to see my projects</Link>
    </div>
  )
}