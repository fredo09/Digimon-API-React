import React from 'react';


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
                <a href="#" className="has-text-info">
                    Ver Detalle
                </a>
            </div>

        </div>
    );
}

export default CardLayout;