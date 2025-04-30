const SocialLinkPage = () => {
  return (
    <div className="bg-gray-900 md:min-h-screen text-white px-10 lg:px-44 2xl:px-52 py-6 xl:py-10">
      <h1 className="font-pacifico text-lg md:text-xl xl:text-2xl 2xl:text-4xl">Social Link</h1>

      <div className="flex flex-col mt-8 gap-4 font-playwrite">
        <LinkButton platform="Curriculum Vitae" />
        <LinkButton platform="Instagram" />
        <LinkButton platform="Facebook" />
        <LinkButton platform="GitHub" />
        <LinkButton platform="X" />
        <LinkButton platform="LinkedIn" />
      </div>

    </div>
  )
}

function LinkButton({href, platform}) {
  return <a className="inline-block rounded-md font-semibold tracking-wide bg-orange-400 py-3 text-center text-black" href={href}>{platform}</a>
}

export default SocialLinkPage