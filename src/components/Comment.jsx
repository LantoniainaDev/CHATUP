import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { about } from '../feature/isconnected';


const Comment = ({com}) => {
    const id = useSelector(state=>state.user?state.user._id:null);
    const [author,setAuthor] = useState({firstname:"X",name:"X"});
    useEffect(()=>{
        const filter="firstname name";
        about(com.author,{filter}).then(setAuthor);
    },[com.author])
    return (
        <div className={`com-stretch ${id === author._id ? "mine": null}`}>
        <div className={`com ${author.firstname[0]}`}>
            <sup>{author.firstname} {author.name}</sup>
            <div className='mes-content'>
                {com.content}
            </div>
        </div>
        </div>
    );
};

export default Comment;