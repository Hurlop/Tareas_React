import { Form1 } from './components/formulario1'
import { Form2 } from './components/Formulario2'
import './App.css'

function App() {
  

  return (
    <>
    {/* Encabezado */}
    <header>
      <h1>Formularios con React</h1>
    </header>
    {/* contenido principal */}
    <main>
      <Form1/>
      <Form2/>
    </main>
    {/* pie de pagina */}
    <footer>
      Creado por Daniel N 2025 - Curso React BIT
    </footer>
    </>
  )
}

export default App
