// eslint-disable-next-line
import axios from 'axios';
import React from 'react';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line
import { NavLink, useNavigate } from "react-router-dom";
import BackButton from '../components/BackButton';
import isconnected from '../feature/isconnected';
import { setToken, setUser } from '../feature/user.slice';
import '../sass/forms.scss';

const Login = () => {
    const form = useRef();
    const dispatch = useDispatch();

    // eslint-disable-next-line
    const nav = useNavigate();
    const [err,setErr] = useState("")
    async function login(e) {
        e.preventDefault();
        setErr("");
        // eslint-disable-next-line
        const body = {
            password:form.current.password.value,
            email:form.current.email.value,
        };

        const res = await axios.post(process.env.REACT_APP_BASE_URI+"/login",body)
         .then((e)=>{
            console.log(e);
            dispatch(setToken(e.data.cookie))
            return e.data.cookie;
         })
        .catch(({response})=>response? setErr(response.data.msg):setErr("erreur de reseau"));

        if (res) {
            isconnected(res)
             .then(e=>dispatch(setUser(e)))
             .then(()=>nav("/profil"))
        }
    }

    return (
        <form onSubmit={login} ref={form} className='form page'>
            <BackButton></BackButton>
            <h1>Connexion</h1>
            <label htmlFor="name">Nom:</label>
            <input required name='email' type="email" id='name'/>

            <label htmlFor="password">Mot de passe:</label>
            <input required name="password" type="password"  id='password'/>

            {err ? <div className="text-alert">{err}</div>: ""}

            <p>
                <button type="submit">Envoyer</button>
                <button className='alert' type="reset">Annuler</button>
            </p>
            <NavLink to='/signin'>Creer un compte</NavLink>
        </form>
    );
};

export default Login;