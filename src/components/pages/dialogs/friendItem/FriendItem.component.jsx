import React from 'react';
import style from './friendItem.module.css';
import SmallImg from '../../../smalImg/SmallImg.component';

const FriendItem = (props) => {
    return(
        <div className={style.friend__item}>
            <SmallImg img={props.img} />
            <p className={style.friend__name}>{props.name}</p>
        </div>
    )
}

export default FriendItem;