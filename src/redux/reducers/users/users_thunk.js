import { setUsers,
    setTotalCount,
    toggleFetching,
    unfollow,
    follow,
    setCurrentPage
    } from './users_actions'
import { usersAPI, followAPI } from '../../../api/api'


export const getUsersThunkCreator = (currentPage, pageSize) => {

    return async (dispatch) => {

            dispatch(toggleFetching(true));

            const response = await  usersAPI.getUsers(currentPage, pageSize);
          
            dispatch(toggleFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
            dispatch(setCurrentPage(currentPage))
    }
}

export const unfollowThunkCreator = (id) => {

    return async (dispatch) => {
        const response = await followAPI.unfollow(id);
       
        if (response.data.resultCode === 0) {
            dispatch(unfollow(id)); 
        }
    }
}

export const followThunkCreator = (id) => {

    return async (dispatch) => {
        const response = await followAPI.follow(id);
        
        if (response.data.resultCode === 0) {
            dispatch(follow(id));
        }
    }
}