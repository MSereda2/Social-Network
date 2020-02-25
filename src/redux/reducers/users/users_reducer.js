import userTypes from './users_types';
import { setUsers,
    setCurrentPage,
    setTotalCount,
    toggleFetching,
    } from './users_actions'
import { usersAPI, followAPI } from '../../../api/api'


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
                users: state.users.map((user) => {
                    if(user.id === action.userID) {
                        return {...user, followed: true}
                    } 
                    return user;
                })
            })
        case userTypes.UNFOLLOW:
            return({
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, followed : false}
                    }
                    return user
                })
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

export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
      })
    }
}

export const followThunkCreator = () => {

    return (dispatch) => {
        followAPI.unfollow(props.id).then(response => {
            if (response.data.resultCode === 0) {
              dispatch(Unfollow(props.id));
              
            }
          });
    }
}

export default user_reducer;