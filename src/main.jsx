import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero.jsx'
import Feature from './components/Feature.jsx'
import Items from './components/Items.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Navigation />
    <Hero />
    <Feature />
    <Items />
  </StrictMode>,
)