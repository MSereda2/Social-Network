import React from 'react';
import style from './navLink.module.css';

const NavLink = (props) => {
    return(
    <a className={style.navBar__link} href={props.Href}><i className={props.icon}></i>{props.name}</a>
    )
}

export default NavLink;