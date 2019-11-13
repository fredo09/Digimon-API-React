import React from 'react';
import { Link } from 'react-router-dom';

export const InfoDigimon = (props) => {
    const { img, name, level } = props;
    return(
        <div className="container-fluid t_container ">
            <div className="columns">
              <div className="column">
                <figure className="image is-4by3">
                  <img src={img} alt={name} />
                </figure>
              </div>
              <div className="column">
                <h2>Informacion General</h2>
                <hr/>
                <h3>Nombre: { name } </h3>
                <br/>
                <p>Nivel: {level}</p>
                <p></p>
                <Link to="/">Regresar </Link>
              </div>
            </div>
        </div>
    );
}