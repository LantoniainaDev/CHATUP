import React, { useEffect } from 'react';
import { useState } from 'react';
import '../sass/avatar.scss';

const Avatar = (props) => {
    const [letter, setLetter] = useState("X");
    const click = props.onClick || function(){ console.log("click on Avatar")};
    useEffect(()=>{
        setLetter(props.children[0].toUpperCase());
    },[props,letter])
    return (
        <div onClick={click} className={`avatar ${letter}`}>
            { letter }
        </div>
    );
};

export default Avatar;