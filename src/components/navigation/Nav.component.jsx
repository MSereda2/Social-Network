import React from 'react';
import style from './nav.module.css';

const Nav = () => {
    return(
        <nav className={style.navBar}>
           <a className={style.navBar__link} href="#"><i className="fa fa-user"></i>Profile</a>
           <a className={style.navBar__link} href="#"><i className="fa fa-inbox"></i>Message</a>
           <a className={style.navBar__link} href="#"><i className="fa fa-book"></i>News</a>
           <a className={style.navBar__link} href="#"><i className="fa fa-music"></i>Music</a>
           <a className={style.navBar__link} href="#"><i className="fa fa-cog"></i>Settings</a>
        </nav>
    )
}

export default Nav;
