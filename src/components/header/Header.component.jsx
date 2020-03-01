import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={style.header}>
      <h1 className={style.heading}>{props.headerName}</h1>
      {props.isAuth === true ? (
        <>
          <button onClick={props.LogOutThunkCreator}>Logout</button>
          <h2>{props.login}</h2>
        </>
       
      ) : (
        <NavLink to="/login" href="#">
          <h3>Login</h3>
        </NavLink>
      )}
    </header>
  );
};

export default Header;
