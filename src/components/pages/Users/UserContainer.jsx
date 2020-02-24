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
  toggleFetching,
  toggleBtnHide

} from "../../../redux/reducers/users/users_actions";

// API
import { usersAPI } from '../../../api/api'

class UsersContainer extends React.Component {

  componentDidMount = () => {
    this.props.toggleFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
      if (this.props.users.length === 0) {
        this.props.toggleFetching(false);
        this.props.setUsers(response.items);
        this.props.setTotalCount(response.totalCount);
      }
  })

  }

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.toggleFetching(true)
    usersAPI.getUsers( page, this.props.pageSize ).then(response => {
    this.props.setUsers(response.items)
    this.props.toggleFetching(false)
      
    })
  } 

  render() {
    
    return (
      <>
        {this.props.isFetching ? <Preloder /> : null}
        <Users onPageChanged={this.onPageChanged} {...this.props}/>
      </>
    );
  }
}

let mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  btnHide: state.usersPage.bthHide
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleFetching,
  toggleBtnHide
})(UsersContainer);
