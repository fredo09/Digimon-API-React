import React from 'react';
import Navbar from './../Componente/Navbarlayout';
import { Link } from 'react-router-dom';

export const Page404 = () =>{
    return(
        <div className="container">
            <Navbar />
            <h1>Page 404!</h1>
            <span>No found Page.</span>
            <br/>
            <Link  to="/">
                Regresar
            </Link>
        </div>
    );
}

