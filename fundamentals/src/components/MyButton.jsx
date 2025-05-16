import styles from './MyButton.module.css'
export function MyButton ({text, func}){
    //las props que recibe este componente son texto y funcion
    return(
        <button className={styles.button} onClick={func}>{text || "soy un boton"}</button>
    )
}