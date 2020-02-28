import React from 'react';
import style from './login.module.css';
import LoginForm from './loginForm/LoginForm'

let Login = (props) => {
    return(
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    )
}

export default Login;