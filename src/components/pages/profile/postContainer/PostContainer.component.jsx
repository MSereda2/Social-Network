import React from "react";
import style from './postContainer.module.css';
import PostCreate from './postCreate/PostCreate.component';
import PostItem from './postItem/PostItem.component';


const PostContainer = (props) => {
    const PostDataItem = props.PostData.map(post => (
        <PostItem id={post.id} Image={post.image} name={post.name} visit={post.visit} description={post.description} comments={post.commentsCount} likes={post.likesCount} shared={post.sharedCount} />
    ))
    return(
        <div className={style.post}>
            
            <PostCreate inputValue={props.inputValue} addPost={props.dispatch} changeInput={props.dispatch} />
            {PostDataItem};
        </div>
    )
}

export default PostContainer;