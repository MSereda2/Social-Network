import AuthType from './auth_types';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false    
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case AuthType.SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }   
        default: return state;
    }
}

export default authReducer;