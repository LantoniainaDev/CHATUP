import React, { useState } from 'react';
import Avatar from '../components/Avatar';
import Navigation from '../components/Navigation';

const Profil = () => {
    // eslint-disable-next-line
    const [profile,setprofile] = useState({
        name:"Anon",
        firstName:"X",
        birth:new Date(),
        signinDate:new Date(),
    })

    /**
     * formate une date
     * @param {Date} jour date a formater
     * @returns {String}
     */
    function formatDate(jour) {
        // DD/MM/Year
        return `${jour.getDate()}/${jour.getMonth()}/${jour.getFullYear()} `
    }

    return (
        <div className='App'>
            <Navigation/>
            <Avatar onClick={(e)=>console.log(e)}>avatar</Avatar>
            <p className='animated-secondary'>Nom: {profile.name}</p>
            <p className='animated-secondary'>Prenom: {profile.firstName}</p>
            <p className='animated-secondary'>Date de naissance: {formatDate(profile.birth)}</p>
            <p className='animated-warning'>Membre depuis le {formatDate(profile.signinDate)}</p>
            <button>Se deconnecter</button>
            <button className='warning'>Modifier mon compte</button>
        </div>
    );
};

export default Profil;