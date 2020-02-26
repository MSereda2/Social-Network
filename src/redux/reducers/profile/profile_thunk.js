import {profileAPI} from '../../../api/api';
import {setProfileUsers} from './profile_actions';


export const profileUserThunkCreation = (profileID, profileUsers) => {

    return (dispatch) => {
        let userId = profileID;
        if(!profileUsers) {
           userId = 2;
        }
        profileAPI.profileUser(userId).then(response => {dispatch(setProfileUsers(response.data))})
    }
}