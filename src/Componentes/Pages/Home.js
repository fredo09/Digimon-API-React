import React from 'react';

// import ContainerLayout from './Componente/Containerlayout';
// import MainDigimon from './Contenedores/MainDigimonContainer';
// import FooterLayout from './Componente/FooterLayout';
import Navbar from './../Componente/Navbarlayout';
import ContainerLayout from './../Componente/Containerlayout';
import MainDigimon from './../Contenedores/MainDigimonContainer';
import FooterLayout from './../Componente/FooterLayout';

class Home extends React.Component {
    render(){
        return(
            <div>
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

export default Home;