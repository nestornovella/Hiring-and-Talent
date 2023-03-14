
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DropBox from './components/dropBox';
import NavBar from './components/navBar';

function App() {
  
  const [droped, setDroped] = useState(false)

  function dropBox (){
    setDroped(prev => !prev)
  }

  return (
      <BrowserRouter>
        <Switch>
          <Route path={"/"}>
            <NavBar onDrop={dropBox}/>
            <DropBox droped={droped}/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
