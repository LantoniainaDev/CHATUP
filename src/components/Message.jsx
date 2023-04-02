import React from 'react';
import Avatar from './Avatar';
import '../sass/mess.scss';

const Message = () => {
    return (
        <div className='box message'>
            
            <div>
            <Avatar>Nom</Avatar>
            <span className='animated-primary'> Nom Complet</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis doloremque, nulla dolore ipsam impedit cumque aperiam provident </p>
            <p>
                <button>Repondre</button>
                <button className='alert'>Supprimer</button>
            </p>
        </div>
    );
};

export default Message;