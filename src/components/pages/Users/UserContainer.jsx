// Packages
import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';

// Components
import Users from './Users.component';
import Preloder from '../../common/preloder/Preloder';

// Actions
import {follow, unfollow, setUsers, setCurrentPage, setTotalCount ,toggleFetching} from '../../../redux/reducers/users/users_actions';

class UsersContainer extends React.Component {

    componentDidMount = () => {
      if(this.props.users.length === 0) {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
          this.props.toggleFetching(false)
         this.props.setUsers(response.data.items);
         this.props.setTotalCount(response.data.totalCount)
        })
      }
    } 
  
    onPageChanged = (page) => {
      this.props.setCurrentPage(page)
      this.props.toggleFetching(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(response => {
       this.props.setUsers(response.data.items)
       this.props.toggleFetching(false)

      })
    }

    render() {
    
        return <>
        {this.props.isFetching ? <Preloder /> : null}
        <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followed={this.props.followed}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged} />
        </>
    }
      
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

// let mapDispatchToProps = (dispatch) => ({
//     follow: (userID) => (dispatch(followAC(userID))),
//     unfollow: (userID) => (dispatch(unfollowAC(userID))),
//     setUsers: (users) => (dispatch(setUsers(users))),
//     setCurrentPage: (page) => (dispatch(setCurrentPage(page))),
//     setTotalCount: (counts) => (dispatch(setTotalCount(counts))),
//     toggleFetching: (fetching) => (dispatch(toggleFetching(fetching)))

// })

export default connect(mapStateToProps, {
  follow,unfollow,setUsers,setCurrentPage,setTotalCount,toggleFetching
})(UsersContainer);