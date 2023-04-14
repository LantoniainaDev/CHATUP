// eslint-disable-next-line
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import isconnected from '../feature/isconnected';
import { setToken, setUser } from '../feature/user.slice';

const Signin = () => {
    const form = useRef();
    const [msg,setMsg] = useState("");
    const [err,setErr] = useState(true);
    const nav = useNavigate();
    
    //pour le login
    const dispatch = useDispatch();
    
    function signin(e) {
        setMsg("");
        e.preventDefault();
        const base = process.env.REACT_APP_BASE_URI,
        confirmed =form.current.password.value === form.current.confirmation.value;
        if (confirmed) {
            const body = {
                email:form.current.email.value,
                name:form.current.name.value,
                firstname:form.current.firstname.value,
                password:form.current.password.value,
            }
            axios.post(base+'/signin',body)
             .then(()=>{setMsg("data");setErr(false);})
             .then(()=>login(body))
             .catch((e)=>{
                if (e.response.data.code === 11000) {
                    setMsg("un compte a deja ete ouvert sur cet email");setErr(true);form.current.email.focus();
                }
                else{
                    setMsg("erreur venant du serveur");setErr(true);form.current.email.focus();
                }
            })
        }else{
            form.current.password.focus();
            setErr(true);
            setMsg("Verifiez votre mot de passe");
        }
    }

    async function login(body) {
        const res = await axios.post(process.env.REACT_APP_BASE_URI+"/login",body)
         .then((e)=>{
            dispatch(setToken(e.data.cookie));
            return e.data.cookie;
         })
        .catch((e)=>setErr(e? false:true));

        if (res) {
            isconnected(res)
             .then(e=>dispatch(setUser(e)))
             .then(()=>nav("/"))
        }
    }

    return (
        <form ref={form} onSubmit={signin} className='form page'>
        <h1 className='primary'>Inscription</h1>
        <label htmlFor="email">E-mail:</label>
        <input required type="email" name='email'  id='email'/>

        <label htmlFor="firstname">Prenom:</label>
        <input required type="text" name='firstname' id='firstname'/>

        <label htmlFor="name">Nom:</label>
        <input required type="text" name='name' id='name'/>

        <label htmlFor="password">Mot de passe:</label>
        <input required type="password" name='password'  id='password'/>
        
        <label htmlFor="confirmation">Mot de passe:</label>
        <input required type="password" name='confirmation'  id='confirmation'/>

        {msg? <div className={err?"text-alert":'text-primary'}>{msg}</div>: null}
        <p>
            <button type="submit">OK</button>
            <button className='warning' type="reset">Annuler</button>
        </p>
        <NavLink to='/login'>J'ai deja un compte</NavLink>
        </form>
    )
};

export default Signin;