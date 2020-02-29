import React from 'react';
import style from './sendMessageForm.module.css';

import {reduxForm, Field} from 'redux-form';


let sendMessageForm = (props) => (
    <form className={style.dialogs__bottom} onSubmit={props.handleSubmit}>
        <Field name={"sendMessage"} component={"input"} placeholder="what's on your mind?" type="text" />
        <button><i className="fa fa-send"></i></button>
    </form>
)

export default reduxForm({
    form: 'sendMessage'
})(sendMessageForm);