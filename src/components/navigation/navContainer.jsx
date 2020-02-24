import React from 'react';
import Nav from './Nav.component';
import {connect} from 'react-redux';

import {setProfileId} from '../../redux/reducers/nav/nav_actions';




class NavContainer extends React.Component {

    render() {
        return <Nav {...this.props} />;
    }
}
let mapStateToProps = (state) => ({
    state,
    navbar: state.navbar.NavLinkData,
    profileId: state.authRedusers.userId

})

export default connect(mapStateToProps, {setProfileId})(NavContainer);
