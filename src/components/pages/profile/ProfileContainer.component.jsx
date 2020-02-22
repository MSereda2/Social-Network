// Packages
import React from 'react';
import {connect} from 'react-redux';

// Components
import Profile from './Profile';

// Actions
import { addPost, changeInput, setProfileUsers} from '../../../redux/reducers/profile/profile_actions' ;
import * as axios from 'axios';


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
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


export default connect(mapStateToProps,
    { addPost, changeInput, setProfileUsers})
    (ProfileContainer);