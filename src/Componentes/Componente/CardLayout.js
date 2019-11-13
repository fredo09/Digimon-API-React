import React from 'react';
import { Link } from 'react-router-dom';

const CardLayout = (props) => {
    return(
        <div className="card CardDigimon">
            <div className="card-image">
                <figure className="image is-128x128">
                <img  src={props.img} alt={props.name} />
                </figure>
            </div>

            <div className="media-content">
                <p className="title is-4">{ props.name }</p>
                <p className="subtitle is-6">{ props.level }</p>
                <Link
                    className="has-text-info" 
                    to={`/DetailDigimon/${props.id}`}  
                    >
                    Ver Detalle
                </Link>
            </div>
        </div>
    );
}

export default CardLayout;