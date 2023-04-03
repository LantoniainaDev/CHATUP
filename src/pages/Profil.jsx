import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Navigation from '../components/Navigation';
import { setToken, setUser } from '../feature/user.slice';

const Profil = () => {
    // eslint-disable-next-line
    const profile = useSelector((state)=>{ return state.user});
    const token = useSelector((state)=>{ return state.token});

    const dispatch = useDispatch();

    const [nav ,setNav] = useState(<></>);

    /**
     * formate une date
     * @param {Date} jour date a formater
     * @returns {String}
     */
    function formatDate(jour) {
        // DD/MM/Year
        if (!jour) {
            return null;
        }
        jour = new  Date(jour);
        return `${jour.getDate()}/${jour.getMonth()}/${jour.getFullYear()} `
    }

    function disconnect() {
        console.log("disconnecting",profile);
        axios.get(process.env.REACT_APP_BASE_URI+"/logout",{params:{token}})
         .then(()=>{
            dispatch(setToken(""));
            dispatch(setUser(null));
            setNav(<Navigate to="/login"></Navigate>)
        });
    }

    return (
        <div className='App'>
            <Navigation/>
            {profile?
            <div className='about App page'>
                {nav}
                <Avatar onClick={(e)=>console.log(e)}>{profile?.firstname}</Avatar>
                <p className='animated-secondary'>Nom: {profile?.name}</p>
                <p className='animated-secondary'>Prenom: {profile?.firstname}</p>
                <p className='animated-secondary'>A modifié son compte le: {formatDate(profile?.lastUpdate)}</p>
                <p className='animated-warning'>Membre depuis le {formatDate(profile?.signinDate)}</p>
                <button className='warning'>Modifier mon compte</button>
                <button onClick={disconnect}>Se deconnecter</button>
                <NavLink to="/login"><button className="primary">Se connectera un autre compte</button></NavLink>
            </div>:
            <div className='App'>
                <p>vous n'etes pas encore connécté</p>
                <NavLink to="/login">Se connecter</NavLink>
            </div>
            }
        </div>
    );
};

export default Profil;