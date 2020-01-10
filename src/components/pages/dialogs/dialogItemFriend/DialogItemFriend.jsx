import React from 'react';
import style from "./dialogItemFriend.module.css";
import SmallImg from '../../../smalImg/SmallImg.component';


const DialogItemFriend = (props) => {
    return(
        <div className={style.friend_message_box}>
            <SmallImg img={props.img} />
        <p className={style.friend__message}>{props.text}</p>
        </div>
    )
}

export default DialogItemFriend;