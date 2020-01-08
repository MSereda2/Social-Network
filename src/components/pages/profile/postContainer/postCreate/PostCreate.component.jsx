import React from 'react';
import style from "./postCreate.module.css";

const PostCreate = () => {
    return(
        <div className={style.post__create}>
            <p>Создать пост</p>
            <input type="text" placeholder="split out your thougths..."/>
            <div className={style.post__create_icons}>
                <span><i className="fa fa-image"></i></span>
                <span><i className="fa fa-send"></i></span>
            </div>
           
        </div>
    )
}

export default PostCreate;