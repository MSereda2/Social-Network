import React from 'react';
import style from './nav.module.css';
import NavLinkItem from './navLink/NavLinkItem.component';

const Nav = () => {
    return(
        <nav className={style.navBar}>
           <NavLinkItem to="/profile" name='Profile' icon="fa fa-user" />
           <NavLinkItem to="/dialogs" name='Message' icon="fa fa-inbox" />
           <NavLinkItem to="/news" name='News' icon="fa fa-book" />
           <NavLinkItem to="/music" name='Music' icon="fa fa-music" />
           <NavLinkItem to="/settings" name='Settings' icon="fa fa-cog" />
        </nav>
    )
}

export default Nav;
