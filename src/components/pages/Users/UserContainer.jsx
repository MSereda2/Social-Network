// Packages
import React from "react";
import { connect } from "react-redux";

// Components
import Users from "./Users.component";
import Preloder from "../../common/preloder/Preloder";

// Actions
import { follow, unfollow, setCurrentPage, } from "../../../redux/reducers/users/users_actions";

// Thunks
import {getUsersThunkCreator, unfollowThunkCreator, followThunkCreator} from '../../../redux/reducers/users/users_thunk';

// Selectors
import {getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getBtnHide} from '../../../redux/reducers/users/users_selectors';



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
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  btnHide: getBtnHide(state)
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsersThunkCreator,
  unfollowThunkCreator,
  followThunkCreator
})(UsersContainer);
