import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';

function Login() {

    const signIn=()=>{
            auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result);
            }).catch(err=>{alert(err)});
    }

    return (
        <div className="login">
            <div className="login__container">
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt=""/>

            <h1>Sign in to Product Engineering</h1>
            <p>welcome to slack</p>
            <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
