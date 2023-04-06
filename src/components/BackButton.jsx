import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../sass/back-button.scss";

const BackButton = ({className}) => {
    const lien = useNavigate();
    function navigate() {
        lien(-1);
    }
    return (
        <button onClick={navigate} className={'Back '+className}>
                ❰
        </button>
    );
};

export default BackButton;