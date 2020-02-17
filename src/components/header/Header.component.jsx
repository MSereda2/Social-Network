import React from "react";
import style from './Header.module.css'



const Header =  (props) => {
    return(
        <header className={style.header}>
            <h1 className={style.heading}>{props.header.headerName}</h1>
            <div className={style.header_boxIcons}>
            {props.header.headerLink.map((link, index) => (<a key={index} className={style.header__link} href={link.href}>{link.name}</a>))}
            <span className={style.header__icon}><i className="fa fa-inbox"></i></span>
            <span className={style.header__icon}><i className="fa fa-user"></i></span>
            </div>
        </header>
    )
}

export default Header;
