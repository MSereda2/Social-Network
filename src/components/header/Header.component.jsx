import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={style.header}>
      <h1 className={style.heading}>{props.headerName}</h1>
      {props.isAuth === true ? (
        <h2>{props.login}</h2>
      ) : (
        <NavLink to="/login" href="#">
          login
        </NavLink>
      )}
    </header>
  );
};

export default Header;
