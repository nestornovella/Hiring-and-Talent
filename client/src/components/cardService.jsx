import Styles from '../styles/cardService.module.css'
const start = require('../img/start.png')

function CardService({ image, title, descript, calification}) {

    const calif = (calif = 1 )=>{
        const calificacion = calif > 5 ? 5 : calif 
        const starts = []
        for(let i = 0; i <  calificacion; i++){
            starts.push(<img key={i} width={30} src={start} alt=""/>)
        }    
        return starts
    }

    const starts = calif(calification) || []

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.container}>
                <div className={Styles.avatar}>
                    <img src={image} alt={title}/>
                </div>
                <div className={Styles.title}>
                    <h3>{title}</h3>
                </div>
                <div className={Styles.content}>
                    <p>{descript}</p>
                </div>
                <div className={Styles.buttonContainer}>
                    {starts.length && starts.map ( (e) => e)}
                </div>
            </div>
        </div>
    );
}

export default CardService;