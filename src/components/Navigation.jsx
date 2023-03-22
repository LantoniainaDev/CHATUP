import React from 'react';
import { NavLink } from "react-router-dom";
import '../sass/header.scss';

const Navigation = () => {
    return (
        <nav className='primary'>
            <NavLink to='/' >Chat</NavLink>
            <NavLink to='/profil' >Mon profile</NavLink>
        </nav>
    );
};

export default Navigation;