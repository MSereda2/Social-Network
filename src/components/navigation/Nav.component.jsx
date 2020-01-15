import React from 'react';
import style from './nav.module.css';
import NavLinkItem from './navLink/NavLinkItem.component';



const Nav = (props) => {
    return(
        <nav className={style.navBar}>
            {props.NavLinkData.map(navItem => (
                <NavLinkItem to={navItem.to} name={navItem.name} icon={navItem.icon} id={navItem.id} />
            ))}
        </nav>
    )
}

export default Nav;
