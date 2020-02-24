// Packages
import React from "react";
import { connect } from "react-redux";

// Components
import Users from "./Users.component";
import Preloder from "../../common/preloder/Preloder";

// Actions
import {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleFetching
} from "../../../redux/reducers/users/users_actions";

// API
import {getUsers} from '../../../api/api'

class UsersContainer extends React.Component {
  componentDidMount = () => {

  getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      if (this.props.users.length === 0) {
        this.props.toggleFetching(true);
        this.props.toggleFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalCount(response.totalCount);
      }
  })

  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleFetching(true)
    getUsers( page, this.props.pageSize ).then(response => {
    this.props.setUsers(response.items)
    this.props.toggleFetching(false)

    })
  } 

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloder /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followed={this.props.followed}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}

let mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleFetching
})(UsersContainer);
