import React from 'react';
import style from './nav.module.css';
import NavLink from './navLink/NavLink.component';

const Nav = () => {
    return(
        <nav className={style.navBar}>
           <NavLink name='Profile' icon="fa fa-user" />
           <NavLink name='Message' icon="fa fa-inbox" />
           <NavLink name='News' icon="fa fa-book" />
           <NavLink name='Music' icon="fa fa-music" />
           <NavLink name='Settings' icon="fa fa-cog" />
        </nav>
    )
}

export default Nav;
