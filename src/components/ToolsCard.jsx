import clsx from "clsx"

const ToolsCard = ({children, toolImage}) => {
  return (
    <div className={clsx(
      "flex items-center z-10 relative overflow-hidden text-white gap-4 border rounded-sm p-3 shadow-xs after:content-[''] after:-z-10 after:absolute after:left-0 after:right-0 after:bg-gradient-to-b after:from-neutral-900 after:from-40% after:to-100% after:bottom-0 after:h-3",
      {
        "border-orange-600 after:to-orange-600/60": children === 'HTML' || children === 'Codeigniter',
        "border-teal-400 after:to-teal-400/60": children === 'CSS' || children === 'React' || children === 'TailwindCSS',
        "border-red-600 after:to-red-600/60": children === `Laravel`,
        "border-amber-400 after:to-amber-400/60": children === `Javascript`,
        "border-indigo-500 after:to-indigo-500/60": children === `PHP` || children === `Vite`,
        "border-green-500 after:to-green-500/60": children === `NodeJS`,
        "border-blue-500 after:to-blue-500/60": children === `MySQL`,
        "border-neutral-100 after:to-neutral-100/60": children === `ExpressJS`,
        "border-amber-900 after:to-amber-900/60": children === 'Zustand'    
      }
    )}>
      <img className="w-7" src={toolImage} alt="" />
      <p>{ children }</p>
    </div>
  )
}

export default ToolsCard