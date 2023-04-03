// eslint-disable-next-line
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { NavLink,Navigate } from "react-router-dom";

const Signin = () => {
    const form = useRef();
    const [msg,setMsg] = useState("");
    const [err,setErr] = useState(true);
    const [path,setPath] = useState(<></>);
    
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
             .then(({data})=>{setMsg(data.msg);setErr(false);setPath(<Navigate to="/"></Navigate>)})
             .catch(()=>{setMsg("erreur venant du serveur");setErr(true);form.current.email.focus();})
        }else{
            form.current.password.focus();
            setErr(true);
            setMsg("Verifiez votre mot de passe");
        }
    }

    return (
        <form ref={form} onSubmit={signin} className='form page'>
            {path}
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