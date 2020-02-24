import * as axios from "axios";

let getUsers = () => {
  if (this.props.users.length === 0) {
    this.props.toggleFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }
};
