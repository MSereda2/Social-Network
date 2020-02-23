// Packages
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;
import * as axios from 'axios';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 2;
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
    profileUsers: state.profilePage.profileUsers
})

let WithUrlDataContainerComponent =  withRouter(ProfileContainer)

export default connect(mapStateToProps,
    { addPost, changeInput, setProfileUsers})
    (WithUrlDataContainerComponent);