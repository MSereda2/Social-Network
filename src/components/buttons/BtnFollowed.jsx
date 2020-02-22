import React from 'react';
import style from './btnFollowed.module.css';

let BtnFollowed = (props) => (
    <div onClick={props.follow(props.id)} className={style.button}>
          <span>Follow</span>
          <svg>
            <polyline className={style.o1} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
            <polyline className={style.o2} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
          </svg>
	    </div>
)

export default BtnFollowed;