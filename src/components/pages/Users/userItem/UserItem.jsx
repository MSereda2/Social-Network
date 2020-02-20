import React from 'react';
import style from './UserItem.module.css';

import SmallImg from '../../../smalImg/SmallImg.component';



let UserItem = (props) => (
    <tr className={style.userItem}>
    <th className={style.userName}><SmallImg img={props.img} /><span >{props.name}</span> </th>
    <th>{props.job}</th>
    <th>{props.email}</th>
    <th>{props.phone}</th>

    <th>{props.isFollow ? <button onClick={() => {props.Unfollow(props.id)}}>Follow</button> : <button onClick={() => {props.Follow(props.id)}}>unFollow</button> }</th>
    
  </tr>
)

export default UserItem;