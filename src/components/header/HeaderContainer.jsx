import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header.component'

import { setUsersData } from '../../redux/reducers/auth/auth_actions';

import {AuthThunkCreator} from '../../redux/reducers/auth/auth_thunk';

class HeaderContainer extends React.Component {

    componentDidMount = () => {
        this.props.AuthThunkCreator()
    }


    render() {
        return(<Header login={this.props.login} isAuth={this.props.isAuth} headerName={this.props.headerName} headerLink={this.props.headerLink} />)
    }
}

let mapStateToProps = (state) => ({
    headerName: state.header.headerName,
    headerLink: state.header.headerLink,
    isAuth: state.authRedusers.isAuth,
    login: state.authRedusers.login,
})


export default connect(mapStateToProps, {setUsersData, AuthThunkCreator})(HeaderContainer);