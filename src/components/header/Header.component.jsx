import React from "react";
import style from './Header.module.css'



const Header = () => {
    return(
        <header className={style.header}>
            <h1 className={style.heading}>Land & Word</h1>
            <div className={style.header_boxIcons}>
                <a className={style.header__link} href='#'>Цели</a>
                <a className={style.header__link} href='#'>Цитаты</a>
                <span className={style.header__icon}><i className="fa fa-inbox"></i></span>
                <span className={style.header__icon}><i className="fa fa-user"></i></span>
            </div>
        </header>
    )
}

export default Header;