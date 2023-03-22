import React from 'react';
import Avatar from '../components/Avatar';
import Navigation from '../components/Navigation';

const Me = () => {
    return (
        <div className='App'>
            <Navigation/>
            {
                'qwer'.split('')
                .map(e=><Avatar>{e}</Avatar>)
            }
            <p>Ici c'est a props de moi</p>
        </div>
    );
};

export default Me;