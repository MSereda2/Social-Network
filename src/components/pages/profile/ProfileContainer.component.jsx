// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;
import * as axios from 'axios';

import {profileUser} from '../../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if(!this.props.profileUsers) {
           userId = 1069;
        }
        profileUser(userId).then(response => {this.props.setProfileUsers(response.data)})
    }


    render() { 
        
        return( 
            <Profile {...this.props} /> )} 
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
    { addPost, changeInput, setProfileUsers})
    (WithUrlDataContainerComponent);