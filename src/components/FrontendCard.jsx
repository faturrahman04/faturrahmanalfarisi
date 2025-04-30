function FrontendCard({
  image, linkProject, repository
}){
  return (
  <div className="border p-4 rounded-sm bg-slate-900">
    <img className="rounded object-cover" src={image} alt="" />

    <div className="py-4 mt-2 flex flex-wrap gap-4">
      <a target="_blank" className="border px-4 2xl:px-6 py-2 font-poppins text-sm 2xl:text-xl hover:bg-slate-100 hover:text-black duration-300 rounded-sm" href={linkProject}>View the website</a>
      <a target="_blank" className="border px-4 py-2 font-poppins text-sm 2xl:text-xl hover:bg-slate-100 hover:text-black duration-300 rounded-sm" href={repository}>GitHub Repository</a>
    </div>
  </div>
)}

export default FrontendCard;