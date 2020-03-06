import { setUsersData } from './auth_actions';
import {stopSubmit} from 'redux-form'

import {authAPI} from '../../../api/api';

export const AuthThunkCreator = () => {

    return async (dispatch) => {
            const response = await authAPI.authMe()
       
            if(response.data.resultCode === 0 ) {
                let {id,email,login} = response.data.data;
                dispatch(setUsersData(id, email, login, true));
            } else {
                console.log(response)
            }
    }

}

export const LoginThunkCreator = (email, password, rememberMe) => {

    return async (dispatch) => {
           const response = await authAPI.login( email, password, rememberMe );
       
            if(response.data.resultCode === 0) {
                dispatch(AuthThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
    }
}

export const LogOutThunkCreator = () => {
    
    return async (dispatch) => {
        const response = await authAPI.logOut();
        
        if(response.data.resultCode === 0) {
            dispatch(setUsersData(null, null, null, false))
        } else {
            alert(response.data.messages[0])
        }
    }

}