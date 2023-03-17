import Styles from '../styles/dropBox.module.css'
import { Link } from 'react-router-dom'


function DropBox({ droped, onDrop }) {

    function handleClick (){
        onDrop()
    }

    return (
        <div className={Styles.mainContainer}>
            <div className={!droped ? Styles.containerDisabled : Styles.container}>
                <ul>
                   <Link onClick={handleClick} to={"/"}><li className={Styles.lista}>Inicio</li></Link> 
                   <Link onClick={handleClick} to={"/servicios"}><li>Servicios</li></Link> 
                   <Link onClick={handleClick} to={"/contacto   "}><li>Contactenos</li></Link>
                   <Link onClick={handleClick} to={"/nosotros"}><li>Quienes somos</li></Link> 
                </ul>
            </div>
        </div>
    );
}

export default DropBox;