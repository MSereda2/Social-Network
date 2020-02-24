import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Header from './Header.component'

import { setUsersData } from '../../redux/reducers/auth/auth_actions';

import { authAPI } from '../../api/api';
class HeaderContainer extends React.Component {

    componentDidMount = () => {

        authAPI.auth()
        .then(response => {
            if(response.data.resultCode === 0 ) {
                let {id,email,login} = response.data.data;
                this.props.setUsersData(id, email, login);
            }
        })
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


export default connect(mapStateToProps, {setUsersData})(HeaderContainer);