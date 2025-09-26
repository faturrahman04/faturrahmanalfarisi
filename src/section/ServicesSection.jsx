import ProjectCard from "../components/ProjectCard";
import { TechStackCoffeShopCaffeIn, TechStackMansapadparLib, TechStackMovieApp, TechStackWeatherApp, TechStackWrithink } from "../components/TechStack";

const ServicesSection = () => {
  return (
    <section id="services" className="max-sm:text-sm 2xl:text-xl">
      <div className="px-3 lg:px-32 2xl:px-44 py-8 font-alanSans">
        <h2 className="text-white my-5 2xl:my-10 text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-medium w-fit border-b-2 border-b-red-400 py-2">Projects</h2>

        <div className="my-4 grid grid-cols-1 gap-6 text-white relative">

        {/* Writhink */}
        <ProjectCard
          projectTitle={`Writhink`} 
          projectType={`Frontend/Backend (Fullstack)`}
          projectDate={`16 September 2025`}
          projectDescription={
            (<>
              <p>Projek fullstack yang dibuat dengan ReactJS untuk membuat user interface dan ExpressJS untuk membuat API, projek ini bertemakan todo-list yang bertujuan untuk meningkatkan produktifitas, project ini dirancang terinsipirasi oleh sebuah kata yang berbunyi "setiap pikiran harus dituangkan dengan sebuah kata yang kemudan akan menjadi sebuah aksi dan sebuah aksi akan menciptakan sebuah kebiasaan, kebiasaan akan menciptakan karakter dan karakter akan menentukan takdir-mu</p>
            </>)
          }
          projectImage={`./backend/writhink.png`}
          projectStack={<TechStackWrithink />}
          projectLink={`https://https://writhink.vercel.app/`}
          projectRepository={`https://github.com/faturrahman04/writhink-fullstack`}
        />
        {/* Writhink */}

        {/* F3 Movies */}
        <ProjectCard  
          projectTitle={`F3 Movies (Movie App)`}
          projectType={`Frontend`}
          projectDate={`16 April 2025`}
          projectDescription={(<><p>This project is called F3 Movies, this project was created using many tools such as ReactJS as a frontend javascript library, TailwindCSS as a css framework for build UI, Zustand as a state management, and React Router for routing. Beside that, this project using omdbAPI.</p>
          <p>This project is purposes to learn how to integrated frontend and backend using API (omdbAPI) using axios, learn how to state management using Zustand and learn about asynchronous javascript (Async Await)</p></>)}
          projectImage={`./frontend/gambar.png`}
          projectStack={<TechStackMovieApp />}
          projectRepository={`https://github.com/faturrahman04/movie-react-app`}
          projectLink={`https://f3movies.vercel.app/`}
        />
        {/* F3 Movies */}

        {/* Mansapadpar Library */}
        <ProjectCard 
          projectTitle={`Mansapadpar Library`}
          projectType={`Fullstack`}
          projectDate={`1 Agustus 2025`}
          projectDescription={
            (<>
              <p>This is my thesis project called "Mansapadpar Library". Mansapadpar stands for MAN 1 Padang Pariaman, which is one of the high schools in Sumatera Barat. Mansapadpar Library provides several features and supports multiple user roles, such as admin and student. The admin or librarian can manage all data related to the library, while students can borrow books through this system. This project implements content-based filtering for its recommendation feature, since my thesis discusses this algorithm as the basis for the recommendation system.</p>
              <p>Since the development phase, I have collected several important data points to implement the content-based filtering algorithm, such as book titles, authors, categories, publishers, and others. This project was developed using PHP and CodeIgniter 4. If you want to view the project please click the button. Enjoy 😉</p>
            </>)}
          projectImage={`./backend/mansapadparlib.png`}
          projectStack={<TechStackMansapadparLib />}
          projectLink={`https://mansapadparlib.com`}
          projectRepository={`https://github.com/faturrahman04/content-based-filtering-skripsi`}
        />
        {/* Mansapadpar Library */}

        {/* Coffein */}
        <ProjectCard 
          projectTitle={`Coffeein`}
          projectType={`Frontend`}
          projectDate={`7 Februari 2025`}
          projectDescription={
            (<>
              <p>Personal frontend simple project using HTML, CSS and JavaScript only with Coffe Shop theme, I designed and developed it to showcase a cozy, inviting café atmosphere. Click the link to explore the design — hope you enjoy it! 😄</p>
            </>)
          }
          projectImage={`./frontend/coffeShop.png`}
          projectStack={<TechStackCoffeShopCaffeIn />}
          projectLink={`https://faturrahman04.github.io/coffe-shop-CaffeIn`}
          projectRepository={`https://github.com/faturrahman04/coffe-shop-CaffeIn`}
        />
        {/* Coffein */}

        {/* Weather App */}
        <ProjectCard 
          projectTitle={`Weather App`}
          projectType={`Frontend`}
          projectDate={`24 Februari 2025`}
          projectDescription={
            (<>
              <p>A simple weather App project, this project was built with HTML, CSS and JavaScript vanilla only. Using fetch function to fetching some endpoint api which is openweatherAPI, openWeather API is a opensource that you can use for free to integrated into your project</p>
            </>)
          }
          projectImage={`./frontend/weatherApp.png`}
          projectStack={<TechStackWeatherApp />}
          projectLink={`https://weather-app-f04.vercel.app/`}
          projectRepository={`https://github.com/faturrahman04/weather-app`}
        />
        {/* Weather App */}


        </div>
      </div>
    </section>
  )
}

export default ServicesSection;