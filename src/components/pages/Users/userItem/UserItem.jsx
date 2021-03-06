import React from "react";
import style from "./UserItem.module.css";

import SmallImg from "../../../smalImg/SmallImg.component";

import UserPhoto from "../../../../assets/images/UserImg.png";
import { NavLink } from "react-router-dom";



let UserItem = props => {

  let unfollow = () => { props.unfollowThunkCreator(props.id) }

  let follow = () => { props.followThunkCreator(props.id) }


  return(
    <div className={style.userItem}>
      <div className={style.userName}>
        <NavLink to={`/profile/${props.id}`}>
          <SmallImg img={props.img ? props.img : UserPhoto} />
        </NavLink>
        <h2>{props.name}</h2>
      </div>
      <>
      {props.followed ? (
        <button
          disabled={props.btnHide}
          onClick={() => {unfollow()}}
          className={style.button}>
          <span>unfollow</span>
          <svg>
            <polyline
              className={style.o1}
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
            <polyline
              className={style.o2}
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
          </svg>
        </button>
      ) : (
        <button
          disabled={props.btnHide}
          onClick={() => { follow()}}
          className={style.button}
        >
          <span>follow</span>
          <svg>
            <polyline
              className={style.o1}
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
            <polyline
              className={style.o2}
              points="0 0, 150 0, 150 55, 0 55, 0 0"
            ></polyline>
          </svg>
        </button>
      )}
    </>
  </div>
  )
  
};

export default UserItem;
