import React from 'react';
import { NavLink } from "react-router-dom";

const Signin = () => {
    return (
        <form className='form'>
        <h1 className='primary'>Inscription</h1>
        <label htmlFor="name">Nom:</label>
        <input type="text"  id='name'/>

        <label htmlFor="firstname">Prenom:</label>
        <input type="text"  id='firstname'/>

        <label htmlFor="password">Mot de passe:</label>
        <input type="password"  id='password'/>

        <p>
            <button type="submit">OK</button>
            <button className='alert' type="reset">Annuler</button>
        </p>
        <NavLink to='/login'>J'ai deja un compte</NavLink>
        </form>
    )
};

export default Signin;