import {useForm} from 'react-hook-form'

export function Form2() {
    const{register, handleSubmit} = useForm()
    //Permite acceder a las funciones utiles de useForm
    //regiser: se usa para conectar los inputs con los datos del formulario
    //handleSubmit: validar y recoger la informacion del form antes de enviarlo


    //Lo que yo quiero que pase cuando se envia la informacion
    function showData(data){
        console.log("Informacion del form: " , data)
    }
    return (
    <>
        <h2>Formulario 2: Con React hook form</h2>
        <h3>Forma eficiente y moderna</h3>
        <form onSubmit={handleSubmit(showData)}>
            {/* ... -> operador de propagacion, y me trae todo lo asociado al metodo */}
            <input type="text" placeholder='Ingrese usuario' {...register("usuario")}/>
            <br />
            <input type="number" placeholder='Ingrese su numero'{...register("numero")}/>
            <br />
            <input type="email" placeholder='ingrese su correo' {...register("correo")}/>
            <br />
            <br />
            <button type='submit'>Registrarse</button>
        </form>
    </>
    )
}
