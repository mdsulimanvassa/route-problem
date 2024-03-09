import React, { useContext } from 'react';
import './Login.css';
import {getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContex } from './../../App';

import { useLocation, useNavigate } from "react-router-dom";
import { auth } from './firebase.config';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggInUser, setLoggInUser] = useContext(UserContex);

    const handleGoogle = (e) => {
        const provider = new GoogleAuthProvider();
        getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const {displayName, email} = result.user;
            const isSignInUser = {name: displayName, email};
            setLoggInUser(isSignInUser);
            navigate(from);
  })
        .catch((error) => {
         console.log(error);
         console.log(error.message);
  });
    }
    return (
        <div className='handle-button'>
        <h1>this is login page</h1>
            <button onClick={handleGoogle} type="button">sign in google</button>
        </div>
    );
};

export default Login;
