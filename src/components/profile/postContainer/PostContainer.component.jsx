import React from "react";
import style from './postContainer.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';



const PostContainer = () => {
    return(
        <div className={style.post}>
            <PostCreate />
            <PostItem />
        </div>
    )
}

export default PostContainer;