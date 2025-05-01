import { Link } from "react-router"

const SocialLinkPage = () => {
  return (
    <div className="bg-gray-900 md:min-h-screen text-white px-10 lg:px-64 2xl:px-80 py-6 xl:py-10">
      <Link className="inline-block mb-5 text-orange-400 text-shadow-md text-shadow-orange-700 underline" to="/">Home</Link>
      <h1 className="font-pacifico text-lg md:text-xl xl:text-2xl 2xl:text-4xl">Social Link</h1>

      <div className="flex flex-col mt-8 gap-4 font-playwrite">
        <LinkButton platform="Curriculum Vitae" />
        <LinkButton platform="Instagram" href="https://www.instagram.com/faturrahman.alf/" />
        <LinkButton platform="Facebook" href="https://www.facebook.com/faturrahman.alfarisi.37" />
        <LinkButton platform="GitHub" href="https://github.com/faturrahman04" />
        <LinkButton platform="X" href="https://x.com/Faturrahman_lf4" />
        <LinkButton platform="LinkedIn" href="https://www.linkedin.com/in/faturrahman-al-farisi" />
      </div>

    </div>
  )
}

function LinkButton({href, platform}) {
  return <a target="_blank" className="relative inline-block rounded-md font-semibold tracking-wide border-2 border-orange-400 py-3 text-center text-orange-400 cursor-pointer text-sm lg:text-base hover:bg-orange-400 hover:text-black duration-100" href={href}>{platform}</a>
}

export default SocialLinkPage