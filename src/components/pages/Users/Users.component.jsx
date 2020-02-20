import React from "react";
import style from "./users.module.css";
import UserItem from './userItem/UserItem'
import * as axios from "axios";


const Users = (props) => {

  if(props.users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
    .then(response => {
      debugger  
     props.setUsers(response.data.items)
    })
  }

    return(
      
       <table className={style.table}>
          <tr className={style.table_header}>
              <th>Name</th>
              <th>City</th>
              <th>E-mail</th>
              <th>Phone number</th>
              <th>Subcription</th>
          </tr>
          {props.users.map(user => (
            <UserItem Follow={props.follow} Unfollow={props.unfollow} followed={user.followed}  img={user.photos.small} key={user.id} id={user.id} name={user.name} location={'user.location.city'} email={'user.email'} phone={'user.phone'} />
          ))}
      </table>

    )
}

export default Users;



// 








