import React from 'react';
import style from "./postCreate.module.css";

const PostCreate = () => {
    return(
        <div className={style.post__create}>
            <input type="text" placeholder="split out your thougths"/>
        </div>
    )
}

export default PostCreate;