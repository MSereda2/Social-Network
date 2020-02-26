import { setUsersData } from './auth_actions';

import {authAPI} from '../../../api/api';

export const AuthThunkCreator = () => {

    return (dispatch) => {
        authAPI.auth()
        .then(response => {
            if(response.data.resultCode === 0 ) {
                let {id,email,login} = response.data.data;
                dispatch(setUsersData(id, email, login));
            }
        })
    }
}