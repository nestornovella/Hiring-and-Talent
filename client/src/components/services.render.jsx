import CardService from "./cardService";
import Styles from "../styles/servicesRender.module.css"

function ServicesRender() {
    return ( 
        <div className={Styles.mainContainer}>
            <CardService title={"Karen Giraldo"} image={require('../img/hiring-and-talent.png')} calification={5} descript={"Gracias por tu consulta, es el modelo mas comercializado de todo mercado. La mejor calidad acorde al precio de entrada al mercado. Si deseas nos comentas tu presupuesto para recomendarte otros modelos ya que hay muchas opciones."}/>
            <CardService title={"Pablo Mendoza"} image={require('../img/hiring-and-talent.png')} calification={3} descript={"funcionalidad "}/>
            <CardService title={"Esteban Loures"} image={require('../img/hiring-and-talent.png')} calification={2} descript={"funcionalidad "}/>
            <CardService title={"Carla Rodriguez"} image={require('../img/hiring-and-talent.png')} calification={8} descript={"funcionalidad "}/>
        </div>
     );
}

export default ServicesRender;