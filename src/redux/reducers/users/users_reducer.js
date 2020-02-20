import userTypes from './users_types';

let initialState = {
    users: [
       
    ]
};

const user_reducer = (state = initialState, action) => {
    switch(action.type) {
        case userTypes.FOLLOW: 
            return({
                ...state,
                users: state.users.map((user) => {
                    if(user.id === action.userID) {
                        return {...user, isFollow: true}
                    } 
                    return user;
                })
            })
        case userTypes.UNFOLLOW:
            return({
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userID) {
                        return {...user, isFollow: false}
                    }
                    return user
                })
            })
        case userTypes.SET_USERS:
            return({
                ...state,
                users: [...state.users ,...action.users]
            })
    }
    return state;
}

export default user_reducer;