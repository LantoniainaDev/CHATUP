import axios from 'axios';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  NavLink, useNavigate } from 'react-router-dom';
import { setToken, setUser } from '../feature/user.slice';
import Navigation from "../components/Navigation";
import AboutUser from '../components/AboutUser';

const Profil = () => {
    // eslint-disable-next-line
    const profile = useSelector((state)=>{ return state.user});
    const token = useSelector((state)=>{ return state.token});

    const dispatch = useDispatch();

    const nav = useNavigate();


    function disconnect() {
        console.log("disconnecting",profile);
        axios.get(process.env.REACT_APP_BASE_URI+"/logout",{params:{token}})
         .then(()=>{
            dispatch(setToken(""));
            dispatch(setUser(null));
            nav("/login")
        });
    }

    return (
        <div className='App'>
            <Navigation>
                <NavLink to="/">Pub</NavLink>
                <NavLink to="/profil">Mon profile</NavLink>
            </Navigation>
            {profile?
            <div className='about App page'>
                <AboutUser profile={profile}></AboutUser>
                <button className='warning'>Modifier mon compte</button>
                <button onClick={disconnect}>Se deconnecter</button>
                <NavLink to="/login"><button className="primary">Se connectera un autre compte</button></NavLink>
            </div>:
            <div className='App page'>
                <p>vous n'etes pas encore connécté</p>
                <NavLink to="/login">Se connecter</NavLink>
            </div>
            }
        </div>
    );
};

export default Profil;