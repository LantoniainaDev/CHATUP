// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import Avatar from './Avatar';
import '../sass/mess.scss';
import { about } from '../feature/isconnected';
import { useSelector } from 'react-redux';

const Message = ({ data }) => {
    const [user,setUser] = useState({});
    const token = useSelector(state=>state.token);

    // if (data) about(data.publisher,{token}).then(data=>setUser(data));
    useEffect(()=>{
        if (data) about(data.publisher,{token}).then(data=>setUser(data));
    },[data,token]);

    function format(date) {
        if (!date) {
            return null;
        }
        const d = new Date(date);
        const months = ["Janv","Fevr","Mars","Avril","Mai","Juin","Juil","Aout",
    "Sept","Oct","Nov","Dec"]
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} à ${d.getHours()}:${d.getMinutes()}`;
    }
    return (
        <div className='box message'>
            
            <div>
            <Avatar>{user?.firstname || "X"}</Avatar>
            <span className={`animated-${user.firstname? user.firstname[0]: null}`}>{user?.firstname} {user?.name} </span>
            </div>
            <sub>publié le {format(data?.date)}</sub>
            <p className='txt'>{data?.content}</p>
            <p>
                <button>Repondre</button>
                <button className='alert'>Supprimer</button>
            </p>
        </div>
    );
};

export default Message;