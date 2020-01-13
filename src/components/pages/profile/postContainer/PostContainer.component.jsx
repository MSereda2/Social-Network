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
            <PostCreate addPost={props.addPost} inputvalue={props.inputValue} updateInputValue={props.updateInputValue} />
            {PostDataItem};
        </div>
    )
}

export default PostContainer;