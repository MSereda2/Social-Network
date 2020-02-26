import { setUsers,
    setTotalCount,
    toggleFetching,
    unfollow,
    follow,
    setCurrentPage
    } from './users_actions'
import { usersAPI, followAPI } from '../../../api/api'


export const getUsersThunkCreator = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalCount(response.totalCount));
            dispatch(setCurrentPage(currentPage))
      })
    }
}

export const unfollowThunkCreator = (id) => {

    return (dispatch) => {
        followAPI.unfollow(id).then(response => {
            if (response.data.resultCode === 0) {
              dispatch(unfollow(id));
              
            }
          });
    }
}

export const followThunkCreator = (id) => {

    return (dispatch) => {
        followAPI.follow(id).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(follow(id));
        }
          
        });
    }
}