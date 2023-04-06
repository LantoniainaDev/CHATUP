import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { about } from '../feature/isconnected';


const Comment = ({com}) => {
    const id = useSelector(state=>state.user?state.user._id:null);
    const [author,setAuthor] = useState({firstname:"X",name:"X"});
    const [disabled,setDIsabled] = useState(false);
    const token = useSelector(state=>state.token);

    useEffect(()=>{
        const filter="firstname name";
        about(com.author,{filter}).then(setAuthor);
    },[com.author]);

    function suppr() {
        const cond = id === com.author;
        if (!cond || disabled) {
            return false;
        }
        console.log("un clic sur un commentaire");
        axios.delete(process.env.REACT_APP_BASE_URI+"/coms/"+com._id,{params:{token}})
         .then(({data})=>{console.log(data);setDIsabled(true)})
    }

    return (
        <div onClick={suppr} className={`com-stretch ${id === author._id ? "mine": null}`}>
        <div className={`com ${author.firstname[0]}  ${disabled? "text-warning":""}`}>
            <sup>{author.firstname} {author.name}</sup>
            <div className='mes-content'>
                {com.content}
            </div>
            <sub className='text-alert'>{disabled? "Supprimé":""}</sub>
        </div>
        </div>
    );
};

export default Comment;