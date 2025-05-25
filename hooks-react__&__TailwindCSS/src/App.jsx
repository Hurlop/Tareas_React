import { useState, useEffect } from "react"
function App() {
  let count1 = 0
  const[count2, setCount2] = useState(0) //variable de estado

  function pressMe(){
    count1++
    console.log(count1)
    setCount2(count2 + 1)
  }
  // la funcion que se debe ejecutar, {variable de estado de la que depende la accion}
  useEffect(() => {
    if(count2 === 5){
      alert('has presionado el boton 5 veces')
    }
  } , [count2])
  //Tambien pueden generar acciones la primera vez que se carga el componente
  useEffect(() => {
    alert('Bienvenidos a Hooks con React')
  },[])
  return (
    <main className="bg-blue-200 h-[350px] w-[800px] mx-auto my-[200px] p-8 border-dotted border-2 border-indigo-600 text-center">
     <h1>Contador reactivo con useState y con useEffect</h1>
     <p>Esta es una practica guiada para entender los conceptos y usos de los hooks useState y useEffect a partir de controlar el valor de un contador</p>
     <ol>
      <li>Que son los estados locales (como actualizamos contenido para que se muestre)</li>
      <li>Que son los efectos (acciones que se ejecutan cuando el valor 'state' cambia)</li>
     </ol>
     <section>
        <h2>Contador JS: {count1}</h2>
        <h2>Contador de Estado:{count2}</h2>
        <button className="bg-cyan-500 hover:bg-sky-300 rounded-md p-2" onClick={pressMe}>Incrementar</button>
     </section>
    </main>
  )
}

export default App
