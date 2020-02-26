// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;

// Thunk Creators
import {profileUserThunkCreation} from '../../../redux/reducers/profile/profile_thunk'

import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount = () => {
        this.props.profileUserThunkCreation(this.props.match.params.userId, this.props.profileUsers);
    }

    render() {

        return( <Profile {...this.props} /> )
    } 
}


let mapStateToProps = (state) => ({
    PostData: state.profilePage.PostData,
    inputValue: state.profilePage.newTextInput,
    profileUsers: state.profilePage.profileUsers,
    myProfileId: state.authRedusers.userId,
})


export default compose(
    connect(mapStateToProps, { addPost, changeInput, setProfileUsers, profileUserThunkCreation}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
