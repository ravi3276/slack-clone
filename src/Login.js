import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import {auth,provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
function Login() {
            const [state,dispatch]=useStateValue();

    const signIn=()=>{
            auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result);

                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user
                })

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
