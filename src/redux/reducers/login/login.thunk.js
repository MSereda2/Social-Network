import {setLogin} from './login.actions';
import {authAPI} from '../../../api/api';

export const LoginThunkCreator = (email, password) => {
    return(dispatch) => {
        authAPI.login( email, password).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setLogin(response.data.userId))
            } else {
                alert(response.data.messages[0])
            }
        })
    }
}