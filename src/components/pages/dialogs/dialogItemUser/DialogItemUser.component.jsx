import React from 'react';
import style from './dialogItemUser.module.css';
import SmallImg from '../../../smalImg/SmallImg.component';

const DialogItemUser = (props) => {
    return(
        <div className={style.user__message_box}>
            <SmallImg img={props.img} />
        <p className={style.user__message}>{props.text}</p>
        </div>    )
}

export default DialogItemUser;