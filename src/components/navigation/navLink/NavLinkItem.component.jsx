import React from 'react';
import style from './navLink.module.css';
import {NavLink} from 'react-router-dom'

const NavLinkItem = (props) => {
    return(
    <NavLink className={style.navBar__link} to={props.to} activeClassName={style.active}><i className={props.icon}></i>{props.name}</NavLink>
    )
}

export default NavLinkItem;