import FrontendCard from "../components/FrontendCard";

const ServicesProjectPage = (
  {
    TitlePage: title,
    children: projects
  }
) => {
  return (
    <div className="bg-gray-900 md:min-h-screen text-white px-3 lg:px-20 2xl:px-24 py-6">
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
      <FrontendCard image="./frontend/gambar.png" linkProject="https://f3movies.vercel.app" repository="https://github.com/faturrahman04/movie-react-app" />
      <FrontendCard image="./frontend/coffeShop.png" linkProject="https://faturrahman04.github.io/coffe-shop-CaffeIn" repository="https://github.com/faturrahman04/coffe-shop-CaffeIn" />
      <FrontendCard image="./frontend/toDoList.png" linkProject="https://faturrahman04.github.io/to-do-list-app/" repository="https://github.com/faturrahman04/to-do-list-app" />
      <FrontendCard image="./frontend/personalWeb.png" linkProject="https://faturrahman04.github.io/personal-web-v1/" repository="https://github.com/faturrahman04/personal-web-v1" />
      <FrontendCard image="./frontend/weatherApp.png" linkProject="https://weather-app-f04.vercel.app/" repository="https://github.com/faturrahman04/weather-app" />
    </>
    
  )
}

export default ServicesProjectPage;