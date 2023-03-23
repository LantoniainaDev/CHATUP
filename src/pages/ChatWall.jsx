import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import ChatBox from "../components/Chatbox";
import Message from "../components/Message";

const ChatWall = () => {
    // eslint-disable-next-line
    const [message, setMessage] = useState([1,1,1,1,1]);

    return (
        <div className='App'>
            <Navigation/>
            <ChatBox/>
            <div className="chats">
                {
                    message.map(()=>(
                        <Message/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChatWall;