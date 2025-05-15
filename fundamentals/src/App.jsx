//App.jsx siempre estará en un proyecto de React. Este es el componente principal
//Los componentes son funciones de JS que retornan contenido HTML 
import './App.css'
import { MyButton } from './components/MyButton.jsx'
export function App() {
  //variables
  let loginStatus = false
  let message = ""
  //condiciones
  if(!loginStatus) {
    message = "No has iniciado sesion"
  }else {
    message = "Inicia sesion"
  }
  return(
    //comentario de js - parte de logica
    //Los fragment son como cajas - pones el contenido del componente y no genera ningun elemento en el DOM
    <>
    {/* comentario a nivel HTML */}
    <h1>Fundamentos de React</h1>
    <p>Este espacio tendra el contenido de la semana de introduccion a React JS.</p>
    <p>Los temas que vamos a ir abordando son:</p>
    {/* Los tipos de listas que tenemos son ol (organizada) y ul (sin orden) */}
    <ul>
      <li>Sintaxis JSX</li>
      <li>Creacion y anidacion de componentes</li>
      <li>Renderizado condicional</li>
      <li>Renderizado de listas</li>
      <li>Como agregar estilos</li>
      <li>Paso de propiedades (Props) entre componentes</li>
      <li>Manejo de eventos</li>
      <li>Ciclos de vida y estados de los componentes en React</li>
    </ul>
    <hr />
    <section>
      <h2>Sintaxis JSX</h2>
      <p>La forma de escribir el codigo de JavaScript que permite escribir HTML dentro</p>
    </section>
    <hr />
    <section>
      <h2>Componentes de React</h2>
      <p>Es la base de React, <strong> una funcion de JS que retorna HTML </strong> para permitirnos reutilizar y estructurar un proyecto en React</p>
      <MyButton/>
    </section>
    <hr />
    <section>
      <h2>Renderizado condicional</h2>
      <p>La capacidad de mostrar u ocultar elementos de HTML a partir de una condicion verdadera o falsa </p>
      {/*forma 1 de mostrar un elemento condicionalmente*/}
      <h3>{message}</h3>
      {/*forma 2 de mostrar un elemento condicionalmente (condicional ternario)*/}
      {loginStatus ? <h2>Has iniciado sesion</h2> : <h2>No has iniciado sesion</h2>}
    </section>
    <hr />
    <section style={{backgroundColor: "lightblue", padding:"50px"}}>
      <h2 className='titulo'>Anadir Estilos</h2>
      <p>Podemos manejar estilos de varias formas</p>
      <MyButton/>
    </section>
    </>
  )
}
// export default App