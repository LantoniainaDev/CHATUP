import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../sass/header.scss';

const Navigation = ({children, user}) => {
    const profile = useSelector(state=>state.user);
    const cls = ()=>{
        const cls = user? user.firstname[0].toUpperCase():profile.firstname[0].toUpperCase();
        return cls;
    }
    return (
        <nav className={profile || user ? cls(): 'primary'}>
            {children? children:(
                <>
                <NavLink to="/">Chat</NavLink>
                <NavLink to="/users">rencontre</NavLink>
                <NavLink to="/profil">Mon profil</NavLink>
                </>
            )}
        </nav>
    );
};

export default Navigation;