import React from 'react';

const SpinnerLayout = () => {
    return (
        <div className="loading-spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
            <p>Cargando!...</p>
        </div>
    );
}

export default SpinnerLayout;