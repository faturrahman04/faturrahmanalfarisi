const BackgroundBlur = () => {
  return (
    <div className="fixed -z-20 h-full w-full">
      <div className="w-[38rem] max-sm:w-[10rem] max-sm:absolute max-sm:top-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M37.7,-45C47.8,-36.5,54.1,-23.6,56.8,-9.8C59.5,4,58.6,18.7,53.5,34.1C48.4,49.5,39.1,65.7,25.8,70.3C12.5,74.9,-4.9,68,-19,59.6C-33.1,51.3,-44,41.5,-56.6,28.5C-69.1,15.4,-83.3,-0.9,-80.1,-13.3C-76.9,-25.7,-56.4,-34.2,-40.2,-41.7C-23.9,-49.2,-12,-55.6,0.9,-56.7C13.8,-57.8,27.6,-53.6,37.7,-45Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* <div className="w-[38rem] absolute right-4 bottom-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M5.1,-10.7C5.1,6,2.5,12,-7.2,12C-16.9,12,-33.8,6,-33.8,-10.7C-33.8,-27.4,-16.9,-54.7,-7.2,-54.7C2.5,-54.7,5.1,-27.4,5.1,-10.7Z" transform="translate(100 100)" />
        </svg>
      </div> */}

      <div className="w-[40rem] max-sm:w-[40rem] absolute right-1 bottom-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF0066" d="M26.4,-33.3C26.9,-25.9,15,-12.9,19.4,4.4C23.7,21.7,44.4,43.4,43.9,52.9C43.4,62.4,21.7,59.8,7.6,52.2C-6.6,44.7,-13.1,32.2,-14.5,22.7C-15.9,13.1,-12.1,6.6,-9.5,2.7C-6.8,-1.2,-5.2,-2.4,-3.8,-9.8C-2.4,-17.2,-1.2,-30.8,5.9,-36.6C12.9,-42.5,25.9,-40.6,26.4,-33.3Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}

export default BackgroundBlur