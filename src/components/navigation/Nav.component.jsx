import React from 'react';
import style from './nav.module.css';
import NavLink from './navLink/NavLink.component';

const Nav = () => {
    return(
        <nav className={style.navBar}>
           <NavLink Href="/profile" name='Profile' icon="fa fa-user" />
           <NavLink Href="/dialogs" name='Message' icon="fa fa-inbox" />
           <NavLink Href="/news" name='News' icon="fa fa-book" />
           <NavLink Href="/music" name='Music' icon="fa fa-music" />
           <NavLink Href="/settings" name='Settings' icon="fa fa-cog" />
        </nav>
    )
}

export default Nav;
