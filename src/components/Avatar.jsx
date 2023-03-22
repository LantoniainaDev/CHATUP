import React, { useEffect } from 'react';
import { useState } from 'react';
import '../sass/avatar.scss';

const Avatar = (props) => {
    const [letter, setLetter] = useState("X");
    useEffect(()=>{
        console.log(props);
        setLetter(props.children[0].toUpperCase());
    },[props,letter])
    return (
        <div className={`avatar ${letter}`}>
            { letter }
        </div>
    );
};

export default Avatar;