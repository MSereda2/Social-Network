import React from 'react';
import Nav from './Nav.component';



const NavContainer = (props) => {
    return <Nav NavLinkData={props.navbar.NavLinkData} />;
}

export default NavContainer;
