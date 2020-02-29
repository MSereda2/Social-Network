import React from "react";
import style from "./users.module.css";
import UserItem from "./userItem/UserItem";

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.userContainer}>
      {props.users.map(user => (
        <UserItem
          Follow={props.follow}
          Unfollow={props.unfollow}
          followed={user.followed}
          img={user.photos.small}
          key={user.id}
          id={user.id}
          name={user.name}
          toggleBtnHide={props.toggleBtnHide}
          btnHide={props.btnHide}
          unfollowThunkCreator={props.unfollowThunkCreator}
          followThunkCreator={props.followThunkCreator}
        />
      ))}

      <div className={style.pagination}>
        {pages.map(p => (
          <span
            key={p}
            className={props.currentPage === p ? style.active : ""}
            onClick={() => {
              props.onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Users;
