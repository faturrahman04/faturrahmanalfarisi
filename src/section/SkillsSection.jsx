import CarouselTools from "../components/CarouselTools";

const SkillsSection = () => {

  const slidesTools = [
    [
      <CarouselTools />,
      <CarouselTools />
    ], 
    [
      <CarouselTools />,
      <CarouselTools />
    ]
  ]


  return (
    <section id="skiils" className="bg-gray-200">
      <div className="px-3 lg:px-20 2xl:px-24 pt-6 pb-4">
        <h1>My Skills and Favorite Tools</h1>

        <div className="mt-4 px-2 flex">
          {slidesTools.map((s) => (s))}
        </div>

      </div>
    </section>
  )
}

export default SkillsSection;