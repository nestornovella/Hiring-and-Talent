import { useEffect, useRef } from 'react';
import Styles from '../styles/portada.module.css'
import Typed from 'typed.js'
import { cargarImagen, cargarTitulo } from '../functions/intersectinFunctions/intersext';

function Portada() {

   const el = useRef(null)
   useEffect(() => {
      new Typed(el.current, {
         strings: [
            "¿Que servicios ofrecemos?",
            "Asesoría en empleabilidad",
            "Reclutamiento y selección",
            "Asesoría de bienestar",
            "Desarrollo de páginas web y app",
            "👇A un click de tu próximo empleo👇",
            "El mejor equipo de profesionales"],
         startDelay: 300,
         typeSpeed: 30,
         backDelay: 1500,
         backSpeed: 10,
         smartBackspace: true,
         showCursor: false,
         loop: false
      })
   }, [])

 



function observator (id, call){
      

   return  new IntersectionObserver(call, {
      rootMargin: "0px 0px 0px 0px",
  }).observe(document.getElementById(id))
}

  useEffect(() => { 
   observator('title',cargarTitulo)
   })
   useEffect(()=>{

      observator('presentation',cargarImagen)
   })
   
   return (
      <div className={Styles.container}>
         <div id='title' className={Styles.invisibleTitle}>
         <h1  >Hiring and Talent</h1>
         </div>
         <img id='presentation' className={Styles.invisible} src={require('../carrusel/imagen-reunion.avif')} alt="" />
         <h3><span ref={el}></span></h3>
         <div className={Styles.containerButtons}>
            <button className={Styles.registerButton}>Registra tu hoja de vida</button>
            <button className={Styles.registerButton}>Contacta con nosotros</button>
         </div>
      </div>
   );
}

export default Portada;