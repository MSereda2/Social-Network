import React from "react";
import style from "./UserItem.module.css";

import SmallImg from "../../../smalImg/SmallImg.component";

import UserPhoto from "../../../../assets/images/UserImg.png";
import { NavLink } from "react-router-dom";

import * as axios from "axios";

let UserItem = props => (
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
          onClick={() => {
            axios
              .delete(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "b222f440-ad03-42e9-81e4-19af0d77c6e1"
                  }
                }
              )
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.Unfollow(props.id);
                }
              });
          }}
          className={style.button}
        >
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
          onClick={() => {
            axios
              .post(
                `https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {},
                {
                  withCredentials: true,
                  headers: {
                    "API-KEY": "b222f440-ad03-42e9-81e4-19af0d77c6e1"
                  }
                }
              )
              .then(response => {
                if (response.data.resultCode === 0) {
                  props.Follow(props.id);
                }
              });
          }}
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
);

export default UserItem;
