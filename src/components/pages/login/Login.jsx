import React from 'react';
import style from './login.module.css';
import LoginForm from './loginForm/LoginForm';
import {LoginThunkCreator} from '../../../redux/reducers/login/login.thunk';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


let Login = (props) => {
    const onSubmit = (formData) => {
        props.LoginThunkCreator( formData.login, formData.password)
    }
    return(
        <div>
            {
                !props.isLogin ? <>
                    <h1>Login</h1>
                    <LoginForm onSubmit={onSubmit} /> </>
                : <h1>your awesome</h1> }
           
        </div>
    )
}

let MapStateToProps = (state) => ({
    isLogin: state.login.isLogin,
    userID: state.login.userID
})

export default connect(MapStateToProps, {LoginThunkCreator})(Login);   