import React from "react";
import style from "./users.module.css";
import UserItem from './userItem/UserItem'
import * as axios from "axios";


class Users extends React.Component {

  componentDidMount = () => {
    if(this.props.users.length === 0) {
      axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
       this.props.setUsers(response.data.items)
      })
    }
  } 
  
  render() {


    return(
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
   )
  }
    
}

export default Users;









