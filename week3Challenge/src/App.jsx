import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { About } from "./pages/About.jsx"
import { Movies } from "./pages/Movies.jsx"
import { NavBar } from "./components/NavBar.jsx"
export function App() {


  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Movies" element={<Movies/>}/>
      </Routes>
      <footer>
        Primer aplicacion con React -- Daniel Nino BIT - 2025
      </footer>
    </>
  )
}
