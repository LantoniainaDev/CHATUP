import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import ChatBox from "../components/Chatbox";
import Message from "../components/Message";
import { useSelector } from 'react-redux';

const ChatWall = () => {
    // eslint-disable-next-line
    const [message, setMessage] = useState([1,1,1,1,1]);
    const profile = useSelector((state)=>state.user);

    return (
        <div className='App'>
            <Navigation/>
            <ChatBox profile={profile}/>
            <div className="chats">
                {
                    message.map((_,index)=>(
                        <Message key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChatWall;