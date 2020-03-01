import React from "react";
import style from "./login.module.css";
import LoginForm from "./loginForm/LoginForm";
import { LoginThunkCreator } from "../../../redux/reducers/auth/auth_thunk";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let Login = props => {
  const onSubmit = formData => {
    props.LoginThunkCreator(formData.login, formData.password, formData.remeberMe);
  };

  if(props.isAuth) {
    return <Redirect to={`/profile/${props.userId}`} />
  }

  return (
    <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

let MapStateToProps = state => ({
  isAuth: state.authRedusers.isAuth,
  userId: state.authRedusers.userId
})

export default connect(MapStateToProps, { LoginThunkCreator })(Login);
