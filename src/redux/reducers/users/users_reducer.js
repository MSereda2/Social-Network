import userTypes from './users_types';
import {updateObject} from '../../../helpers/reducer_helper';


let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    bthHide: false
};


const user_reducer = (state = initialState, action) => {
    switch(action.type) {
        case userTypes.FOLLOW: 
            return({
                ...state,
                users: updateObject(state.users, action.userID, 'id', {followed: true})
            })
        case userTypes.UNFOLLOW:
            return({
                ...state,
                users: updateObject(state.users, action.userID, 'id', {followed: false})
            })
        case userTypes.SET_USERS:
            return({
                ...state,
                users: [ ...action.users]
            })
        case userTypes.SET_CURRENTPAGE:
            return({
                ...state,
                currentPage: action.page
            })
        case userTypes.SET_TOTALCOUNT:
            return({
                ...state,
                totalUsersCount: action.counts
            })
        case userTypes.TOGGLE_FETCHING:
            return({
                ...state,
                isFetching: action.isFetching
            })
        case userTypes.TOGGLE_BTN_HIDE:
            return({
                ...state,
                btnHide: action.btnHide
            })
        default: return state
    }
}

export default user_reducer;