import {authAPI} from '../../../api/api';
import {AuthThunkCreator} from '../auth/auth_thunk'
import {setInitialed} from './app.action';

export const initializeApp = () => {
    return(dispatch) => {
        let promiseAuth = dispatch(AuthThunkCreator());
       Promise.all([Promise]).then(() => {
            dispatch(setInitialed())
        })
}}
