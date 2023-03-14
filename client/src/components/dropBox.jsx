import Styles from '../styles/dropBox.module.css'


function DropBox({ droped }) {



    return (
        <div className={Styles.mainContainer}>
            <div className={!droped ? Styles.containerDisabled : Styles.container}>
                <ul>
                    <li>valor1</li>
                    <li>valor2</li>
                    <li>valor3</li>
                    <li>valor4</li>
                </ul>
            </div>
        </div>
    );
}

export default DropBox;