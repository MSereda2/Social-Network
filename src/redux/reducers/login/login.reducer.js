import LoginTypes from './login.types';

const InitalState = {
    isLogin: false,
    userID: null
}

let loginReducer = (state = InitalState, action) => {
    switch(action.type) {
        case LoginTypes.SET_LOGIN:
            return {
                ...state,
                userID: action.userID,
                isLogin: true
            }
        default: return state
    }
}

export default loginReducer;

