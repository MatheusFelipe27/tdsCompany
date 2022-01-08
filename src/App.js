import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Cadastro from './components/pages/cadastro';


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
         <Home/> 
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/cadastro">
          <Cadastro/>
        </Route>
      </Switch>
    </Router>
    
  );  
}

export default App;
