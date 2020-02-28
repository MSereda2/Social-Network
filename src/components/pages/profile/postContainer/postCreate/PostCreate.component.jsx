import React from 'react';
import style from "./postCreate.module.css";
import PostCreateForm from './PostCreateForm/PostCreateForm';


const PostCreate = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.post)
    }
   
    return(
        <div className={style.post__create}>
            <p>Создать пост</p>
            <PostCreateForm onSubmit={onSubmit} />
        </div>
    )
}

export default PostCreate;
