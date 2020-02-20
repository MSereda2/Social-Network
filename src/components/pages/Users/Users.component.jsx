import React from "react";
import style from "./users.module.css";
import UserItem from './userItem/UserItem'


const Users = (props) => {

  if(props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        img: 'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_300x300.png',
        name: 'Misha Sereda',
        job: 'Front-End',
        email: 'sereda2510@mail.ru',
        phone: '+79530885533',
        isFollow: true
    },
    {   id: 2,
        img: 'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_300x300.png',
        name: 'Petya Mihalichenko',
        job: 'Bussines',
        email: 'stalker@mail.ru',
        phone: '+79528233591',
        isFollow: true
    },
    {   
        id: 3,
        img: 'https://uybor.uz/borless/avtobor/img/user-images/user_no_photo_300x300.png',
        name: 'Mustafa Kurtbekov',
        job: 'someone',
        email: 'knowme@mail.ru',
        phone: '+79654248236',
        isFollow: false
    }
    ])
  }

    return(
      
       <table className={style.table}>
          <tr className={style.table_header}>
              <th>Name</th>
              <th>Departamento</th>
              <th>E-mail</th>
              <th>Phone number</th>
              <th>Subcription</th>
          </tr>
          {props.users.map(user => (
            <UserItem Follow={props.follow} Unfollow={props.unfollow} isFollow={user.isFollow} img={user.img} key={user.id} id={user.id} name={user.name} job={user.job} email={user.email} phone={user.phone} />
          ))}
      </table>

    )
}

export default Users;












