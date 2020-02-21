import React from 'react';
import Users from './Users.component';
import {connect} from 'react-redux';

// ACTIONS
import {followAC, unfollowAC, setUsers, setCurrentPage, setTotalCount} from '../../../redux/reducers/users/users_actions'

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userID) => (dispatch(followAC(userID))),
    unfollow: (userID) => (dispatch(unfollowAC(userID))),
    setUsers: (users) => (dispatch(setUsers(users))),
    setCurrentPage: (page) => (dispatch(setCurrentPage(page))),
    setTotalCount: (counts) => (dispatch(setTotalCount(counts)))

})


export default connect(mapStateToProps, mapDispatchToProps)(Users);