const EducationSection = () => {
  return (
    <section id="education" className="max-sm:text-sm 2xl:text-xl">
      <div className="px-3 lg:px-32 2xl:px-44 py-8 text-white font-alanSans">
        <h2 className="text-white text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-medium w-fit border-b-2 border-b-red-400 py-2">Education</h2>

        <div className="mt-6 flex flex-col gap-8">

          <div className="flex relative gap-4">
            <div className="flex flex-col items-center gap-2">
              <img className="w-14" src="./logo/smansaka.png" alt="Logo Smansaka" />
              <div className="border border-slate-50/80 h-50"></div>
            </div>
            <p className="absolute top-4 left-18">SMAN 1 Karimun</p>

            <div className="absolute top-16 left-24">
              <ul className="list-disc flex flex-col gap-2">
                <li>Completely learning about science stuffs</li>
                <li>Learning about math and logics</li>
                <li>Graduated with an average 82,50</li>
              </ul>
            </div>
          </div>

          <div className="flex relative gap-4">
            <div className="flex flex-col items-center gap-2">
              <img className="w-14" src="./logo/uinsmdd.png" alt="Logo Smansaka" />
              <div className="border border-slate-50/80 h-50"></div>
            </div>
            <p className="absolute top-4 left-18">UIN Sjech M.Djamil Djambek Bukittinggi</p>

            <div className="absolute top-16 left-24">
              <ul className="list-disc flex flex-col gap-2">
                <li>Develop a thesis project was called Mansapadpar Library</li>
                <li>Student of Education Informatika and Computer</li>
                <li>Informatika Lecturer at MAN 1 Padang Pariaman</li>
                <li>Become a web developer as a freelancer</li>
                <li>Bachelor degree of Education with IPK 3,64</li>
              </ul>
            </div>
          </div>




        </div>
      </div>
    </section>
  )
}

export default EducationSection