import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Avatar from '../components/Avatar';
import Navigation from '../components/Navigation';

const Users = () => {
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        const filter = "name firstname email";
        axios.get(process.env.REACT_APP_BASE_URI+"/users",{params:{filter}})
         .then(({data})=>setUsers(data));
    },[])
    return (
        <div className='App'>
            <Navigation></Navigation>
            <p>Il y a actuellement {users.length} utilisateur{users.length>1 ? "s": null} </p>
            <div className='App'>
            {users.map((e,i)=>(
                <span  key={i} className='App user box'>
                    <NavLink to={`/user/${e._id}`}>
                        <Avatar>{e.firstname}</Avatar>
                    </NavLink>
                    <p>
                    {e.firstname} {e.name}
                    </p>
                    <sub>{e.email}</sub>
                </span>
            ))}
            </div>
            
        </div>
    );
};

export default Users;