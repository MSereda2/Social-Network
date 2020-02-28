import React from 'react';
import style from './postCreateForm.module.css';

import {reduxForm, Field} from 'redux-form';


let PostCreateForm = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Field component={'input'} name={'post'} placeholder="What's on your mind?" type="text"/>
        <div className={style.post__create_icons}>
            <button><i className="fa fa-send"></i></button>
        </div>
    </form>
)

export default reduxForm({
    form: 'addPost'
}) (PostCreateForm);