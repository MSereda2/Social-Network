import React from 'react';
import style from './UserItem.module.css';

import SmallImg from '../../../smalImg/SmallImg.component';

import UserPhoto from '../../../../assets/images/UserImg.png'



let UserItem = (props) => (
    <tr className={style.userItem}>
    <th className={style.userName}><SmallImg img={props.img !== null ? props.img : UserPhoto} /><span >{props.name}</span> </th>
    <th>{props.location}</th>
    <th>{props.email}</th>
    <th>{props.phone}</th>

    <th>{props.followed ? <button onClick={() => {props.Unfollow(props.id)}}>Follow</button> : <button onClick={() => {props.Follow(props.id)}}>unFollow</button> }</th>
    
  </tr>
)

export default UserItem;