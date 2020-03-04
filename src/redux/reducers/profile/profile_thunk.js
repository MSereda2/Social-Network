import {profileAPI} from '../../../api/api';
import {setProfileUsers, setProfileStatus} from './profile_actions';


export const profileUserThunkCreation = (profileID) => {

    return async (dispatch) => {
       const response = await profileAPI.profileUser(profileID);
       dispatch(setProfileUsers(response.data))
    }
}

export const updateProfileStatus = (status) => {
    return async (dispatch) => {

        const response = await profileAPI.updateStatus(status);
        if(response.data.resultCode === 0) { dispatch(setProfileStatus(status));}

    }
}

export const getProfileStatus = (userId) => {
    return async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setProfileStatus(response.data)) 
    }
}