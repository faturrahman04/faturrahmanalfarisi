const DetailsProjectPage = ({
  projectTitle,
  projectImage, 
  projectDesc, 
  projectDesc2,
  projectDesc3,
  projectTechStack,
  projectGithub,
  projectCreatedAt,
  projectHref,
  projectLink
}) => {
  return (
    <>
    <div className="px-3 md:px-10 lg:px-20 py-6 font-poppins text-slate-200">
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <h1 className="my-4 font-semibold text-blue-500 text-3xl md:text-4xl lg:text-5xl text-shadow-lg text-shadow-blue-500">{projectTitle}</h1>
          <img className="rounded-md" src={projectImage} alt="" />
        </div>

        <div className="mt-4 lg:mt-18">
          <p className="text-light md:text-lg lg:text-xl text-slate-200">Tech Stack Logo :</p>
          <div className="pt-1 grid grid-cols-6 gap-4 w-[65%]">
            {projectTechStack}
          </div>

          <div>
            <p className="text-sm mt-4 md:text-lg lg:text-xl">Link project :</p>
            <div>
              <a className="font-sans text-blue-700 underline md:text-base lg:text-lg" target="_blank" href={projectHref}>{projectLink}</a>
            </div>
          </div>

          <div>
            <p className="text-sm mt-4 md:text-lg lg:text-xl">Project created :</p>
            <div>
              <p className="text-sm md:text-md lg:text-lg text-slate-300">{projectCreatedAt}</p>
            </div>
          </div>

        </div>

        <div className="flex items-center gap-2 mt-6">
          <a className="text-sm md:text-md lg:text-lg border-2 border-slate-200 px-3 py-2 rounded-sm hover:shadow-xs hover:shadow-slate-200" href={projectGithub}>GitHub Repository</a>
          <a className="text-sm md:text-md lg:text-lg bg-blue-500 px-3 py-2 rounded-sm text-white border-2 border-blue-500 hover:shadow-xs hover:shadow-blue-500" href={projectHref}>View the Project</a>
        </div>

        
      </div>

      <div className="lg:mt-10">
        <p className="pt-4 text-lg xl:text-xl text-slate-200 font-light">
        {projectDesc}
        </p>

        <p className="pt-4 text-lg xl:text-xl text-slate-200 font-light">
          {projectDesc2}
        </p>

        <p className="pt-4 text-lg xl:text-xl text-slate-200 font-light">
          {projectDesc3}
        </p>
      </div>

    <footer>

    </footer>
    </div>
    </>
  )
}

export default DetailsProjectPage;