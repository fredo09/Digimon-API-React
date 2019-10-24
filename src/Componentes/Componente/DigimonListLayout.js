import React from 'react';
import CardDigimon from './CardLayout';

const DigimonList = (props) =>{
    return (
        <div className="container DigimonList-item">
            {
                props.Digimons.map( (digimon, idx) =>{
                    return (
                        <div key={idx} className="DigimonList">
                            <CardDigimon 
                                id={digimon.id}
                                name={digimon.name}
                                img={digimon.img}
                                level={digimon.level}
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default DigimonList;