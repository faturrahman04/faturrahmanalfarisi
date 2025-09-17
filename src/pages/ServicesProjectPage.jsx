
import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard";


const ServicesProjectPage = (
  {
    TitlePage: title,
    children: projects,
  }
) => {
  return (
    <div className="bg-gray-900 md:min-h-screen text-white px-3 lg:px-20 2xl:px-24 py-6">
      <Link className="inline-block mb-5 text-orange-400 text-shadow-md text-shadow-orange-700 underline" to="/">Home</Link>
      <h1 className="font-pacifico text-lg md:text-xl xl:text-2xl 2xl:text-4xl">{title}</h1>
      <div className="grid mt-6 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects}
      </div>
    </div>
  )
}

// Komponen untuk menambah project frontend website
export function FrontendWebsite() {
  return (
    <>
      <ProjectCard image="./frontend/gambar.png" linkDetail="/f3movies-movie-app" repository="https://github.com/faturrahman04/movie-react-app"
      desc={`Frontend project with movie app theme using OMDB Api, if u want to review the website click "View the website" button`}
      />
      <ProjectCard image="./frontend/coffeShop.png" linkDetail="/coffe-shop-caffeIn" repository="https://github.com/faturrahman04/coffe-shop-CaffeIn" 
      desc={`My personal project which is Coffe shop website using native HTML, CSS and JavaScript and added some features such dark or light theme`}
      />
      <ProjectCard image="./frontend/toDoList.png" linkDetail="/todoListApp" repository="https://github.com/faturrahman04/to-do-list-app"
      desc={`A simple frontend project which is ToDoList App`} />
      <ProjectCard image="./frontend/personalWeb.png" linkDetail="/landing-page-1" repository="https://github.com/faturrahman04/personal-web-v1"
      desc={`First website ever that i've made, it is a simple landing page website using HTML, CSS, Javascript and AOS Library for some animation`} />
      <ProjectCard image="./frontend/weatherApp.png" linkDetail="/weather-app" repository="https://github.com/faturrahman04/weather-app"
      desc={`Weather app using openweather public API, this project is purposes to learn how to using asynchronous javascript and how to fetching data`} />
      <ProjectCard image="./frontend/calculatorApp.png" linkDetail="/calculator-app" repository="https://github.com/faturrahman04/calculator-app"
      desc={`It is a simple calculator App using HTML, CSS and JavaScript`} />
    </>
    
  )
}

export function BackendProject() {
  return (
    <>
      <ProjectCard image="./backend/mansapadparlib.png" linkDetail="/mansapadparlib" desc={`My thesis project called "Mansapadpar Library" with recommendation features using content based filtering algorithm.`}/>

      <ProjectCard image="./backend/writhink.png" linkDetail="/writhink" desc={`Projek fullstack dengan tema todo-list yang dibuat dengan ReactJS disisi frontend atau client dan ExpressJS disisi server`} />

      
    </>
    
  )
}

export default ServicesProjectPage;