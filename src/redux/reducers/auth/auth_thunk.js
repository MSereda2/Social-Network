import { setUsersData } from './auth_actions';
import {stopSubmit} from 'redux-form'

import {authAPI} from '../../../api/api';

export const AuthThunkCreator = () => {

    return (dispatch) => {
       return authAPI.authMe()
        .then(response => {
            if(response.data.resultCode === 0 ) {
                console.log('work2')
                let {id,email,login} = response.data.data;
                dispatch(setUsersData(id, email, login, true));
            }
        })
    }

}

export const LoginThunkCreator = (email, password, rememberMe) => {

    return(dispatch) => {
        authAPI.login( email, password, rememberMe ).then(response => {
            if(response.data.resultCode === 0) {
                console.log('work')
                dispatch(AuthThunkCreator())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
    }
}

export const LogOutThunkCreator = () => {
    
    return(dispatch) => {
        authAPI.logOut().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUsersData(null, null, null, false))
            } else {
                alert(response.data.messages[0])
            }
        })
    }
}