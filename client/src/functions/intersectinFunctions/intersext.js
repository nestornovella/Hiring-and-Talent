import Styles from '../../styles/portada.module.css'

export const cargarImagen = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) { entrada.target.className = Styles.visible }})
}

export const cargarTitulo = (entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) { entrada.target.className = Styles.visibleTitle}
       
        
    })
}