import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/Login/ActionLogin';
import { useNavigate } from 'react-router-dom';

import './index.css'

function Form() {
    //use dispatch permet de récupérer la fonction dispatch au sein 
    //de notre composant afin de pouvoir dispatch des actions Redux.
    const dispatch = useDispatch();
    //useSelector est appelé à chaque fois que le composant est rendu 
    //et à chaque fois qu’une action est dispatch.
    //Chaque appel à useSelector crée une nouvelle souscription au store Redux.
    //pour error on recupère le state en cas d'erreur sur le login
    const error = useSelector((state) => state.login.error);
    //useNavigation est un crochet qui donne accès à navigation
    const navigate = useNavigate();

    //j'initialise le state des deux variable a null 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //je crée ma fonction pour pouvoir me connecter et recuperer le token
    //pour bascule sur la page profile avec toute les donnees
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            //si je recupère le token alors je bascule sur profile sinon sur le message d'erreur 

            dispatch(login({ email: username, password: password }))
                .then((result) => {
                    console.log(result);
                    if (result.payload) {
                        navigate('/profile');
                    } else {
                        console.error('Error token');
                    }
                })

        } catch (error) {
            console.error('Error token', error);
        }
    };

    return (
        <>
            <i className='fa-solid fa-circle-user iconSignin'></i>
            <h1>Sign In</h1>
            {error && <div className='error-message'>{error}</div>}
            <form onSubmit={handleLogin}>
                <div className='input-wrapper'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <div className='input-remember'>
                    <input
                        type='checkbox'
                        id='remember-me'
                    />
                    <label htmlFor='remember-me'>Remember me</label>
                </div>
                <button type='submit' className='sign-in-button'>
                    Sign In
                </button>
            </form>
        </>
    )
}

export default Form