import React from 'react';
import style from './UserItem.module.css';

import SmallImg from '../../../smalImg/SmallImg.component';

import UserPhoto from '../../../../assets/images/UserImg.png';
import {NavLink} from 'react-router-dom';


let UserItem = (props) => (
    <NavLink to={`/profile/${props.id}`}>
        <div className={style.userItem}>
          <div className={style.userName}>
            <SmallImg img={props.img ? props.img : UserPhoto} />
            <h2>{props.name}</h2>
          </div>
          <>
            {props.followed 
              ?
            <button onClick={() => {props.Unfollow(props.id)}} className={style.button}>
                <span>follow</span>
                <svg>
                <polyline className={style.o1} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                <polyline className={style.o2} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
              </svg>
            </button>
              : 
            <button onClick={() => {props.Follow(props.id)}} className={style.button}>
                <span>unfollow</span>
                <svg>
                  <polyline className={style.o1} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                  <polyline className={style.o2} points="0 0, 150 0, 150 55, 0 55, 0 0"></polyline>
                </svg>
            </button> }
            
          </>
        </div>
  </NavLink>

)

export default UserItem;








 
