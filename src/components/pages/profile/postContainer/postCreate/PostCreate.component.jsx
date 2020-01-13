import React from 'react';
import style from "./postCreate.module.css";

const PostCreate = (props) => {
    const inputField = React.createRef();
    
    const addPost = () => {
        if(inputField.current.value != '') {
            props.addPost();        

        }
    }

    const onChangeInput = () => {
        let text = inputField.current.value;
        props.updateInputValue(text);
    }
    return(
        <div className={style.post__create}>
            <p>Создать пост</p>
            <input ref={inputField} onChange={onChangeInput} type="text" value={props.inputvalue}/>
            <div className={style.post__create_icons}>
                <button><i className="fa fa-image"></i></button>
                <button onClick={addPost}><i className="fa fa-send"></i></button>
            </div>
           
        </div>
    )
}

export default PostCreate;