import React from 'react';
import { useRef } from 'react';
import { NavLink } from "react-router-dom";
import '../sass/forms.scss';

const Login = () => {
    const name = useRef();
    function login(e) {
        e.preventDefault();
        console.log(name.current.value);
    }

    return (
        <form onSubmit={login} className='form'>
            <h1>Connexion</h1>
            <label htmlFor="name">Nom:</label>
            <input type="text" ref={name} id='name'/>

            <label htmlFor="password">Mot de passe:</label>
            <input type="password"  id='password'/>

            <p>
                <button type="submit">Envoyer</button>
                <button className='alert' type="reset">Annuler</button>
            </p>
            <NavLink to='/signin'>Creer un compte</NavLink>
        </form>
    );
};

export default Login;