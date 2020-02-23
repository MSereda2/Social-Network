import React from "react";
import style from './Header.module.css'



const Header =  (props) => {
    return(
        <header className={style.header}>
            <h1 className={style.heading}>{props.header.headerName}</h1>
            {props.header.headerLink.map((link, index) => (<a key={index} className={style.header__link} href={link.href}>{link.name}</a>))}
        </header>
    )
}

export default Header;
