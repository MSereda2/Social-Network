import React from 'react';
import Users from './Users.component';
import {connect} from 'react-redux';

// ACTIONS
import {followAC, unfollowAC, setUsers} from '../../../redux/reducers/users/users_actions'

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
})

let mapDispatchToProps = (dispatch) => ({
    follow: (userID) => (dispatch(followAC(userID))),
    unfollow: (userID) => (dispatch(unfollowAC(userID))),
    setUsers: (users) => (dispatch(setUsers(users)))

})


export default connect(mapStateToProps, mapDispatchToProps)(Users);