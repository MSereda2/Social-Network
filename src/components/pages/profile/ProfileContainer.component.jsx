// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { compose } from 'redux';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;

// Thunk Creators
import {profileUserThunkCreation, updateProfileStatus} from '../../../redux/reducers/profile/profile_thunk'

// HOC
import {withAuthRedirect} from '../../HOC/withAuthRedirect';



class ProfileContainer extends React.Component {

    componentDidMount = () => {
        this.props.profileUserThunkCreation(this.props.match.params.userId, this.props.profileUsers);
        this.props.updateProfileStatus('hey')
        

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
    connect(mapStateToProps, { addPost, changeInput, setProfileUsers, profileUserThunkCreation, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
