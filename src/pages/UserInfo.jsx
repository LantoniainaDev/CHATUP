import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
// eslint disable next-line
import AboutUser from '../components/AboutUser';
import Navigation from '../components/Navigation';

const UserInfo = () => {
    const {id} = useParams();
    const [user,setUser] = useState(null); 
    axios.get(process.env.REACT_APP_BASE_URI+"/user/"+id)
     .then(({data})=>setUser(data))
     .catch(console.warn);
    return (
        <div className='App'>
            <Navigation></Navigation>
            {user ? <AboutUser profile={user}></AboutUser>:"loading..."}
        </div>
    );
};

export default UserInfo;