import React from 'react';
import style from './dialogTop.module.css';

const DialogTop = (props) => {
    return(
        <div className={style.dialogs__window_top}>
            <p>{props.name}</p>
        </div>
    )
}

export default DialogTop;