// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;
import * as axios from 'axios';

import Preloder from '../../common/preloder/Preloder';



class ProfileContainer extends React.Component {

    componentDidMount = () => {
        let userId = this.props.match.params.userId;
        if(!this.props.myProfileId) {
            return <Preloder />
        }
         else {
            userId = this.props.myProfileId;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
          .then(response => {this.props.setProfileUsers(response.data)})
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