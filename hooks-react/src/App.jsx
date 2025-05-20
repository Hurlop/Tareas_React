import { useState } from "react"
function App() {
  let count1 = 0
  const[count2, setCount2] = useState(0) //variable de estado

  function pressMe(){
    count1++
    console.log(count1)
    setCount2(count2 + 1)
  }
  return (
    <>
     <h1>Contado reactivo con useState y con useEffect</h1>
     <p>Esta es una practica guiada para entender los conceptos y usos de los hooks useState y useEffect a partir de controlar el valor de un contador</p>
     <ol>
      <li>Que son los estados locales (como actualizamos contenido para que se muestre)</li>
      <li>Que son los efectos (acciones que se ejecutan cuando el valor 'state' cambia)</li>
     </ol>
     <section>
        <h2>Contador JS: {count1}</h2>
        <h2>Contador de Estado:{count2}</h2>
        <button onClick={pressMe}>Incrementar</button>
     </section>
    </>
  )
}

export default App
