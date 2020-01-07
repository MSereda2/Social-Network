import React from "react";
import style from './postWraper.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';



const postWraper = () => {
    return(
        <div className={style.post}>
            <PostCreate />
            <PostItem />
        </div>
    )
}

export default postWraper;