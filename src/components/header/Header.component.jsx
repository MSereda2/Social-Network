import React from "react";
import style from './Header.module.css'
import {NavLink} from 'react-router-dom';




const Header =  (props) => {
    return(
        <header className={style.header}>
            <h1 className={style.heading}>{props.headerName}</h1>
            {props.isAuth === true ? <a href="#">{props.login}</a> : <NavLink to='/login' href="#">{props.login}login</NavLink>
 }
        </header>
    )
}

export default Header;
