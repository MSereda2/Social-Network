import React from 'react';
import style from "./postCreate.module.css";
// import {addPostActionCreate,onChangeInputActionCreate} from '../../../../../redux/reducers/profile_reducer';


const PostCreate = (props) => {
    const OnAddPost = () => {
        if(props.inputValue !== '') {
            props.addPost();     
        } else {
            console.log('dont work')
        }
    }
    debugger
    const onChangeInput = (event) => {
        let text = event.target.value;
        props.changeInput(text);
    }
    return(
        <div className={style.post__create}>
            <p>Создать пост</p>
            <input  onChange={onChangeInput} placeholder="What's on your mind?" type="text" value={props.inputValue}/>
            <div className={style.post__create_icons}>
                <button><i className="fa fa-image"></i></button>
                <button onClick={OnAddPost}><i className="fa fa-send"></i></button>
            </div>
           
        </div>
    )
}

export default PostCreate;