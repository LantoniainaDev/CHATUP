import React from 'react';
import Avatar from '../components/Avatar';

const AboutUser = ({profile}) => {
    
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
    return (
    <div className='about App page'>
        <Avatar >{profile?.firstname}</Avatar>
        <p className='animated-secondary'>Nom: {profile?.name}</p>
        <p className='animated-secondary'>Prenom: {profile?.firstname}</p>
        <p className='animated-warning'>Email: {profile?.email}</p>
        <p className='animated-secondary'>A modifié son compte le: {formatDate(profile?.lastUpdate)}</p>
        <p className='animated-warning'>Membre depuis le {formatDate(profile?.signinDate)}</p>
    </div>
    );
};

export default AboutUser;