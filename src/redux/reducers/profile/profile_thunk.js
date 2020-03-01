import {profileAPI} from '../../../api/api';
import {setProfileUsers, setProfileStatus} from './profile_actions';


export const profileUserThunkCreation = (profileID) => {

    return (dispatch) => {
        profileAPI.profileUser(profileID).then( response => {dispatch(setProfileUsers(response.data))} )
    }
}

export const updateProfileStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) { dispatch(setProfileStatus(status));}
        });
    }
}

export const getProfileStatus = (userId) => {
    return(dispatch) => {
        profileAPI.getStatus(userId).then(response => { dispatch(setProfileStatus(response.data)) })
    }
}