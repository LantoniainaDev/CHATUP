import React from 'react';

const ErrorLoading = ({ tryagain }) => {
    return (
        <div className='box'>
            <p className='animated-alert'>Erreure de chargement.</p>
            {tryagain?
            <button onClick={tryagain} className="alert">Réessayer</button>
            :null}
        </div>
    );
};

export default ErrorLoading;