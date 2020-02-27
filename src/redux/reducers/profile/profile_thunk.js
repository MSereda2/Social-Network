import {profileAPI} from '../../../api/api';
import {setProfileUsers} from './profile_actions';


export const profileUserThunkCreation = (profileID, profileUsers) => {

    return (dispatch) => {
        let userId = profileID;
        if(!profileUsers) {
           userId = 6086;
        }
        profileAPI.profileUser(userId).then(response => {dispatch(setProfileUsers(response.data))})
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => console.log(response));
    }
}

export const getProfileStatus = (userId) => {

    return(dispatch) => {
        profileAPI.getStatus(userId).then(response => console.log(`profile status ${response}`))
    }
}