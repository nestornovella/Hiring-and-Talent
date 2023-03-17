
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carrusel from './components/carrusel';
import DropBox from './components/dropBox';
import NavBar from './components/navBar';
import Portada from './components/portada';

function App() {
  
  const [droped, setDroped] = useState(false)

  function dropBox (){
    setDroped(prev => !prev)
  }

  return (
      <BrowserRouter>
            <NavBar onDrop={dropBox}/>
            <DropBox droped={droped} onDrop={dropBox}/>
        <Switch>
          <Route exact path={"/"}>
            <Portada/>
            <Carrusel/>
          </Route>
          <Route path={"/nosotros"}>

          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
