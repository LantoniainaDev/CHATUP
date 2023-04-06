import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../sass/header.scss';
import BackButton from './BackButton';
import ScrollTo from './ScrollTo';

const Navigation = ({ user }) => {
    const profile = useSelector(state=>state.user);
    const navDom = useRef();

    const cls = (uit= "firstname")=>{
        const cls = user? user[uit][0].toUpperCase():profile[uit][0].toUpperCase();
        return cls;
    }
    return (
        <nav ref={navDom} className={profile || user ? cls(): 'primary'}>
            <ScrollTo className={profile || user ? cls("name"): 'primary'} reference={navDom}></ScrollTo>
            <BackButton className={profile || user ? cls("name"): 'primary'}></BackButton>
                <NavLink to="/">Pubs</NavLink>
                <NavLink to="/users">rencontre</NavLink>
                <NavLink to={profile? "/profil":"/login"}>{profile? "Mon profil":"se connecter"}</NavLink>
        </nav>
    );
};

export default Navigation;