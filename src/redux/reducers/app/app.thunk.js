import {AuthThunkCreator} from '../auth/auth_thunk'
import {setInitialed} from './app.action';

export const initializeApp = () => {

    return async (dispatch) => {
        let promiseAuth = dispatch(AuthThunkCreator());
         await Promise.all([promiseAuth])
            dispatch(setInitialed())
    }}