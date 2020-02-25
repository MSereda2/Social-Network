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
  setCurrentPage,
} from "../../../redux/reducers/users/users_actions";

import {getUsersThunkCreator, unfollowThunkCreator, followThunkCreator
} from '../../../redux/reducers/users/users_reducer';



class UsersContainer extends React.Component {

  componentDidMount = () => {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize )
  }

  onPageChanged = (page) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize )
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
  setCurrentPage,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator
})(UsersContainer);
