import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Items from './components/Items.jsx'
import Banner from './components/Banner.jsx'
import NewPro from './components/NewPro.jsx'
import Promotion from './components/Promotion.jsx'
import Textbanner from './components/Textbanner.jsx'
import Newsletter from './components/Newsletter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navigation />
    <Hero />
    <Feature />
    <Items />
    <Banner />
    <NewPro />
    <Promotion />
    <Textbanner />
    <Newsletter />
  </StrictMode>,
)