import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import ServicesProjectPage, { FrontendWebsite } from './pages/ServicesProjectPage.jsx'
import SocialLinkPage from './pages/SocialLinkPage.jsx'

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
      {/* Frontend Website */}

    </Routes>
  </BrowserRouter>,
)
