import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Componentes/Pages/Home';
import DetailDigimon from './Componentes/Pages/DetailDigimon';
import { Page404 } from './Componentes/Pages/Page404';

import './App.css';
import 'bulma/css/bulma.css'

class App extends React.Component {
  render(){
    return (
      <div className="App">
         <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/DetailDigimon/:id" component={DetailDigimon}/>
            <Route component={Page404}/>
        </Switch>
      </div>

    );
  }
}

export default App;
