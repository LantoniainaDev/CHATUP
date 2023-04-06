// eslint-disable-next-line
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Avatar from './Avatar';
import '../sass/mess.scss';
import { about, com } from '../feature/isconnected';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import axios from 'axios';

const Message = ({ data }) => {
    const [user,setUser] = useState({});
    const [coms,setComs] = useState([]);
    const [suppred,setSuppred] = useState(false);
    const token = useSelector(state=>state.token);
    const id = useSelector(state=>state.user?state.user._id:null);
    const inpt = useRef();

    //commentaire
    const [editing,setEditing] = useState(false);

    useEffect(()=>{
        if (data) about(data.publisher,{token}).then(data=>setUser(data));
        com(data._id).then(setComs);
    },[data,token]);

    const fetchComs = () => {
        com(data._id).then(setComs);
    }

    function format(date) {
        if (!date) {
            return null;
        }
        const d = new Date(date);
        const months = ["Janv","Fevr","Mars","Avril","Mai","Juin","Juil","Aout",
    "Sept","Oct","Nov","Dec"]
        return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()} à ${d.getHours()}:${d.getMinutes()}`;
    };
    function sendCom(e) {
        e.preventDefault();
        const content = inpt.current.value;
        console.log(content,data._id);
        axios.post(process.env.REACT_APP_BASE_URI+"/coms/"+data._id,{content},{params:{token}})
         .then(fetchComs).then(()=>inpt.current.value = "");
    }

    function suppr() {
        axios.delete(process.env.REACT_APP_BASE_URI+"/pubs/post/"+data._id,{params:{token}})
         .then(()=>setSuppred(true));
    }

    function like() {
        axios.patch(process.env.REACT_APP_BASE_URI+"/pubs/post/"+data._id,{},{params:{token}})
         .then(console.log)
    }

    return (
        <div className={`box message ${suppred? 'bg-alert':''}`}>
            
            <div>
            <Avatar>{user?.firstname || "X"}</Avatar>
            <span className={`animated-${user.firstname? user.firstname[0]: null}`}>{user?.firstname} {user?.name} </span>
            </div>
            <sub>publié le {format(data?.date)}</sub>
            <p className='txt App'>{data?.content}</p>
            <p>
                {id? <button disabled={data?.likes.includes(id)} className='alert' onClick={like}>{data?.likes.length} Aimer</button>:null}
                {id? <button onClick={()=>setEditing(!editing)}>{coms.length} Commentaires</button>: null}
                {id === user._id? <button onClick={suppr} className='alert'>Supprimer</button>: null}
            </p>
            {editing? 
            <div className='comments'>
                    {coms.map((com,key)=>(
                    <Comment com={com}  key={key}></Comment>
                    ))}
                {id? <form onSubmit={sendCom}>

                    <input ref={inpt} type="text" placeholder='Commentaire...'/>
                    <button type='submit'>Envoyer</button>
                </form>:null}
            </div>:null}
        </div>
    );
};

export default Message;