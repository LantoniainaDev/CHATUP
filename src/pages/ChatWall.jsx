import React, { useState, useEffect } from 'react';
import ChatBox from "../components/Chatbox";
import Message from "../components/Message";
import { useSelector } from 'react-redux';
import axios from 'axios';
import ErrorLoading from '../components/ErrorLoading';
import Navigation from '../components/Navigation';

const ChatWall = () => {
    // eslint-disable-next-line
    const [message, setMessage] = useState([]);
    const [axios_err, setAxios_err] = useState(null);
    const profile = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token);

    const reloadPubs = ()=>{
        setAxios_err(null);
        axios.get(process.env.REACT_APP_BASE_URI+"/pubs/allpubs",{params:{token}})
         .then(({ data})=>setMessage(data))
         .catch(()=>{setAxios_err("probleme de connexion")})
    };
    useEffect(reloadPubs,[token])

    function addPost(post) {
        setMessage([post,...message]);
        return post;
    }

    return (
        <div className='App'>
            <Navigation></Navigation>
            {profile ? <ChatBox profile={profile} onPosted={addPost}/>: null}
            {axios_err ? <ErrorLoading tryagain={reloadPubs}></ErrorLoading>: 
            <div className="chats page">
                {
                    message.map((data,index)=>(
                        <Message key={index} data={data}/>
                    ))
                }
            </div>
            }
        </div>
    );
};

export default ChatWall;