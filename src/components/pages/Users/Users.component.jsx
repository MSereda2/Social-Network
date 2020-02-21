import React from "react";
import style from "./users.module.css";
import UserItem from './userItem/UserItem'
import * as axios from "axios";


class Users extends React.Component {

  componentDidMount = () => {
    if(this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
       this.props.setUsers(response.data.items);
       this.props.setTotalCount(response.data.totalCount)
      })
    }
  } 

  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
    .then(response => {
     this.props.setUsers(response.data.items)
    })
  }
  
  
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
      pages.push(i)
    }

    return(
      <div>
      <table className={style.table}>
         <tr className={style.table_header}>
             <th>Name</th>
             <th>City</th>
             <th>E-mail</th>
             <th>Phone number</th>
             <th>Subcription</th>
         </tr>
         {this.props.users.map(user => (
           <UserItem Follow={this.props.follow} Unfollow={this.props.unfollow} followed={user.followed}  img={user.photos.small} key={user.id} id={user.id} name={user.name} location={'user.location.city'} email={'user.email'} phone={'user.phone'} />
         ))}
     </table>
       <div style={{width: '100px'}}>
       {pages.map(page => (
         <span onClick={() => {this.onPageChanged(page)}} className={this.props.currentPage === page && style.activePage}>{page}</span>
       ))}
      </div>
      </div>
   )
  }
    
}

export default Users;









