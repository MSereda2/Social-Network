import React from 'react';
import style from './friendItem.module.css';
import SmallImg from '../../../smalImg/SmallImg.component';
import {NavLink} from 'react-router-dom';

const FriendItem = (props) => {
    return(
        <NavLink className={style.friend__item} to={props.to}>
            <SmallImg img={props.img} />
            <p className={style.friend__name}>{props.name}</p>
        </NavLink>
    )
}

export default FriendItem;