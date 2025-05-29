//gestionar la logica de conexion con el servidor para peticiones de las peliculas 
import axios from "axios";
export async function getAllMovies (){
    const API_URL = ''
    //manejo de errores
    try {
        const response = await axios.get(API_URL)
        console.log(response)
    } catch (error) {
        console.error('Not getting response', error)
    }
}