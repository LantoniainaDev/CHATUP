import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import '../sass/header.scss';

const Navigation = () => {
    const profile = useSelector(state=>state.user);
    console.log(profile);
    return (
        <nav className={profile? profile.firstname[0].toUpperCase(): 'primary'}>
            <NavLink to='/' >Chat</NavLink>
            <NavLink to='/profil' >Mon profile</NavLink>
        </nav>
    );
};

export default Navigation;