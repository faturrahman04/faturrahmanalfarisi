import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import ServicesProjectPage, { BackendProject, FrontendWebsite } from './pages/ServicesProjectPage.jsx'
import SocialLinkPage from './pages/SocialLinkPage.jsx'
import DetailsProjectPage from './pages/DetailsProjectPage.jsx'
import TechStack, { TechStackMovieApp } from './components/TechStack.jsx'

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
          path='/frontend-1'
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
        {/* Frontend Details App */}

      {/* Frontend Website */}

      {/* Backend Website */}
      <Route 
        path="/backendprojects" 
        element={<ServicesProjectPage 
        TitlePage="Backend Website Projects"
        children={<BackendProject />} />} 
      />
      {/* Backend Website */}

    </Routes>
  </BrowserRouter>,
)
