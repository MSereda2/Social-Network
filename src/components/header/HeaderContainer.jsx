import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header.component'

// Thunk Creators
import {AuthThunkCreator} from '../../redux/reducers/auth/auth_thunk';

class HeaderContainer extends React.Component {

    componentDidMount = () => {
        this.props.AuthThunkCreator()
    }


    render() {
        return(<Header {...this.props} />)
    }
}

let mapStateToProps = (state) => ({
    headerName: state.header.headerName,
    headerLink: state.header.headerLink,
    isAuth: state.authRedusers.isAuth,
    login: state.authRedusers.login,
})


export default connect(mapStateToProps, {AuthThunkCreator})(HeaderContainer);