import React from 'react';
import style from "./postCreate.module.css";
import PostCreateForm from './PostCreateForm/PostCreateForm';


const PostCreate = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.addPost, props.profileName, props.profileImg)
    }
   
    return(
        <div className={style.post__create}>
            <p>Создать пост</p>
            <PostCreateForm onSubmit={onSubmit} />
        </div>
    )
}

export default PostCreate;
