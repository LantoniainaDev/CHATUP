import React, { useState, useEffect } from 'react';
import Navigation from "../components/Navigation";
import ChatBox from "../components/Chatbox";
import Message from "../components/Message";
import { useSelector } from 'react-redux';
import axios from 'axios';

const ChatWall = () => {
    // eslint-disable-next-line
    const [message, setMessage] = useState([]);
    const profile = useSelector((state)=>state.user);
    const token = useSelector((state)=>state.token);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BASE_URI+"/pubs/allpubs",{params:{token}})
         .then(({ data})=>setMessage(data))
    },[token])

    function addPost(post) {
        setMessage([post,...message]);
        return post;
    }

    return (
        <div className='App'>
            <Navigation/>
            {profile ? <ChatBox profile={profile} onPosted={addPost}/>: null}
            <div className="chats page">
                {
                    message.map((data,index)=>(
                        <Message key={index} data={data}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChatWall;