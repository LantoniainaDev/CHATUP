import React from 'react';
import Avatar from './Avatar';

const chatBox = ({ profile }) => {
    function chat(e) {
        e.preventDefault();
        console.log("post message");
    }
    return (
        <form onSubmit={chat} className='box body'>
            <Avatar>{profile?.name || "X"}</Avatar>
            <input type="text" placeholder='Message...'/>
            <p>
                <button type="submit">Poster</button>
                <button className='alert' type="reset">Annuler</button>
            </p>
        </form>
    );
};

export default chatBox;