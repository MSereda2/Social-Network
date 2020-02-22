import userTypes from './users_types';

let initialState = {
    users: [],
    pageSize: 30,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
    }
    return state;
}

export default user_reducer;