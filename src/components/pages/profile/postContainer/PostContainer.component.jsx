import React from "react";
import style from './postContainer.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';


const PostContainer = (props) => {
    console.log('render post')
    const PostDataItem = props.PostData.map(post => (
        <PostItem {...post} />
    ))
    return(
        <div className={style.post}>
            
            <PostCreate {...props} />
            {PostDataItem};
        </div>
    )
}

export default PostContainer;