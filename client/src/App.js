import Styles from './styles/app.module.css'
import logo from './img/hiring-and-talent.jpg'
import equip from './img/equip-working.png'

function App() {
  return (
    <div className={Styles.container}>
     
      <img width={200} src={logo} alt='logo' />
      <img width={500} src={equip} alt={"equip"}/>
    </div>
  );
}

export default App;
