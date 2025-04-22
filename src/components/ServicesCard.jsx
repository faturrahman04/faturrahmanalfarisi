export const ServicesCard = () => {
  return (
    <div className="bg-gray-200 rounded-md p-4 border border-gray-300/75">
      <div className="bg-white w-fit rounded-[50%] p-3">
        <img className="w-10 h-10" src="./laptop.svg" alt="" />
      </div>

      <h2 className="font-semibold text-lg my-2">Frontend Website</h2>
            <p className="font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum non rerum eos laborum qui molestiae adipisci in excepturi sint molestias!</p>
            
      <p className="mt-2 font-medium text-slate-800/75">10+ Projects</p>

      <a className="mt-2 inline-block text-emerald-800 font-medium" href="">Click to see my projects</a>
    </div>
  )
}