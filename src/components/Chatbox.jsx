import React from 'react';
import Avatar from './Avatar';

const chatBox = () => {
    return (
        <form className='box body'>
            <Avatar>Nom</Avatar>
            <input type="text" placeholder='Message...'/>
            <p>
                <button type="submit">Poster</button>
                <button className='alert' type="reset">Annuler</button>
            </p>
        </form>
    );
};

export default chatBox;