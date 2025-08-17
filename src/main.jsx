import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import ServicesProjectPage, { BackendProject, FrontendWebsite } from './pages/ServicesProjectPage.jsx'
import SocialLinkPage from './pages/SocialLinkPage.jsx'
import DetailsProjectPage from './pages/DetailsProjectPage.jsx'
import TechStack, { TechStackMovieApp, TechStackCoffeShopCaffeIn, TechStackCalculatorApp, TechStackToDoListApp, TechStackMansapadparLib } from './components/TechStack.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route 
        path="/link" 
        element={<SocialLinkPage />} 
      />

      {/* Frontend Website */}
      <Route 
        path="/frontendwebsite" 
        element={<ServicesProjectPage 
        TitlePage="Frontend Website Projects"
        children={<FrontendWebsite />} />} 
      />

        {/* Frontend Details Movie App */}
        <Route
          path='/f3movies-movie-app'
          element={<DetailsProjectPage
          projectTitle="Movie App"
          projectImage="./frontend/gambar.png"
          projectDesc="This project is called F3 Movies, this project was created using many tools such as ReactJS as a frontend javascript library, TailwindCSS as a css framework for build UI, Zustand as a state management, and React Router for routing. Beside that, this project using omdbAPI."
          projectDesc2="This project is purposes to learn how to integrated frontend and backend using API (omdbAPI) using axios, learn how to state management using Zustand and learn about asynchronous javascript (Async Await)."
          projectGithub="https://github.com/faturrahman04/movie-react-app"
          projectCreatedAt="16 April 2025"
          projectHref="https://f3movies.vercel.app/"
          projectLink="https://f3movies.vercel.app"
          projectTechStack={<TechStack children={<TechStackMovieApp />} />} />}
        />

        <Route 
          path='/coffe-shop-CaffeIn'
          element={<DetailsProjectPage
            projectTitle="Coffe Shop"
            projectImage="/frontend/coffeShop.png"
            projectDesc="Personal frontend simple project using HTML, CSS and JavaScript only with Coffe Shop theme, I designed and developed it to showcase a cozy, inviting café atmosphere. Click the link to explore the design — hope you enjoy it! 😄"
            projectGithub="https://github.com/faturrahman04/coffe-shop-CaffeIn"
            projectCreatedAt="7 Februari 2025"
            projectHref="https://faturrahman04.github.io/coffe-shop-CaffeIn"
            projectLink="https://faturrahman04.github.io/coffe-shop-CaffeIn"
            projectTechStack={<TechStack children={<TechStackCoffeShopCaffeIn />} />} />}
         />

         <Route 
           path='/calculator-app'
           element={<DetailsProjectPage
            projectTitle="Calculator App"
            projectImage="/frontend/calculatorApp.png"
            projectDesc="Calculator App is a simple web-based calculator built with HTML, CSS, and JavaScript. This project was created to practice programming logic and strengthen fundamental web development skills. It supports basic arithmetic operations (addition, subtraction, multiplication, division) with a clean and responsive user interface."
            projectGithub="https://github.com/faturrahman04/calculator-app"
            projectCreatedAt="16 Maret 2025"
            projectHref="https://faturrahman04.github.io/calculator-app/"
            projectLink="https://faturrahman04.github.io/calculator-app/"
            projectTechStack={<TechStack children={<TechStackCalculatorApp /> } />} />}
           />

           <Route 
            path='/todoListApp'
            element={<DetailsProjectPage
              projectTitle="To Do List App"
              projectImage="/frontend/toDoList.png"
              projectDesc="To-Do List App is a simple and responsive web application built with HTML, CSS, and JavaScript. It allows users to add, mark as complete, and delete tasks with a clean and colorful user interface. Designed as a practice project, it helps improve productivity while showcasing essential front-end development skills."
              projectGithub="https://github.com/faturrahman04/to-do-list-app"
              projectCreatedAt="20 April 2025"
              projectHref="https://faturrahman04.github.io/to-do-list-app/"
              projectLink="https://faturrahman04.github.io/to-do-list-app/"
              projectTechStack={<TechStack children={<TechStackToDoListApp />} />} />}
            />

            <Route 
              path='/landing-page-1'
              element={<DetailsProjectPage 
                projectTitle="Landing Page Design"
                projectImage="/frontend/personalWeb.png"
                projectDesc="This is my first frontend project i created, a simple landing page and responsive web design using HTML, CSS and JavaScript. This project is purposes to learn how to make a responsive website and make a navbar in different pixels."
                projectCreatedAt="13 April 2024"
                projectGithub="https://github.com/faturrahman04/personal-web-v1"
                projectHref="https://faturrahman04.github.io/personal-web-v1/"
                projectLink="https://faturrahman04.github.io/personal-web-v1/"
                projectTechStack={<TechStack children={<TechStackCalculatorApp />} />} />}
              />

              <Route
                path='/weather-app'
                element={<DetailsProjectPage 
                  projectTitle="Weather App"
                  projectImage="/frontend/weatherApp.png"
                  projectDesc="A simple Weather App project was created by using HTML, CSS and JavaScipt only. Besides that this project using openweather public API for the weather data and this project was purposed to learn how to fetch an API using JavaScript Vanilla."
                  projectCreatedAt="15 Februari 2025"
                  projectGithub="https://github.com/faturrahman04/weather-app"
                  projectHref="https://weather-app-f04.vercel.app/"
                  projectLink="https://weather-app-f04.vercel.app/"
                  projectTechStack={<TechStack children={<TechStackCalculatorApp />} />} />} 
                />
        {/* Frontend Details App */}

      {/* Frontend Website */}

      {/* Backend Website */}
      <Route 
        path="/backendprojects" 
        element={<ServicesProjectPage 
        TitlePage="Backend Website Projects"
        children={<BackendProject />} />} 
      />

          {/* Backend Details */}
          <Route
            path='/mansapadparlib'
            element={<DetailsProjectPage
              projectTitle="Mansapadpar Library"
              projectImage="./backend/mansapadpar-detail.png"
              projectDesc={`This is my thesis project called "Mansapadpar Library". Mansapadpar stands for MAN 1 Padang Pariaman, which is one of the high schools in Sumatera Barat. Mansapadpar Library provides several features and supports multiple user roles, such as admin and student. The admin or librarian can manage all data related to the library, while students can borrow books through this system. This project implements content-based filtering for its recommendation feature, since my thesis discusses this algorithm as the basis for the recommendation system.`}
              projectDesc2={`Since the development phase, I have collected several important data points to implement the content-based filtering algorithm, such as book titles, authors, categories, publishers, and others. This project was developed using PHP and CodeIgniter 4. If you want to view the project please click the button. Enjoy 😉`}
              projectCreatedAt="1 Agustus 2025"
              projectHref="mansapadparlib.com"
              projectLink="mansapadparlib.com"
              projectGithub="https://github.com/faturrahman04/content-based-filtering-skripsi"
              projectTechStack={<TechStack children={<TechStackMansapadparLib />} />} />} 
            />
      {/* Backend Website */}

    </Routes>
  </BrowserRouter>,
)
