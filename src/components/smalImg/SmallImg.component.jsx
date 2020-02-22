import React from 'react';
import style from './smallImg.module.css';

const SmallImg = (props) => {
    return(
        <img className={style.friend__img} src={props.img} alt='smallIMG' ></img>
    )
}

export default SmallImg;