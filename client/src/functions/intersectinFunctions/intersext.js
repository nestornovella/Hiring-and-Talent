import Styles from '../../styles/portada.module.css'

export const cargarImagen = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) { entrada.target.className = Styles.visible }
        else { entrada.target.className = Styles.invisible }
    })
}

export const cargarTitulo = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) { entrada.target.className = Styles.visibleTitle}
        else { entrada.target.className = Styles.invisibleTitle }
        console.log(entrada)
        
    })
}