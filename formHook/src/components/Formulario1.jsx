import { useState } from "react"
export function Form1(){
    const [name, setName] = useState ("")
    const [pass, setPass] = useState ("")
    function submitClick (event) {
        event.preventDefault()
        alert("El nombre es: " + name + " | " + "La contrasena es: " + pass)
    }
    return (
    <>
        <h2>Formulario 1: con useState</h2>
        <hr />
        <form onSubmit={submitClick}>
            <label htmlFor="name">Ingresa tu usuario</label>
            {/* event.target.value es el evento que se genera al escribir en un input*/}
            <input type="text" id="name" value={name} onChange={(event)=>{setName(event.target.value)}}/>
            <br />
            <label htmlFor="password">Ingresa tu contrasena</label>
            <input type="password" id="password" value={pass} onChange={(event)=>{setPass(event.target.value)}}/>
            <br />
            <br />
            <button type="submit">Ingresar</button>
        </form>
    </>
    )
}