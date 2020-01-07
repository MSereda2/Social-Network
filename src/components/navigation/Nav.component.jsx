import React from 'react';
import style from './nav.module.css';

const Nav = () => {
    return(
        <nav className={style.navBar}>
           <a className={style.navBar__link} href="#">Profile</a>
           <a className={style.navBar__link} href="#">Message</a>
           <a className={style.navBar__link} href="#">News</a>
           <a className={style.navBar__link} href="#">Music</a>
           <a className={style.navBar__link} href="#">Settings</a>
        </nav>
    )
}

export default Nav;