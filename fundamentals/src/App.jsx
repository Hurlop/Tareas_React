//App.jsx siempre estará en un proyecto de React. Este es el componente principal
//Los componentes son funciones de JS que retornan contenido HTML 
import './App.css'
function App() {
  return(
    //comentario de js - parte de logica
    //Los fragment son como cajas - pones el contenido del componente y no genera ningun elemento en el DOM
    <>
    {/* comentario a nivel HTML */}
    <h1>Hola Mundo</h1>
    <p>Hola, esta es la clase introductoria de fundamentos</p>
    </>
  )
}
export default App