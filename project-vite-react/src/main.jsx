import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Aqui se configura el entorno de react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* es un componente principal */}
  </StrictMode>,
)
