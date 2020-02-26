// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;

// Thunk Creators
import {profileUserThunkCreation} from '../../../redux/reducers/profile/profile_thunk'


class ProfileContainer extends React.Component {

    componentDidMount = () => {
        this.props.profileUserThunkCreation(this.props.match.params.userId, this.props.profileUsers);
    }


    render() { return( <Profile {...this.props} /> )} 
}


let mapStateToProps = (state) => ({
    PostData: state.profilePage.PostData,
    inputValue: state.profilePage.newTextInput,
    profileUsers: state.profilePage.profileUsers,
    myProfileId: state.authRedusers.userId,
    isAuth: state.authRedusers.isAuth
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps,
    { addPost, changeInput, setProfileUsers, profileUserThunkCreation})
    (WithUrlDataContainerComponent);
