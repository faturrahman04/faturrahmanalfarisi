import * as Icon from 'react-feather'
import TechStack from './TechStack';

const ProjectCard = ({
  projectTitle,
  projectType,
  projectDate,
  projectDescription,
  projectImage,
  projectStack,
  projectRepository,
  projectLink
}) => {
  return (
    <div className="border w-full p-5 lg:p-8 2xl:p-10 rounded-md border-neutal-400/20 relative">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold">{projectTitle}</h3>
          <h4 className="text-white/80 xl:text-base 2xl:text-lg">{projectType}</h4>
        </div>
        <p className="text-sm xl:text-base 2xl:text-lg">{projectDate}</p>
      </div>

      <div className="mt-4 flex flex-col-reverse md:flex-row md:items-center gap-4">
        <div>
          {projectDescription}
        </div>

        <img className="w-[26rem] 2xl:w-[36rem] h-fit max-md:w-full rounded-sm" src={projectImage} alt="" />

      </div>

      <div className="mt-4">
        <p className='2xl:text-xl'>Tech stack:</p>
        <div className="flex gap-5 mt-0.5 w-full">
          <TechStack>{projectStack}</TechStack>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <a className="flex gap-3 bg-neutral-50 text-neutral-900 px-5 py-1.5 rounded-xs" href={projectRepository}>
          <Icon.Codepen />
          <p>Code</p>
        </a>
        <a className="flex gap-3 px-5 py-1.5 border border-neutral-50 rounded-xs" href={projectLink}>
          <Icon.Eye />
          <p>Live</p>
        </a>
      </div>

    </div>
  )
}

export default ProjectCard;