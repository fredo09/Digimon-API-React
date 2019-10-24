import React from 'react';
import Navbar from './Componentes/Componente/Navbarlayout';
import ContainerLayout from './Componentes/Componente/Containerlayout';
import MainDigimon from './Componentes/Contenedores/MainDigimonContainer';
import FooterLayout from './Componentes/Componente/FooterLayout';

import './App.css';
import 'bulma/css/bulma.css'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <ContainerLayout />
        <h1 className="title">Digimon Api</h1>
        <br />
        <MainDigimon />
        <FooterLayout />
      </div>
    );
  }
}

export default App;
