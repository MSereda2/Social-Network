import React from 'react';
import style from './nav.module.css';
import NavLinkItem from './navLink/NavLinkItem.component';



const Nav = (props) => {
    return(
        <nav className={style.navBar}>
            {props.state.NavLinkData.map(navItem => (
                <NavLinkItem to={navItem.to} name={navItem.name} icon={navItem.icon} id={navItem.id} />
            ))}
        </nav>
    )
}

export default Nav;






          {/* <NavLinkItem to= name= icon= /> */}
{/*            
           <NavLinkItem to="/news" name='News' icon="fa fa-book" />
           <NavLinkItem to="/music" name='Music' icon="fa fa-music" />
           <NavLinkItem to="/settings" name='Settings' icon="fa fa-cog" /> */}