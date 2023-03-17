import { useEffect, useRef } from 'react';
import Styles from '../styles/portada.module.css'
import Typed from 'typed.js'

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
   return (
      <div className={Styles.container}>
         <h1>Hiring<span> and</span> Talent</h1>
         <img className={Styles.reunion} src={require('../carrusel/imagen-reunion.avif')} alt="" />
         <h3><span ref={el}></span></h3>
         <div className={Styles.containerButtons}>
            <button className={Styles.registerButton}>Registra tu hoja de vida</button>
            <button className={Styles.registerButton}>Contacta con nosotros</button>
         </div>
      </div>
   );
}

export default Portada;