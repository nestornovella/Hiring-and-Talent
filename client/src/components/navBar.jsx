import Styles from "../styles/navBar.module.css"

function NavBar({onDrop}) {
    return ( 
        <div className={Styles.container}>
            <div>
                <button className={Styles.logo}></button>
            </div>
            <div>
                <button onClick={onDrop} className={Styles.menuButton}></button>
            </div>
        </div>
     );
}

export default NavBar;