import { useEffect, useRef, useState } from 'react';
import Styles from '../styles/carrusel.module.css'



function Carrusel() {


   const names = ['imagen1', 'imagen2', 'imagen3']

   const [index, setIndex] = useState(0)

   let images = names.map(img => !img.includes('.') ? require('../carrusel/' + img + ".jpg") : require('../carrusel/' + img))

   function handleChange(e) {
      const target = e === null ? e.target.name : "next"
      if (target === "prev") {
         if (index === 0) { setIndex(prev => images.length - 1) }
         else { setIndex(prev => prev - 1) }
      } else {
         if (index === images.length - 1) { setIndex(prev => 0) }
         else { setIndex(prev => prev + 1) }
      }

   }
   useEffect(() => {
      const interval = setInterval(() => {
         handleChange()
         console.log("hola")
      }, 10000)
      return () => clearInterval(interval)

   }, [index])





   return (
      <div className={Styles.mainContainer}>
         <div className={Styles.container}>

            <button onClick={handleChange} name='prev' >{"<"}</button>
            <div className={Styles.containerImages}>
               < img src={images[index]} alt={names[index]} />
            </div>
            <button onClick={handleChange} name='next' >{">"}</button>

         </div>
       
      </div>
   );
}

export default Carrusel;