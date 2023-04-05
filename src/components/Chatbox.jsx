import axios from 'axios';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Avatar from './Avatar';

const ChatBox = ({ profile, onPosted }) => {
    const token = useSelector(state=>state.token);
    const form = useRef();
    function chat(e) {
        const content = form.current.content.value;
        e.preventDefault();
        console.log("post message");
        axios.post(process.env.REACT_APP_BASE_URI+"/pubs/publish",{content},{params:{token}})
         .then(({data})=>onPosted(data))
         .catch(e=>console.warn("Bip",e))

    }
    return profile? (
        <form ref={form} onSubmit={chat} className='box body'>
            <Avatar>{profile.firstname || "X"}</Avatar>
            <textarea name="content" type="text" placeholder='Message...' required/>
            <p>
                <button type="submit">Poster</button>
                <button className='alert' type="reset">Annuler</button>
            </p>
        </form>
    ): (<p className='box body'> Voulez-vous vous connecter? <NavLink to="/login">Oui</NavLink></p>);
};

export default ChatBox;